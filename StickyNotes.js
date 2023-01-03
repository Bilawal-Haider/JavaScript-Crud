
// document.getElementById("addBtn").addEventListener("click",()=>{
    
//     let div=document.createElement("div");
//     div.classList.add("notes");

//     div.innerHTML=`
    

//         <div class="tool">
        
//         <i class="save fa-solid fa-floppy-disk"></i>

//         <i class="trash fa-solid fa-trash"></i>

 
//         <textarea >
           
//         </textarea>

//         </div>
      
    
//     `


//    let h= document.getElementById("main");
//    h.appendChild(div);


//    div.querySelector(".trash").addEventListener("click",(e)=>{
//     console.log(e.target.parentElement.parentElement.remove())
//    })

  
     
// })




        //---------------------------------------------------------------------///

//--------------------------------------------------------------------------------------//

       //----------------------------------------------------------------------///



    //    document.getElementById("addBtn").addEventListener("click",()=>{
    
    //     let div=document.createElement("div");
    //     div.classList.add("notes");
    
    //     div.innerHTML=`
        
    
    //         <div class="tool">
            
    //         <i class="save fa-solid fa-floppy-disk"></i>
    
    //         <i class="trash fa-solid fa-trash"></i>
    
     
    //         <textarea >
               
    //         </textarea>
    
    //         </div>
          
        
    //     `
    
    
    //    let h= document.getElementById("main");
    //    h.appendChild(div);
    
    
    //    div.querySelector(".trash").addEventListener("click",(e)=>{
    //     
    //     div.remove()

    //    })
    
      
         
    // })
    


    //------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------//
                     //---------------------------------//



 const addBtn=document.querySelector("#addBtn");
 const main=document.querySelector("#main");

 const saveNotes=()=>{

    const notes=document.querySelectorAll(".notes textarea");
   
    let NotesTextarea=[];
    notes.forEach((data)=>{
        NotesTextarea.push(data.value);
    })


    if(NotesTextarea.length===0){
//    console.log("yes 0 k braber hai");
   localStorage.removeItem("data");
    }else{
        console.log("nai hai 0 k Braber")
        const son=JSON.stringify(NotesTextarea);
        localStorage.setItem("data",son);
        //Purpose of Local Storage page Refresh krne pr bhi Save rhe Data
    }
   

 }



addBtn.addEventListener("click",()=>{
   addNotes(); 
});
           
const addNotes=(text="")=>{  //text Ous Waqt Data aye ga jab Local Storage me Data hoga

    const note=document.createElement('div');

    note.classList.add("notes");
    note.innerHTML= `<div class="tool">
    <i class="save fa-solid fa-floppy-disk"></i>
    <i class="trash fa-solid fa-trash"></i>
    </div> 
    <textarea>${text}</textarea>`
main.appendChild(note);
saveNotes();  //Purpose Yaha Call krne ka Auto pe Note ka text Save hora hai Baghair Save k  Button ko Click kre

// console.log(note) 
//  console.log(note.querySelector(".trash"));
note.querySelector(".trash").addEventListener('click',()=>{
    note.remove();
    saveNotes()//Purpose Agr Delete kiya Note Too local Storage se bhi Delete hoga 
})



note.querySelector(".save").addEventListener('click',()=>{
  
    saveNotes();

  

 })



 note.querySelector("textarea").addEventListener("mouseout",()=>{
    console.log("Chala")
    saveNotes();
 })

}
                    
                         
//  Self Calling Function   Page Refresh Krne Pr Data Mangwaya Hai                
(
    function (){
        const DATAof_LocalStorage=localStorage.getItem("data");
       const d =JSON.parse(DATAof_LocalStorage);
       if(d===null){
    //   console.log(d);
      addNotes();

       }else{
        d.forEach((val)=>{
            addNotes(val)
        })
       }
        
    }
)()