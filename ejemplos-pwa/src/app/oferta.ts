export class Oferta {
  constructor(
    public titulo: string,
    public empresa: string,
    public salario: number,
    public ciudad: string,
    public descripcion: string,
    public id: number | null = null
  ) {}
}
