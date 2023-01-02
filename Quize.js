
let object=[

  {
    que:'Which one is most Popular language ',
    a:'C Programing',
    b:'Java',
    c:'Python',
    d:'C#',
    correctanswer:'Java'
    },
    
{
que:'Which of the following is a markup language',
a:'HTML',
b:'CSS',
c:'JavaScript',
d:'Mongo-DB',
correctanswer:'HTML'
},

{
que:'When JavaScript was Launch',
a:'1992',
b:'1994',
c:'1995',
d:'1999',
correctanswer:'1999'

},

{
que:'What does Css Stand For',
a:'HyperText markup Language',
b:'Cascading Style Sheets',
c:'Object Oriented',
d:'Query Langauge ',
correctanswer:'Cascading Style Sheets'
}
,
{
  que:'In Salsoft During  Internship Stipend?',
  a:'15,000',
  b:'18,000',
  c:'20,000',
  d:'30,000',
  correctanswer:'15,000'
  }



]



let  CorrectAns=0;

let correctans="";


let Temp=false;


let option_inputs=document.querySelectorAll(".row");
let index=0;
let question=document.querySelector("#Question");


function Loadquestion(obj){

 if(object.length>index){

  let data=object[index];
 question.innerHTML=`${index+1+")" } ${data.que}`;
 option_inputs[0].checked=false;
 option_inputs[1].checked=false;
 option_inputs[2].checked=false;
 option_inputs[3].checked=false;

  option_inputs[0].nextElementSibling.innerHTML=data.a;
  option_inputs[1].nextElementSibling.innerHTML=data.b;
  option_inputs[2].nextElementSibling.innerHTML=data.c;
  option_inputs[3].nextElementSibling.innerHTML=data.d;
  

 
 }else{
  
 let k= document.getElementById("main");
 k.style.display="none";
  document.querySelector("#Thank").innerHTML=`${"Thank For the Playing"+ "</br>"
  + "<p>Correct Answer's: </p>"+CorrectAns +" out of "+index  }`;
   
 }
   
}





function Submit (){

if(index>=0){
  // console.log(index);
  const gg= document.querySelector("#correctanswer");
 
  
//  gg.innerHTML=`${"Correct Answer is : "+object[index].correctanswer}`;
  NowInput();

  if(object[index].correctanswer===correctans){
    gg.innerHTML="Correct";
    CorrectAns+=1;
    
  }else{
    gg.innerHTML=`${"Wrong </br> Correct Answer is: "+object[index].correctanswer}`;
  }
  index+=1;
 

 setTimeout(()=>{
  Loadquestion(index);
  document.querySelector("#correctanswer").innerHTML="";
 },2000);
  
  
  }

  
}



function NowInput(){

  for(i=0;i<=option_inputs.length-1;i++){
    if(option_inputs[i].checked===true){
    correctans=option_inputs[i].nextElementSibling.innerHTML;
     console.log(option_inputs[i].nextElementSibling.innerHTML);
     
    }
 
  }


}
Loadquestion(object);





