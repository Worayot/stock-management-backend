
import { prisma } from "../../lib/prisma.js";
import type { Prisma } from "../../generated/prisma/client.js";

export const itemRepository = {
    findAll(creatorId: string) {
        return prisma.item.findMany({
        where: { creatorId },
        include: {
            unit: true,
            priceOptions: true
        },
        orderBy: { createdAt: "desc" }
        });
    },

    findById(id: string, creatorId: string) {
        return prisma.item.findFirst({
        where: { id, creatorId },
        include: {
            unit: true,
            priceOptions: true
        }
        });
    },

    create(data: Prisma.ItemUncheckedCreateInput) {
        return prisma.item.create({
        data,
        include: {
            unit: true,
            priceOptions: true
        }
        });
    },

    update(id: string, creatorId: string, data: Prisma.ItemUpdateInput) {
        return prisma.item.update({
        where: {
            id,
            creatorId
        },
        data,
        include: {
            unit: true,
            priceOptions: true
        }
        });
    },

    delete(id: string, creatorId: string) {
        return prisma.item.delete({
        where: {
            id,
            creatorId
        }
        });
    },

    findUnitById(id: string) {
        return prisma.unit.findUnique({
        where: { id }
        });
    }
};
