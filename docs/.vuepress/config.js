module.exports = {
  title: "标题",
  description: "blogs",
  head: [
    /**
     * 这里一般引入css，js以及一些头部相关的内容，例如图标
     * 静态资源一般会找public文件，所以注意使用的/指向就是public文件夹
     */
    //即在header上添加<link rel="icon" href="/logo.jpg"></link>
    ["link", { rel: "icon", href: "/img/logo.jpg" }], // 增加一个自定义的 favicon(网页标签的图标)
    // 样式引入<link rel="stylesheet" href="">
    ["link", { rel: "stylesheet", href: "/css/test.css" }],
    // 样式js<script src=""></script>
    ["script", { src: "/js/index.js" }],
  ],
  serviceWorker: true, // 是否开启 PWA
  base: "/my-vuepress-blogs/", // 这是部署到github相关的配置
  dest: "./dist", //配置生成dist文件夹的路径(当前路径下，即和docs同级)，默认为在.vuepress文件夹中生成
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },
  themeConfig: {
    nav: [
      /**
       * 头部的导航栏
       * text: 导航栏的名称
       * link: 添加link则为可以点击，注意link的值只是一个路由的路径，匹配对应sidebar上的路由路径，然后找到对应的md文件进行显示
       * items: 表示子层级菜单，可以无限嵌套
       */
      // 导航栏配置
      // {
      //   text: "前端基础",
      //   link: "/base/",
      //   items: [
      //     {
      //       text: "基础1",
      //       link: "/base/one/one",
      //     },
      //   ],
      // },
    ],
    /**
     * 侧边栏设置
     */
    sidebar: {
      '/': [
        '',
        {
          title: '表格',   // 必要的
          path: '/table/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            'table/elTable/',//如果使用readme.md默认文件需要带/
          ]
        },
        // {
        //   title: 'Group 2',   // 必要的
        //   path: '/guides/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //   collapsable: false, // 可选的, 默认值是 true,
        //   sidebarDepth: 1,    // 可选的, 默认值是 1
        //   children: [
        //     'guides/basics/setup',
        //     'guides/a'
        //   ]
        // },
        ]
    },
    sidebarDepth: 2, // 侧边栏显示2级
  },
};
