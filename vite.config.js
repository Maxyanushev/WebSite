import { defineConfig } from 'vite'
import { resolve } from 'path'
import { copyFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

// Плагин для копирования всех HTML файлов и необходимых ресурсов
const copyHtmlFiles = () => {
  return {
    name: 'copy-html-files',
    writeBundle() {
      // Копируем все HTML файлы (кроме index.html, который обрабатывается Vite)
      const htmlFiles = readdirSync('.').filter(file => 
        file.endsWith('.html') && file !== 'index.html'
      )
      
      htmlFiles.forEach(file => {
        const src = join(process.cwd(), file)
        const dest = join(process.cwd(), 'dist', file)
        copyFileSync(src, dest)
      })
      
      // Копируем styles.css и script.js, которые используются в HTML файлах
      const assetsToCopy = ['styles.css', 'script.js']
      assetsToCopy.forEach(file => {
        try {
          const src = join(process.cwd(), file)
          const dest = join(process.cwd(), 'dist', file)
          if (statSync(src).isFile()) {
            copyFileSync(src, dest)
          }
        } catch (err) {
          // Файл не найден, пропускаем
        }
      })
    }
  }
}

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  plugins: [copyHtmlFiles()]
})

