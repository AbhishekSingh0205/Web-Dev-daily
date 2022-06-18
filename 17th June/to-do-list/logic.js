const bttN = document.getElementById("submit");
const newDiv = document.createElement("div");
const boDy=document.getElementById("body");
bttN.addEventListener("click",myFuc);
boDy.append(newDiv);
const input=document.getElementById("takingInput");
function myFuc(){
    if(String(input.value).length==0){
        console.log("I am here");
        console.log(String(input.value).length);
        alert("Please provide some input");
        return;
    }

    const newDiv1=document.createElement("div");
    newDiv1.innerHTML=`${input.value}
    <input type="submit" value="edit">
    <input type="submit" value="delete">
    `
    input.value="";
    newDiv.append(newDiv1);
}