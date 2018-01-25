//Variables

var playSH= window.getComputedStyle(document.getElementById("playSpace"), null).getPropertyValue("height");

var shString = parseInt(playSH.slice(0,-2));
  

var playSW= window.getComputedStyle(document.getElementById("playSpace"), null).getPropertyValue("width");

var swString = parseInt(playSW.slice(0,-2)); 

let score = 0;

document.getElementById("score").innerHTML = "Score: " + score;

var sessionName = "Nee";

var btn = document.getElementById("btn");



var endGame = document.getElementById("endGame");


var inpBtn = document.getElementById("inpBtn");
var inp = document.getElementById("inp1");
var userMenu = document.getElementById("userInp");
var lockDiv = document.getElementById("lockDiv");

var gameOver = document.getElementById("game-over");


//functions
console.log(shString);


function addToDb(){
	var xmlhttp = new XMLHttpRequest(),
		request = "http://localhost/lab2/insert.php?uName=" + sessionName + "&uScore=" + score;
	xmlhttp.onreadystatechange = () => {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			getLeaderboard();
		}
	}; 
	xmlhttp.open("GET", request, true);
	xmlhttp.send(); 
}

function getLeaderboard(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = () => {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
			document.getElementById("high-scores").innerHTML = xmlhttp.responseText;
		}
	};
	xmlhttp.open("GET", "http://localhost/lab2/select.php", true);
	xmlhttp.send();
}

function changeDiv(){
    
    //WHY DOES IT GO OUTSIDE THE WINDOWW!!!
//    var btnH =  (Math.random()* shString);
//    
//    var btnW = (Math.random()* swString);
//    
//    if(shString <= btnH + 20){
//        console.log(btnH);
//        btnH -= 20;
//        console.log("aSSSS")
//        console.log(btnH);
//    }
//    
//    if(btnW >= swString - 200){
//        btnW -= 200;    
//    }
//    
//   btn.style.top = btnH + "px";
//   btn.style.left = btnW + "px";
    
btn.style.top = (Math.random()* shString) + "px";
   btn.style.left = (Math.random()* swString) + "px";  
    
    

};

setInterval(function(){
    changeDiv();
},1000);


//events

inpBtn.addEventListener("click", function(){
    if (inp.value == "" || inp.value === "Enter Your Name") {
		alert("Please Enter Your Name");
	} else {
		sessionName = inp.value;
		localStorage.setItem("userName", inp.value);

		userMenu.style.display = "none";
        lockDiv.style.display = "none";
	}
    document.getElementById("score").innerHTML = inp.value + " Score: " + score;
});

btn.addEventListener("click", function(){
    document.getElementById("score").innerHTML = "Score: " + (score + 1);
    score ++;
    
    btn.style.backgroundImage = "url('img/icon1.png')";
    setTimeout(function(){
        btn.style.backgroundImage = "url('img/icon2.png')";
    },500);
    
    var aud = document.createElement("audio");
    aud.setAttribute("id", "aud");
    aud.src= "click.mp3";
    aud.play();
    
    console.log("SW: " +playSW + ", SH: " + playSH + ", score: " + score + ", WIH:" + window.innerHeight + ", STRSH: " + shString);
    

                
    
    console.log(typeof shString);
});


endGame.addEventListener("click", function(){
    
     addToDb();
    
    score = 0;
    
    document.getElementById("score").innerHTML = "Score: " + score;
    
   
    gameOver.style.display = "block";
});

changeDiv();