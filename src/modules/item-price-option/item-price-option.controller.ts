
import type { Request, Response } from "express";
import { itemPriceOptionService } from "./item-price-option.service.js";

export const itemPriceOptionController = {
    async getAll(req: Request, res: Response) {
        const userId = res.locals.userId as string;

        const options = await itemPriceOptionService.getAll(userId);

        res.json({
        success: true,
        data: options
        });
    },

    async getById(req: Request, res: Response) {
        const userId = res.locals.userId as string;

        const option = await itemPriceOptionService.getById(
        req.params.id as string,
        userId
        );

        res.json({
        success: true,
        data: option
        });
    },

    async getByItemId(req: Request, res: Response) {
        const userId = res.locals.userId as string;

        const options = await itemPriceOptionService.getByItemId(
        req.params.itemId as string,
        userId
        );

        res.json({
        success: true,
        data: options
        });
    },

    async create(req: Request, res: Response) {
        const userId = res.locals.userId as string;

        const option = await itemPriceOptionService.create(
        req.params.itemId as string,
        userId,
        req.body
        );

        res.status(201).json({
        success: true,
        message: "Price option created successfully",
        data: option
        });
    },

    async update(req: Request, res: Response) {
        const userId = res.locals.userId as string;

        const option = await itemPriceOptionService.update(
        req.params.id as string,
        userId,
        req.body
        );

        res.json({
        success: true,
        message: "Price option updated successfully",
        data: option
        });
    },

    async delete(req: Request, res: Response) {
        const userId = res.locals.userId as string;

        await itemPriceOptionService.delete(
        req.params.id as string,
        userId
        );

        res.json({
        success: true,
        message: "Price option deleted successfully"
        });
    }
};
