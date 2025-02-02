let allbox=document.querySelectorAll("#box");
//let msg=document.querySelector("#msg");
let msg_container=document.querySelector("#msg-container");
let draw_container=document.querySelector("#draw");

let turn1=true;
let turn2=false;

let pattern=[
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6],
]
allbox.forEach((box)=>
{
     box.addEventListener("click",()=>
     {
         if(turn1 && box.innerText==="")
         {
            box.innerText="X";
            turn2=true;
            turn1=false;
         }
         else  if(turn2 && box.innerText==="")
         {
            box.innerText="O";
            turn1=true;
            turn2=false;
         }
         checkWinner(box);
     })
});

const checkWinner=(box)=>
{

    for(let pat of pattern)
    {
        //console.log(pat[0],pat[1],pat[2]);
        let pos1=allbox[pat[0]].innerText;
        let pos2=allbox[pat[1]].innerText;
        let pos3=allbox[pat[2]].innerText;
        
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1=== pos2 && pos2===pos3)
            {
                 showWinner(pos1);
                 return;  // Stop checking further if we found a winner
            }
        }
    }
    let count=0;
    for(let box of allbox)
    {
       if(box.innerText!="")
       {
         count++;
       }
    }
    if(count===9)
    {
        drawMatch();
    }
}
let msg;  // declare globally <p> tag massage
const showWinner=(pos1)=>
{
  
    msg = document.createElement("p");
    msg.innerText=`Congratulations,Winner is ${pos1}`;
    msg.className="msg"; //  for css
    msg_container.appendChild(msg);

    disableallbox();
}

const disableallbox=()=>
{
    for(let box of allbox)
    {
        box.disabled=true;
    }
}
const enableallbox=()=>
{
    for(let box of allbox)
    {
        box.innerText="";
        box.disabled=false;
    }
    msg.innerText="";               //remove X/O after click new/reset button
    draw_container.innerHTML="";    //tag thekeo bad dewa jay ba div thetkeo dewa jay
}

const drawMatch=()=>
{
    let dr=document.createElement("p");
    dr.innerText=`Sorry,Match is draw`;
    draw_container.appendChild(dr); 
}

let new_btn=document.getElementById("new-btn");
let reset_btn=document.getElementById("reset-btn");

new_btn.addEventListener("click",()=>
{
    enableallbox();
});

reset_btn.addEventListener("click",()=>
{
        enableallbox();
});