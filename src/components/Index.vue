<template>
    <div>
    <Index-head></Index-head>
    <Index-swipe></Index-swipe>
    </div>
</template>


<script>
//引入头部组件
import IndexHead from '../components/index/IndexHead'
import IndexSwipe from '../components/index/IndexSwipe'
export default {
    name: 'Index',
    data() {
        return {
            msg: ''
        }
    },
    components: {
        IndexHead,
        IndexSwipe
    }
}
</script>

<style scoped lang="less">


</style>