var dice=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
m=Math.floor(Math.random()*6)+1;
n=Math.floor(Math.random()*6)+1;
 if(m>n){
document.querySelector("h1").innerHTML="hurray! player 1 wins ";

 }
else if(m===n)
{
  document.querySelector("h1").innerHTML="try again! it's a tie";

}
else
{
  document.querySelector("h1").innerHTML="hurray! player 2 wins ";
}

var a=dice[m-1];//Cimages\dice3.png
document.querySelector(".img1").setAttribute("src",a);

var b=dice[n-1];
document.querySelector(".img2").setAttribute("src",b);
