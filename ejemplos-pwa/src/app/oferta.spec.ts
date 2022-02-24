import { Oferta } from './oferta';

describe('Oferta', () => {
  it('should create an instance', () => {
    expect(new Oferta('Título', 'Empresa', 20000, 'Madrid', 'Descripción...')).toBeTruthy();
  });
});
