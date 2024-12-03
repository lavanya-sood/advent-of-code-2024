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

  let matchRegex = /mul\((\d+),(\d+)\)/g;
  let innerRegex = /mul\((\d+),(\d+)\)/;

  let res = 0;
  dataValues.forEach((values) => {
    const coded = values.toString();
    const muls = coded.match(matchRegex);

    muls.forEach((nums) => {
      const innerMatch = nums.match(innerRegex);
      console.log(innerMatch);
      res += innerMatch[1] * innerMatch[2];
    });
  });

  console.log("RESULT", res);
});
