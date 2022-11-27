type CustomColorNames = 'terraRed' | 'terraYellow';

interface PizzaMenu {
  id: number;
  ingredients: string[];
  name: string;
  price: number;
  price_include_tax: number;
  sauce: {
    color: string;
    name: string;
  } | null;
  summary: string;
}
