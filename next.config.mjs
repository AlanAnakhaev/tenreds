import withPWA from "@ducanh2912/next-pwa";
import { withExport } from "next-export"; // This is for handling static export

const pwaConfig = withPWA({
  dest: "public",
  // Any additional PWA config options you need
});

const nextConfig = {
  // Ensure export mode is enabled
  output: "export",
  // You might need to add other Next.js configuration options here
};

export default withExport(withPWA(nextConfig, pwaConfig));
