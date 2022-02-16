function initialize(){
    //ARRAYS:
    const beers = ['Guinness', 'Heineken', 'Samuel Adams', 'Budweiser','Blue Moon','Coors Light','Corona Extra', 'Modelo', 'Miller High Life','Corona Light', 'Bud Light',
'Miller Genuine Draft','Pabst Blue Ribbon','Dos Equis','Michelob Ultra','Busch Light','Busch'];
    const beerPictures = ["guinness.jpg", "heineken.png", "samueladams.png", "budweiser.jpg", "bluemoon.jpeg", "coorslight.jpg", "coronaextra.jpeg", "modelo.jpeg", "millerhighlife.jpeg", "coronalight.png", "budlight.jpeg", "millergenuinedraft.jpeg", 
"pabstblueribbon.png", "dosequis.png", "michelobultra.jpeg", "buschlight.jpeg", "busch.jpg"];
    //END ARRAYS

    var theimage = document.getElementById("pic");
    var randomNumber = getRandomInt(beers.length);
    var setRandom = beers[randomNumber];
    var setRandomImage = beerPictures[randomNumber];
    //DEBUG
    console.log(setRandom);
    console.log(setRandomImage);
    document.getElementById("theanswer").innerHTML = setRandom;
    //END DEBUG
    theimage.src = "./beerpics/" + setRandomImage;
}
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

var guesscount = 0;

function guess(){
    var txtBox = document.getElementById("txtGuess");
    var answer = document.getElementById("theanswer");
    var theimage = document.getElementById("pic");
    console.log("button clicked");
    console.log(txtBox.value);
    var answerTable = document.getElementsByClassName("guessclass");
    if(txtBox.value.toUpperCase() == answer.innerHTML.toUpperCase()){
        console.log("Game won");
        answer.style.display = "block";
        theimage.style.filter = "none";
        alert("YOU WON!!");
        txtBox.readOnly = true;
        document.getElementById("btnGuess").disabled = true;
    } else if(guesscount > 4){
        alert("HAHA YOU LOST!");
        answer.style.display = "block";
        theimage.style.filter = "none";
        txtBox.readOnly = true;
        document.getElementById("btnGuess").disabled = true;
    }
    else {
        guesscount++;
        answerTable[guesscount - 1].innerHTML = txtBox.value;
    }
}