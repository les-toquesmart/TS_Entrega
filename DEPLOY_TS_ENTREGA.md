# Deployment correcto — TS_Entrega

URL final:
https://les-toquesmart.github.io/TS_Entrega/

## Estructura obligatoria en la raíz del repositorio

La raíz del repositorio debe contener directamente:

- package.json
- package-lock.json
- vite.config.ts
- index.html
- src/
- public/
- .github/workflows/deploy.yml

No debe existir una carpeta adicional que contenga todo el proyecto.

## Configuración de GitHub Pages

Settings → Pages → Source: GitHub Actions

## Publicar

1. Sustituye TODO el contenido actual del repositorio por este proyecto.
2. No subas node_modules ni dist.
3. Commit y push a main.
4. En Actions abre "Deploy Toque Smart Entregas".
5. Confirma que pasen en verde Build, Verify build output y Deploy.
6. Abre exactamente:
   https://les-toquesmart.github.io/TS_Entrega/?v=4

## Si aparece una página en blanco

Comprueba que estas URLs abran en el navegador:

- https://les-toquesmart.github.io/TS_Entrega/manifest.webmanifest
- https://les-toquesmart.github.io/TS_Entrega/assets/logo-white.png

Si alguna devuelve 404, los archivos no están en la raíz correcta o se publicó otro workflow.

## Caché del iPad

Después de confirmar que funciona en una ventana privada:

1. Elimina la app anterior de la pantalla de inicio.
2. Ajustes → Safari → Avanzado → Datos de sitios web.
3. Elimina los datos de les-toquesmart.github.io.
4. Abre la URL en Safari.
5. Compartir → Añadir a pantalla de inicio.
