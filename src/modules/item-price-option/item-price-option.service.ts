
import { randomUUID } from "node:crypto";
import type { Prisma } from "../../generated/prisma/client.js";
import { itemPriceOptionRepository } from "./item-price-option.repository.js";
import { ApiError } from "../../utils/api-error.js";
import type { CreatePriceOptionInput, UpdatePriceOptionInput } from "./item-price-option.dto.js";

export const itemPriceOptionService = {
    async getAll(creatorId: string) {
        return await itemPriceOptionRepository.findAll(creatorId);
    },

    async getById(id: string, creatorId: string) {
        const option = await itemPriceOptionRepository.findById(
        id,
        creatorId
        );

        if (!option) {
        throw new ApiError(404, "Price option not found");
        }

        return option;
    },

    async getByItemId(itemId: string, creatorId: string) {
        const item = await itemPriceOptionRepository.findItemById(
        itemId,
        creatorId
        );

        if (!item) {
        throw new ApiError(404, "Item not found");
        }

        return itemPriceOptionRepository.findByItemId(
        itemId,
        creatorId
        );
    },

    async create(
        itemId: string,
        creatorId: string,
        input: CreatePriceOptionInput
    ) {
        const item = await itemPriceOptionRepository.findItemById(
        itemId,
        creatorId
        );

        if (!item) {
        throw new ApiError(404, "Item not found");
        }

        const data: Prisma.ItemPriceOptionUncheckedCreateInput = {
        id: randomUUID(),
        itemId,
        optionName: input.optionName ?? null,
        price: input.price,
        quantity: input.quantity
        };

        return itemPriceOptionRepository.create(data);
    },

    async update(
        id: string,
        creatorId: string,
        input: UpdatePriceOptionInput
    ) {
        await this.getById(id, creatorId);

        const data: Prisma.ItemPriceOptionUpdateInput = {
        ...(input.optionName !== undefined && {
            optionName: input.optionName
        }),
        ...(input.price !== undefined && {
            price: input.price
        }),
        ...(input.quantity !== undefined && {
            quantity: input.quantity
        })
        };

        return itemPriceOptionRepository.update(
        id,
        creatorId,
        data
        );
    },

    async delete(id: string, creatorId: string) {
        await this.getById(id, creatorId);

        return itemPriceOptionRepository.delete(id, creatorId);
    }
};
