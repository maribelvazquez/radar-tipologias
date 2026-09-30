# Radar de Tipologías SOFIPO · GMC360 · LEX-QUO

Encuesta del stand para la 11ª Convención AMSOFIPO 2026: seis preguntas y datos de contacto, resultado en vivo, descarga del compendio y código para la taza.

## Qué hay aquí

| Archivo | Para qué |
|---|---|
| `index.html` | La encuesta pública (celular primero). |
| `admin.html` | Panel del equipo: entrar con Google, buscar por código o correo, marcar la taza como entregada y **Descargar Excel**. |
| `config.js` | **Lo único que se edita:** configuración del proyecto de Firebase del Radar y correos autorizados. |
| `preguntas.js` | Textos y opciones. Los `id` no se cambian. |
| `firestore.rules` | Reglas de seguridad del proyecto del Radar. Probadas en el emulador (14 de 14 casos). |
| `aviso-privacidad.html` | Aviso integral. |
| `Compendio_Tipologias_SOFIPOs.pdf` | El PDF que se descarga al final. |
| `img/qr-radar.png` | QR que apunta a `https://radar-sofipos.netlify.app`. |

## Puesta en marcha (20–30 minutos, una sola vez)

El Radar vive en **su propio proyecto de Firebase**, separado del Laboratorio de Casos y del taller.

1. **Crear el proyecto.** https://console.firebase.google.com → «Agregar proyecto», por ejemplo `radar-tipologias`. Google Analytics no hace falta.
2. **Crear la base.** Firestore Database → Crear base de datos → modo producción → ubicación `nam5` (Estados Unidos).
3. **Acceso con Google para el panel.** Authentication → Comenzar → Google → Habilitar.
4. **Registrar la app web.** Configuración del proyecto (engrane) → Tus apps → ícono `</>` → nombre `radar`. Copia el bloque `firebaseConfig` y pégalo en `config.js`, en lugar de los `PEGAR_AQUI`.
5. **Publicar las reglas.** Firestore Database → Reglas → borrar lo que haya, pegar `firestore.rules` → Publicar.
6. **Subir el sitio.** https://app.netlify.com/drop y arrastrar la carpeta `radar-sofipos` completa (ya con `config.js` editado).
7. **Nombre del sitio.** Netlify → Site configuration → Change site name → `radar-sofipos`. Debe quedar exactamente `radar-sofipos.netlify.app`, porque es la dirección del QR. Si está ocupado, se genera otro QR con el nombre que quede.
8. **Dominio para el panel.** Firebase → Authentication → Settings → Dominios autorizados → Agregar `radar-sofipos.netlify.app`.
9. **Probar.** Responder desde un celular con un correo de prueba, entrar a `radar-sofipos.netlify.app/admin.html`, ver que aparezca y descargar el Excel. Después, borrar el registro de prueba en Firestore (`radar_convencion`) y el documento `radar_stats/convencion-2026` completo, para que el conteo arranque en cero.

Mientras `config.js` diga `PEGAR_AQUI`, la encuesta muestra «Modo de prueba» y no guarda nada. Para ensayar sin guardar aun con Firebase configurado: `index.html?prueba=1`.

## Cómo funciona

- **Un registro por correo.** El documento se guarda con la huella del correo y las reglas no permiten sobrescribirlo. Si alguien responde dos veces, ve el mensaje de que ya participó y en el stand se le busca por correo.
- **Taza.** Cada participante recibe un código (por ejemplo `R-5QU5`). En el panel se busca el código y se toca «Pendiente» para marcarla como entregada.
- **Resultados en vivo.** `radar_stats/convencion-2026` guarda sólo conteos, sin datos personales. Es lo único que el público puede leer.
- **Información comercial.** Quien no quiera recibirla lo pide por correo, según el aviso de privacidad.
- **Entrar al panel desde celular.** `netlify.toml` sirve el inicio de sesión de Google desde el mismo dominio. Requiere, una sola vez, agregar `https://radar-sofipos.netlify.app/__/auth/handler` en Google Cloud → APIs y servicios → Credenciales → «Web client (auto created by Google Service)» → URIs de redireccionamiento autorizados.
