const fs = require('fs');
const path = require('path');

function removeCssComments(code) {
    return code.replace(/\/\*[\s\S]*?\*\//g, '');
}

function removeJsComments(code) {
    // Avoid replacing inside strings like "http://"
    // A simplified but safer approach for JS:
    return code.replace(/\/\*[\s\S]*?\*\//g, '')
               .replace(/(^|\s)\/\/.*$/gm, '');
}

function removeHtmlComments(code) {
    return code.replace(/<!--([\s\S]*?)-->/g, (match) => {
        if (match.includes('==========')) {
            return match;
        }
        return '';
    });
}

function processFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    const ext = path.extname(filePath);
    
    if (ext === '.css') {
        content = removeCssComments(content);
    } else if (ext === '.js') {
        content = removeJsComments(content);
    } else if (ext === '.html') {
        content = removeHtmlComments(content);
    }
    
    // Remove blank lines with whitespace
    content = content.replace(/^[ \t]+$/gm, '');
    // Collapse multiple blank lines into max 2
    content = content.replace(/\n{3,}/g, '\n\n');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Processed ' + filePath);
}

const files = [
    'css/style.css',
    'index.html',
    'js/main.js',
    'js/projects.js',
    'js/rain.js',
    'js/electric.js'
];

files.forEach(f => {
    processFile(path.join(__dirname, f));
});
