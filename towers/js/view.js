const HanoiGame = require('./game.js');

class View{
  constructor(game, $el){
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
    $(".tower").on("click", (e) => {
      this.clickTower($(e.currentTarget));
    });
  }

  setupTowers(){
    for (var i = 0; i < 3; i++) {
      const $tower =$("<ul></ul>");
      $tower.addClass("tower");
      $tower.data("id", i);
      for (var j = 0; j < 3; j++) {
        const $disk = $("<li></li>");
        // $disk.data("pos", [i,j]);
        $disk.attr("data-pos", [i,j]);
        $disk.addClass("disk");
        $tower.append($disk);
      }

      this.$el.append($tower);
    }
  }

  render(){
    const size = {1: 'small', 2: 'medium', 3: 'large'};
    const $pylons = $("ul.tower");
    $('li.disk').removeClass('small medium large');
    $pylons.each( (i, pylon) =>{
      const $pylon = $(pylon);
      const $disks = $pylon.children("li.disk");
      $disks.each( (j, disk) =>{
        const $disk = $(disk);
        const diskValue = this.game.towers[i][2-j];

        $disk.addClass(size[diskValue]);
        console.log($disk);
      });
    });
  }

  clickTower($tower){
    if(this.firstTower){
      this.firstTower.removeClass("selected");
      this.game.move(this.firstTower.data('id'), $tower.data('id'));
      this.firstTower = null;
      console.log("move!");
      this.render();
      if(this.game.isWon()){
        alert("You win cool guy!");
        const $body = $("body");
        $body.css("background-color", "cyan");
      }
    } else {
      this.firstTower = $tower;
      this.firstTower.addClass("selected");
    }
  }

}

module.exports = View;
