const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'web/src/app/api');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(targetDir);

let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;

    // Regex to match (../../)+lib/auth or (../../)+lib/prisma
    // Matches patterns like "../../../lib/auth" and replaces with "@/lib/auth"
    content = content.replace(/['"](\.\.\/)+lib\/auth['"]/g, "'@/lib/auth'");
    content = content.replace(/['"](\.\.\/)+lib\/prisma['"]/g, "'@/lib/prisma'");

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated: ${file}`);
        count++;
    }
});

console.log(`Total files updated: ${count}`);
