<template>
<div class="col-xs-12 p0">
    <!--轮播-->
    <div class="hs-focusBox-01" style="margin:0 auto">
        <ul class="pic p0">
            <li>
                <a href="#" target="_blank">
                    <img src="../../../static/img/Banner/banner01.jpg" />
                </a>
            </li>
            <li>
                <a href="#" target="_blank">
                    <img src="../../../static/img/Banner/banner02.jpg" />
                </a>
            </li>
            <li>
                <a href="#" target="_blank">
                    <img src="../../../static/img/Banner/banner03.jpg" />
                </a>
            </li>
        </ul>
        <a class="prev" href="javascript:void(0)"></a>
        <a class="next" href="javascript:void(0)"></a>
        <ul class="hd p0">
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>
</template>

<script>
        import '../../../lib/BootstrapOffcanvas/css/bootstrap.offcanvas.min.css'
        import '../../../static/css/Site.css'
        import '../../../static/css/SiteMob.css'
        import '../../../static/css/SiteCn.css'


        import '../../../static/js/jquery-3.2.1.min.js'
        import '../../../static/js/jquery.cookie-1.4.1.min.js'
        import '../../../static/js/bootstrap.min.js'
        // import '../../../lib/DroploadPage/dropload.min.js'
        import '../../../lib/Ueditor/ueditor.config.js'
        // import '../../../lib/Ueditor/custom.js'
        import '../../../static/js/MyScripts/sjs.register.js'
        import '../../../static/js/MyScripts/md5.js'

         /*鼠标移过，左右按钮显示*/
        // jQuery(".hs-focusBox-01").hover(function () { jQuery(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.2) }, function () { jQuery(this).find(".prev,.next").fadeOut() });
            /*SuperSlide图片切换*/
        // jQuery(".hs-focusBox-01").slide({ mainCell: ".pic", effect: "fold", autoPlay: true, delayTime: 600, trigger: "click" });
export default {
    data() {
        return {
            msg: ''
        }
    },
    components: {
    }
}

</script>

<style>
.hs-focusBox-01{
    /* width: 1170px;
    height: 400px; */
}

</style>