# Control Tensión Arterial — Sitio del ecosistema

Página pública que presenta y enlaza las tres variantes del proyecto:

- [Edición individual offline](https://github.com/el-rocho/cta-elrocho)
- [Servidor autoalojado](https://github.com/el-rocho/cta-elrocho-selfhosted)
- [Cliente Android y PWA](https://github.com/el-rocho/cta-elrocho-client-app)

## Desarrollo local

Es un sitio estático sin dependencias ni rastreadores:

```bash
python3 -m http.server 8080
```

Después, abre `http://127.0.0.1:8080`.

## Capturas

Las capturas publicadas se guardan en `assets/screenshots/`, una por edición. Antes de incorporar nuevas imágenes hay que comprobar que no contienen nombres ni otros datos personales identificables.

La cabecera usa además `assets/hero-aplicacion.webp`: la captura inclinada de la pantalla principal, en WebP con transparencia (77 KB frente a los 393 KB del PNG original, sin diferencia visible).

## Publicación

GitHub Pages publica directamente el contenido de la raíz de `main` en:

- [https://cta.elrocho.es/](https://cta.elrocho.es/)

Dominios del ecosistema:

- `cta.elrocho.es`: portada.
- `offline.cta.elrocho.es`: edición individual offline.
- `cliente.cta.elrocho.es`: cliente PWA para el servidor.
- `servidor-cta.elrocho.es`: instalación autoalojada.

## Licencia

MIT.
