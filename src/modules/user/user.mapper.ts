import type { User } from "../../generated/prisma/client.js";
import type { UserResponseDto } from "./user.dto.js";

export function toUserResponseDto(
    user: User
    ): UserResponseDto {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        emailVerified: user.emailVerified,
        createdAt: user.createdAt
    };
}