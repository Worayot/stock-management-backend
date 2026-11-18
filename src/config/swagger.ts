
import swaggerJsdoc from "swagger-jsdoc";
import { globSync } from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routeFiles = globSync(
    path.join(__dirname, "../modules/**/*.routes.{ts,js}")
);

const swaggerOptions: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Stock Management API",
            version: "1.0.0",
            description: "Stock Management API documentation"
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Development server"
            }
        ],
        components: {
            securitySchemes: {
                cookieAuth: {
                    type: "apiKey",
                    in: "cookie",
                    name: "better-auth.session_token"
                }
            }
        }
    },
    apis: routeFiles
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
