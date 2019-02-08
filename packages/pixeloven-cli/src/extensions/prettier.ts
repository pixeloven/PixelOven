import { PixelOvenRunContext } from "../types";

export type PrettierExtension = (args?: string[]) => Promise<number>;

export default (context: PixelOvenRunContext) => {
    const prettier = async (args: string[] = []) => {
        const { pixeloven, print } = context;
        const fileName = "prettier.json";
        const configPath = context.pixeloven.getConfigPath(fileName);
        if (configPath) {
            print.info(`Configuration file found ${configPath}`);
            return pixeloven.runBin(
                "prettier",
                ["--write", "--config", configPath].concat(args),
            );
        } else {
            print.warning(
                `Unable to find "${fileName}" reverting to default configuration`,
            );
            return pixeloven.runBin("prettier", ["--write"].concat(args));
        }
    };
    context.prettier = prettier;
};
