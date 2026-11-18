
import { prisma } from "../../lib/prisma.js";
import type { Prisma } from "../../generated/prisma/client.js";

export const itemPriceOptionRepository = {
    findAll(creatorId: string) {
        return prisma.itemPriceOption.findMany({
        where: {
            item: { creatorId }
        },
        include: {
            item: true
        },
        orderBy: { id: "asc" }
        });
    },

    findById(id: string, creatorId: string) {
        return prisma.itemPriceOption.findFirst({
        where: {
            id,
            item: { creatorId }
        },
        include: {
            item: true
        }
        });
    },

    findByItemId(itemId: string, creatorId: string) {
        return prisma.itemPriceOption.findMany({
        where: {
            itemId,
            item: { creatorId }
        },
        orderBy: { id: "asc" }
        });
    },

    create(data: Prisma.ItemPriceOptionUncheckedCreateInput) {
        return prisma.itemPriceOption.create({
        data
        });
    },

    update(
        id: string,
        creatorId: string,
        data: Prisma.ItemPriceOptionUpdateInput
    ) {
        return prisma.itemPriceOption.update({
        where: {
            id,
            item: { creatorId }
        },
        data
        });
    },

    delete(id: string, creatorId: string) {
        return prisma.itemPriceOption.delete({
        where: {
            id,
            item: { creatorId }
        }
        });
    },

    findItemById(id: string, creatorId: string) {
        return prisma.item.findFirst({
        where: { id, creatorId }
        });
    }
};
