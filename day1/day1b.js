const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const lines = data.split("\n");

  const column1 = [];
  const column2 = [];

  lines.forEach((line) => {
    const parts = line.trim().split(/\s+/);
    if (parts.length === 2) {
      column1.push(parseInt(parts[0]));
      column2.push(parseInt(parts[1]));
    }
  });

  const uniqueCol1 = [...new Set(column1)];

  let freq = 0;

  uniqueCol1.forEach((value) => {
    freq += value * column2.filter((item) => item === value).length;
  });

  console.log("Frequency = ", freq);
});
