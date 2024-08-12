import withPWA from 'next-pwa';

const nextConfig = {
  output: 'export',
  pwa: {
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
    // No need for dest or swDest with the latest versions
  },
};

export default withPWA(nextConfig);
