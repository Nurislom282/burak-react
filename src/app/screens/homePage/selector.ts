import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrivePupularDishes = createSelector(
  selectHomePage,
  (Homepage) => Homepage.popularDishes
);

export const retriveNewDishes = createSelector(
  selectHomePage,
  (Homepage) => Homepage.newDishes
);

export const retriveTopUsers = createSelector(
  selectHomePage,
  (Homepage) => Homepage.topUsers
);
