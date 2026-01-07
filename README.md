# PERCORP - Holding Empresarial

Página web oficial del holding PERCORP, diseñada para comunicar la visión, estrategia y arquitectura empresarial del grupo.

## 🚀 Tecnologías

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Animaciones y transiciones fluidas

## 📦 Instalación

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del Proyecto

```
PERCORP/
├── app/                      # App Router de Next.js
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página de inicio
│   └── globals.css          # Estilos globales
├── components/
│   ├── sections/            # Componentes de secciones
│   │   ├── Hero.tsx
│   │   ├── QuienesSomos.tsx
│   │   ├── ArquitecturaEmpresarial.tsx
│   │   ├── NuestrasEmpresas.tsx
│   │   ├── NuestroModelo.tsx
│   │   ├── Filosofia.tsx
│   │   ├── Sectores.tsx
│   │   ├── ComoTrabajamos.tsx
│   │   └── CTAFinal.tsx
│   └── layout/              # Componentes de layout
│       └── Footer.tsx
├── hooks/                   # Custom hooks
│   └── useInView.ts         # Hook para animaciones al hacer scroll
└── public/                  # Archivos estáticos

```

## 🎨 Secciones de la Web

1. **Hero** - Presentación principal del holding
2. **Quiénes Somos** - Descripción institucional
3. **Arquitectura Empresarial** - Las dos empresas del grupo
4. **Nuestras Empresas** - Cards destacadas de cada empresa
5. **Nuestro Modelo** - Design, Build, Operate
6. **Filosofía** - Las 4 Corrientes (Energía, Conectividad, Automatización, Sostenibilidad)
7. **Sectores** - Industrias que atendemos
8. **Cómo Trabajamos** - Nuestro approach
9. **CTA Final** - Llamada a la acción para contacto
10. **Footer** - Información corporativa y enlaces

## 🎯 Características

- ✅ Diseño responsivo (mobile-first)
- ✅ Animaciones suaves con Framer Motion
- ✅ Scroll suave entre secciones
- ✅ Optimizado para SEO
- ✅ Tipografía Inter de Google Fonts
- ✅ Paleta de colores corporativa
- ✅ Componentes reutilizables

## 🛠️ Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 📱 Responsividad

El sitio está optimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🎨 Paleta de Colores

- **Primary**: `#1a1a1a` (Negro corporativo)
- **Accent**: `#0066ff` (Azul PERCORP)
- **Corporate Gray**: `#f5f5f5` (Gris claro)
- **White**: `#ffffff`

## 📄 Licencia

© 2024 PERCORP Holding. Todos los derechos reservados.

