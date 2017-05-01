class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $(".cell").on("click", (e) => {
      const $square = $(e.currentTarget);
      console.log($square.data("id"));
      this.makeMove($square);
    });
  }

  makeMove($square) {
    try{
      const positions = { 0: [0,0],
                          1: [0,1],
                          2: [0,2],
                          3: [1,0],
                          4: [1,1],
                          5: [1,2],
                          6: [2,0],
                          7: [2,1],
                          8: [2,2]};
      const mark = this.game.currentPlayer;
      this.game.playMove(positions[$square.data('id')]);
      $square.text(mark);
      $square.addClass("selected");
      if(this.game.isOver()){
        alert(`${this.game.winner()} wins!`);
      }
    }
    catch(err){
      alert(err.msg);
    }
  }

  setupBoard() {
    const $ul = $('<ul></ul>');
    $ul.addClass("board");
    for (let i = 0; i < 9; i++){
      const $li = $('<li></li>');
      $li.data("id", i);
      $li.addClass("cell");
      // $li.data("cell_number")
      $ul.append($li);
    }
    this.$el.append($ul);
  }
}

module.exports = View;
