
import { prisma } from "../../lib/prisma.js";

export const unitRepository = {
    findAll() {
        return prisma.unit.findMany({
        orderBy: { unit: "asc" }
        });
    },

    findById(id: string) {
        return prisma.unit.findUnique({
        where: { id }
        });
    },

    create(id: string, unit: string) {
        return prisma.unit.create({
        data: { id, unit }
        });
    },

    update(id: string, unit: string) {
        return prisma.unit.update({
        where: { id },
        data: { unit }
        });
    },

    delete(id: string) {
        return prisma.unit.delete({
        where: { id }
        });
    }
};
