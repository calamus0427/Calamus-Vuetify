
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
                path: '/product',
                name: 'product',
                component: _import_('product/index'),
                meta: {title: '产品', icon: 'tmsicon tms-home', noCache: false}
            }
        ]
    },
    {
        path: '',
        component: Layout,
        children: [
            {
            path: '/teach',
            name: 'teach',
            component: _import_('teach/index'),
            meta: {title: '讲师培训', icon: 'tmsicon tms-home', noCache: false}
            }
        ]
    },
    {
        path: '',
        component: Layout,
        children: [
            {
            path: '/solution',
            name: 'solution',
            component: _import_('solution/index'),
            meta: {title: '解决方案', icon: 'tmsicon tms-home', noCache: false}
            }
        ]
    },
    {
        path: '',
        component: Layout,
        children: [
            {
            path: '/customer',
            name: 'customer',
            component: _import_('customer/index'),
            meta: {title: '客户案例', icon: 'tmsicon tms-home', noCache: false}
            }
        ]
    },
    {
        path: '',
        component: Layout,
        children: [
            {
            path: '/server',
            name: 'server',
            component: _import_('server/index'),
            meta: {title: '更多服务', icon: 'tmsicon tms-home', noCache: false}
            }
        ]
    },
    {
        path: '',
        component: Layout,
        children: [
            {
            path: '/try',
            name: 'try',
            component: _import_('try/index'),
            meta: {title: '免费试用', icon: 'tmsicon tms-home', noCache: false}
            }
        ]
    },
    {path: '/401', component: _import_('others/401'), hidden: true},
    {path: '*', component: _import_('others/404'), hidden: true}
]
