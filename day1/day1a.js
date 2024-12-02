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
      column1.push(parts[0]);
      column2.push(parts[1]);
    }
  });

  column1.sort();
  column2.sort();

  let sum = 0;
  let i = 0;
  while (i < column1.length) {
    sum += Math.abs(parseInt(column1[i]) - parseInt(column2[i]));
    i += 1;
  }

  console.log("SUM = ", sum);
});
