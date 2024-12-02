const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const lines = data.split("\n");

  const dataValues = [];

  lines.forEach((line) => {
    const parts = line.trim().split(/\s+/);
    dataValues.push(parts);
  });

  let safeReports = 0;

  dataValues.forEach((numList) => {
    let valid = true;
    let increasing = true;
    for (let i = 0; i < numList.length - 1; i++) {
      const a = parseInt(numList[i]);
      const b = parseInt(numList[i + 1]);
      if (i === 0 && a > b) {
        increasing = false;
      }
      if (Math.abs(a - b) > 3 || Math.abs(a - b) < 1) {
        valid = false;
        return;
      }

      if (increasing && a > b) {
        valid = false;
        return;
      }

      if (!increasing && a < b) {
        valid = false;
        return;
      }
    }

    valid && safeReports++;
  });

  console.log(safeReports);
});
