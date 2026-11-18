
import { randomUUID } from "node:crypto";
import type { Prisma } from "../../generated/prisma/client.js";
import { itemRepository } from "./item.repository.js";
import { ApiError } from "../../utils/api-error.js";
import type { CreateItemInput, UpdateItemInput } from "./item.dto.js";

export const itemService = {
  async getAll(creatorId: string) {
        return await itemRepository.findAll(creatorId);
    },

    async getById(id: string, creatorId: string) {
        const item = await itemRepository.findById(id, creatorId);

        if (!item) {
        throw new ApiError(404, "Item not found");
        }

        return item;
    },

    async create(creatorId: string, input: CreateItemInput) {
        const unit = await itemRepository.findUnitById(input.unitId);

        if (!unit) {
        throw new ApiError(404, "Unit not found");
        }

        const data: Prisma.ItemUncheckedCreateInput = {
        id: randomUUID(),
        categoryType: input.categoryType,
        creatorId,
        unitId: input.unitId,
        imageId: input.imageId ?? null,
        quantity: input.quantity ?? "0"
        };

        return itemRepository.create(data);
    },

    async update(
        id: string,
        creatorId: string,
        input: UpdateItemInput
    ) {
        const existingItem = await this.getById(id, creatorId);

        if (input.unitId) {
        const unit = await itemRepository.findUnitById(input.unitId);

        if (!unit) {
            throw new ApiError(404, "Unit not found");
        }
        }

        const data: Prisma.ItemUpdateInput = {
        ...(input.categoryType !== undefined && {
            categoryType: input.categoryType
        }),
        ...(input.unitId !== undefined && {
            unit: { connect: { id: input.unitId } }
        }),
        ...(input.imageId !== undefined && {
            image: input.imageId
            ? { connect: { id: input.imageId } }
            : { disconnect: true }
        }),
        ...(input.quantity !== undefined && {
            quantity: input.quantity
        })
        };

        return itemRepository.update(
        existingItem.id,
        creatorId,
        data
        );
    },

    async delete(id: string, creatorId: string) {
        await this.getById(id, creatorId);

        return itemRepository.delete(id, creatorId);
    }
};
