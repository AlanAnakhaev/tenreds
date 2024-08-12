import withPWA from "@ducanh2912/next-pwa";
import { withExport } from "next-export";

const pwaConfig = withPWA({
  dest: "public",
});

const nextConfig = {
  output: "export",
};

export default withExport(withPWA(nextConfig, pwaConfig));
