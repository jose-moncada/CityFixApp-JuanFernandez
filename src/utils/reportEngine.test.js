const { getReports } = require('./reportEngine');

jest.setTimeout(10000);

describe('CityFix - Conexión E2E con Supabase', () => {

  test('La conexión devuelve código exitoso y un array', async () => {
    const reports = await getReports();
    expect(Array.isArray(reports)).toBe(true);
  });

  test('El array contiene datos reales (longitud mayor a cero)', async () => {
    const reports = await getReports();
    expect(reports.length).toBeGreaterThan(0);
  });

  test('El primer reporte tiene las propiedades correctas', async () => {
    const reports = await getReports();
    const first = reports[0];
    expect(first).toHaveProperty('id');
    expect(first).toHaveProperty('title');
    expect(first).toHaveProperty('category');
    expect(first).toHaveProperty('votes');
  });
  
  test('Ver datos obtenidos', async () => {
    const reports = await getReports();
    console.log(reports);
    expect(reports.length).toBeGreaterThan(0);
  });
});
