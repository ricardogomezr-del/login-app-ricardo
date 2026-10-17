# Login App - Ricardo Andres Gomez Ruiz

Proyecto integrador individual del taller **Git y GitHub** de CECAR.

## Estrategia de ramas: GitHub Flow

Elegí **GitHub Flow** porque este proyecto es pequeño y los cambios se pueden
revisar rápidamente en ramas de funcionalidad que luego se integran a `main`.
`main` contiene la versión lista para presentar; cada funcionalidad nace en
`feature/*` y se integra mediante una fusión. En un equipo se usaría un Pull
Request con revisión, pero **la revisión por compañero se omitió por ser una
entrega individual**. El historial conserva una fusión `--no-ff` que permite
identificar el trabajo de la rama.

## Uso

Abrir `index.html` directamente en un navegador moderno. No necesita servidor
ni dependencias externas. Ingresar datos de demostración no autentica usuarios
reales: la validación es solo del navegador, comprueba campos vacíos y muestra
un resultado visual. **No enviar contraseñas reales.**

## Estructura

- `index.html`: estructura accesible del formulario.
- `styles.css`: presentación responsiva.
- `script.js`: validación de usuario y contraseña vacíos.
- `.gitignore`: protege archivos locales y temporales.
- `.github/workflows/ci.yml`: verifica los archivos del proyecto en cada push
  a `main` y en cada PR hacia `main`.

## Commits y versión

La funcionalidad se creó en `feature/formulario-login-ricardo` con commits
`feat:`, `style:`, `feat:` y `fix:`. Se integró individualmente en `main`.
La versión terminada se identifica como `v1.0.0`.
