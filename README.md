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

Las capturas publicadas se guardan en `assets/screenshots/`. Antes de incorporar nuevas imágenes hay que comprobar que no contienen nombres ni otros datos personales identificables.

## Publicación

GitHub Pages publica directamente el contenido de la raíz de `main`.

Dominios previstos:

- `cta.elrocho.es`: portada del ecosistema.
- `offline.cta.elrocho.es`: edición individual offline.

No debe añadirse un archivo `CNAME` hasta que se coordine el cambio DNS, porque `cta.elrocho.es` continúa sirviendo la instalación autoalojada actual.

## Licencia

MIT.
