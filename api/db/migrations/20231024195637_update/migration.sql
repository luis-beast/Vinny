-- CreateTable
CREATE TABLE "ItemCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_by" TEXT NOT NULL DEFAULT 'Luis Perez',
    "created_on" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_by" TEXT NOT NULL DEFAULT 'Luis Perez',
    "modified_on" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "InventoryItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "size" TEXT,
    "current_amount" INTEGER NOT NULL,
    "low_amount" INTEGER NOT NULL,
    "sufficient_amount" INTEGER NOT NULL,
    "issued_by" TEXT NOT NULL DEFAULT 'Luis Perez',
    "created_by" TEXT NOT NULL DEFAULT 'Luis Perez',
    "created_on" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_by" TEXT NOT NULL DEFAULT 'Luis Perez',
    "modified_on" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "InventoryItem_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "IssueTemplate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "enlisted" BOOLEAN NOT NULL,
    "created_by" TEXT NOT NULL DEFAULT 'Luis Perez',
    "created_on" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_by" TEXT NOT NULL DEFAULT 'Luis Perez',
    "modified_on" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL DEFAULT '3737HSHS',
    "salt" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "enlisted" BOOLEAN NOT NULL,
    "roles" TEXT NOT NULL DEFAULT 'user',
    "created_by" TEXT NOT NULL DEFAULT 'Luis Perez',
    "created_on" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_by" TEXT NOT NULL DEFAULT 'Luis Perez',
    "modified_on" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "issueTemplateId" INTEGER NOT NULL,
    CONSTRAINT "User_issueTemplateId_fkey" FOREIGN KEY ("issueTemplateId") REFERENCES "IssueTemplate" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_InventoryItemToItemCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_InventoryItemToItemCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "InventoryItem" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_InventoryItemToItemCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "ItemCategory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_InventoryItemToIssueTemplate" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_InventoryItemToIssueTemplate_A_fkey" FOREIGN KEY ("A") REFERENCES "InventoryItem" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_InventoryItemToIssueTemplate_B_fkey" FOREIGN KEY ("B") REFERENCES "IssueTemplate" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_InventoryItemToItemCategory_AB_unique" ON "_InventoryItemToItemCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_InventoryItemToItemCategory_B_index" ON "_InventoryItemToItemCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_InventoryItemToIssueTemplate_AB_unique" ON "_InventoryItemToIssueTemplate"("A", "B");

-- CreateIndex
CREATE INDEX "_InventoryItemToIssueTemplate_B_index" ON "_InventoryItemToIssueTemplate"("B");
