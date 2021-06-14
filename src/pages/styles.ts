import { styled } from "@material-ui/core/styles";
import {
  Grid, 
  Select,
  Typography,
  AppBar,
} from "@material-ui/core";

export const OptionsGrid = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
  marginBotton: "30px",
});
export const SelectCategories = styled(Select)({
  justifySelf: "flex-start",
  width: "25%",
})
export const SearchGrid = styled(Grid)({
  justifySelf: "flex-end",
  alignItems: "baseline",
})
export const CenteredText = styled(Typography)({
  display: "flex",
  justifyContent: "center"
})
export const ChuckBar = styled(AppBar)({
  marginBottom: "15px",
})