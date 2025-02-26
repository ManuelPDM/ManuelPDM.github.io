let nodes = [];
const numNodes = 100;
const activationDistance = 100;

function setup() {
  // Create a full-window canvas and attach it to the document
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1'); // Make sure it sits behind your content

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
  // Use a dark translucent background to create a trailing effect
  background(20, 20, 20, 50);

  // Update and draw each node
  for (let node of nodes) {
    // Calculate distance from the mouse pointer
    let d = dist(mouseX, mouseY, node.x, node.y);
    // Map distance to an activation level (closer means brighter)
    node.activation = map(d, 0, activationDistance, 255, 0, true);
    fill(0, 120, 255, node.activation);
    // Draw node with size based on its activation
    ellipse(node.x, node.y, 8 + node.activation / 50);
  }

  // Draw connections between nodes that are close enough
  stroke(0, 120, 255, 150);
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      let d = dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      if (d < activationDistance) {
        // Closer nodes yield a more opaque connection
        let alpha = map(d, 0, activationDistance, 255, 0);
        stroke(0, 120, 255, alpha);
        line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      }
    }
  }
  noStroke();
}

// Resize the canvas if the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
