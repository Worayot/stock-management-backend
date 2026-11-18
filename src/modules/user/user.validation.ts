import { z } from "zod";

export const updateUserSchema = z.strictObject({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(100)
        .optional(),

    image: z
        .url({ error: "Invalid image URL" })
        .nullable()
        .optional()
}).refine(
    (data) => Object.keys(data).length > 0,
    {
        message: "At least one field must be provided"
    }
);

export type UpdateUserDto = z.infer<typeof updateUserSchema>;