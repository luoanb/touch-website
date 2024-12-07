export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "快速点击助手",
  description: "Chrome插件 - 网页快捷操作助手, 可实现短时间内快手连续点击加速.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    download: "/touch-more.crx",
    installation: "https://get.qiaobuqiao.com/post-600",
    installationEdge: "https://microsoftedge.microsoft.com/addons/detail/touch-more-%E5%BF%AB%E6%8D%B7%E7%82%B9%E5%87%BB%E5%8A%A9%E6%89%8B/ominbbkclhjiamieoobfmebjfblbeode?hl=zh-CN"
  },
  browserLinks: {
    edge: 'https://www.microsoft.com/en-us/edge/download?form=MA13FJ',
    safe360: 'https://browser.360.cn/se/channel_2.html?package=sembg100031&msclkid=5421c54f5a441e41e3b6a21ca2d72713',
    chrome: 'https://www.google.com/intl/zh-CN/chrome/',
    lemur: 'https://lemurbrowser.com/new_version_test/app/zh.html',
  }
};
