import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;

export const retrivePausedOrders = createSelector(
  selectOrdersPage,
  (Orderspage) => Orderspage.pausedOrders
);

export const retriveProcessOrders = createSelector(
  selectOrdersPage,
  (Orderspage) => Orderspage.processOrders
);

export const retriveFinishedOrders = createSelector(
  selectOrdersPage,
  (Orderspage) => Orderspage.finishedOrders
);
