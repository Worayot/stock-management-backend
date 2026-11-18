import { prisma } from "../../lib/prisma.js";

export class UserRepository {
    findById(userId: string) {
        return prisma.user.findUnique({
        where: { id: userId }
        });
    }

    update(userId: string, data: {
        name?: string;
        image?: string | null;
    }) {
        return prisma.user.update({
        where: { id: userId },
        data
        });
    }

    delete(userId: string) {
        return prisma.user.delete({
        where: { id: userId }
        });
    }
}

export const userRepository = new UserRepository();