import { globSync } from "glob";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadOpenApiModules() {
    const files = globSync(
        path.join(__dirname, "../modules/**/*.openapi.{ts,js}")
    );

    await Promise.all(
        files.map((file) =>
            import(pathToFileURL(file).href)
        )
    );
}