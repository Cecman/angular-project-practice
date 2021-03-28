export class ShoppingIngredients {
  public name: string;
  public amount: number;

  constructor(ingredient: string, amount: number) {
    this.name = ingredient;
    this.amount = amount;
  }
}
