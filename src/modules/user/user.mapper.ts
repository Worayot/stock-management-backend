import type { User } from "../../generated/prisma/client.js";
import type { UserResponseDTO } from "./user.dto.js";

export function toUserResponseDTO(
    user: User
    ): UserResponseDTO {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        emailVerified: user.emailVerified,
        createdAt: user.createdAt
    };
}