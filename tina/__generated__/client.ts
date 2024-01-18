import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/8cbfce63-d699-4e85-800f-3a7860011e08/github/gh-pages', token: '32a3583db48d4724b60a41eac512e07687271f06', queries,  });
export default client;
  