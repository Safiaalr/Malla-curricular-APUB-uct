const ramos = [
  { nombre: "Introducción a la administración pública", abre: ["Teoría de la organización"] },
  { nombre: "Teoría de la administración I", abre: ["Teoría de la administración II"] },
  { nombre: "Introducción al derecho", abre: ["Bases constitucionales"] },
  { nombre: "Matemáticas para las ciencias sociales I", abre: ["Matemáticas para las ciencias sociales II"] },
  { nombre: "Habilidades y competencias para la investigación", abre: ["Introducción a los métodos de investigación"] },
  { nombre: "Tecnologías de información para la administración", abre: [] },
  { nombre: "Teoría de la organización", abre: ["Recursos humanos y desarrollo organizacional"], requisitos: ["Introducción a la administración pública"] },
  { nombre: "Teoría de la administración II", abre: [], requisitos: ["Teoría de la administración I"] },
  { nombre: "Bases constitucionales", abre: ["Derecho administrativo I"], requisitos: ["Introducción al derecho"] },
  { nombre: "Matemáticas para las ciencias sociales II", abre: ["Microeconomía", "Análisis de datos I"], requisitos: ["Matemáticas para las ciencias sociales I"] },
  { nombre: "Introducción a los métodos de investigación", abre: ["Métodos cuantitativos de investigación"], requisitos: ["Habilidades y competencias para la investigación"] },
  { nombre: "Electivo antropológico cristiano", abre: ["Electivo teológico"] },
  { nombre: "Derecho administrativo I", abre: ["Derecho administrativo II"], requisitos: ["Bases constitucionales"] },
  { nombre: "Recursos humanos y desarrollo organizacional", abre: ["Formulación y diseño de proyectos sociales en contexto"], requisitos: ["Teoría de la organización"] },
  { nombre: "Microeconomía", abre: ["Macroeconomía"], requisitos: ["Matemáticas para las ciencias sociales II"] },
  { nombre: "Análisis de datos I", abre: ["Análisis de datos II", "Contabilidad general"], requisitos: ["Matemáticas para las ciencias sociales II"] },
  { nombre: "Métodos cuantitativos de investigación", abre: ["Métodos cualitativos de investigación"], requisitos: ["Introducción a los métodos de investigación"] },
  { nombre: "Electivo teológico", abre: ["Electivo para la diversidad"], requisitos: ["Electivo antropológico cristiano"] },
  { nombre: "Derecho administrativo II", abre: [], requisitos: ["Derecho administrativo I"] },
  { nombre: "Formulación y diseño de proyectos sociales en contexto", abre: ["Planificación estratégica", "Políticas públicas"], requisitos: ["Recursos humanos y desarrollo organizacional"] },
  { nombre: "Macroeconomía", abre: ["Economía política"], requisitos: ["Microeconomía"] },
  { nombre: "Análisis de datos II", abre: [], requisitos: ["Análisis de datos I"] },
  { nombre: "Métodos cualitativos de investigación", abre: [], requisitos: ["Métodos cuantitativos de investigación"] },
  { nombre: "Contabilidad general", abre: ["Contabilidad del sector público"], requisitos: ["Análisis de datos I"] },
  { nombre: "Economía política", abre: ["Economía del sector público"], requisitos: ["Macroeconomía"] },
  { nombre: "Planificación estratégica", abre: ["Dirección y planificación regional"], requisitos: ["Formulación y diseño de proyectos sociales en contexto"] },
  { nombre: "Contabilidad del sector público", abre: [], requisitos: ["Contabilidad general"] },
  { nombre: "Políticas públicas", abre: ["Gestión pública", "Modernización del estado", "Monitoreo e implementación de políticas"], requisitos: ["Formulación y diseño de proyectos sociales en contexto"] },
  { nombre: "Práctica inicial", abre: [] },
  { nombre: "Gestión pública", abre: ["Control de gestión", "Gobernanza", "Gestión pública intercultural"], requisitos: ["Políticas públicas"] },
  { nombre: "Dirección y planificación regional", abre: ["Dirección y planificación local"], requisitos: ["Planificación estratégica"] },
  { nombre: "Modernización del estado", abre: [], requisitos: ["Políticas públicas"] },
  { nombre: "Economía del sector público", abre: ["Finanzas públicas"], requisitos: ["Economía política"] },
  { nombre: "Monitoreo e implementación de políticas", abre: ["Diseño de programas y proyectos públicos"], requisitos: ["Políticas públicas"] },
  { nombre: "Electivo para la diversidad", abre: [] },
  { nombre: "Finanzas públicas", abre: [], requisitos: ["Economía del sector público"] },
  { nombre: "Diseño de programas y proyectos públicos", abre: ["Evaluación de programas y proyectos públicos"], requisitos: ["Monitoreo e implementación de políticas"] },
  { nombre: "Control de gestión", abre: [], requisitos: ["Gestión pública"] },
  { nombre: "Dirección y planificación local", abre: [], requisitos: ["Dirección y planificación regional"] },
  { nombre: "Gobernanza", abre: ["Seminario", "Rendición de cuentas y acceso a la información"], requisitos: ["Gestión pública"] },
  { nombre: "Seminario", abre: ["Seminario de práctica"], requisitos: ["Gobernanza"] },
  { nombre: "Evaluación de programas y proyectos públicos", abre: ["Calidad del sector público"], requisitos: ["Diseño de programas y proyectos públicos"] },
  { nombre: "Rendición de cuentas y acceso a la información", abre: ["Ética profesional"], requisitos: ["Gobernanza"] },
  { nombre: "Gestión pública intercultural", abre: [], requisitos: ["Gestión pública"] },
  { nombre: "Calidad del sector público", abre: [], requisitos: ["Evaluación de programas y proyectos públicos"] },
  { nombre: "Optativo", abre: [], requisitos: ["Electivo para la diversidad"] },
  { nombre: "Proyecto de título", abre: [] },
  { nombre: "Ética profesional", abre: [], requisitos: ["Rendición de cuentas y acceso a la información"] },
  { nombre: "Seminario de práctica", abre: [], requisitos: ["Seminario"] },
  { nombre: "Práctica profesional", abre: [] },
];

// Mapeo de botones para acceder más rápido
const botones = {};

function crearMalla() {
  const container = document.getElementById("malla");

  ramos.forEach((ramo) => {
    const div = document.createElement("div");
    div.className = "ramo";

    const titulo = document.createElement("h3");
    titulo.textContent = ramo.nombre;

    const boton = document.createElement("button");
    boton.textContent = "Aprobar ramo";
    boton.disabled = (ramo.requisitos && ramo.requisitos.length > 0);

    boton.addEventListener("click", () => {
      boton.disabled = true;
      boton.textContent = "Aprobado";
      desbloquear(ramo.nombre);
    });

    div.appendChild(titulo);
    div.appendChild(boton);
    container.appendChild(div);
    botones[ramo.nombre] = boton;
  });
}

function desbloquear(nombre) {
  ramos.forEach((ramo) => {
    if (ramo.requisitos && ramo.requisitos.includes(nombre)) {
      const restantes = ramo.requisitos.filter(req => botones[req].disabled === false);
      if (restantes.length === 0) {
        botones[ramo.nombre].disabled = false;
      }
    }
  });
}

crearMalla();
