# DataPortfolio Angular — Guía de Instalación y Estructura

## Stack Tecnológico
- **Angular 19** (Standalone Components)
- **Tailwind CSS v4** (vía PostCSS)
- **Lucide Angular** para iconografía
- **JetBrains Mono + DM Sans** para tipografía

---

## Instalación Paso a Paso

```bash
# 1. Descomprimir el proyecto
unzip data-portfolio-angular.zip
cd data-portfolio

# 2. Instalar dependencias
npm install

# 3. Arrancar en modo desarrollo
ng serve
# → http://localhost:4200

# 4. Build de producción
ng build --configuration=production
```

---

## Estructura de `/src`

```
src/
├── index.html                         # HTML base con Google Fonts
├── main.ts                            # Bootstrap de la aplicación
├── styles.css                         # Tokens CSS globales + Tailwind
└── app/
    ├── app.ts                         # Root component (standalone)
    ├── app.config.ts                  # provideRouter, provideZoneChangeDetection
    ├── app.routes.ts                  # Rutas (vacías, SPA de una página)
    └── components/
        ├── navbar/
        │   ├── navbar.ts              # Scroll listener, menú responsive
        │   ├── navbar.html
        │   └── navbar.css
        ├── hero/
        │   ├── hero.ts                # Typewriter effect, stats, CTAs
        │   ├── hero.html
        │   └── hero.css
        ├── projects/
        │   ├── projects.ts            # Grid filtrable por categoría
        │   ├── projects.html
        │   └── projects.css
        ├── experience/
        │   ├── experience.ts          # Timeline profesional
        │   ├── experience.html
        │   └── experience.css
        ├── education/
        │   ├── education.ts           # Titulaciones + Certificaciones
        │   ├── education.html
        │   └── education.css
        └── contact/
            ├── contact.ts             # Formulario con estado de envío
            ├── contact.html
            └── contact.css
```

---

## Tokens de Diseño (`styles.css`)

| Variable                | Valor          | Uso                          |
|-------------------------|----------------|------------------------------|
| `--color-bg-primary`    | `#050A12`      | Fondo base                   |
| `--color-bg-secondary`  | `#0C1422`      | Secciones alternas           |
| `--color-bg-card`       | `#0D1B2A`      | Tarjetas                     |
| `--color-accent`        | `#00E5FF`      | Azul eléctrico principal     |
| `--color-emerald`       | `#00C896`      | Verde esmeralda secundario   |
| `--color-text-primary`  | `#E8F4FF`      | Texto principal              |
| `--color-text-secondary`| `#7A9BB8`      | Texto secundario             |
| `--font-display`        | DM Sans        | Headings y body              |
| `--font-mono`           | JetBrains Mono | Código, badges, metadatos    |

---

## Personalización de Contenido

### Perfil (`hero.ts`)
Edita el array `stats[]` y los textos en `hero.html`:
```typescript
stats = [
  { value: '12+', label: 'Proyectos en Producción' },
  // ...
];
```

### Proyectos (`projects.ts`)
Edita el array `projects[]`:
```typescript
{
  title: 'Nombre del proyecto',
  longDesc: 'Descripción detallada...',
  stack: ['Python', 'Spark', 'GCP'],
  category: 'ML/IA',           // Filtrará por categoría
  stars: 248, forks: 67,
  githubUrl: 'https://github.com/...',
  colabUrl: 'https://colab.research.google.com/...',  // opcional
  featured: true,              // opcional, añade borde accent
}
```

### Experiencia (`experience.ts`) y Educación (`education.ts`)
Edita los arrays `experiences[]`, `educations[]` y `certifications[]` directamente.

### Contacto (`contact.ts`)
Para conectar el formulario a un servicio real (Formspree, EmailJS, etc.):
```typescript
async onSubmit(): Promise<void> {
  this.isSubmitting = true;
  await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(this.formData),
  });
  this.isSubmitting = false;
  this.submitted = true;
}
```

---

## Animaciones

Las animaciones de scroll usan **IntersectionObserver** con la clase CSS `.reveal`:
- Añade `class="reveal"` a cualquier elemento para que aparezca al hacer scroll
- Usa `reveal-delay-1/2/3/4` para retardos escalonados
- Las clases `.animate-fade-up-delay1/2/3/4` son para animaciones de carga inicial (Hero)

---

## Dependencias clave (`package.json`)

```json
{
  "dependencies": {
    "@angular/core": "^19.x",
    "lucide-angular": "^1.0.0",
    "tailwindcss": "^4.3.0"
  },
  "devDependencies": {
    "@angular/cli": "^19.x",
    "@tailwindcss/postcss": "^4.x"
  }
}
```
