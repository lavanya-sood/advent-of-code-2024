const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  const lines = data.split("\n");

  const grid = [];

  lines.forEach((line) => {
    const parts = line.trim().split("");
    grid.push(parts);
  });

  console.log(grid);
  let xmasFound = 0;
  const word = "XMAS";

  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  const isWordAt = (x, y, dx, dy) => {
    for (let i = 0; i < word.length; i++) {
      const newX = x + i * dx;
      const newY = y + i * dy;

      if (
        newX < 0 ||
        newY < 0 ||
        newX >= rows ||
        newY >= cols ||
        grid[newX][newY] !== word[i]
      ) {
        return false;
      }
    }
    return true;
  };

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (grid[x][y] === word[0]) {
        for (const [dx, dy] of directions) {
          if (isWordAt(x, y, dx, dy)) {
            xmasFound++;
          }
        }
      }
    }
  }

  console.log(xmasFound);
});
