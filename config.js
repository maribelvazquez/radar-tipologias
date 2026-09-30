// ============================================================
// CONFIGURACIÓN · Radar de Tipologías SOFIPO
// ============================================================
// Proyecto de Firebase PROPIO del Radar, separado de cualquier otro sistema.
// Proyecto: radar-tipologias.
// Colecciones: radar_convencion (respuestas) y radar_stats (conteos anónimos). Se crean solas.
// Esta configuración web es pública por diseño; lo que protege la base son las reglas
// (firestore.rules).

export const firebaseConfig = {
  apiKey: "AIzaSyDmMfI9yh8l6L79ENaXHzFGfhC0yuX7z4w",
  authDomain: "radar-tipologias.firebaseapp.com",
  projectId: "radar-tipologias",
  storageBucket: "radar-tipologias.firebasestorage.app",
  messagingSenderId: "946463860160",
  appId: "1:946463860160:web:ccdf8aed356aa081da5425",
};

// Correos autorizados para entrar al panel y descargar el Excel.
// Deben coincidir con los de firestore.rules → esComite().
export const administradores = [
  "mvazquez@gmc360.com.mx",
  "samara@gmc360.com.mx",
  "amanda@gmc360.com.mx",
  "arely@gmc360.com.mx",
];

// Nombre de esta edición (se guarda en cada respuesta y separa los conteos).
export const edicion = "convencion-2026";
