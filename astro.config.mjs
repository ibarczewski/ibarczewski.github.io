import { defineConfig } from 'astro/config';
import { remarkDefinitionList, defListHastHandlers } from 'remark-definition-list';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkDefinitionList],
    remarkRehype: {
      handlers: {
        ...defListHastHandlers
      }
    }
  },
  integrations: [react()]
});