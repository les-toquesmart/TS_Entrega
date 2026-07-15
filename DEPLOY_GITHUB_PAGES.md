# Publicar en GitHub Pages — repositorio TS_Entrega

Este proyecto está configurado específicamente para:

https://les-toquesmart.github.io/TS_Entrega/

## Estructura requerida en la raíz del repositorio

La raíz de `TS_Entrega` debe contener directamente:

- `.github/workflows/deploy.yml`
- `src/`
- `public/`
- `api/`
- `index.html`
- `package.json`
- `package-lock.json`
- `vite.config.ts`
- archivos `tsconfig...`

No coloques todo dentro de otra carpeta como `toquesmart-entregas-react/`.

## Configuración de GitHub Pages

1. Abre el repositorio `TS_Entrega`.
2. Settings → Pages.
3. En **Source**, selecciona **GitHub Actions**.
4. Ve a Actions.
5. Abre `Deploy React app to GitHub Pages`.
6. Espera que Build y Deploy aparezcan en verde.
7. Abre https://les-toquesmart.github.io/TS_Entrega/

## Si aparece una versión vieja

1. Elimina la app de la pantalla de inicio del iPad.
2. Ajustes → Safari → Avanzado → Datos de sitios web.
3. Busca `github.io` y elimina esos datos.
4. Abre la URL otra vez en Safari.
5. Solo después de verificarla, usa Compartir → Añadir a pantalla de inicio.
