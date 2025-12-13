/*
  Warnings:

  - The values [PENDING_DELIVERY] on the enum `OrderStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `Websocket` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[sepayTransactionCode]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[googleId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shippingFee` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAmount` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalProductPrice` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shopId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('COD', 'BANK_TRANSFER');

-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('PENDING_PAYMENT', 'PENDING_CONFIRMATION', 'PREPARING', 'PENDING_PICKUP', 'SHIPPING', 'DELIVERED', 'RETURN_REQUESTED', 'RETURNED', 'CANCELLED');
ALTER TABLE "Order" ALTER COLUMN "status" TYPE "OrderStatus_new" USING ("status"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "public"."OrderStatus_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Websocket" DROP CONSTRAINT "Websocket_userId_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "paymentMethod" "PaymentMethod" NOT NULL DEFAULT 'COD',
ADD COLUMN     "shippingFee" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "shippingServiceId" INTEGER,
ADD COLUMN     "totalAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "totalProductPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "trackingCode" TEXT,
ALTER COLUMN "status" SET DEFAULT 'PENDING_PAYMENT';

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "sepayTransactionCode" TEXT;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "height" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "length" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "shopId" INTEGER NOT NULL,
ADD COLUMN     "weight" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "width" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "ProductSKUSnapshot" ADD COLUMN     "customization" JSONB;

-- AlterTable
ALTER TABLE "SKU" ADD COLUMN     "version" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "googleId" TEXT,
ADD COLUMN     "isTwoFactorEnabled" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "password" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserAddress" ADD COLUMN     "districtId" INTEGER,
ADD COLUMN     "provinceId" INTEGER,
ADD COLUMN     "wardCode" TEXT;

-- DropTable
DROP TABLE "Websocket";

-- CreateIndex
CREATE UNIQUE INDEX "Payment_sepayTransactionCode_key" ON "Payment"("sepayTransactionCode");

-- CreateIndex
CREATE INDEX "Product_shopId_idx" ON "Product"("shopId");

-- CreateIndex
CREATE UNIQUE INDEX "User_googleId_key" ON "User"("googleId");
