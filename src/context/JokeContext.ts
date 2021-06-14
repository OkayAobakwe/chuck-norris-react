import { createContext } from "react";


export interface IJoke {
  selectedCategory: string;
}
 
export const jokeContextDefaultValue = {
  selectedCategory: "",
}
 
export const JokeContext = createContext(jokeContextDefaultValue);