import { removeEmpty } from "@pixeloven-core/common";
import { getUtils } from "@pixeloven-core/env";
import {
    resolvePath,
    resolveSourceRoot,
    resolveTsConfig,
} from "@pixeloven-core/filesystem";
import autoprefixer from "autoprefixer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import path from "path";
import ModuleScopePlugin from "react-dev-utils/ModuleScopePlugin";
import TerserPlugin from "terser-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { Resolve, RuleSetRule } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { Options } from "../types";

interface PluginBundleAnalyzerOptions {
    enabled: boolean;
    host: string;
    port: number;
    outputDir: string;
}

export function getSetup(options: Options) {
    const { ifClient, ifDevelopment, ifLibrary, ifProduction } = getUtils({
        mode: options.mode,
        name: options.name,
        target: options.target,
    });

    const postCssPlugin = () => [
        require("postcss-flexbugs-fixes"),
        autoprefixer({
            flexbox: "no-2009",
        }),
    ];

    function getEntry() {
        /**
         * @todo library -- here -- make a bit more configurable
         */
        return ifClient(
            {
                main: removeEmpty([
                    /**
                     * @todo This is deprecated. Need to link core-js directly
                     */
                    require.resolve("@babel/polyfill"),
                    ifDevelopment(
                        `webpack-hot-middleware/client?path=${path.normalize(
                            `/${options.publicPath}/__webpack_hmr`,
                        )}`,
                        undefined,
                    ),
                    resolvePath(options.entry),
                ]),
            },
            [resolvePath(options.entry)],
        );
    }

    function getOptimization() {
        return ifClient(
            {
                minimize: ifProduction(),
                minimizer: ifProduction(
                    [
                        /**
                         * Minify the code JavaScript
                         *
                         * @env production
                         */
                        new TerserPlugin({
                            extractComments: "all",
                            sourceMap: options.sourceMap,
                            terserOptions: {
                                safari10: true,
                            },
                        }),
                        new OptimizeCSSAssetsPlugin(),
                    ],
                    [],
                ),
                noEmitOnErrors: true,
                /**
                 * @todo See how we can stop vendors-main (no s)
                 * @todo Make configurable v8 (include ability to provide these rules in json form)
                 */
                splitChunks: {
                    cacheGroups: {
                        coreJs: {
                            name: "vendor~core-js",
                            test: /[\\/]node_modules[\\/](core-js)[\\/]/,
                        },
                        lodash: {
                            name: "vendor~lodash",
                            test: /[\\/]node_modules[\\/](lodash)[\\/]/,
                        },
                        moment: {
                            name: "vendor~moment",
                            test: /[\\/]node_modules[\\/](moment)[\\/]/,
                        },
                        react: {
                            name: "vendor~react",
                            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                        },
                        vendor: {
                            name: "vendor~main",
                            /**
                             * @todo https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
                             */
                            // name(mod) {
                            //     // get the name. E.g. node_modules/packageName/not/this/part.js
                            //     // or node_modules/packageName
                            //     const packageName = mod.context.match(
                            //         /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
                            //     )[1];
                            //     // npm package names are URL-safe, but some servers don't like @ symbols
                            //     return `vendor~${packageName.replace("@", "")}`;
                            // },
                            test: /[\\/]node_modules[\\/](!core-js)(!lodash)(!moment)(!react)(!react-dom)[\\/]/,
                        },
                    },
                    chunks: "all",
                    maxInitialRequests: Infinity,
                    minSize: 0,
                },
            },
            {
                noEmitOnErrors: true,
            },
        );
    }

    /**
     * All other files that aren't caught by the other loaders will go through this one.
     * @description "file" loader makes sure those assets get served by WebpackDevServer.
     * When you `import` an asset, you get its (virtual) filename.
     * In production, they would get copied to the `build` folder.
     * This loader doesn't use a "test" so it will catch all modules
     * that fall through the other loaders.
     */
    function getModuleFileLoader(): RuleSetRule {
        return {
            exclude: [/\.(js|jsx|mjs)$/, /\.(ts|tsx)$/, /\.html$/, /\.json$/],
            loader: require.resolve("file-loader"),
            options: {
                emitFile: ifClient(true, false),
                name: ifProduction(
                    "static/media/[name].[contenthash].[ext]",
                    "static/media/[name].[hash].[ext]",
                ),
            },
        };
    }

    function getModuleSCSSLoader() {
        /**
         * @todo library -- here
         */
        return ifClient(
            {
                test: /\.(scss|sass|css)$/i,
                use: removeEmpty([
                    ifDevelopment({
                        loader: require.resolve("css-hot-loader"),
                    }),
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve("css-loader"),
                    },
                    {
                        loader: require.resolve("postcss-loader"),
                        options: {
                            ident: "postcss",
                            plugins: postCssPlugin,
                        },
                    },
                    {
                        loader: require.resolve("sass-loader"),
                        options: {
                            // Prefer `dart-sass`
                            implementation: require("sass"),
                        },
                    },
                ]),
            },
            {
                test: /\.(scss|sass|css)$/i,
                use: [
                    {
                        loader: require.resolve("css-loader"),
                        options: {
                            onlyLocals: true,
                        },
                    },
                ],
            },
        );
    }

    /**
     * Define rule for transpiling TypeScript
     * @description Uncomment transpileOnly to Disable type checker - will use it in ForkTsCheckerWebpackPlugin at the cost of overlay.
     * Babel loader is present to support react-hot-loader.
     *
     * @todo Make configurable for CI and performance. Babel can also provide caching and polyfill
     * @todo Babel probably doesn't need to be run for server config
     */
    function getModuleTypeScriptLoader(): RuleSetRule {
        /**
         * @todo transpileOnly prevents declaration files from being output... but can the forked process handle this?
         */
        return {
            include: resolveSourceRoot(),
            test: [/\.(js|jsx|mjs)$/, /\.(ts|tsx)$/],
            use: [
                {
                    loader: require.resolve("babel-loader"),
                    options: {
                        plugins: [
                            [
                                require.resolve(
                                    "@babel/plugin-proposal-decorators",
                                ),
                                {
                                    legacy: true,
                                },
                            ],
                            [
                                require.resolve(
                                    "@babel/plugin-proposal-class-properties",
                                ),
                                {
                                    loose: true,
                                },
                            ],
                            require.resolve(
                                "@babel/plugin-syntax-dynamic-import",
                            ),
                        ],
                        presets: [
                            [
                                require.resolve("@babel/preset-env"),
                                {
                                    useBuiltIns: false,
                                },
                            ],
                            require.resolve("@babel/preset-react"),
                            require.resolve("@babel/preset-typescript"),
                        ],
                    },
                },
                {
                    loader: require.resolve("ts-loader"),
                    options: ifLibrary(
                        {
                            configFile: resolveTsConfig(),
                        },
                        {
                            configFile: resolveTsConfig(),
                            transpileOnly: true,
                        },
                    ),
                },
            ],
        };
    }

    function getPluginBundleAnalyzer(analyzer: PluginBundleAnalyzerOptions) {
        const statsFilename = path.resolve(
            `${analyzer.outputDir}/${options.name}-stats.json`,
        );
        const reportFilename = path.resolve(
            `${analyzer.outputDir}/${options.name}-report.html`,
        );
        return ifProduction(
            new BundleAnalyzerPlugin({
                analyzerMode: analyzer.enabled ? "static" : "disabled",
                generateStatsFile: analyzer.enabled,
                // logLevel: "silent",
                openAnalyzer: false,
                reportFilename,
                statsFilename,
            }),
            new BundleAnalyzerPlugin({
                analyzerHost: analyzer.host,
                analyzerMode: analyzer.enabled ? "server" : "disabled",
                analyzerPort: ifClient(analyzer.port, analyzer.port + 1),
                // logLevel: "silent",
                openAnalyzer: false,
            }),
        );
    }

    function getPluginForkTsCheckerWebpack() {
        /**
         * @todo library -- how can we handle this if ifLibrary
         */
        return ifProduction(
            new ForkTsCheckerWebpackPlugin({
                silent: true,
                tsconfig: resolveTsConfig(),
            }),
            new ForkTsCheckerWebpackPlugin({
                async: false,
                silent: true,
                tsconfig: resolveTsConfig(),
                watch: resolveSourceRoot(),
            }),
        );
    }

    /**
     * @description Tell webpack how to resolve files and modules
     * Prevents users from importing files from outside of src/ (or node_modules/).
     * This often causes confusion because we only process files within src/ with babel.
     * To fix this, we prevent you from importing files out of src/ -- if you'd like to,
     * please link the files into your node_modules/ and let module-resolution kick in.
     * Make sure your source files are compiled, as they will not be processed in any way.
     *
     * @todo How to handle lerna???
     */
    function getResolve(): Resolve {
        return {
            alias: {
                "@src": resolveSourceRoot(),
            },
            extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx"],
            modules: [resolveSourceRoot(), "node_modules"],
            plugins: [
                new ModuleScopePlugin(resolveSourceRoot(), [
                    resolvePath("package.json"),
                ]),
                new TsconfigPathsPlugin({
                    configFile: resolveTsConfig(),
                }),
            ],
        };
    }

    return {
        getEntry,
        getModuleFileLoader,
        getModuleSCSSLoader,
        getModuleTypeScriptLoader,
        getOptimization,
        getPluginBundleAnalyzer,
        getPluginForkTsCheckerWebpack,
        getResolve,
    };
}
