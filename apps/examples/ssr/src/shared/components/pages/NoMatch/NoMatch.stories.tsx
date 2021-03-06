import {createLocation, createMemoryHistory} from "history";
import React from "react";

import {MemoryRouter} from "@pixeloven-react/routing";

import NoMatch from "./NoMatch";

const history = createMemoryHistory();
const location = createLocation("/testing");
const match = {
    isExact: false,
    params: {},
    path: "/",
    url: "testing",
};

export default {
    component: NoMatch,
    title: "Components/Pages/NoMatch",
};

export const Primary = () => (
    <MemoryRouter>
        <NoMatch history={history} location={location} match={match} />
    </MemoryRouter>
);
