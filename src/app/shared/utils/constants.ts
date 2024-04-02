export enum Mode {
  LIGHT = 'light',
  DARK = 'dark',
}
// Maps Name to Icon
export const categories = new Map<string, string>([
  ['Food', 'fastfood'],
  ['Travel', 'flight'],
  ['Shopping', 'shopping_cart'],
  ['Games', 'videogame_asset'],
  ['Recharges', 'power'],
  ['Bills', 'receipt'],
  ['Rent', 'home'],
  ['EMIs', 'timeline'],
  ['Groceries', 'local_grocery_store'],
  ['Workers', 'group'],
  ['Health', 'healing'],
  ['Study', 'book'],
  ['Recreation', 'local_play'],
  ['Emergency', 'warning'],
]);

export const apiUri = 'http://localhost:3000/api/v1/';
