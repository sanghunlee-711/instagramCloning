
const idinput = document.getElementById("wrapperRightContentInputId"); 
const id = document.getElementById("wrapperRightContentInputId");
const pw = document.getElementById("wrapperRightContentInputPw");


const btnColorChangeid = () => {
    const id = document.getElementById("wrapperRightContentInputId").value;
    const pw = document.getElementById("wrapperRightContentInputPw").value;
    const btn = document.getElementById("LoginButton"); 
    if(id.length>=1 && pw.length>=1){
        btn.style.backgroundColor = "blue";
    }
    else{
        btn.style.backgroundColor = "#C0DFFD";
    }
}

const btnColorChangepw = () => {
    const id = document.getElementById("wrapperRightContentInputId").value;
    const pw = document.getElementById("wrapperRightContentInputPw").value;
    const btn = document.getElementById("LoginButton"); 
    if(pw.length >=1 && id.length >= 1 ){
        btn.style.backgroundColor = "blue";
    }
    else{
        btn.style.backgroundColor = "#C0DFFD";
    }
}

const inputValueSave = ()=>{
    const idvalue = document.getElementById("wrapperRightContentInputId").value;
    const id = document.getElementById("wrapperRightContentInputId");
    id.value = idvalue;
    console.log(idvalue)
}




id.addEventListener("keyup",inputValueSave);
idinput.addEventListener("keyup",btnColorChangeid);
pw.addEventListener("keyup",btnColorChangepw);





/*
const btncolorchange = ()=>{
    const id = document.querySelector("#wrapperRightContentInputId").value;
    const pw = document.querySelector("#wrapperRightContentInputPw").value;
    const btn = document.querySelector("#LoginButton");

if (id == pw){
    result = btn.style.backgroundColor = "blue";
}
else{
    result = btn.style.backgroundColor = "white";
}
    return result;
}

btncolorchange();

*/