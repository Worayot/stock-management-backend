import { ItemCategory } from "../../generated/prisma/enums.js";

export interface CreateItemInput {
    categoryType: ItemCategory;
    unitId: string;
    imageId?: string | null;
    quantity?: string;
}

export interface UpdateItemInput {
    categoryType?: ItemCategory;
    unitId?: string;
    imageId?: string | null;
    quantity?: string;
}