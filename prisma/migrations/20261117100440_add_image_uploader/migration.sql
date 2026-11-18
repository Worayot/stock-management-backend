/*
  Warnings:

  - Added the required column `uploaded_by_id` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "uploaded_by_id" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Image_uploaded_by_id_idx" ON "Image"("uploaded_by_id");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_uploaded_by_id_fkey" FOREIGN KEY ("uploaded_by_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
