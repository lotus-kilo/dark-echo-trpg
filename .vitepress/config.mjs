import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto-sidebar.mjs";
// https://vitepress.dev/reference/site-config  
export default defineConfig({
  title: "黯淡回响无限流trpg",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    base: "/dark echo trpg/",
       // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    nav: [
      { text: '首页', items:[
        {text:"介绍",link: '/'},
        {text:"游玩须知",link: '/'},
      ]  },
      { text: '规则', items:[
        {text:"规则书",link: '/role_book'},
      ]  },
      { text: '资源库', items:[
        {text:"血统",link: '/'},
        {text:"职业",link: '/'},
        {text:"近战武器",link: '/'},
      ]  },
      { text: '设定集', link: '/markdown-examples' }
    ],

    sidebar: 
      {
        "/role_book":set_sidebar("/role_book"),
        "/rourse_book":set_sidebar("/rourse_book"),
      }
    ,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
  
})

