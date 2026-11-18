import { z } from "zod";

export const createUnitSchema = z.object({
    unit: z.string().min(1, { message: "Unit name cannot be empty" })
});

export const updateUnitSchema = z.object({
    unit: z.string().min(1, { message: "Unit name cannot be empty" })
});

export type CreateUnitDto = z.infer<typeof createUnitSchema>;
export type UpdateUnitDto = z.infer<typeof updateUnitSchema>;