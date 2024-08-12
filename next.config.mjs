import withPWA from 'next-pwa';

const nextConfig = {
};

export default withPWA({
  ...nextConfig,
  dest: 'public', // Where the service worker file will be generated
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
});
