//获取Cookie
function GetCookie(mname, sname) {
    var cookies = $.cookie(mname).split('&');
    var res = '';
    for (var i = 0; i < cookies.length; i++) {
        var one = cookies[i].split('=');
        if (one[0] == sname) {
            res = one[1];
            break;
        }
    }
    return res;
}
