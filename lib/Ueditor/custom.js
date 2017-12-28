/*!
 * UEditor-Upload
 * version: SKY
 * build: 2016年8月9日
 */

$(function () {
    $("body").append("<div style=\"display:none;\"><script type=\"text/plain\" id=\"upload_ue\" style=\"display:none;\"></script></div>");
    _editor = UE.getEditor('upload_ue');
    _editor.ready(function () {
        _editor.hide();
    });
})


//弹出图片上传的对话框
function upImage(str) {
    var myImage = _editor.getDialog("insertimage");
    var ss = str;
    myImage.open();
    var i = 1;
    //设置编辑器不可用
    //_editor.setDisabled();
    //隐藏编辑器，因为不会用到这个编辑器实例，所以要隐藏
    //侦听图片上传
    _editor.addListener('beforeInsertImage', function (t, arg) {
        if (i == 1) {
            //将地址赋值给相应的input,只取第一张图片的路径
            $("#" + ss).attr("value", arg[0].src);
            //图片预览
            $("#img" + ss).attr("src", arg[0].src);
            //ss = "";
        }
        i++;
    })
}
function upImagex(str) {
    var myImage = _editor.getDialog("insertimage");
    var ss = str;
    myImage.open();
    var num = 1;
    var i = parseInt(str.substring(3));
    if ($("#uploadimg" + i).text() == "修改") {
        var r = confirm("删除？？？");
        if (r == true) {
            $("#uploadimg" + i).parent().parent(".col-sm-4.mt10").remove();
            $("#img" + i).remove();
            $("#uploadimg" + i).remove();
            if ($(".col-sm-4.mt10").last().children().children()[2].text == "上传") {                
                var html = '<li class="col-sm-4 mt10" style="display:none;"><div><img src="" id="preimg' + i + '"  class="img- rounded" style="width: 120px; height: 120px; "><input class="form- control" id="img' + i + '" name="img' + i + '" type="hidden" value=""> </div> <div><a class="btn btn-default" id="uploadimg' + i + '" href="javascript:void(0); " onclick="upImagex(\'img' + i + '\'); " style="width: 120px;">上传</a></div></li>';
                
                $("#upworksimg").append(html);
                myImage.close();
            }
            else if ($(".col-sm-4.mt10").last().children().children()[2].text == "修改") {
                var html = '<li class="col-sm-4 mt10"><div><img src="" id="preimg' + i + '"  class="img- rounded" style="width: 120px; height: 120px; "><input class="form- control" id="img' + i + '" name="img' + i + '" type="hidden" value=""> </div> <div><a class="btn btn-default" id="uploadimg' + i + '" href="javascript:void(0); " onclick="upImagex(\'img' + i + '\'); " style="width: 120px;">上传</a></div></li>';
                $("#upworksimg").append(html);
                myImage.close();
            }
        }
        else {
            //设置编辑器不可用
            //_editor.setDisabled();
            //隐藏编辑器，因为不会用到这个编辑器实例，所以要隐藏
            //侦听图片上传
            _editor.addListener('afterInsertImage', function (t, arg) {
                if (num == 1) {
                    var src = arg[0].src;
                    $("#img" + i).attr("value", src);
                    $("#pre" + ss).attr("src", src);
                    $("#uploadimg" + i).parent().parent(".col-sm-4.mt10").next().show();
                    $("#uploadimg" + i).text("修改");
                }
                num++;
            });
        }
    }
    else {
        //设置编辑器不可用
        //_editor.setDisabled();
        //隐藏编辑器，因为不会用到这个编辑器实例，所以要隐藏
        //侦听图片上传
        _editor.addListener('afterInsertImage', function (t, arg) {
            if (num == 1) {
                var src = arg[0].src;
                $("#img" + i).attr("value", src);
                $("#pre" + ss).attr("src", src);
                $("#uploadimg" + i).parent().parent(".col-sm-4.mt10").next().show();
                $("#uploadimg" + i).text("修改");
            }
            num++;
        });
    }
    
}


function upImagetest(str) {
    var myImage = _editor.getDialog("insertimage");
    var ss = str;
    myImage.open();
    var num = 1;
    var i = parseInt(str.substring(3));
    //设置编辑器不可用
    //_editor.setDisabled();
    //隐藏编辑器，因为不会用到这个编辑器实例，所以要隐藏
    //侦听图片上传
    _editor.addListener('beforeInsertImage', function (t, arg) {
        if (num == 1) {
            //将地址赋值给相应的input,只取第一张图片的路径
            $("#img" + i).attr("value", arg[0].src);
            if ($("#pre" + ss).attr("src") == "") {
                i++;
                var html = '<li class="col-sm-4 mt10"><div><img id="preimg' + i + '" src class="img- rounded" style="width: 120px; height: 120px; "><input class="form- control" id="img' + i + '" name="img' + i + '" type="hidden" value> </div> <div><a class="btn btn-default" id="uploadimg' + i + '" href="javascript:void(0); " onclick="upImagex(\'img' + i + '\'); " style="width: 120px;">上传</a></div></li>';
                $("#upworksimg").append(html);
            }
            //图片预览
            $("#preimg" + (i - 1)).attr("src", arg[0].src);
            $("#uploadimg" + (i - 1)).text("修改");

        }
        num++;
    });
    if ($("#uploadimg" + i).text() == "修改") {

        var r = confirm("删除？？？");
        if (r == true) {
            $("#uploadimg" + i).parent().parent(".col-sm-4.mt10").hide();
            myImage.close();

        }
        else {
            myImage.close();
        }


    }
}

//弹出文件上传的对话框
function upVideo(str) {
    var myVideo = _editor.getDialog("insertvideo");
    var ss = str;
    myVideo.open();

    _editor.addListener('afterinsertvideo', function (t, arg) {
        $("#" + ss).attr("value", arg[0].url);
        //$("#" + ss).attr("value", _editor.options.filePath + arg[0].url);
        //ss = "";
    })
}

//弹出文件上传的对话框
function upFiles(str) {
    var myFiles = _editor.getDialog("attachment");
    var ss = str;
    myFiles.open();

    _editor.addListener('afterinsertfile', function (t, arg) {
        $("#" + ss).attr("value", arg[0].url);
        //$("#" + ss).attr("value", _editor.options.filePath + arg[0].url);
        //ss = "";
    })
}

//单传图片开始上传,显示等待。
function preUploadSingleImg() {
    if ($("#loading").length > 0) {
        $("#loading").html("<img src='/Scripts/ueditor/loading.gif'>");;
    }

}

//单传图片回调，隐藏等待图片
function uploadSingleImgCallback() {
    if ($("#loading").length > 0) {
        $("#loading").empty();
    }
}