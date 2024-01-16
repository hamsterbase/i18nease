import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "i18nEase",
  description: "i18nEase",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Store", link: "https://hamsterbase.com/store/" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          link: "/guide/",
          items: [
            { text: "Get started", link: "/guide/" },
            { text: "Commands", link: "/guide/commands" },
            { text: "Config", link: "/guide/config" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/hamsterbase/i18nease" },
    ],
  },
});
