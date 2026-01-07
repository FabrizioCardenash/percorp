# Fuentes del Proyecto PERCORP

Este directorio contiene las fuentes tipográficas del proyecto.

## Fuentes Requeridas

### 1. Neue Machina (Títulos y Headers)

**Fuente:** Neue Machina de Pangram Pangram Foundation

**Archivos necesarios:**
- `NeueMachina-Light.woff2` (weight: 300)
- `NeueMachina-Regular.woff2` (weight: 400)
- `NeueMachina-Medium.woff2` (weight: 500)
- `NeueMachina-Bold.woff2` (weight: 700)
- `NeueMachina-Ultrabold.woff2` (weight: 800)

**Dónde obtenerla:**
- Oficial: https://pangrampangram.com/products/neue-machina
- La versión gratuita incluye Regular y Bold

### 2. Aptos (Cuerpo de texto)

**Fuente:** Aptos de Microsoft (diseñada por Steve Matteson)

**Archivos necesarios:**
- `Aptos-Regular.woff2` (weight: 400)
- `Aptos-Medium.woff2` (weight: 500)
- `Aptos-SemiBold.woff2` (weight: 600)
- `Aptos-Bold.woff2` (weight: 700)

**Dónde obtenerla:**
- Adobe Fonts: https://fonts.adobe.com/fonts/aptos
- Incluida en Microsoft 365 y Windows 11

## Instrucciones de Instalación

1. Descarga las fuentes desde las fuentes oficiales
2. Convierte a formato WOFF2 si es necesario (usar https://cloudconvert.com/ttf-to-woff2)
3. Coloca los archivos .woff2 en este directorio (`/public/fonts/`)
4. Descomenta el código de fuentes locales en `/app/layout.tsx`
5. Comenta o elimina las fuentes de Google Fonts (fallback)

## Fallback Actual

Mientras no se tienen las fuentes originales, el proyecto usa:
- **Space Grotesk** (Google Fonts) - Similar a Neue Machina
- **DM Sans** (Google Fonts) - Similar a Aptos

## Licencias

⚠️ **Importante:** Asegúrate de tener las licencias apropiadas para uso comercial antes de usar las fuentes en producción.

- Neue Machina: Licencia comercial requerida
- Aptos: Disponible vía Adobe Fonts o licencia Microsoft

