import PageHome from '@/components/PageHome.vue'
import PageThreadShow from '@/components/PageThreadShow.vue'
import PageNotFound from '@/components/PageNotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: PageThreadShow,
        props: true,
        beforeEnter(to, from, next) {
            const thread = sourceData.threads.find(thread => thread.id === to.params.id)
            next(thread ? undefined : {
                name: 'PageNotFound',
                params: { pathMatch: to.path.substring(1).split('/') },
                query: to.query,
                hash: to.hash
            })
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: PageNotFound
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
