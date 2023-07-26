const express = require("express");

const app = express();

const calculateSum = (num) => {
  let sum = 0;
  for (i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

app.get("/", (req, res) => {
  const counter = req.query.counter;
  const answer = calculateSum(counter);
  res.send(`The sum of first  ${counter} numbers is ${answer}`);
});

app.listen(3000, () => console.log("Started server"));
