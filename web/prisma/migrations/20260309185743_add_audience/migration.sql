-- CreateTable
CREATE TABLE "Audience" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    CONSTRAINT "Audience_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_LeadAudiences" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_LeadAudiences_A_fkey" FOREIGN KEY ("A") REFERENCES "Audience" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LeadAudiences_B_fkey" FOREIGN KEY ("B") REFERENCES "Lead" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Audience_name_tenantId_key" ON "Audience"("name", "tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "_LeadAudiences_AB_unique" ON "_LeadAudiences"("A", "B");

-- CreateIndex
CREATE INDEX "_LeadAudiences_B_index" ON "_LeadAudiences"("B");
