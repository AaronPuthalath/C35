class Player{
constructor(){

}

getCount(){
    var dbref=database.ref("PlayerCount"); //dbref contains the location of our DBdbref
    dbref.on("value",function(data){
        playerCount = data.val();
    })
}

updateCount(c){
    var dbref= database.ref('/');
    dbref.update({
       PlayerCount: c
    })

}

update(n){
    var loc = "Players/Player" + playerCount;
    database.ref(loc).set({
        name: n
    })
}


}