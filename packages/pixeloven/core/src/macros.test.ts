import { FileNotFoundException } from "@pixeloven/exceptions";
import fs, { PathLike } from "fs-extra";
import "jest";
import path from "path";
import * as macros from "./macros";

let resolvePathExists = true;
const existsSyncMock = (somePath: PathLike) => resolvePathExists;
const mkdirSyncMock = (somePath: PathLike) => undefined;
const emptyDirSyncMock = (somePath: PathLike) => undefined;

describe("@pixeloven/core", () => {
    describe("macros", () => {
        afterAll(() => {
            jest.clearAllMocks();
        });
        afterEach(() => {
            jest.restoreAllMocks();
            resolvePathExists = true;
        });
        describe("resolvePath", () => {
            it('should resolve path "strict" successfully', () => {
                resolvePathExists = true;
                const existsSyncSpy = jest
                    .spyOn(fs, "existsSync")
                    .mockImplementation(existsSyncMock);
                const absolutePath = macros.resolvePath("testing");
                expect(absolutePath).toEqual(
                    path.resolve(process.cwd(), "testing"),
                );
                expect(existsSyncSpy).toHaveBeenCalledTimes(1);
            });
            it('should resolve path NOT "strict" successfully', () => {
                const existsSyncSpy = jest
                    .spyOn(fs, "existsSync")
                    .mockImplementation(existsSyncMock);
                const absolutePath = macros.resolvePath("testing", true);
                expect(absolutePath).toEqual(
                    path.resolve(process.cwd(), "testing"),
                );
                expect(existsSyncSpy).toHaveBeenCalledTimes(1);
            });
            it('should try resolve path "strict" and throw error', () => {
                resolvePathExists = false;
                const existsSyncSpy = jest
                    .spyOn(fs, "existsSync")
                    .mockImplementation(existsSyncMock);
                const t = () => {
                    macros.resolvePath("testing");
                };
                expect(t).toThrow(FileNotFoundException);
                expect(existsSyncSpy).toHaveBeenCalledTimes(1);
            });
        });
        describe("createOrEmptyDir", () => {
            it("should make a new directory", () => {
                resolvePathExists = false;
                const existsSyncSpy = jest
                    .spyOn(fs, "existsSync")
                    .mockImplementation(existsSyncMock);
                const mkdirSyncSpy = jest
                    .spyOn(fs, "mkdirSync")
                    .mockImplementation(mkdirSyncMock);
                macros.createOrEmptyDir("tmp");
                expect(existsSyncSpy).toHaveBeenCalledTimes(1);
                expect(mkdirSyncSpy).toHaveBeenCalledTimes(1);
            });
            it("should empty an existing directory", () => {
                resolvePathExists = true;
                const existsSyncSpy = jest
                    .spyOn(fs, "existsSync")
                    .mockImplementation(existsSyncMock);
                const emptyDirSyncSpy = jest
                    .spyOn(fs, "emptyDirSync")
                    .mockImplementation(emptyDirSyncMock);
                macros.createOrEmptyDir("tmp");
                expect(existsSyncSpy).toHaveBeenCalledTimes(1);
                expect(emptyDirSyncSpy).toHaveBeenCalledTimes(1);
            });
        });
        describe("normalizeUrl", () => {
            it("should return normalized url", () => {
                const url = "https://localhost:8080//test/resource///woot";
                const expectedUrl = "https://localhost:8080/test/resource/woot";
                expect(macros.normalizeUrl(url)).toEqual(expectedUrl);
            });
        });
    });
});
