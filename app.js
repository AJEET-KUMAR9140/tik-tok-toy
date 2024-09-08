let boxes=document.querySelectorAll(".box");
let bottom=document.querySelector(".bottom h2");
let output=document.querySelector(".output p");
let outputMain=document.querySelector(".output");
let main=document.querySelector(".main");
// let top=document.querySelector(".top");

// main.classList.add("hide2");
outputMain.classList.add("hide2");
let turn=true;
let count=0;
let chekbox=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn===true){
            box.innerHTML="X";
            turn=false;
        }else{
            box.innerHTML="O";
            turn=true;
        }
        count++;
        box.disabled=true;
        chekWinner();
        if(count==9 && !chekWinner()){
            gamedraw();
        }
    })
})


let chekWinner=()=>{
 for(let pattern of chekbox){
    let valu1=boxes[pattern[0]].innerHTML;
    let valu2=boxes[pattern[1]].innerHTML;
    let valu3=boxes[pattern[2]].innerHTML;

    if(valu1!="" &&valu2!="" &&valu3!=""){
        if(valu1===valu2 && valu2===valu3){
           showWinner(valu1);
           return true;
        }
       
    }
 }
      
}

let showWinner=(valu1)=>{
   if(valu1==="X"){
    output.innerHTML=` ${valu1} is winner `; 
    outputMain.classList.remove("hide2");
    main.classList.add("hide2");
   }else{
    output.innerHTML=` ${valu1} is winner `;
    outputMain.classList.remove("hide2");
    main.classList.add("hide2"); 
   }
}

let gamedraw=()=>{
    output.innerHTML=`game is draw`;
    outputMain.classList.remove("hide2");
    main.classList.add("hide2");
}

bottom.addEventListener("click",()=>{
    count=0;
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
   
})

document.querySelector(".top h2").addEventListener("click",()=>{
    count=0;
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
    outputMain.classList.add("hide2");
    main.classList.remove("hide2");
})
// document.querySelector(".output .top h2").addEventListener("click",()=>{
//     count=0;
//     for(let box of boxes){
//         box.disabled=false;
//         box.innerHTML="";
//     }
// })