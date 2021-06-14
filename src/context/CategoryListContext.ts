import { createContext } from "react";


export interface ICategories {
  categories: string[];
}
 
 const defaultValue: ICategories = {
  categories: [],
}
 
export const CategoriesContext = createContext(defaultValue);
