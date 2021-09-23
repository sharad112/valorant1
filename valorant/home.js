var button=document.getElementById("click-me");
button.addEventListener("click",function(){
    var form=document.querySelector(".login-wrapper");
    form.style.display="block";
    form.style.transition=".5";
});


var close=document.getElementById("cancel");
close.addEventListener("click",function(){
    var form=document.querySelector(".login-wrapper");
    form.style.display="none";
    form.style.transition=".5";
});
