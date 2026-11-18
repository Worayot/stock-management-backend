import type {
    Request,
    Response
} from "express";

import { userService } from "./user.service.js";

import type { UpdateUserInput } from "./user.validation.js";

export class UserController {

    // GET /api/users/me
    async getMe(req: Request, res: Response) {

        const userId = res.locals.userId as string;

        const user = await userService.getUserById(userId);

        res.status(200).json({
        success: true,
        data: user
        });
    }

    // PATCH /api/users/me
    async updateMe(req: Request, res: Response) {

        const userId = res.locals.userId as string;

        const data = res.locals.validatedBody as UpdateUserInput;

        const user = await userService.updateUser(
        userId,
        data
        );

        res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: user
        });
    }

    // DELETE /api/users/me
    async deleteMe(req: Request, res: Response) {

        const userId = res.locals.userId as string;

        const result = await userService.deleteUser(userId);

        res.status(200).json({
        success: true,
        ...result
        });
    }
}

export const userController = new UserController();