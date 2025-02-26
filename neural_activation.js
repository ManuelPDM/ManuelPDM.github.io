let nodes = [];
const numNodes = 100;
const activationDistance = 100;

function setup() {
  // Create a full-window canvas behind your content
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  // Generate nodes with random positions
  for (let i = 0; i < numNodes; i++) {
    nodes.push({
      x: random(width),
      y: random(height),
      activation: 0
    });
  }
  noStroke();
}

function draw() {
  // Check if dark mode is enabled
  let isDark = document.body.classList.contains("dark-mode");

  // Set the background: black in dark mode, light grey otherwise
  if (isDark) {
    background(0, 0, 0, 50);  // Black background with slight transparency for trails
  } else {
    background(244, 244, 244, 50);  // Light grey background
  }

  // Update and draw nodes
  for (let node of nodes) {
    let d = dist(mouseX, mouseY, node.x, node.y);
    node.activation = map(d, 0, activationDistance, 255, 0, true);
    fill(128, 128, 128, node.activation); // Grey nodes remain unchanged
    ellipse(node.x, node.y, 8 + node.activation / 50);
  }

  // Draw connections between nodes
  stroke(128, 128, 128, 150);
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      let d = dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      if (d < activationDistance) {
        let alpha = map(d, 0, activationDistance, 255, 0);
        stroke(128, 128, 128, alpha);
        line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      }
    }
  }
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
