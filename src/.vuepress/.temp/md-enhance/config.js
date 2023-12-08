import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "D:/home/github/ve-home-hope/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_reveal.js@5.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "D:/home/github/ve-home-hope/node_modules/.pnpm/vuepress-shared@2.0.0-rc.2_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "D:/home/github/ve-home-hope/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_reveal.js@5.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "D:/home/github/ve-home-hope/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_reveal.js@5.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/home/github/ve-home-hope/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_reveal.js@5.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "D:/home/github/ve-home-hope/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_reveal.js@5.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHint } from "D:/home/github/ve-home-hope/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_reveal.js@5.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "D:/home/github/ve-home-hope/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_reveal.js@5.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Playground from "D:/home/github/ve-home-hope/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_reveal.js@5.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import "D:/home/github/ve-home-hope/node_modules/.pnpm/reveal.js@5.0.2/node_modules/reveal.js/dist/reveal.css";
import RevealJs from "D:/home/github/ve-home-hope/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_reveal.js@5.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/RevealJs.js";
import { injectRevealJsConfig } from "D:/home/github/ve-home-hope/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_reveal.js@5.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Tabs from "D:/home/github/ve-home-hope/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.2_reveal.js@5.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Playground", Playground);
    injectRevealJsConfig(app);
    app.component("RevealJs", RevealJs);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
