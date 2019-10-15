import { Config as BuildConfig } from "@pixeloven-webpack/bundler";
import { Config as CompilerConfig } from "@pixeloven-webpack/config";
import { Config as ServerConfig } from "@pixeloven-webpack/server";
import { PixelOvenToolbox } from "@pixeloven/cli";

export enum WebpackExtensionType {
    build = "build",
    start = "start",
}

export interface WebpackExtensionOptions {
    type: WebpackExtensionType;
    buildOptions?: BuildConfig;
    compilerOptions?: CompilerConfig;
    serverOptions?: ServerConfig;
}

/* Note: keep this enum up to date matching the options interface above for runtime argument checking */
export enum WebpackExecutionOptionTypes {
    "host" = "host",
    "ignored" = "ignored",
    "path" = "path",
    "poll" = "poll",
    "port" = "port",
    "protocol" = "protocol",
    "profile" = "profile",
    "stats" = "stats",
    "stats-dir" = "stats-dir",
    "statsDir" = "statsDir",
    "stats-host" = "stats-host",
    "statsHost" = "statsHost",
    "stats-port" = "stats-port",
    "statsPort" = "statsPort",
    "source-map" = "source-map",
    "sourceMap" = "sourceMap",
}

export type WebpackExtension = (
    options: WebpackExtensionOptions,
) => Promise<number>;

export interface AddonWebpackToolbox extends PixelOvenToolbox {
    webpack: WebpackExtension;
}
