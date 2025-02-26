let nodes = [];
const numNodes = 100;
const activationDistance = 100;

function setup() {
  // Create a full-window canvas and attach it to the document
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1'); // Place the canvas behind your main content

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
  // Set the background to a light grey with a slight transparency for subtle trails
  background(244, 244, 244, 50);

  // Update and draw each node
  for (let node of nodes) {
    // Calculate the distance from the mouse pointer to the node
    let d = dist(mouseX, mouseY, node.x, node.y);
    // Map distance to an activation level (closer means more "active")
    node.activation = map(d, 0, activationDistance, 255, 0, true);
    // Draw the node in grey, with brightness based on activation
    fill(128, 128, 128, node.activation);
    ellipse(node.x, node.y, 8 + node.activation / 50);
  }

  // Draw connections between nodes if they're close enough
  stroke(128, 128, 128, 150);
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      let d = dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      if (d < activationDistance) {
        // The closer the nodes, the more opaque the connection line
        let alpha = map(d, 0, activationDistance, 255, 0);
        stroke(128, 128, 128, alpha);
        line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      }
    }
  }
  noStroke();
}

// Adjust canvas size when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
