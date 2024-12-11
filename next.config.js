const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // providerImportSource: "@mdx-js/react", // Descomentar si usas MDXProvider
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Extensiones de página
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  webpack(config) {
    // Agregar la configuración para @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

// Exportar la configuración combinada
module.exports = withMDX(nextConfig);