const fs = require("fs");

const checkValid = (list) => {
  if (list.length < 2) return false;
  let valid = true;
  let increasing = true;
  for (let i = 0; i < list.length - 1; i++) {
    const a = parseInt(list[i]);
    const b = parseInt(list[i + 1]);
    if (i === 0 && a > b) {
      increasing = false;
    }

    if (Math.abs(a - b) > 3 || Math.abs(a - b) < 1) {
      valid = false;
    }

    if (increasing && a > b) {
      valid = false;
    }

    if (!increasing && a < b) {
      valid = false;
    }
  }
  return valid;
};

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
    let valid = checkValid(numList);

    if (!valid) {
      for (let j = 0; j < numList.length; j++) {
        let reCheck = [...numList];
        reCheck.splice(j, 1);

        if (checkValid(reCheck)) {
          //   console.log("VALID", numList, reCheck);
          valid = true;
        }
      }
    }

    valid && safeReports++;
  });

  console.log(safeReports);
});
