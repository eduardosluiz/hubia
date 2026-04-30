-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WhatsAppInstance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "instanceName" TEXT NOT NULL,
    "owner" TEXT,
    "type" TEXT NOT NULL DEFAULT 'AGENT',
    "status" TEXT NOT NULL DEFAULT 'DISCONNECTED',
    "aiEnabled" BOOLEAN NOT NULL DEFAULT false,
    "aiPrompt" TEXT,
    "aiModel" TEXT NOT NULL DEFAULT 'gpt-4o',
    "knowledgeBase" TEXT,
    "tenantId" TEXT NOT NULL,
    CONSTRAINT "WhatsAppInstance_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_WhatsAppInstance" ("id", "instanceName", "owner", "status", "tenantId", "type") SELECT "id", "instanceName", "owner", "status", "tenantId", "type" FROM "WhatsAppInstance";
DROP TABLE "WhatsAppInstance";
ALTER TABLE "new_WhatsAppInstance" RENAME TO "WhatsAppInstance";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
