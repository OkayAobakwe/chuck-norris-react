import React, { useContext, useEffect, useState } from "react";
import { JokeContext } from "../context/JokeContext";
import axios from "axios"
import { API_URL } from "../utils/categoriesUrl";
import { Card, CardContent, Typography, Grid, Container } from "@material-ui/core";

export const Joke: React.FC = () => {
  const category = useContext(JokeContext)?.selectedCategory;
  const [joke, setJoke] = useState("");
  
  useEffect(() => {
    if(category !== ""){
      axios
      .get(`${API_URL}random?category=${category}`)
      .then((res) => setJoke(res?.data?.value))
      .catch((err) => {})
    }
  }, [category]);
  
  return (
    <>
      <Container>
        <Grid>
          <Grid>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Chuck Norris Joke from {category}
                  <hr/>
                </Typography>
                <Typography>
                  {joke}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}