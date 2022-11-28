type CustomColorNames = 'terraRed' | 'terraYellow';

interface Sauce {
  bg: string;
  fg: string;
  name: string;
}

interface PizzaMenu {
  id: number;
  ingredients: string[];
  name: string;
  price: number;
  price_include_tax: number;
  sauce: Sauce | null;
  summary: string;
}
