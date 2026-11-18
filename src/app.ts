import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import { API_PREFIX } from "./config/api.js";
import apiRoutes from "./routes.js";
import swaggerUi from "swagger-ui-express";
import { generateOpenApi } from "./config/openapi.js";
import { loadOpenApiModules } from "./config/openapi-loader.js";

const app = express();
app.disable('x-powered-by');
app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is running"
    });
});

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(API_PREFIX, apiRoutes);

const startSwagger = async () => {
    await loadOpenApiModules();

    const swaggerSpec = generateOpenApi();

    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerSpec)
    );
};

await startSwagger();

export default app;