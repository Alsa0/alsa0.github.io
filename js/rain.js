const canvas = document.getElementById('rain-bg');
const ctx = canvas.getContext('2d');

const CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ<>{}[]#$%&';
const FONT_SIZE = 14;
let columns = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initColumns();
}

function initColumns() {
    const count = Math.floor(canvas.width / FONT_SIZE);
    columns = [];
    for (let i = 0; i < count; i++) {
        columns.push({
            x: i * FONT_SIZE,
            y: Math.random() * -canvas.height, // départ aléatoire hors écran
            speed: Math.random() * 2 + 1,
            length: Math.floor(Math.random() * 20 + 10),
            chars: []
        });
        // Pré-remplir les caractères de la colonne
        for (let j = 0; j < 30; j++) {
            columns[i].chars.push(CHARS[Math.floor(Math.random() * CHARS.length)]);
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const col of columns) {
        for (let i = 0; i < col.length; i++) {
            const charY = col.y - i * FONT_SIZE;
            if (charY < 0 || charY > canvas.height) continue;

            // Caractère de tête : blanc/cyan brillant
            if (i === 0) {
                ctx.fillStyle = 'rgba(200, 180, 255, 1)';
            }
            // Queue qui s'estompe progressivement
            else {
                const alpha = 1 - i / col.length;
                ctx.fillStyle = `rgba(124, 58, 237, ${alpha * 0.9})`;
            }

            ctx.font = `${FONT_SIZE}px monospace`;
            // Changer le caractère aléatoirement
            if (Math.random() < 0.02) {
                col.chars[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
            }
            ctx.fillText(col.chars[i] || '0', col.x, charY);
        }

        // Descente
        col.y += col.speed;

        // Reset quand la colonne sort de l'écran
        if (col.y - col.length * FONT_SIZE > canvas.height) {
            col.y = Math.random() * -200;
            col.speed = Math.random() * 2 + 1;
            col.length = Math.floor(Math.random() * 20 + 10);
        }
    }

    requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);
resize();
draw();