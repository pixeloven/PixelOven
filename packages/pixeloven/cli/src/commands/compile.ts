import { PixelOvenToolbox } from "../types";

export default {
    alias: ["--compile", "-c"],
    name: "compile",
    run: async (toolbox: PixelOvenToolbox) => {
        const { parameters, pixelOven, tsc } = toolbox;
        const argList =
            parameters.array && parameters.array.length
                ? parameters.array.slice(1)
                : [];
        switch (parameters.first) {
            case "ts":
            case "tsx": {
                const results = await tsc(argList);
                pixelOven.exit("Tsc", results.status, `Success! Beam me up.\n`);
                break;
            }
            default: {
                pixelOven.invalidArgument();
                break;
            }
        }
    },
};