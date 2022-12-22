
const End_date="23 Dec 2022 1:52 PM";
document.getElementById("timer-heading").innerHTML=End_date;


function clock(){

const end=new Date(End_date);
const now=new Date();
const minus_e_n=(end-now)/1000;

//  ye Gape btay ag dino me kitna farq hai   ye mili Seconds me hai Differen yani ous waqt itnay bjay se ab  itnay bjay tak ka 

// Now 1000 se divide kr do ta k Seconds me baat chali  Jaye

// Ap 1 day 24 
// Ap 1 hourse 60 minute
// Ap 1 minute me 60 Seconds


//Math.floor(minus_e_n/3600/24); kitnay din ka difference hai
//Math.floor(minus_e_n/3600)%24; ye din or aglay din me itnay ghantay ka  Farq hai
//Math.floor(minus_e_n/60)%60  ye btaye ga itnay minut baki hai
//din, hourse, minut
document.getElementById("days").value=Math.floor(minus_e_n/3600/24);
document.getElementById("hourse").value=Math.floor(minus_e_n/3600)%24;
document.getElementById("minuts").value=Math.floor(minus_e_n/60)%60;
document.getElementById("seconds").value=Math.floor(minus_e_n)%60;
// document.getElementById("seconds");

}

clock();

setInterval(()=>{   ///Har aik Second Baat call hoga 
clock();
},1000)


//kj