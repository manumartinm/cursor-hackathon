'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [apiResponse, setApiResponse] = useState<{ message: string; timestamp: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchApi = async () => {
    setLoading(true)
    try {
      // La API estará en el mismo dominio en Vercel
      // En desarrollo local con vercel dev, también funcionará
      const response = await fetch('/api/hello?name=Next.js')
      const data = await response.json()
      setApiResponse(data)
    } catch (error) {
      console.error('Error fetching API:', error)
      setApiResponse({
        message: 'Error al conectar con la API',
        timestamp: new Date().toISOString()
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Bienvenido a <span className={styles.highlight}>Next.js</span>
          </h1>
          <p className={styles.description}>
            Proyecto frontend listo para desplegar en Vercel
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>🚀 Rápido</h2>
            <p>Next.js ofrece rendimiento optimizado con React Server Components y optimizaciones automáticas.</p>
          </div>

          <div className={styles.card}>
            <h2>⚡️ Moderno</h2>
            <p>Construido con TypeScript, App Router y las últimas características de React.</p>
          </div>

          <div className={styles.card}>
            <h2>🌐 Vercel Ready</h2>
            <p>Configurado para desplegarse fácilmente en Vercel con un solo comando.</p>
          </div>

          <div className={styles.card}>
            <h2>🔧 Flexible</h2>
            <p>Compatible con API routes y funciones serverless existentes en /api.</p>
          </div>
        </div>

        <div className={styles.apiSection}>
          <button 
            className={styles.button}
            onClick={fetchApi}
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Probar API'}
          </button>

          {apiResponse && (
            <div className={styles.apiResponse}>
              <p><strong>Mensaje:</strong> {apiResponse.message}</p>
              <p><strong>Timestamp:</strong> {apiResponse.timestamp}</p>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <p>
            Comienza editando <code className={styles.code}>app/page.tsx</code>
          </p>
        </div>
      </div>
    </main>
  )
}

