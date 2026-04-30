-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AttendanceQueue" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "mainInstanceId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "lastAgentIndex" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "AttendanceQueue_mainInstanceId_fkey" FOREIGN KEY ("mainInstanceId") REFERENCES "WhatsAppInstance" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AttendanceQueue_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_AttendanceQueue" ("id", "mainInstanceId", "name", "tenantId") SELECT "id", "mainInstanceId", "name", "tenantId" FROM "AttendanceQueue";
DROP TABLE "AttendanceQueue";
ALTER TABLE "new_AttendanceQueue" RENAME TO "AttendanceQueue";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
