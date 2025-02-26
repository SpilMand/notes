import { defineConfig } from "vite";

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/notes/' : '/',
});
