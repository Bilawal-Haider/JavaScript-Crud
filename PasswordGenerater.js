







let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase="abcdefghijklmnopqrstuvwxyz";
let number="1234567890";
let symbol="!@#$%^&*()_+";



const getrandomnumber=(obj)=>{

var randomItem =obj[Math.floor(Math.random()*obj.length)];
return randomItem;


}
let password="";



function Submit(){

   
    
     Temp()
      
}



function Temp(password=""){
    let lengthpassword=document.getElementById("total-char");

    let UpperCase=document.getElementById("upper-case");
    let LowerCase=document.getElementById("lower-case");
    let Number=document.getElementById("number");
    let Symbol=document.getElementById("symbol");
      
    if(UpperCase.checked){
        password+=getrandomnumber(uppercase);
        
    }
    if(LowerCase.checked){
        password+=getrandomnumber(lowercase);
       
    }
    if(Number.checked){
        password+=getrandomnumber(number);
        
}
    if(Symbol.checked){
    password+=getrandomnumber(symbol);
   
}
      

    if(password.length<lengthpassword.value)
    {
          return Temp(password);
    }
    console.log(password);
  
    
}
