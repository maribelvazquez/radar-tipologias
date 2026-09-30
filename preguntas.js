// ============================================================
// PREGUNTAS Y CONTENIDO del Radar de Tipologías SOFIPO
// Para cambiar un texto u opción, se edita aquí.
// Los "id" no se cambian: son los que se guardan en la base.
// ============================================================

// Las 8 tipologías: son las 8 fichas del compendio (pagina = página del PDF).
export const tipologias = [
 {
  "id": "mula",
  "num": "01",
  "nombre": "Cuentas mula",
  "opcion": "Cuentas abiertas en ráfaga que reciben de muchos y quedan en cero",
  "sub": "Redes de cuentas de paso que reciben y dispersan recursos ajenos",
  "senales": [
   "La cuenta se abre desde el mismo dispositivo, red o número telefónico que otras cuentas.",
   "Muchos ordenantes distintos, sin relación con el titular ni entre sí.",
   "Lo que entra sale en menos de 24 a 48 horas y el saldo queda mínimo."
  ],
  "revisar": "Vínculos por dispositivo, teléfono, correo y cuenta destino con otros clientes.",
  "pagina": 4
 },
 {
  "id": "fachada",
  "num": "02",
  "nombre": "Empresas fachada",
  "opcion": "Empresas con expediente impecable y sin operación real",
  "sub": "Personas morales con expediente impecable y sin operación real",
  "senales": [
   "Domicilio virtual o compartido con muchas otras empresas.",
   "Recibe de muchas empresas y paga el mismo día a personas físicas.",
   "No hay pagos propios de una operación real: nómina, cuotas de seguridad social, renta, insumos."
  ],
  "revisar": "Si la empresa o sus contrapartes aparecen en la lista del artículo 69-B del Código Fiscal de la Federación.",
  "pagina": 6
 },
 {
  "id": "tentativa",
  "num": "03",
  "nombre": "Tentativas",
  "opcion": "Clientes que se retiran cuando se les pide el origen de los recursos",
  "sub": "El cliente se retira cuando se le pide el origen de los recursos",
  "senales": [
   "Abandona el trámite en el momento en que se pide soporte del origen de los recursos.",
   "Intentos rechazados seguidos de un reintento con monto menor.",
   "La misma operación dividida entre varias cuentas del mismo grupo."
  ],
  "revisar": "Si existe una bitácora de operaciones intentadas; sin ella, no hay forma de reportarlas.",
  "pagina": 8
 },
 {
  "id": "prepago",
  "num": "04",
  "nombre": "Pago anticipado atípico de crédito",
  "opcion": "Créditos liquidados anticipadamente sin explicación clara",
  "sub": "El crédito como vehículo para dar apariencia lícita a los recursos",
  "senales": [
   "Cliente con ingreso declarado bajo que liquida en semanas un crédito a plazo largo.",
   "Pagos en efectivo fraccionados en varios días o sucursales.",
   "Pago desde la cuenta de un tercero o de una empresa ajena al acreditado."
  ],
  "revisar": "De dónde viene el dinero del pago, no sólo que el pago se aplicó.",
  "pagina": 10
 },
 {
  "id": "tercero",
  "num": "05",
  "nombre": "Tercero que opera la cuenta",
  "opcion": "Un tercero que opera la cuenta en lugar del titular",
  "sub": "El titular es formal; quien decide y se beneficia es otra persona",
  "senales": [
   "El titular llega acompañado y es el acompañante quien habla, pregunta y decide.",
   "Flujos incompatibles con la ocupación y la edad del titular.",
   "Transferencias recurrentes a una misma persona sin relación declarada."
  ],
  "revisar": "Identificación del propietario real, con la pregunta hecha y documentada, no sólo la casilla.",
  "pagina": 12
 },
 {
  "id": "identidad",
  "num": "06",
  "nombre": "Suplantación e identidad sintética",
  "opcion": "Suplantación o identidad falsa en el alta digital",
  "sub": "Cuentas y créditos abiertos con una identidad que no es la del cliente",
  "senales": [
   "Selfie o prueba de vida con indicios de pantalla, máscara o imagen generada.",
   "Solicitud de crédito por el monto máximo desde el primer día.",
   "Dispersión inmediata del crédito o de los primeros abonos."
  ],
  "revisar": "Validación contra la fuente emisora de la identificación y de la CURP.",
  "pagina": 14
 },
 {
  "id": "vinculados",
  "num": "07",
  "nombre": "Clientes vinculados no declarados",
  "opcion": "Clientes con el mismo teléfono, domicilio o dispositivo",
  "sub": "Varias personas que aparentan ser independientes y operan como grupo",
  "senales": [
   "El mismo domicilio para personas sin parentesco declarado.",
   "Operaciones similares en las mismas fechas y por montos parecidos.",
   "Fondos de varias cuentas que convergen en una sola cuenta destino."
  ],
  "revisar": "Un análisis de vínculos por dato compartido, no sólo por nombre.",
  "pagina": 16
 },
 {
  "id": "dormidas",
  "num": "08",
  "nombre": "Cuentas dormidas que se reactivan",
  "opcion": "Cuentas dormidas que se reactivan con montos fuertes",
  "sub": "Una cuenta sin movimiento que de pronto mueve montos altos",
  "senales": [
   "Cambio de teléfono o correo al mismo tiempo que la reactivación.",
   "Primer movimiento, después de la inactividad, por un monto alto.",
   "Patrón de cuenta de paso: entra y sale en horas."
  ],
  "revisar": "Contacto con el titular por el medio registrado antes del cambio.",
  "pagina": 18
 }
];

export const tipoInstitucion = [
  ["digital", "SOFIPO principalmente digital"],
  ["sucursales", "SOFIPO con sucursales"],
  ["socap", "SOCAP"],
  ["otra", "Otra entidad financiera"],
  ["proveedor", "Consultoría o proveedor"],
];

export const deteccion = [
  ["sistema", "Sistema"],
  ["analista", "Analista"],
  ["sucursal", "Sucursal"],
  ["aviso", "Nos avisaron"],
];

export const alertas = [
  ["monto", "Monto o frecuencia inusual"],
  ["efectivo", "Operaciones en efectivo"],
  ["perfil", "Cambio de perfil transaccional"],
  ["listas", "Coincidencias en listas"],
  ["dispositivo", "Geolocalización o dispositivo"],
  ["terceros", "Depósitos de terceros"],
];

export const pasos = [
  ["detectar", "Detectarlo"],
  ["evidencia", "Juntar la evidencia"],
  ["decidir", "Decidir si se reporta"],
  ["narrativa", "Redactar la narrativa para la UIF"],
  ["tentativa", "Qué hacer con una tentativa"],
  ["cnbv", "Sostenerlo ante la CNBV"],
];

export const puestos = [
  "Oficial de cumplimiento",
  "Dirección general o consejo",
  "Analista de cumplimiento",
  "Auditoría interna",
  "Riesgos",
  "TI u operaciones",
  "Otro",
];
