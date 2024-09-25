const input=document.getElementById("input-box");
const list=document.getElementById("list");

function addTask(){
    if(input.value===''){
alert("write something");
    }
    else{
      
let li=document.createElement("li");
li.innerHTML=input.value;
list.appendChild(li);
let button=document.createElement("span");
button.innerHTML="\u00d7";
li.appendChild(button);
    }
    input.value='';
    saveData();
}
list.addEventListener("click",function(e){
if (e.target.tagName === "LI") {
    console.log("click");
    e.target.classList.toggle("checked");
    saveData();

    
} 
else if(e.target.tagName==="SPAN") {
    console.log("click");
    e.target.parentElement.remove();
    saveData();

}
},false);
function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask();
