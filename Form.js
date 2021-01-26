class Form{
constructor(){


}

display(){

    var title = createElement("h1");
    title.html("CarRacingGame");
    title.position(100,30);
    var input = createInput("Enter your Name");
    input.position(100,50);

    var button = createButton("Play");
    button.position(100,100);


    button.mousePressed(function(){
        input.hide();
        button.hide();
        
        var name = input.value();

        //update the name of the player in the DB
        player.update(name);
        // get the playercount from db --- increase it by 1---- then we have to save the playerCount in the db
        playerCount +=1;
        player.updateCount(playerCount);
    
        var greeting =createElement("h1");
        greeting.html("Hello "+ name + "Please wait for others to join in");
        greeting.position(200,200);
    
    })

}




}