import { Compiler } from "@pixeloven-webpack/compiler";
import { NextFunction, Request, Response } from "express";
import path from "path";
import webpackHotMiddleware from "@pixeloven-webpack/hot-middleware";

interface ClientMiddlewareConfig {
    namespace?: string;
    publicPath: string;
}

/**
 * Creates webpackHotMiddleware with custom configuration
 * @todo Re-write to take advantage of newest features along side custom server middleware
 *
 * @param config
 * @param compiler
 * @param watchOptions
 */
function createWebpackHotClientMiddleware(
    compiler: Compiler,
    config: ClientMiddlewareConfig,
) {
    if (compiler.client) {
        return webpackHotMiddleware(compiler.client, {
            heartbeat: 3000,
            log: false,
            path: path.normalize(
                `/${config.publicPath}/__${config.namespace ?? "webpack"}_hmr`,
            ),
            reload: true,
        });
    }
    return (req: Request, res: Response, next: NextFunction) => {
        next();
    };
}

export default createWebpackHotClientMiddleware;
