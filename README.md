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

Las imágenes definitivas se guardarán en `assets/screenshots/`. Antes de publicarlas hay que comprobar que no contienen nombres, mediciones ni otros datos personales.

## Publicación

GitHub Pages publica directamente el contenido de la raíz de `main`.

## Licencia

MIT.
