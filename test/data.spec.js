require('../src/data.js');



describe('Indicar el título del test o Resultado que entregará', () => {
  it('is a function', () => {
    expect(typeof country).toBe('function');
  });
  it('returns `countriesNames`', () => {
    expect(window.country()).toContainEqual(["Perú", "México", "Brasil", "Chile"]);
  });
});
