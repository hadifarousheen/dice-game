var randomnumber1 = Math.random();
randomnumber1 = randomnumber1 * 6;
var res = Math.floor(randomnumber1) + 1;



var randomnumber2=Math.random();
randomnumber2=randomnumber2*6;
var res2=Math.floor(randomnumber2)+1;




if (res === 1  ) {
  document.querySelector("img").setAttribute("src", "dice1.png");
} else if (res === 2) {
  document.querySelector("img").setAttribute("src", "dice2.png");
} else if (res === 3 ) {
  document.querySelector("img").setAttribute("src", "dice3.png");
} else if (res === 4 ) {
  document.querySelector("img").setAttribute("src", "dice4.png");
}  else if (res === 5 ) {
  document.querySelector("img").setAttribute("src", "dice5.png");
} else if (res === 6 ) {
  document.querySelector("img").setAttribute("src", "dice6.png");
}

if (res2 === 1  ) {
    document.querySelector(".img2").setAttribute("src", "dice1.png");
  } else if (res2 === 2) {
    document.querySelector(".img2").setAttribute("src", "dice2.png");
  } else if (res2 === 3 ) {
    document.querySelector(".img2").setAttribute("src", "dice3.png");
  } else if (res2 === 4 ) {
    document.querySelector(".img2").setAttribute("src", "dice4.png");
  }  else if (res2 === 5 ) {
    document.querySelector(".img2").setAttribute("src", "dice5.png");
  } else if (res2 === 6 ) {
    document.querySelector(".img2").setAttribute("src", "dice6.png");
  }

  if(res>res2)
    {
        document.querySelector("h1").innerHTML="Player1 wins";

       
    }
    else if(res<res2)
        {
            document.querySelector("h1").innerHTML="Player2 wins";
        }
        else {
            document.querySelector("h1").innerHTML="Draw!";
        }


