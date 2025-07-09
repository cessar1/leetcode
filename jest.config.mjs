/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",

  // 👇 Necesario para que Jest trate los .js como módulos ES
  // extensionsToTreatAsEsm: ['.js'],


  // 👇 Para evitar que Jest intente usar Babel (si no lo tenés)
  transform: {},
};

export default config;
