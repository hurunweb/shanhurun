/**
 * Created by neil.shen on 2017/12/7.
 */
var imgSrc1 = []; //图片路径
var imgFile1 = []; //文件流
var imgName1 = []; //图片名字
var imgSrc2 = []; //图片路径
var imgFile2 = []; //文件流
var imgName2 = []; //图片名字
var explorer =navigator.userAgent ;
//选择图片
function imgUpload1(obj) {
    var oInput = '#' + obj.inputId;
    var imgBox = '#' + obj.imgBox;
    var btn = '#' + obj.buttonId;
    var form='#'+obj.formId;

    $(oInput).on("change", function() {
        var fileImg1 = $(oInput)[0];
        var fileList1 = fileImg1.files;
        for(var i = 0; i < fileList1.length; i++) {
            var imgSrcI1 = getObjectURL(fileList1[i]);
            imgName1.push(fileList1[i].name);
            imgSrc1.push(imgSrcI1);
            imgFile1.push(fileList1[i]);
        }
        addNewContent1(imgBox);
        if($(imgBox).html()!=""){
            $(btn).css("display","inline-block")
            $(btn).css("background-color","rgb(227,56,32)").css("border","1px solid rgb(227, 56, 32)");

            $(imgBox).removeClass("hidden")
        }
        else{
            $(btn).css("display","inline-block")
            $(btn).css("background-color","rgb(204,204,204)").css("border","1px solid rgb(204,204,204)");
        }

    })
    $(imgBox).on("change",function(){
        if($(imgBox).html()!=""){
            $(btn).css("display","inline-block")
            $(btn).css("background-color","rgb(227,56,32)").css("border","1px solid rgb(227, 56, 32)");

            $(imgBox).removeClass("hidden")
        }
        else{
            $(btn).css("display","inline-block")
            $(btn).css("background-color","rgb(204,204,204)").css("border","1px solid rgb(204,204,204)");
        }
    })
    $(btn).on('click', function() {

        if($(imgBox).html()!=""){

            $(btn).bind("click");
            $(imgBox).removeClass("hidden")
            layer.alert('确定上传作品？上传后无法修改', function(index){
//用formDate对象上传
                var fd = new FormData($(form));
                for(var i=0;i<imgFile1.length;i++){
                    fd.append(obj.data,imgFile1[i]);
                }

                submitPicture(obj.upUrl, fd,obj);
                layer.close(index);
            });
        }
        else {
            $(btn).unbind("click");

       }

    })
}
function imgUpload2(obj) {
    var oInput = '#' + obj.inputId;
    var imgBox = '#' + obj.imgBox;
    var btn = '#' + obj.buttonId;
    var form='#'+obj.formId;

    $(oInput).on("change", function() {
        var fileImg2 = $(oInput)[0];
        var fileList2 = fileImg2.files;
        for(var i = 0; i < fileList2.length; i++) {
            var imgSrcI2 = getObjectURL(fileList2[i]);
            imgName2.push(fileList2[i].name);
            imgSrc2.push(imgSrcI2);
            imgFile2.push(fileList2[i]);
        }
        addNewContent2(imgBox);
        if($(imgBox).html()!=""){
            $(btn).css("display","inline-block")
            $(btn).css("background-color","rgb(227,56,32)");
            $(imgBox).removeClass("hidden")
        }

    })
    $(btn).on('click', function() {
        //if(!limitNum(obj.num)){
        //    alert("超过限制");
        //    return false;
        //}
        if($(imgBox).html()!=""){
            $(btn).bind("click");
            $(imgBox).removeClass("hidden")
            layer.alert('确定上传作品？上传后无法修改', function(index){
                //do something
////用formDate对象上传
                var fd = new FormData($(form));
                for(var i=0;i<imgFile2.length;i++){
                    fd.append(obj.data,imgFile2[i]);
                }
                console.log(fd)
                submitPicture(obj.upUrl, fd,obj);
                layer.close(index);
            });
        }
        else {
            $(btn).unbind("click");
        }

    })
}
//图片展示
function addNewContent1(obj1) {

    $(obj1).html("");
    for(var a = 0; a < imgSrc1.length; a++) {
        var oldBox1 = $(obj1).html();
        console.log(oldBox1)
        $(obj1).html(oldBox1 + '<div class="imgContainer"><div title=' + imgName1[a] + ' data-src="'+imgSrc1[a]+'" onclick="imgDisplay(this)">'+imgName1[a]+'</div><p onclick="removeImg1(this,' + a + ')" class="imgDelete"></p></div>');
    }
}
function addNewContent2(obj2) {

    $(obj2).html("");
    for(var p = 0; p < imgSrc2.length; p++) {
        var oldBox = $(obj2).html();
        console.log(oldBox)
        $(obj2).html(oldBox + '<div class="imgContainer"><div title=' + imgName2[p] + '  data-src=' + imgSrc2[p] + ' onclick="imgDisplay(this)">' + imgName2[p] + '</div><p onclick="removeImg2(this,' + p + ')" class="imgDelete"></p></div>');
    }
}
//删除
function removeImg1(obj, index) {
    imgSrc1.splice(index, 1);
    imgFile1.splice(index, 1);
    imgName1.splice(index, 1);
    var boxId = "#" + $(obj).parent('.imgContainer').parent().attr("id");
    if(imgSrc1.length==0) {
        $(obj).parent().parent().addClass("hidden");
        $(obj).parent().parent().next().addClass("hidden")
        $("#imglist1").css("background-color","rgb(204,204,204)").css("border","1px solid rgb(204,204,204)").addClass("norepeat");
    }
    else {
        $("#imglist1").removeClass("norepeat");
    }
    addNewContent1(boxId);
}
//删除
function removeImg2(obj, index) {
    imgSrc2.splice(index, 1);
    imgFile2.splice(index, 1);
    imgName2.splice(index, 1);
    var boxId = "#" + $(obj).parent('.imgContainer').parent().attr("id");
    if(imgSrc2.length==0) {
        $(obj).parent().parent().addClass("hidden");
        $(obj).parent().parent().next().addClass("hidden")
        $("#imglist2").css("background-color","rgb(204,204,204)").css("border","1px solid rgb(204,204,204)").addClass("norepeat");
    }
    else{
        $("#imglist2").removeClass("norepeat");
    }
    addNewContent2(boxId);
}
//限制图片个数
//function limitNum(num){
//    if(!num){
//        return true;
//    }else if(imgFile.length>num){
//        return false;
//    }else{
//        return true;
//    }
//}

//上传(将文件流数组传到后台)
function submitPicture(url,data,obj) {
    //for (var p of data) {
    //    console.log(p);
    //}
    if(url&&data){
        $.ajax({
            type: "post",
            url: url,
            async: true,
            data: data,
            cache:false,
            processData: false,
            contentType: false,
            success: function(dat) {
                var stringlist=[];
                var json = eval("("+dat+")");

                if(json.resultCode==1){
                    console.log(json);
                    var num=json.data.length;
                    for(var i=0;i<num;i++){

                        stringlist.push(json.data[i].filePath);
                    }
                    $("#"+obj.imgtxt).val(stringlist);
                    $(".imgContainer").children("p").remove();
                    $("#"+obj.workname).attr("disabled",true)
                    $( '#' + obj.buttonId).unbind("click")
                        .html("已上传")
                        .css("background-color","#ccc")
                        .hide()
                        .next().addClass("hidden");
                    $("#"+obj.inputId).attr("disabled",true);
$("#"+obj.inputbox).addClass("hidden");
                }
            }
        });
        console.log(data,url)
    }else{
        alert('请打开控制台查看传递参数！');
    }
}
//图片灯箱
function imgDisplay(obj) {
    var src = $(obj).attr("data-src");
    var imgHtml = '<div style="width: 100%;height: 100vh;overflow: auto;background: rgba(0,0,0,0.5);text-align: center;position: fixed;top: 0;left: 0;z-index: 1000;"><img src=' + src + ' style="margin-top: 100px;width: 30%;margin-bottom: 100px;"/><p style="font-size: 50px;position: fixed;top: 30px;right: 30px;color: white;cursor: pointer;" onclick="closePicture(this)">×</p></div>'
    $('body').append(imgHtml);
}
//关闭
function closePicture(obj) {
    $(obj).parent("div").remove();
}

//图片预览路径
function getObjectURL(file) {
    var url = null;
    if(window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
    } else if(window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if(window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}