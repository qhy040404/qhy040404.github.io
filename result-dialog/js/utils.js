const button=document.getElementById("insertv"); 
button.onclick = function () { 
    let a=document.getElementById("innerv").value;
    output(a); 
}
function output(str) { 
    const b=document.getElementById("zy"); 
    b.innerText=str; 
}
