let boxes = document.querySelectorAll(".box");
let btn=document.querySelector(".rsbtn")
let newbtn=document.querySelector(".newbtn")
let win=document.querySelector(".win")
let div=document.querySelector("#divider")
let tuch=true;
let z=[0,1,2];
let winlist=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];
const stop = () =>{
    for(box of boxes){
        box.disabled=true;
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(tuch){
            box.innerText="O";
            tuch=false;
        }
        else{
            box.innerText="X";
            tuch=true;
        }
        box.disabled=true;
        chekwiner();
    })
})
function chekwiner(){
    for (let patern of winlist){
       let p1=boxes[patern[0]].innerText;
       let p2=boxes[patern[1]].innerText;
       let p3=boxes[patern[2]].innerText;
       let a=patern[0];
       let b=patern[1];
       let c=patern[2];
       let all=[a,b,c];
    if(p1!="" && p2 !="" && p3 != ""){
        if(p1 === p2 && p2 === p3 ){
            win.innerText="congratulation, winner is "+p1;
            stop();
        }
    } 
  }
}
const clen =() =>{
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
    }
}
const newgame=()=>{
    for(box of boxes){
        box.innerText="";
        win.innerText="";
        box.disabled=false;
}};
btn.addEventListener("click",clen);
newbtn.addEventListener("click",newgame);