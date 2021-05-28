const registrosPacientes = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M",
    },
    diasIngresado: 5,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M",
    },
    diasIngresado: 1,
    dieta: "Sin sal",
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H",
    },
    diasIngresado: 2,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M",
    },
    diasIngresado: 6,
    dieta: "Sin sal",
  },
];

const getNumPacientes = (arrayRegistros) => arrayRegistros.length;

const getPacientesMayoresEdad = (arrayRegistros) =>
  arrayRegistros.filter((registro) => registro.paciente.edad >= 18).length;

const getNumHombresDiabeticos = (arrayRegistros) =>
  arrayRegistros.filter(
    (registro) =>
      registro.paciente.sexo === "H" && registro.dieta === "Diabetes"
  ).length;

const getDiasIngresadosTotales = (arrayRegistros) =>
  arrayRegistros.reduce(
    (acumulador, registro) => registro.diasIngresado + acumulador,
    0
  );

const getMediaEdadMujeres = (arrayRegistros) =>
  arrayRegistros.reduce(
    (acumulador, registro) =>
      registro.paciente.sexo === "M"
        ? registro.paciente.edad + acumulador
        : 0 + acumulador,
    0
  ) /
  arrayRegistros.filter((registro) => registro.paciente.sexo === "M").length;

const obtenerInformacionPacientes = (arrayRegistros) => {
  const informacionPacientes = {
    nPacientes: getNumPacientes(arrayRegistros),
    nMayoresEdad: getPacientesMayoresEdad(arrayRegistros),
    nHombresDiabeticos: getNumHombresDiabeticos(arrayRegistros),
    totalDiasIngreso: getDiasIngresadosTotales(arrayRegistros),
    mediaEdadMujeres: getMediaEdadMujeres(arrayRegistros),
  };
  return informacionPacientes;
};

console.log(obtenerInformacionPacientes(registrosPacientes));
