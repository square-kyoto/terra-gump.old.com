type CustomColorNames = 'terraRed' | 'terraYellow';

interface Sauce {
  bg: string;
  fg: string;
  name: string;
}

interface PizzaMenu {
  id: number;
  image: string;
  ingredients: string[];
  name: string;
  price: number;
  price_include_tax: number;
  sauce: Sauce | null;
  summary: string;
}
