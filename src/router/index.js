import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/signup',
    component: () => import('@/views/signup/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/market',
    component: Layout,
    name: 'Tổng quan thị trường',
    meta: {
      title: 'Tổng quan thị trường',
      icon: 'el-icon-s-home'
    },
    children: [
      {
        path: 'overview',
        component: () => import('@/views/market/overview-market/index'),
        name: 'Toàn cảnh thị trường',
        meta: { title: 'Toàn cảnh thị trường', icon: 'international', affix: true }
      },
      {
        path: 'map',
        component: () => import('@/views/market/map-market/index'),
        name: 'Bản đồ thị trường',
        meta: { title: 'Bản đồ thị trường', icon: 'map', affix: true }
      },
      {
        path: 'macro',
        component: () => import('@/views/market/overview-macro/index'),
        name: 'Tổng quan vĩ mô',
        meta: { title: 'Tổng quan vĩ mô', icon: 'tree', affix: true }
      },
      {
        path: 'industry',
        component: () => import('@/views/market/overview-industry/index'),
        name: 'Tổng quan ngành',
        meta: { title: 'Tổng quan ngành', icon: 'industry', affix: true }
      },
      {
        path: 'analysis-report',
        component: () => import('@/views/market/analysis-report/index'),
        name: 'Báo cáo phân tích',
        meta: { title: 'Báo cáo phân tích', icon: 'report', affix: true }
      }
    ]
  },
  {
    path: '/chart',
    component: Layout,
    name: 'Biểu đồ',
    meta: {
      title: 'Biểu đồ',
      icon: 'el-icon-s-data'
    },
    children: [
      {
        path: 'vietnam',
        component: () => import('@/views/dashboard/index'),
        name: 'Thị trường Việt Nam',
        meta: { title: 'Thị trường Việt Nam', icon: 'international', affix: true }
      },
      {
        path: 'world',
        component: () => import('@/views/dashboard/index'),
        name: 'Thị trường quốc tế',
        meta: { title: 'Thị trường quốc tế', icon: 'international', affix: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'handle', affix: true }
      }
    ]
  }
  // {
  //   path: '/profile',
  //   component: Layout,
  //   redirect: '/profile/index',
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/profile/index'),
  //       name: 'Profile',
  //       meta: { title: 'Profile', icon: 'user', noCache: true }
  //     }
  //   ]
  // }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/ai-trading',
    component: Layout,
    redirect: 'noRedirect',
    name: 'BOT trade SMT',
    meta: {
      title: 'BOT trade SMT',
      icon: 'robot'
    },
    children: [
      {
        path: 'robot-derivative/free',
        component: () => import('@/views/ai-trading-robot/derivative-robot/free'),
        name: 'Robot phái sinh 1M',
        meta: { title: 'Robot phái sinh 1M', icon: 'el-icon-cpu', affix: true }
      },
      {
        path: 'robot-derivative/scrape',
        component: () => import('@/views/ai-trading-robot/derivative-robot/scrape'),
        name: 'BOT AI',
        meta: { title: 'BOT AI', icon: 'el-icon-cpu', affix: true }
      },
      {
        path: 'robot-derivative/trend',
        component: () => import('@/views/ai-trading-robot/derivative-robot/trend'),
        name: 'Robot phái sinh Trend',
        meta: { title: 'Robot phái sinh Trend', icon: 'el-icon-cpu', affix: true }
      },
      {
        path: 'robot-derivative/bot3m',
        component: () => import('@/views/ai-trading-robot/derivative-robot/bot3m'),
        name: 'Robot phái sinh 3M',
        meta: { title: 'Robot phái sinh 3M', icon: 'el-icon-cpu', affix: true }
      },
      {
        path: 'robot-base/free',
        component: () => import('@/views/ai-trading-robot/base-robot/free'),
        name: 'Robot cơ sở Free',
        meta: { title: 'Robot cơ sở Free', icon: 'bug', affix: true }
      },
      {
        path: 'robot-base/t-plus',
        component: () => import('@/views/ai-trading-robot/base-robot/tplus'),
        name: 'Robot cơ sở T+',
        meta: { title: 'Robot cơ sở T+', icon: 'bug', affix: true }
      },
      {
        path: 'robot-base/trend',
        component: () => import('@/views/ai-trading-robot/base-robot/trend'),
        name: 'Robot cơ sở Trend',
        meta: { title: 'Robot cơ sở Trend', icon: 'bug', affix: true }
      }
    ]
  },
  {
    path: '/news',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        'path': 'https://smtfx.vn/tin-tuc-su-kien/',
        'meta': { 'title': 'Tin tức và Sự kiện', 'icon': 'newspaper' }
      }
    ]
  },
  {
    path: '/products',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Sản phẩm SMT',
    meta: {
      title: 'Sản phẩm SMT',
      icon: 'el-icon-goods'
    },
    children: [
      {
        path: 'robot-integrate-vps',
        component: () => import('@/views/products/robot-integrate-vps/index'),
        name: 'Robot tích hợp VPS',
        meta: { title: 'Robot tích hợp VPS', icon: 'el-icon-cpu', affix: true }
      },
      {
        path: 'robot-integrate-entrade',
        component: () => import('@/views/products/robot-integrate-vps/index'),
        name: 'Robot tích hợp Entrade',
        meta: { title: 'Robot tích hợp Entrade', icon: 'el-icon-cpu', affix: true }
      },
      {
        path: 'robot-integrate-vnd',
        component: () => import('@/views/products/robot-integrate-vps/index'),
        name: 'Robot tích hợp VND',
        meta: { title: 'Robot tích hợp VND', icon: 'el-icon-cpu', affix: true }
      },
      {
        path: 'copytrade',
        component: () => import('@/views/products/robot-integrate-vps/index'),
        name: 'CopyTrade',
        meta: { title: 'CopyTrade', icon: 'el-icon-copy-document', affix: true }
      },
      {
        path: 'autobot-server',
        component: () => import('@/views/products/autobot-server/index'),
        name: 'AutoBot Server',
        meta: { title: 'AutoBot Server', icon: 'el-icon-s-operation', affix: true }
      }
    ]
  },
  {
    path: '/training',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      // {
      //   path: '',
      //   component: () => import('@/views/services/training/index'),
      //   name: 'Đào tạo chứng khoán',
      //   meta: { title: 'Đào tạo chứng khoán', icon: 'book', affix: true }
      // }
      {
        'path': 'https://smtfx.vn',
        'meta': { 'title': 'Đào tạo chứng khoán', 'icon': 'book' }
      }
    ]
  },
  {
    path: '/market-news',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: '',
        component: () => import('@/views/news-market/index'),
        name: 'Tin tức thị trường',
        meta: { title: 'Tin tức thị trường', icon: 'peoples', affix: true }
      }
    ]
  },
  {
    path: '/advice',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: '',
        component: () => import('@/views/services/training/index'),
        name: 'Tư vấn đầu tư',
        meta: { title: 'Tư vấn đầu tư', icon: 'handshake', affix: true }
      }
    ]
  },
  {
    path: '/prices',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: '',
        component: () => import('@/views/services/prices/index'),
        name: 'Bảng giá',
        meta: { title: 'Bảng giá', icon: 'tooltip', affix: true }
      }
    ]
  },
  {
    path: '/contact',
    component: Layout,
    redirect: 'noRedirect',
    children: [
      {
        path: '',
        component: () => import('@/views/services/contact/index'),
        name: 'Liên hệ',
        meta: { title: 'Liên hệ', icon: 'contact', affix: true }
      }
    ]
  },
  {
    path: '/admin',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Quản trị',
    meta: {
      title: 'Quản trị',
      icon: 'component',
      roles: ['admin']
    },
    children: [
      {
        path: 'customer',
        component: () => import('@/views/customer/index'),
        name: 'Khách hàng',
        meta: { title: 'Khách hàng', icon: 'peoples', affix: true }
      },
      {
        path: 'employee',
        component: () => import('@/views/employee/index'),
        name: 'Nhân viên',
        meta: { title: 'Nhân viên', icon: 'user', affix: true }
      },
      {
        path: 'license',
        component: () => import('@/views/license/index'),
        name: 'License',
        meta: { title: 'License', icon: 'skill', affix: true }
      }
    ]
  },
  // {
  //   path: '/profile',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'Thông tin',
  //   meta: {
  //     title: 'Thông tin',
  //     icon: 'component'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('@/views/customer/index'),
  //       name: 'Thông tin',
  //       meta: { title: 'Thông tin', icon: 'user', affix: true }
  //     }
  //   ]
  // },
  {
    path: '/ext-chrome-guide',
    component: Layout,
    hidden: true,
    redirect: '',
    children: [
      {
        path: '',
        component: () => import('@/views/guide-extension-chrome/index'),
        name: 'Guide',
        meta: { title: 'SmartTrading - Tín hiệu phái sinh', icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/copytrade-ext-guide',
    component: Layout,
    hidden: true,
    redirect: '',
    children: [
      {
        path: '',
        component: () => import('@/views/copytrade-ext-guide/index'),
        name: 'Guide CopyTrade',
        meta: { title: 'Công cụ CopyTrade', icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/permission',
    component: Layout,
    hidden: true,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  },

  {
    path: '/error',
    component: Layout,
    hidden: true,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'log',
        component: () => import('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: { title: 'Error Log', icon: 'bug' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
