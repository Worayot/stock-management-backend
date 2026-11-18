import { z } from "zod";

export const updateUserSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(100)
        .optional(),

    image: z
        .string()
        .url("Invalid image URL")
        .nullable()
        .optional()
    }).strict().refine(
        (data) => Object.keys(data).length > 0,
    {
        message: "At least one field must be provided"
    }
);

export type UpdateUserInput = z.infer<
    typeof updateUserSchema
>;