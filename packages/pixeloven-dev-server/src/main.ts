import { exit, handleError, sleep } from "@pixeloven/core";
import { logger } from "@pixeloven/node-logger";
import openBrowser from "react-dev-utils/openBrowser";
import WebpackDevServerUtils from "react-dev-utils/WebpackDevServerUtils";
import { config } from "./lib/config";
import Features, { Options } from "./lib/Features";
import Server from "./lib/Server";

/**
 * Get WebpackDevServerUtils functions
 */
const { choosePort } = WebpackDevServerUtils;

/**
 * Map index to "script"
 * @param index
 */
const mapScriptIndex = (index: string) => index === "start";

/**
 * Normalize a url
 * @param item 
 */
const normalizeUrl = (item: string) => item.replace(/([^:]\/)\/+/g, "$1");

/**
 * Setup execution
 */
const main = (argv: string[]) => {
    const scriptArgs = argv.slice(2);
    const scriptIndex = scriptArgs.findIndex(index => mapScriptIndex(index));
    const scriptName =
        scriptIndex === -1 ? scriptArgs[0] : scriptArgs[scriptIndex];
    if (scriptIndex === -1) {
        logger.error(`Unknown script ${scriptName}.`);
        exit(1);
    } else {
        // TODO need to pickup webpack configs 
        // TODO need to pickup dev server config

        const options: Options = {}; // Need to get this from some sort of user config
        const features = new Features(options);
        const server = new Server(config, features);

        /**
         * @todo can we use any of this https://github.com/glenjamin/ultimate-hot-reloading-example
         * @todo bring this back https://github.com/gaearon/react-hot-loader
         */
        try {
            /**
             * We attempt to use the default port but if it is busy, we offer the user to
             * run on a different port. `choosePort()` Promise resolves to the next free port.
             */
            const host = config.server.host;
            const port = config.server.host;
            choosePort(host, port)
                .then((chosenPort: number) => {
                    logger.info(`Attempting to bind to ${host}:${chosenPort}`);
                    sleep(1000);
                    // server.start(, (error?: Error) => {
                    //     if (error) {
                    //         handleError(error);
                    //     }
                    //     logger.info("Starting development server...");
                    //     if (config.machine === "host") {
                    //         logger.info("Application will launch automatically.");
                    //         const baseUrl = normalizeUrl(`${config.server.protocol}://${config.server.host}:${config.server.port}/${config.publicPath}`);
                    //         openBrowser(baseUrl);
                    //     }
                    // });
                })
                .catch((error: Error) => {
                    handleError(error);
                });
        } catch (error) {
            handleError(error);
        }
        
    }
};

export default main;
