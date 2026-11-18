import { userRepository } from "./user.repository.js";
import { toUserResponseDto } from "./user.mapper.js";
import { ApiError } from "../../utils/api-error.js";
import type { UpdateUserDto } from "./user.validation.js";

export class UserService {
    async getUserById(userId: string) {
        const user = await userRepository.findById(userId);

        if (!user) {
        throw new ApiError(404, "User not found");
        }

        return toUserResponseDto(user);
    }

    async updateUser(
        userId: string,
        data: UpdateUserDto
    ) {
        const existingUser = await userRepository.findById(userId);

        if (!existingUser) {
        throw new ApiError(404, "User not found");
        }

        const updatedUser = await userRepository.update(
        userId,
        data
        );

        return toUserResponseDto(updatedUser);
    }

    async deleteUser(userId: string) {
        const existingUser = await userRepository.findById(userId);

        if (!existingUser) {
        throw new ApiError(404, "User not found");
        }

        await userRepository.delete(userId);

        return { message: "User deleted successfully" };
    }
}

export const userService = new UserService();