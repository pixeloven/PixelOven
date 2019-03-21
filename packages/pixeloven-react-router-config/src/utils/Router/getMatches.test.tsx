import { configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import "jest";
import * as React from "react";
import getMatches from "./getMatches";

configure({
    adapter: new ReactSixteenAdapter(),
});

const TestComponent = () => {
    return <div>testing</div>;
};

const routes = [
    {
        component: TestComponent,
        path: "/testing",
        routes: [
            {
                component: TestComponent,
                exact: true,
                path: "/testing/foo",
                statusCode: 200,
            },
            {
                component: TestComponent,
                exact: true,
                path: "/testing/bar",
                statusCode: 200,
            },
        ],
    },
];

describe("@pixeloven/react-router-config", () => {
    describe("Utils", () => {
        describe("matchRoutes", () => {
            it("should match just the parent route", () => {
                const matched = getMatches(routes, "/testing");
                expect(matched.length).toEqual(1);
                expect(matched[0].route.path).toEqual("/testing");
            });
            it("should match one child and it's parent", () => {
                const matched = getMatches(routes, "/testing/bar");
                expect(matched.length).toEqual(2);
                expect(matched[0].route.path).toEqual("/testing");
                expect(matched[1].route.path).toEqual("/testing/bar");
            });
            it("should match to root path", () => {
                const matched = getMatches(
                    [
                        {
                            component: TestComponent,
                        },
                    ],
                    "/",
                );
                expect(matched.length).toEqual(1);
            });
            it("should match parent and child to root path", () => {
                const matched = getMatches(
                    [
                        {
                            component: TestComponent,
                            routes: [
                                {
                                    component: TestComponent,
                                },
                            ],
                        },
                    ],
                    "/",
                );
                expect(matched.length).toEqual(2);
            });
            it("should match no routes", () => {
                const matched = getMatches(routes, "/wrong");
                expect(matched.length).toEqual(0);
            });
        });
    });
});
