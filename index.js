



// let SelectedRow=null;


// const showalert=(message)=>{

// const div=document.createElement("div");
// div.className="alert";
// div.appendChild(document.createTextNode(message));
// const container=document.querySelector(".container");
// const main=document.querySelector(".main");

// container.insertBefore(div,main);

// setTimeout(()=>{
//     document.querySelector(".alert").remove()
// },2000)
// }


// //Submit 
// document.querySelector("#submit").addEventListener("click",(e)=>{
  
//   const firstName=document.querySelector("#firstName").value;
//   const lastName=document.querySelector("#lastName").value;
//   const roll_no=document.querySelector("#roll-no").value;

// if(firstName==="" || lastName==="" || roll_no===""){
    
//     showalert("Please Fill All Fields")
// }
// else{
//    if(SelectedRow==null){
//     const list =document.querySelector("#student-list");
//     const tr=document.createElement("tr");
//     tr.innerHTML=`<td>${firstName}</td>
//     <td>${lastName}</td><td>${roll_no}</td>
//     <td>
//     <a href="#" class="btn btn-warning Edit" >Edit</a>
//     <a href="#" class="btn btn-danger delete"  >Delete</a>   
//     </td>
    
//     `
//     list.appendChild(tr);
//     showalert("Student Added");

//    }
//    else{
//     SelectedRow.children[0].innerHTML=document.querySelector("#firstName").value;
//     SelectedRow.children[1].innerHTML=document.querySelector("#lastName").value;
//     SelectedRow.children[2].innerHTML=document.querySelector("#roll-no").value;
//     SelectedRow=null;

//    }
// }

//     document.querySelector("#firstName").value="";
//     document.querySelector("#lastName").value="";
//     document.querySelector("#roll-no").value="";
    
// })






// document.querySelector("#student-list").addEventListener("click",(e)=>{
// //  console.log(e.target.parentElement)

//     if(e.target.classList.contains("delete")){
//         e.target.parentElement.parentElement.remove();
//     SelectedRow=null;

//     document.querySelector("#firstName").value="";
//     document.querySelector("#lastName").value="";
//     document.querySelector("#roll-no").value="";
//         showalert("Data Deleted Successfully");

//     }else{
//         if(e.target.classList.contains("Edit")){
           
//      // e.target.parentElement.parentElement.children.length
//        document.querySelector("#firstName").value=e.target.parentElement.parentElement.children[0].innerHTML;
//        document.querySelector("#lastName").value=e.target.parentElement.parentElement.children[1].innerHTML;
//        document.querySelector("#roll-no").value=e.target.parentElement.parentElement.children[2].innerHTML;

//     SelectedRow=e.target.parentElement.parentElement;
    
    
//         }
//     }
// //    console.log(e.target.parentElement.parentElement);
// }
// );






//-------------------------------------------------------------------------------------//







// var submit=false;
// var Edit_id=0;
// var array=[];

// function Bindbooks(arr){
//     var row="";
//     arr.forEach((e)=>{
//         row+=`<tr>
//         <td>${e[0]}</td><td>${e[1]}</td><td>${e[2]}</td>
//         <td><button class="btn btn-warning" onclick="Edit(${e[3]})">Edit</button>
//         <button class="btn btn-danger"  onclick="Delete(${e[3]})" >Delete</button></td>`
//     })
//     document.querySelector("#student-list").innerHTML=row;

// }

// function input(){


//     let FirstName=document.querySelector("#firstName").value;
//     var LastName=document.querySelector("#lastName").value;
//     var Roll_NO=document.querySelector("#roll-no").value;
//     var date=new Date().getTime();

//     if(submit===true){
//         array.map((e)=>{
//             if(e[3]===Edit_id){
//             e[0]=FirstName,e[1]=LastName,e[2]=Roll_NO,e[3]=date;
//             }else{
                
//             }
//         })
//         Bindbooks(array);
//         submit=false;
//        Edit_id=0;
//         document.querySelector("#firstName").value="";
//         document.querySelector("#lastName").value="";
//         document.querySelector("#roll-no").value="";
//         }else{

//     var book=[FirstName,LastName,Roll_NO,date];
//       array=[...array,book];

//        Bindbooks(array)
//        submit=false;
//        Edit_id=0;
//        document.querySelector("#firstName").value="";
//        document.querySelector("#lastName").value="";
//        document.querySelector("#roll-no").value="";
//         }
// }


// function Delete(e){

//     array.filter((r,i)=>{

//     if(r[3]==e){
//     array.splice(i,1);
//     }
       
//     })
//     Bindbooks(array);
//     submit=false;
//        Edit_id=0;
  
// }

// function Edit(e){
    
// array.map((r)=>{
//     if(r[3]==e){
//     // console.log(r[0],r[1],r[2]);
//     document.querySelector("#firstName").value=r[0];
//     document.querySelector("#lastName").value=r[1];
//     document.querySelector("#roll-no").value=r[2];
//     submit=true;
//     Edit_id=r[3];
//     }
// })
// }




//----------------------------------------------------------------------------//


// let array=[];
// document.querySelector("#submit").addEventListener("click",(e)=>{
//   Books();
// });


// function Books(){

//     const FirstName=document.querySelector("#firstName").value;
//     const LastName=document.querySelector("#lastName").value;
//     const Roll_No=document.querySelector("#roll-no").value;
//     const date=new Date().getTime();
//     const list=[FirstName,LastName,Roll_No,date];
    
//     array=[...array,list];
//     // console.log(array);

//     Addbooks(array);
       
//     }

//     function Addbooks(e){
//      let  tr=""; 
//         e.forEach((r)=>{
//             console.log(r);
//       tr+=`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td>
//      <td> <button class="btn btn-warning" >Edit</button></td>
//       <td> <button class="btn btn-danger " onclick="Delete(${r[3]})">Delete</button></td>
//        </tr>
//       `
//    })
// //    console.log(tr);
//    document.querySelector("#student-list").innerHTML=tr;
//     }
// const Delete=(r)=>{
//    let delet=array.filter((j)=>{
//     return j[3]!=r;
//    })
//    array=delet;
// //    console.log(delet);
//    Addbooks(delet);
// }



//t