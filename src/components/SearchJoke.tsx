import React from 'react';
import { Typography } from "@material-ui/core";

export interface SearchProps {
  searchResult: string
}

export const SearchJoke: React.FC<SearchProps> = ({ searchResult }) => {
  return (
    <>
      <Typography variant="h5" component="h2">
        Search result
        <hr/>
      </Typography>
      <Typography variant="body2" component="p">
        {searchResult}
      </Typography>
    </>
  )
}