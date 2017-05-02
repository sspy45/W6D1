const HanoiGame = require('./game.js');
const HanoiView = require('./view.js');

$( () => {
  // console.log(":LKJDFSF");
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
