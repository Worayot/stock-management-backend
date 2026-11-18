export interface CreatePriceOptionInput {
    optionName?: string | null;
    price: string;
    quantity: string;
}

export interface UpdatePriceOptionInput {
    optionName?: string | null;
    price?: string;
    quantity?: string;
}
