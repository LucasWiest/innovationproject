/*
  Warnings:

  - You are about to drop the column `userId` on the `Message` table. All the data in the column will be lost.
  - Added the required column `userRecipientId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userSenderId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "userSenderId" INTEGER NOT NULL,
    "userRecipientId" INTEGER NOT NULL,
    CONSTRAINT "Message_userSenderId_fkey" FOREIGN KEY ("userSenderId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_userRecipientId_fkey" FOREIGN KEY ("userRecipientId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Message" ("date", "id", "text") SELECT "date", "id", "text" FROM "Message";
DROP TABLE "Message";
ALTER TABLE "new_Message" RENAME TO "Message";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
