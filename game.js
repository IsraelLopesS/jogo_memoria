let game = {
  mode: false,
  first: null,
  second: null,

  setCard: function (id) {
    let card = this.card0.filter((card) => card.id === id)[0];

    if (card.flipped || this.mode) {
      return false;
    }
    if (!this.first) {
      this.first = card;
      this.first.flipped = true;
      return true;
    } else {
      this.second = card;
      this.second.flipped = true;
      this.mode = true;
      return true;
    }
  },

  check: function () {
    if (!this.first || !this.second) {
      return false;
    }
    return this.first.icon === this.second.icon;
  },
  clear: function () {
    this.first = null;
    this.second = null;
    this.mode = false;
  },

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
  unflip() {
    this.first.flipped = false;
    this.second.flipped = false;
    this.clear();
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
  over() {
    return this.card0.filter((card) => !card.flipped).length == 0;
  },
};
