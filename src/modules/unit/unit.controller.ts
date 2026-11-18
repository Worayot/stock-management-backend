
import type { Request, Response } from "express";
import { unitService } from "./unit.service.js";

export const unitController = {
    async getAll(req: Request, res: Response) {
        const units = await unitService.getAll();

        res.json({
        success: true,
        data: units
        });
    },

    async getById(req: Request, res: Response) {
        const unit = await unitService.getById(req.params.id as string);

        res.json({
        success: true,
        data: unit
        });
    },

    async create(req: Request, res: Response) {
        const unit = await unitService.create(req.body);

        res.status(201).json({
        success: true,
        message: "Unit created successfully",
        data: unit
        });
    },

    async update(req: Request, res: Response) {
        const unit = await unitService.update(
        req.params.id as string,
        req.body
        );

        res.json({
        success: true,
        message: "Unit updated successfully",
        data: unit
        });
    },

    async delete(req: Request, res: Response) {
        await unitService.delete(req.params.id as string);

        res.json({
        success: true,
        message: "Unit deleted successfully"
        });
    }
};
