
import { z } from "zod";

import {
    OpenAPIRegistry,
    OpenApiGeneratorV3,
    extendZodWithOpenApi
} from "@asteasolutions/zod-to-openapi";

// Extend Zod before registering schemas
extendZodWithOpenApi(z);

export const registry = new OpenAPIRegistry();

export function generateOpenApi() {
    const generator = new OpenApiGeneratorV3(
        registry.definitions
    );

    return generator.generateDocument({
        openapi: "3.0.0",
        info: {
            title: "Stock Management API",
            version: "1.0.0",
            description: "Stock Management API documentation"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    });
}
