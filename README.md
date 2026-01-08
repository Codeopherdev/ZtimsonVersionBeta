# Ztimson - Landing Page

Landing page profesional para la banda de rock Ztimson con diseño moderno en negro y dorado pastel.

## 🎸 Características

- **Navegación con guitarra eléctrica**: Diseño único con cuerdas animadas y pickups interactivos
- **Video de fondo en loop**: Hero section con video de Burlesque
- **Efectos de humo**: Animaciones de humo dorado que suben por la pantalla
- **Paleta negro y dorado**: Diseño elegante y moderno
- **Totalmente responsive**: Adaptado para móviles, tablets y desktop
- **Animaciones suaves**: Efectos de scroll, hover y transiciones profesionales

## 📹 Cómo agregar el video de Burlesque

1. Coloca tu video en la carpeta del proyecto (por ejemplo: `burlesque.mp4`)
2. Abre el archivo `index.html`
3. Busca la línea con `<source src="" type="video/mp4">`
4. Actualízala con la ruta de tu video:

```html
<source src="burlesque.mp4" type="video/mp4">
```

### Recomendaciones para el video:
- **Formato**: MP4 (H.264)
- **Resolución**: 1920x1080 (Full HD)
- **Duración**: 10-30 segundos para loop
- **Peso**: Optimizado (máximo 10-15 MB para carga rápida)
- **Herramientas de compresión**: HandBrake, FFmpeg, o servicios online

### Comando FFmpeg para optimizar (opcional):
```bash
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 2M -b:a 128k burlesque.mp4
```

## 🚀 Uso

Simplemente abre `index.html` en tu navegador. No requiere servidor web.

## 🎨 Personalización

### Colores
Los colores se definen en `styles.css` en las variables CSS:
```css
--primary-gold: #d4af37;
--gold-light: #f4e4b8;
--gold-dark: #b8941f;
--black: #000000;
```

### Contenido
- Edita el texto directamente en `index.html`
- Agrega imágenes de los integrantes en las secciones correspondientes
- Actualiza las fechas de giras y eventos

## 📱 Responsive

La página se adapta automáticamente a:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## ✨ Efectos Interactivos

- **Pickups de guitarra**: Click para vibrar las cuerdas
- **Links de navegación**: Hover para efecto de texto dorado
- **Botones**: Efectos de ripple y glow
- **Scroll**: Parallax en hero section
- **Contadores**: Animación de números en estadísticas

## 🎵 Nauri Films

Diseño creado para Ztimson - Burlesque (Homenaje a Saurom)

---

**Nota**: Para producción, considera usar un CDN para las fuentes y optimizar todos los assets.
