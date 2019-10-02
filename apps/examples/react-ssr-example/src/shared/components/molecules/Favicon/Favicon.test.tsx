import { configure, shallow } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import "jest";
import React from "react";
import Favicon from "./Favicon";

configure({
    adapter: new ReactSixteenAdapter(),
});

describe("Shared/Components/Atoms/Link", () => {
    it("should render an `Link` component with an `href` attr", () => {
        const assetFile = "test-file-stub";
        const wrapper = shallow(<Favicon />);
        const linkTag = wrapper.find("Link");
        expect(linkTag.length).toEqual(1);
        expect(linkTag.props().href).toBe(assetFile);
    });
});