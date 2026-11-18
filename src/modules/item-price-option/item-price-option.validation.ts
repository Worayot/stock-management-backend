import { z } from "zod";

export const createPriceOptionSchema = z.object({
    optionName: z.string().nullable().optional(),
    price: z.string().min(1, { message: "Price is required" }),
    quantity: z.string().min(1, { message: "Quantity is required" }),
});

export const updatePriceOptionSchema = z.object({
    optionName: z.string().nullable().optional(),
    price: z.string().min(1).optional(),
    quantity: z.string().min(1).optional(),
});

export type CreatePriceOptionDto = z.infer<typeof createPriceOptionSchema>;
export type UpdatePriceOptionDto = z.infer<typeof updatePriceOptionSchema>;