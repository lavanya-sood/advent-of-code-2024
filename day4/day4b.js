const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  const lines = data.split("\n");

  const grid = [];

  lines.forEach((line) => {
    const parts = line.trim().split("");
    grid.push(parts);
  });

  let xmasFound = 0;
  const pattern1 = [
    ["M", ".", "S"],
    [".", "A", "."],
    ["M", ".", "S"],
  ];
  const pattern2 = [
    ["S", ".", "M"],
    [".", "A", "."],
    ["S", ".", "M"],
  ];
  const pattern3 = [
    ["S", ".", "S"],
    [".", "A", "."],
    ["M", ".", "M"],
  ];
  const pattern4 = [
    ["M", ".", "M"],
    [".", "A", "."],
    ["S", ".", "S"],
  ];

  const rows = grid.length;
  const cols = grid[0].length;

  const pattern1Rows = pattern1.length;
  const pattern2Rows = pattern2.length;
  const pattern3Rows = pattern3.length;
  const pattern4Rows = pattern4.length;

  function matchesPattern(pattern, patternRows, x, y) {
    for (let i = 0; i < patternRows; i++) {
      const patternRow = pattern[i];
      const patternCols = patternRow.length;

      for (let j = 0; j < patternCols; j++) {
        const newX = x + i;
        const newY = y + j;

        if (newX >= rows || newY >= cols) return false;

        const gridChar = grid[newX][newY];
        const patternChar = patternRow[j];

        if (patternChar !== "." && gridChar !== patternChar) {
          return false;
        }
      }
    }
    return true;
  }

  for (let x = 0; x <= rows - pattern1Rows; x++) {
    for (let y = 0; y <= cols; y++) {
      if (matchesPattern(pattern1, pattern1Rows, x, y)) {
        xmasFound++;
      }
    }
  }

  for (let x = 0; x <= rows - pattern2Rows; x++) {
    for (let y = 0; y <= cols; y++) {
      if (matchesPattern(pattern2, pattern2Rows, x, y)) {
        xmasFound++;
      }
    }
  }

  for (let x = 0; x <= rows - pattern3Rows; x++) {
    for (let y = 0; y <= cols; y++) {
      if (matchesPattern(pattern3, pattern3Rows, x, y)) {
        xmasFound++;
      }
    }
  }

  for (let x = 0; x <= rows - pattern4Rows; x++) {
    for (let y = 0; y <= cols; y++) {
      if (matchesPattern(pattern4, pattern4Rows, x, y)) {
        xmasFound++;
      }
    }
  }

  //2003
  console.log(xmasFound);
});
