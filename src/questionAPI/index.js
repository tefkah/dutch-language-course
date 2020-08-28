const qBank = [
  {
    options: ["hak", "haak"],
    questionId: "309456"
  },
  {
    options: ["bot", "boot"],
    questionId: "500"
  },
  {
    options: ["mis", "mies"],
    questionId: "29"
  },
  {
    options: ["ui", "au"],
    questionId: "15"
  },
  {
    options: ["het", "heet"],
    questionId: "5"
  }
];

export default (n = 1) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));