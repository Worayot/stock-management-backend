-- CreateEnum
CREATE TYPE "ItemCategory" AS ENUM ('Discrete', 'Continuous');

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "category_type" "ItemCategory" NOT NULL,
    "creator_id" TEXT NOT NULL,
    "img_id" TEXT,
    "unit_id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quantity" DECIMAL(12,3) NOT NULL DEFAULT 0,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemPriceOption" (
    "id" TEXT NOT NULL,
    "option_name" TEXT,
    "item_id" TEXT NOT NULL,
    "price" DECIMAL(12,2) NOT NULL,
    "quantity" DECIMAL(12,3) NOT NULL,

    CONSTRAINT "ItemPriceOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "data" BYTEA NOT NULL,
    "mime_type" TEXT NOT NULL,
    "file_name" TEXT,
    "file_size" BIGINT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" TEXT NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_img_id_key" ON "Item"("img_id");

-- CreateIndex
CREATE INDEX "Item_creator_id_idx" ON "Item"("creator_id");

-- CreateIndex
CREATE UNIQUE INDEX "ItemPriceOption_option_name_key" ON "ItemPriceOption"("option_name");

-- CreateIndex
CREATE INDEX "ItemPriceOption_item_id_idx" ON "ItemPriceOption"("item_id");

-- CreateIndex
CREATE UNIQUE INDEX "Unit_unit_key" ON "Unit"("unit");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_img_id_fkey" FOREIGN KEY ("img_id") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPriceOption" ADD CONSTRAINT "ItemPriceOption_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
