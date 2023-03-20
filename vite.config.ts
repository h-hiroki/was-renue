import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const pwaOptions = {
  injectRegister: "auto",
  registerType: "autoUpdate",
  includeAssets: [
    "favicon.ico",
    "robots.txt",
    "apple-touch-icon.png",
  ],
  manifest: {
    name: "WasRenue | \u30ef\u30b9\u30ec\u30cc",
    short_name: "\u30ef\u30b9\u30ec\u30cc",
    theme_color: "#89c3eb",
    lang: "ja",
    background_color: "#000000",
    display: "standalone",
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
} satisfies Partial<VitePWAOptions>;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(pwaOptions)],
});
