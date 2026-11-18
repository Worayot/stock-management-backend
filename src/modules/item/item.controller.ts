
import type { Request, Response } from "express";
import { itemService } from "./item.service.js";

export const itemController = {
    async getAll(req: Request, res: Response) {
        const userId = res.locals.userId as string;

        const items = await itemService.getAll(userId);

        res.json({
        success: true,
        data: items
        });
    },

    async getById(req: Request, res: Response) {
        const userId = res.locals.userId as string;

        const item = await itemService.getById(
        req.params.id as string,
        userId
        );

        res.json({
        success: true,
        data: item
        });
    },

    async create(req: Request, res: Response) {
        const userId = res.locals.userId as string;

        const item = await itemService.create(
        userId,
        req.body
        );

        res.status(201).json({
        success: true,
        message: "Item created successfully",
        data: item
        });
    },

    async update(req: Request, res: Response) {
        const userId = res.locals.userId as string;

        const item = await itemService.update(
        req.params.id as string,
        userId,
        req.body
        );

        res.json({
        success: true,
        message: "Item updated successfully",
        data: item
        });
    },

    async delete(req: Request, res: Response) {
        const userId = res.locals.userId as string;

        await itemService.delete(req.params.id as string, userId);

        res.json({
        success: true,
        message: "Item deleted successfully"
        });
    }
};
