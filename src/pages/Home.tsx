import React, { useContext, useState } from "react";
import { CategoriesContext } from "../context/CategoryListContext";
import { JokeContext } from "../context/JokeContext";
import { Joke } from "./Joke";
import { SearchJoke } from "../components/SearchJoke";
import axios from "axios";
import { API_URL } from "../utils/categoriesUrl";

import {
  TextField,
  Button,
  MenuItem,
  Select,
  Grid,
  Fade,
  Container,
  Card,
  CardContent,
  Typography,
  AppBar,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const OptionsGrid = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
  marginBotton: "30px",
});
const SelectCategories = styled(Select)({
  justifySelf: "flex-start",
  width: "25%",
})
const SearchGrid = styled(Grid)({
  justifySelf: "flex-end",
  alignItems: "baseline",
})
const CenteredText = styled(Typography)({
  display: "flex",
  justifyContent: "center"
})

export const Home: React.FC = () => {
  const { categories } = useContext(CategoriesContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<[]>();

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedCategory(e.target.value as string);
    setQuery("")
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (query !== "") {
      axios
        .get(`${API_URL}search?query=${query}`)
        .then((res) => {
          setSearchResults(res?.data?.result);
          setSelectedCategory("");
        })
        .catch((err) => {});
    }
  };

  return (
    <JokeContext.Provider value={{ selectedCategory: selectedCategory }}>
      <Fade in={true}>
        <div>
          <AppBar position="relative">
            <Typography variant="h3" noWrap>
              Chuck Norris Jokes
            </Typography>
          </AppBar>
          
          <OptionsGrid>
            <SelectCategories value={selectedCategory} onChange={handleChange} placeholder="Categories">
              {categories?.map((category) => (
                <MenuItem value={category} key={category}>
                  {category}
                </MenuItem>
              ))}
            </SelectCategories>
            <SearchGrid>
              <TextField
                onChange={handleInput}
                id="standard-basic"
                label="Search"
              />
              <Button onClick={handleClick}>search</Button>
            </SearchGrid>
          </OptionsGrid>

          {selectedCategory === "" && query !== "" ? (
            <Container>
              <Grid>
                {searchResults?.map((result: { value: string; id: string }) => (
                  <Grid>
                    <Card>
                      <CardContent>
                        <Typography>
                          <SearchJoke
                            searchResult={result.value}
                            key={result.id}
                          />
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          ) : selectedCategory !== "" ? (
            <Joke />
          ) : (
            <CenteredText variant="h6">Please search a keyword or select a category</CenteredText>
          )}
        </div>
      </Fade>
    </JokeContext.Provider>
  );
};
