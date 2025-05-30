import starlight from "@astrojs/starlight";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";
import { defineConfig } from "astro/config";
import starlightScrollIndicator from "starlight-scroll-indicator";

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl:
          "https://github.com/trueberryless-org/starlight-scroll-indicator/edit/main/docs/",
      },
      plugins: [
        starlightScrollIndicator(),
        starlightPluginsDocsComponents({
          pluginName: "starlight-scroll-indicator",
        }),
      ],
      sidebar: [
        {
          label: "Start Here",
          items: ["getting-started"],
        },
      ],
      social: [
        {
          href: "https://bsky.app/profile/trueberryless.org",
          icon: "blueSky",
          label: "BlueSky",
        },
        {
          href: "https://github.com/trueberryless-org/starlight-scroll-indicator",
          icon: "github",
          label: "GitHub",
        },
      ],
      title: "Starlight Scroll Indicator",
    }),
  ],
});
