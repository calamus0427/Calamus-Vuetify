
const _import_ = file => () => import('@/views/' + file + '.vue')
import Layout from '@/views/layout'
/*
 * 公共路由表, 一般情况这里无需任何修改.
 * 除非你需要配置更多任何角色或权限下都可以访问的路由
 */
export const constantRouterMap = [
    {
        path:'/',
        name: 'Dashboard',
        component: Layout,
        meta: {title: '首页', icon: 'tmsicon tms-home', noCache: false},
        children: [
            {
                path:'/',
                name: 'Dashboard',
                component: _import_('Dashboard/index'),
                meta: {title: '首页', icon: 'tmsicon tms-home', noCache: false}
            }
        ]
    },
    {
        path: '',
        component: Layout,
        children: [
            {
            path: '/about',
            name: 'about',
            component: _import_('server/index'),
            meta: {title: '关于我', icon: 'tmsicon tms-home', noCache: false}
            }
        ]
    },
    {path: '/401', component: _import_('others/401'), hidden: true},
    {path: '*', component: _import_('others/404'), hidden: true}
]
