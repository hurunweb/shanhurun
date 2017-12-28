<template>
    <div>
        <header class="container-fluid hidden-xs p0">
            <div class="hs-pc-header hidden-xs">
                <div class="hs-login">
                    <div class="container">
                        <div class="row">
                            <div id="mylogin01" class="col-sm-12 text-right ">
                                <i class="fa fa-user-circle" aria-hidden="true"></i>&nbsp;&nbsp;
                                <a class="head-register" href="html/zh/regist.html">注册</a>&nbsp;|&nbsp;
                                <a class="head-login" href="html/zh/login.html">登陆</a>
                            </div>
                            <div id="mylogin02" class="col-sm-12 text-right hidden">
                                <i class="fa fa-user-circle" aria-hidden="true"></i>&nbsp;&nbsp;欢迎您：&nbsp;
                                <a href="#">
                                    <span id="myusername"></span>
                                </a>&nbsp;|&nbsp;
                                <a href="#" id="logout">退出</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hs-logo">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-5 hs-l-logo">
                                <img src="../../../static/img/Logo.png" />
                            </div>
                            <div class="col-sm-7 hs-r-slogan text-right">
                                <img class="head-img" src="../../../static/img/Slogan.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-default hs-navbar">
                    <div class="container">
                        <div class="row">
                            <div class="collapse navbar-collapse">
                                <div class="row">
                                    <ul class="nav navbar-nav">
                                        <li class="active">
                                            <a href="index.html">首页</a>
                                        </li>
                                        <li>
                                            <a href="html/designer/designer.html">设计师</a>
                                        </li>
                                        <li>
                                            <a onclick="applydesigner()">设计师入驻</a>
                                        </li>
                                        <li>
                                            <a href="">商户入驻</a>
                                        </li>
                                        <li>
                                            <a href="#">发起项目</a>
                                        </li>
                                        <li>
                                            <a href="#">投资项目</a>
                                        </li>
                                        <li>
                                            <a href="">资讯</a>
                                        </li>
                                    </ul>
                                    <form id="topserch" class="navbar-form navbar-right">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="搜索设计师、项目...">
                                            <span class="input-group-btn">
                                                <button class="btn btn-default hs-btn-search" type="button">
                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                </button>
                                            </span>
                                        </div>
                                        <!-- /input-group -->
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <header class="visible-xs-block">
            <div class="container">
                <div class="row hs-mob-header">
                    <div class="col-xs-12 hs-m-logo text-center p0">
                        <img src="../../../static/img/Logo-W.png" />
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>


<script>
// import '../../../lib/bootstrap.min.css'
import '../../../lib/font-awesome-4.7.0/css/font-awesome.min.css'
import '../../../lib/DroploadPage/dropload.css'
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

<style scoped lang="less">
.head-img{
    position: relative;
    right: 7.5rem;
}
.head-login{
    margin-right: 7.5rem;
    color: #969696;
    font-size: 0.3rem;
}
.head-register{
    color: #969696;
    font-size: 0.3rem;
}
.input-group{
    margin-right: 7.5rem;
}
.container-fluid{
    overflow: hidden;
}
input::-webkit-input-placeholder {
    font-size: 0.25rem;
}
.form-control{
    font-size: 0.3rem;
}
</style>