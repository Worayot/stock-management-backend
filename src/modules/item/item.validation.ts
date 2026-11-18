import { z } from "zod";
import { ItemCategory } from "../../generated/prisma/enums.js";

export const createItemSchema = z.object({
    categoryType: z.enum(ItemCategory),
    unitId: z.string().min(1),
    imageId: z.string().nullable().optional(),
    quantity: z.string().regex(/^\d+(\.\d{1,3})?$/)
});

export const updateItemSchema = z.object({
    categoryType: z.enum(ItemCategory).optional(),
    unitId: z.string().min(1).optional(),
    imageId: z.string().nullable().optional(),
    quantity: z.string().optional()
});


export type CreateItemDto = z.infer<typeof createItemSchema>;
export type UpdateItemDto = z.infer<typeof updateItemSchema>;