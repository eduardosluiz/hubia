/*
  Warnings:

  - You are about to drop the column `isActive` on the `Workflow` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Workflow" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "nodes" TEXT NOT NULL,
    "connections" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "tenantId" TEXT NOT NULL,
    CONSTRAINT "Workflow_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Workflow" ("connections", "createdAt", "description", "id", "name", "nodes", "tenantId", "updatedAt") SELECT "connections", "createdAt", "description", "id", "name", "nodes", "tenantId", "updatedAt" FROM "Workflow";
DROP TABLE "Workflow";
ALTER TABLE "new_Workflow" RENAME TO "Workflow";
CREATE TABLE "new_WorkflowExecution" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL DEFAULT 'QUEUED',
    "currentNode" TEXT,
    "nextStepAt" DATETIME,
    "workflowId" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "WorkflowExecution_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "Workflow" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "WorkflowExecution_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_WorkflowExecution" ("createdAt", "currentNode", "id", "leadId", "status", "updatedAt", "workflowId") SELECT "createdAt", "currentNode", "id", "leadId", "status", "updatedAt", "workflowId" FROM "WorkflowExecution";
DROP TABLE "WorkflowExecution";
ALTER TABLE "new_WorkflowExecution" RENAME TO "WorkflowExecution";
CREATE UNIQUE INDEX "WorkflowExecution_workflowId_leadId_key" ON "WorkflowExecution"("workflowId", "leadId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
