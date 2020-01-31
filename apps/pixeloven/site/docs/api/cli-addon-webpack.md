---
id: cli-addon-webpack
title: CLI Addon Webpack
---

[Webpack](https://webpack.js.org/) is in many regards a must have for large scale JS Application development. Through it's numerous extensions it also supports many other crucial aspects for web development. The goal of this addon is to abstract a lot of the complex configuration requred to get a solid workflow setup for large scale application development.

## Installation
>Note the currently version of this extension was specifically designed for creating server side rendered react applications. Though our ultimate goal is to provide a more general development platform we want to first nail this subset before conquering others.

To install this addon simply run the following with NPM
```sh
npm install --save-dev @pixeloven/cli-addon-webpack
```
or yarn
```sh
yarn add --dev @pixeloven/cli-addon-webpack
```

## API Reference
|API|Description|
|---|---|
|[`webpack`](#cli-pixelovenwebpack)| CLI entry point for interfacing with Webpack. |

## CLI: PixelOven.Webpack
>NOTICE: This API is likely to be broken into a set of more modular APIs in future versions.

Our webpack CLI Addon builds on top of webpack and many other supporting projects to create a system for developing and building JavaScript applications that scale. 

|Argument|Description|
|---|---|
|`build`| Builds Storybook for static file serving. |
|`start`| Runs Storybook in watch mode for local development. |

#### Options
|Option|Default|Description|
|---|---|---|
|`--output-dir`| `./stories` | Output directory for static files. |
|`--port`| `9001` | Port for hosting storybook in watch mode. |
|`--quiet`| `false` | Whether storybook should log to console or not. |

#### Usage
To run storybook in development/watch mode on a specific port you.

```bash
yarn run pixeloven story start --port 9080
```
Or build storybook for hosting as a static site.
```bash
yarn run pixeloven build start --output-dir ./site
```
Of course you can also just use the default values which are recommended.