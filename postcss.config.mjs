import path from "node:path";
import { fileURLToPath } from "node:url";

/** Pin Tailwind resolution to this project — avoids parent-folder lookup in ~/Documents */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const config = {
  plugins: {
    "@tailwindcss/postcss": {
      base: projectRoot,
    },
  },
};

export default config;
