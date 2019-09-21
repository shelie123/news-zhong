import Vue from "vue"

// + 导入App.vue
import App from "@/App.vue"

import Login from "@/pages/Login"


// 路由：1、导入路由构造函数
import VueRouter from "vue-router"

// 在.vue 文件中要使用router-link或者router-view，需要注册一下插件
Vue.use(VueRouter);

// 路由：2、创建路由配置
const routes = [{
    path: "/login",
    component: Login
}]

// 路由：3、创建对象
const router = new VueRouter({
    routes
})


// 创建根实例
new Vue({
    el: "#app",

    // - 删除该data
    // data: {
    //     message: "hello webpack and vue!"
    // }

    // 路由：4、挂载到根实例
    router,
    render(createElement) {
        return createElement(App)
    }
})