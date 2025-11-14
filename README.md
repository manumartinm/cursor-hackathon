# Proyecto Hackathon

Proyecto full-stack con API FastAPI (backend) y Next.js (frontend) desplegado en Vercel.

## 📁 Estructura del Proyecto

```
.
├── api/                    # Backend - API FastAPI
│   ├── app.py             # Aplicación FastAPI principal
│   └── pyproject.toml     # Dependencias de Python (uv)
├── frontend/              # Frontend - Next.js
│   ├── app/               # App Router de Next.js
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── page.module.css
│   │   └── globals.css
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.js
├── package.json           # Scripts del proyecto raíz
├── vercel.json            # Configuración de Vercel
└── README.md
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ y npm
- Python 3.9 o superior
- uv (gestor de paquetes Python) - [Instalación](https://github.com/astral-sh/uv)
- Vercel CLI (opcional, para desarrollo local)

### Instalación

1. **Instalar dependencias del frontend:**
```bash
npm run install:frontend
```

2. **Instalar dependencias de Python (opcional, para desarrollo local):**
```bash
cd api
uv sync
```

O si prefieres usar un entorno virtual tradicional:
```bash
cd api
uv venv
source .venv/bin/activate  # En Windows: .venv\Scripts\activate
uv pip install -e .
```

### Desarrollo Local

#### Opción 1: Desarrollo con Vercel CLI (Recomendado)

Ejecuta ambos servicios (API y Frontend) juntos:

```bash
vercel dev
```

Esto iniciará un servidor en `http://localhost:3000` que simula el entorno de Vercel.

#### Opción 2: Desarrollo Separado

**Frontend (Next.js):**
```bash
npm run dev:frontend
# O directamente:
cd frontend && npm run dev
```
Frontend disponible en `http://localhost:3000`

**Backend (FastAPI):**
```bash
npm run dev:api
# O directamente:
cd api && python app.py
# O con uvicorn directamente:
cd api && uvicorn app:app --reload --port 5000
```
API disponible en `http://localhost:5000`

### Build

Para construir el frontend:

```bash
npm run build:frontend
```

## 🌐 Despliegue en Vercel

### Despliegue Automático

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente la configuración en `vercel.json`
3. Los despliegues se harán automáticamente en cada push

### Despliegue Manual

1. Inicia sesión en Vercel:
```bash
vercel login
```

2. Despliega el proyecto:
```bash
vercel
```

Para producción:
```bash
vercel --prod
```

## 🔗 Endpoints de la API

- `GET /` - Endpoint principal con información de estado
- `GET /api/hello?name=TuNombre` - Endpoint de ejemplo con parámetro
- `GET /api/health` - Health check endpoint

## 🛠️ Scripts Disponibles

- `npm run dev` - Ejecuta Vercel dev (API + Frontend)
- `npm run dev:frontend` - Ejecuta solo el frontend en modo desarrollo
- `npm run dev:api` - Ejecuta solo la API en modo desarrollo
- `npm run build:frontend` - Construye el frontend para producción
- `npm run install:frontend` - Instala dependencias del frontend

## 📝 Configuración

### vercel.json

El archivo `vercel.json` está configurado para:
- Servir la API FastAPI desde `/api/*` usando `@vercel/python` con Mangum
- Servir el frontend Next.js desde `/` usando `@vercel/next`

### Variables de Entorno

Las variables de entorno se pueden configurar en el dashboard de Vercel o en un archivo `.env.local` para desarrollo local.

## 🛠️ Tecnologías

### Backend
- Python 3.9+
- FastAPI 0.104+
- Uvicorn (ASGI server)
- Mangum (adapter para Vercel)
- Vercel Serverless Functions

### Frontend
- Next.js 14
- React 18
- TypeScript
- App Router

## 📚 Referencias

- [Guía de FastAPI en Vercel](https://vercel.com/docs/frameworks/backend/fastapi)
- [Documentación de FastAPI](https://fastapi.tiangolo.com/)
- [Guía de Next.js en Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Documentación de Next.js](https://nextjs.org/docs)
