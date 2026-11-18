
import { randomUUID } from "node:crypto";
import { unitRepository } from "./unit.repository.js";
import { ApiError } from "../../utils/api-error.js";
import type { CreateUnitDto, UpdateUnitDto } from "./unit.validation.js";

export const unitService = {
    async getAll() {
        return await unitRepository.findAll();
    },

    async getById(id: string) {
        const unit = await unitRepository.findById(id);

        if (!unit) {
        throw new ApiError(404, "Unit not found");
        }

        return unit;
    },

    async create(input: CreateUnitDto) {
        const normalizedUnit = input.unit.trim();

        if (!normalizedUnit) {
        throw new ApiError(400, "Unit cannot be empty");
        }

        return await unitRepository.create(
        randomUUID(),
        normalizedUnit
        );
    },

    async update(id: string, input: UpdateUnitDto) {
        await this.getById(id);

        const normalizedUnit = input.unit.trim();

        if (!normalizedUnit) {
        throw new ApiError(400, "Unit cannot be empty");
        }

        return unitRepository.update(id, normalizedUnit);
    },

    async delete(id: string) {
        await this.getById(id);

        return unitRepository.delete(id);
    }
};
