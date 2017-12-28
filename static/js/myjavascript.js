function applydesigner(){
    if ($.cookie("HurunShanUser") != null) {
        var a=GetCookie("HurunShanUser", "Designer")
        if(a==0){
            window.location.href='/OV/html/designer/applydesigner.html';
        }
        else{
            window.location.href='/OV/html/designer/desinfo.html';
        }
        console.log(a);
    }
    else{
        window.location.href='/OV/html/zh/login.html';
    }
}