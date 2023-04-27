let game = {
  cards: [
    "bootstrap",
    "css",
    "electron",
    "firebase",
    "html",
    "javascript",
    "jquery",
    "mongo",
    "node",
    "react",
  ],

  card0: null,

  createcard: function () {
    this.card0 = [];
    this.cards.forEach((i) => {
      this.card0.push(this.createpair(i));
    });
    this.card0 = this.card0.flatMap((pair) => pair);
    this.shuffle();
    return this.card0;
  },

  createpair: function (card) {
    return [
      {
        id: this.creatid(card),
        icon: card,
        flipped: false,
      },
      {
        id: this.creatid(card),
        icon: card,
        flipped: false,
      },
    ];
  },
  creatid: function (card) {
    return card + parseInt(Math.random() * 1000);
  },

  shuffle: function (card0) {
    let index = this.card0.length;
    let radomIndex = 0;
    while (index !== 0) {
      radomIndex = Math.floor(Math.random() * index);
      index--;
      [this.card0[radomIndex], this.card0[index]] = [
        this.card0[index],
        this.card0[radomIndex],
      ];
    }
  },
};
