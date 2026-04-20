const canvas = document.getElementById('electric-bg');
const ctx = canvas.getContext('2d');
const nodes = [];
const pulses = [];
const NODE_COUNT = 40;

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initNodes();
}

function initNodes() {
    nodes.length = 0;
    for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2.5 + 1.5,
            connections: []
        });
    }
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200 && nodes[i].connections.length < 3 && nodes[j].connections.length < 3) {
                nodes[i].connections.push(j);
                nodes[j].connections.push(i);
            }
        }
    }
}

function spawnPulse() {
    const from = Math.floor(Math.random() * nodes.length);
    const conns = nodes[from].connections;
    if (!conns.length) return;
    const to = conns[Math.floor(Math.random() * conns.length)];
    pulses.push({ from, to, t: 0, speed: 0.006 + Math.random() * 0.01 });
}

let frame = 0;
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fils
    for (let i = 0; i < nodes.length; i++) {
        for (const j of nodes[i].connections) {
            if (j > i) {
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.strokeStyle = 'rgba(0, 255, 179, 0.18)';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }

    // Pulses électriques
    for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += p.speed;
        if (p.t >= 1) { pulses.splice(i, 1); continue; }
        const a = nodes[p.from], b = nodes[p.to];
        const px = a.x + (b.x - a.x) * p.t;
        const py = a.y + (b.y - a.y) * p.t;

        const grad = ctx.createRadialGradient(px, py, 0, px, py, 20);
        grad.addColorStop(0, 'rgba(0, 255, 179, 0.9)');   // halo
        grad.addColorStop(0.4, 'rgba(0, 200, 150, 0.3)');
        grad.addColorStop(1, 'rgba(0, 100, 80, 0)');
        ctx.beginPath();
        ctx.arc(px, py, 20, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#00ffb3';
        ctx.fill();
    }

    // Noeuds
    for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 200, 150, 0.6)';
        ctx.fill();
    }

    frame++;
    if (frame % 20 === 0) spawnPulse();
    requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);
resize();
draw();