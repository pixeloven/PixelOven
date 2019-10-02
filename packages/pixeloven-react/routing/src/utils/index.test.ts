import "jest";
import { Router } from "./index";

describe("@pixeloven-react/routing", () => {
    describe("utils/index", () => {
        it("should export Router", () => {
            expect(typeof Router.getConfig).toEqual("function");
            expect(typeof Router.getMatches).toEqual("function");
        });
    });
});