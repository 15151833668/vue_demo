import VueRouter from "vue-router"
import HelloWorld from "../components/HelloWorld"

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: HelloWorld
        }

    ]
})


export default router;