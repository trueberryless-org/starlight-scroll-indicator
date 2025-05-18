import type { StarlightPlugin } from "@astrojs/starlight/types";

import { overrideStarlightComponent } from "./libs/starlight";

export default function starlightScrollIndicator(): StarlightPlugin {
  return {
    name: "starlight-scroll-indicator",
    hooks: {
      "config:setup"({ config: starlightConfig, logger, updateConfig }) {
        updateConfig({
          customCss: [
            ...(starlightConfig.customCss ?? []),
            "starlight-scroll-indicator/styles.css",
          ],
          components: {
            ...starlightConfig.components,
            ...overrideStarlightComponent(
              starlightConfig.components,
              logger,
              "Header",
              "Header"
            ),
          },
        });
      },
    },
  };
}
