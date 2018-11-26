import { configure, shallow } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import "jest";
import * as React from "react";
import ScriptTags from "./ScriptTags";

configure({
    adapter: new ReactSixteenAdapter(),
});

describe("Server", () => {
    describe("Views", () => {
        describe("ScriptTags", () => {
            it("should render nothing when `sources` is undefined", () => {
                const wrapper = shallow(<ScriptTags />);
                const scriptTag = wrapper.find("script");
                expect(scriptTag.length).toEqual(0);
            });
            it("should render an `script` elem with an `src` attr", () => {
                const assetFile = "assets/js/main.js";
                const wrapper = shallow(<ScriptTags sources={[assetFile]} />);
                const scriptTag = wrapper.find("script");
                expect(scriptTag.length).toEqual(1);
                expect(scriptTag.props().src).toBe(assetFile);
            });
            it("should render multiple `script` elems each with an `src` attr", () => {
                const assetFiles = ["assets/js/main.js", "assets/js/vendor.js"];
                const wrapper = shallow(<ScriptTags sources={assetFiles} />);
                const scriptTags = wrapper.find("script");
                expect(scriptTags.length).toEqual(2);
                scriptTags.forEach((scriptTag, index) => {
                    expect(scriptTag.props().src).toBe(assetFiles[index]);
                });
            });
        });
    });
});
