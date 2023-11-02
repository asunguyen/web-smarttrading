import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

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
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/market',
    component: Layout,
    // redirect: '/dashboard',
    children: [
      {
        path: '',
        component: () => import('@/views/market/index'),
        name: 'Thị trường',
        meta: { title: 'Thị trường', icon: 'international', affix: true }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: 'Documentation', icon: 'documentation', affix: true }
      }
    ]
  },
  {
    path: '/ai-trading',
    component: Layout,
    redirect: 'noRedirect',
    name: 'AI Trading Robot',
    meta: {
      title: 'AI Trading Robot',
      icon: 'el-icon-s-data'
    },
    children: [
      {
        path: 'robot-derivative/free',
        component: () => import('@/views/ai-trading-robot/derivative-robot/index'),
        name: 'Robot phái sinh Free',
        meta: { title: 'Robot phái sinh Free', icon: 'el-icon-cpu', affix: true }
      },
      {
        path: 'robot-derivative/scrape',
        component: () => import('@/views/ai-trading-robot/derivative-robot/index'),
        name: 'Robot phái sinh Scrape',
        meta: { title: 'Robot phái sinh Scrape', icon: 'el-icon-cpu', affix: true }
      },
      {
        path: 'robot-derivative/trend',
        component: () => import('@/views/ai-trading-robot/derivative-robot/index'),
        name: 'Robot phái sinh Trend',
        meta: { title: 'Robot phái sinh Trend', icon: 'el-icon-cpu', affix: true }
      },
      {
        path: 'robot-base/free',
        component: () => import('@/views/ai-trading-robot/base-robot/index'),
        name: 'Robot cơ sở Free',
        meta: { title: 'Robot cơ sở Free', icon: 'bug', affix: true }
      },
      {
        path: 'robot-base/t-plus',
        component: () => import('@/views/ai-trading-robot/base-robot/index'),
        name: 'Robot cơ sở T+',
        meta: { title: 'Robot cơ sở T+', icon: 'bug', affix: true }
      },
      {
        path: 'robot-base/trend',
        component: () => import('@/views/ai-trading-robot/base-robot/index'),
        name: 'Robot cơ sở Trend',
        meta: { title: 'Robot cơ sở Trend', icon: 'bug', affix: true }
      }
    ]
  },
  {
    path: '/products',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Sản phẩm',
    meta: {
      title: 'Sản phẩm',
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
    path: '/services',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Dịch vụ',
    meta: {
      title: 'Dịch vụ',
      icon: 'example'
    },
    children: [
      {
        path: 'training',
        component: () => import('@/views/services/training/index'),
        name: 'Đào tạo chứng khoán',
        meta: { title: 'Đào tạo chứng khoán', icon: 'el-icon-notebook-2', affix: true }
      },
      {
        path: 'advice',
        component: () => import('@/views/services/training/index'),
        name: 'Tư vấn đầu tư',
        meta: { title: 'Tư vấn đầu tư', icon: 'money', affix: true }
      },
      {
        path: 'prices',
        component: () => import('@/views/services/prices/index'),
        name: 'Bảng giá',
        meta: { title: 'Bảng giá', icon: 'documentation', affix: true }
      },
      {
        path: 'contact',
        component: () => import('@/views/services/contact/index'),
        name: 'Liên hệ',
        meta: { title: 'Liên hệ', icon: 'el-icon-phone', affix: true }
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
      icon: 'component'
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
  {
    path: '/profile',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Thông tin',
    meta: {
      title: 'Thông tin',
      icon: 'component'
    },
    children: [
      {
        path: '',
        component: () => import('@/views/customer/index'),
        name: 'Thông tin',
        meta: { title: 'Thông tin', icon: 'user', affix: true }
      }
    ]
  },
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
    path: '/guide',
    component: Layout,
    hidden: true,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: 'Guide', icon: 'guide', noCache: true }
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
    path: '/permission',
    component: Layout,
    // hidden: true,
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
    path: '/icon',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true }
      }
    ]
  },

  /** when your routing map is too long, you can split it into small modules **/
  componentsRouter,
  chartsRouter,
  nestedRouter,
  tableRouter,

  {
    path: '/example',
    component: Layout,
    hidden: true,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'CreateArticle',
        meta: { title: 'Create Article', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: 'ArticleList',
        meta: { title: 'Article List', icon: 'list' }
      }
    ]
  },

  {
    path: '/tab',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/tab/index'),
        name: 'Tab',
        meta: { title: 'Tab', icon: 'tab' }
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

  {
    path: '/excel',
    component: Layout,
    hidden: true,
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'Excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: () => import('@/views/excel/export-excel'),
        name: 'ExportExcel',
        meta: { title: 'Export Excel' }
      },
      {
        path: 'export-selected-excel',
        component: () => import('@/views/excel/select-excel'),
        name: 'SelectExcel',
        meta: { title: 'Export Selected' }
      },
      {
        path: 'export-merge-header',
        component: () => import('@/views/excel/merge-header'),
        name: 'MergeHeader',
        meta: { title: 'Merge Header' }
      },
      {
        path: 'upload-excel',
        component: () => import('@/views/excel/upload-excel'),
        name: 'UploadExcel',
        meta: { title: 'Upload Excel' }
      }
    ]
  },

  {
    path: '/zip',
    component: Layout,
    hidden: true,
    redirect: '/zip/download',
    alwaysShow: true,
    name: 'Zip',
    meta: { title: 'Zip', icon: 'zip' },
    children: [
      {
        path: 'download',
        component: () => import('@/views/zip/index'),
        name: 'ExportZip',
        meta: { title: 'Export Zip' }
      }
    ]
  },

  {
    path: '/pdf',
    component: Layout,
    hidden: true,
    redirect: '/pdf/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/pdf/index'),
        name: 'PDF',
        meta: { title: 'PDF', icon: 'pdf' }
      }
    ]
  },
  {
    path: '/pdf/download',
    component: () => import('@/views/pdf/download'),
    hidden: true
  },

  {
    path: '/theme',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/theme/index'),
        name: 'Theme',
        meta: { title: 'Theme', icon: 'theme' }
      }
    ]
  },

  {
    path: '/clipboard',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/clipboard/index'),
        name: 'ClipboardDemo',
        meta: { title: 'Clipboard', icon: 'clipboard' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: { title: 'External Link', icon: 'link' }
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
