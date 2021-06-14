
import { useEffect, useState } from "react";
import { Home } from './pages/Home';
import { CategoriesContext } from "./context/CategoryListContext";
import axios from "axios";
import { API_URL } from "./utils/categoriesUrl";


function App() {
  const [categories, setCategories] = useState<string[]>([])
  useEffect(() => {
    axios
      .get(`${API_URL}categories`)
      .then((res) => setCategories(res?.data))
      .catch((err) => {});
  }, [])
  return (
    <CategoriesContext.Provider value={{categories: categories}}>
      <Home/>
    </CategoriesContext.Provider>  
  );
}

export default App;
