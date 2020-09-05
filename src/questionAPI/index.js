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
    options: ["mus", "moes"],
    questionId: "235245"
  },
  {
    options: ["reuk", "ruk"],
    questionId: "2462346"
  },
  {
    options: ["veel", "viel"],
    questionId: "970097"
  },
  {
    options: ["aas", "as"],
    questionId: "34960370"
  },
  {
    options: ["ruik", "ruk"],
    questionId: "2039509"
  },
  {
    options: ["pot", "poot"],
    questionId: "2390472309"
  },
  {
    options: ["ziek", "zeik"],
    questionId: "23095"
  },
  {
    options: ["geef", "gif"],
    questionId: "098"
  },

];

export default (n) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));