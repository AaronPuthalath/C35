class Game{
constructor(){

}

getState(){
  
    var dbref = database.ref("GameState");
    dbref.on("value", function(d){
        gameState=d.val();
    });   
}

start(){
    if(gameState===0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
    }
}




}