
var quotesOwner=["Oscar Wilde","Marilyn Monroe" ,"Albert Einstein","Frank Zappa"];
var qoutes=["“Be yourself; everyone else is already taken.”",
"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." , "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" , "“So many books, so little time.”"]




function randomQuotes() {
    var num= Math.floor (Math.random() * quotesOwner.length)
    document.getElementById("demo").innerHTML=(quotesOwner[num]);
    document.getElementById("writer").innerHTML=(qoutes[num]);
    console.log(quotesOwner[num]);
    console.log(qoutes[num]);

 //display();

}


function display(){
//for ( var i=num ; i<num ; i++)
    


}



