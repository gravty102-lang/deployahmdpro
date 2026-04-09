const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src').filter(f => f.endsWith('.tsx'));

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let changed = false;

    // Previous node script changed various bg classes to bg-[#FFE5B4].
    // Let's replace 'bg-[#FFE5B4]' with 'bg-[#F3E5AB]' across all screens.
    
    const replacements = [
        ['bg-[#FFE5B4]', 'bg-[#F3E5AB]'],
    ];

    replacements.forEach(([from, to]) => {
        while (content.includes(from)) {
            content = content.replace(from, to);
            changed = true;
        }
    });

    if (changed) {
        fs.writeFileSync(f, content, 'utf8');
        console.log(`Updated ${f}`);
    }
});
