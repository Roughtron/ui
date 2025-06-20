import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@general': path.resolve(__dirname, './src/components/general'),
      '@form': path.resolve(__dirname, './src/components/form'),
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [{
        src: './src/icons',
        dest: ''
      }]
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
      customDomId: '__svg__icons__dom__',
    }),
    vue(),
    dts({
      insertTypesEntry: true,
      include: ['src'],
      tsconfigPath: './tsconfig.app.json',
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ui-kit',
      fileName: (format) => `ui-kit.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
