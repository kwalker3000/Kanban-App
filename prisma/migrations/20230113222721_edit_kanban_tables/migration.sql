/*
  Warnings:

  - You are about to drop the `Board` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subtask` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Kanban` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `boards` to the `Kanban` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Kanban` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_kanban_id_fkey";

-- DropForeignKey
ALTER TABLE "Subtask" DROP CONSTRAINT "Subtask_task_id_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_board_id_fkey";

-- AlterTable
ALTER TABLE "Kanban" ADD COLUMN     "boards" JSONB NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Board";

-- DropTable
DROP TABLE "Subtask";

-- DropTable
DROP TABLE "Task";

-- CreateIndex
CREATE UNIQUE INDEX "Kanban_userId_key" ON "Kanban"("userId");

-- AddForeignKey
ALTER TABLE "Kanban" ADD CONSTRAINT "Kanban_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
