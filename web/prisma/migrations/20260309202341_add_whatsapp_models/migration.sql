-- CreateTable
CREATE TABLE "WhatsAppInstance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "instanceName" TEXT NOT NULL,
    "owner" TEXT,
    "type" TEXT NOT NULL DEFAULT 'AGENT',
    "status" TEXT NOT NULL DEFAULT 'DISCONNECTED',
    "tenantId" TEXT NOT NULL,
    CONSTRAINT "WhatsAppInstance_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AttendanceQueue" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "mainInstanceId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    CONSTRAINT "AttendanceQueue_mainInstanceId_fkey" FOREIGN KEY ("mainInstanceId") REFERENCES "WhatsAppInstance" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AttendanceQueue_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "QueueAgent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "order" INTEGER NOT NULL,
    "queueId" TEXT NOT NULL,
    "instanceId" TEXT NOT NULL,
    CONSTRAINT "QueueAgent_queueId_fkey" FOREIGN KEY ("queueId") REFERENCES "AttendanceQueue" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "QueueAgent_instanceId_fkey" FOREIGN KEY ("instanceId") REFERENCES "WhatsAppInstance" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
