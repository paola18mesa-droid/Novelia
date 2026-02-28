# 💕 NOVELIA — Guía de Lanzamiento

## PASO 1 — Crea tu cuenta en GitHub
1. Ve a **github.com**
2. Haz clic en "Sign up"
3. Crea tu cuenta gratis

## PASO 2 — Sube el proyecto a GitHub
1. En GitHub, haz clic en el botón verde **"New"** (repositorio nuevo)
2. Nómbralo: `novelia`
3. Marca como **Public**
4. Haz clic en **"Create repository"**
5. Sube todos los archivos de esta carpeta arrastrándolos

## PASO 3 — Obtén tu API Key de Anthropic
1. Ve a **console.anthropic.com**
2. Crea tu cuenta
3. Ve a "API Keys" → "Create Key"
4. Copia la clave (empieza con `sk-ant-...`)
5. Guárdala en un lugar seguro

## PASO 4 — Crea tu cuenta en Vercel
1. Ve a **vercel.com**
2. Haz clic en "Sign up with GitHub"
3. Autoriza la conexión

## PASO 5 — Despliega la app
1. En Vercel, haz clic en **"New Project"**
2. Selecciona tu repositorio `novelia`
3. Haz clic en **"Deploy"**
4. Espera 2 minutos ⏳

## PASO 6 — Agrega tu API Key (MUY IMPORTANTE)
1. En Vercel, ve a tu proyecto → **Settings** → **Environment Variables**
2. Haz clic en **"Add New"**
3. Name: `ANTHROPIC_API_KEY`
4. Value: pega tu clave `sk-ant-...`
5. Haz clic en **Save**
6. Ve a **Deployments** → haz clic en los 3 puntos → **Redeploy**

## PASO 7 — ¡Listo! 🎉
Vercel te da una URL como: `novelia-abc123.vercel.app`
¡Compártela con el mundo!

---

## Contraseña del Panel Admin
La contraseña por defecto es: **novelia2024**
Para cambiarla, edita la línea 3 del archivo `src/App.jsx`

---

## Costos estimados
- GitHub: **GRATIS**
- Vercel: **GRATIS**
- Anthropic API: ~$0.02 por historia generada
- Dominio (opcional): ~$12/año en namecheap.com
