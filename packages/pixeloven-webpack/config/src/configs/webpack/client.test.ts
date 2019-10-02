import * as filesystem from "@pixeloven-core/filesystem";
import "jest";
import sinon from "sinon";
import client from "./client";

const sandbox = sinon.createSandbox();

describe("@pixeloven/webpack", () => {
    describe("configs", () => {
        describe("webpack", () => {
            describe("client", () => {
                afterAll(() => {
                    sandbox.reset();
                });
                afterEach(() => {
                    sandbox.reset();
                });
                beforeAll(() => {
                    sandbox
                        .stub(filesystem, "resolvePath")
                        .call(
                            (relativePath: string, strict?: boolean) =>
                                `/test/path/${relativePath}`,
                            "something",
                            false,
                        );
                });
                it("should export webpack config targeting web for development", () => {
                    const env = process.env;
                    env.NODE_ENV = "development";
                    const config = client(env, {
                        outputPath: "./dist",
                        path: "/",
                        withProfiling: true,
                        withSourceMap: true,
                        withStats: true,
                        withStatsDir: "./stats",
                        withStatsHost: "localhost",
                        withStatsPort: 8081,
                    });
                    expect(config.mode).toEqual("development");
                    expect(config.target).toEqual("web");
                });
                it("should export webpack config targeting web for production", () => {
                    const env = process.env;
                    env.NODE_ENV = "production";
                    const config = client(env, {
                        outputPath: "./dist",
                        path: "/",
                        withProfiling: true,
                        withSourceMap: true,
                        withStats: true,
                        withStatsDir: "./stats",
                        withStatsHost: "localhost",
                        withStatsPort: 8081,
                    });
                    expect(config.mode).toEqual("production");
                    expect(config.target).toEqual("web");
                });
            });
        });
    });
});