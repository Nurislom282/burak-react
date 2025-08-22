import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advaertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";
import { Product } from "../../../lib/types/product";

/** REDUX **/
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

/** MANTIQLAR **/
import { setPopularDishes } from "./slice";
import { retrivePupularDishes } from "./selector";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

const popularDishesRetriver = createSelector(
  retrivePupularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function Homepage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriver);
  //Select: Store => Data

  useEffect(() => {
    //Backend server data request => Data
    const result = [
      {
        _id: "687a9b966cf6657495b06281",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Stake",
        productPrice: 15,
        productLeftCount: 100,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "This is the most delicious Stake",
        productImages: [
          "uploads/products/3366fa0a-e188-4150-b857-aca74145066a.jpeg",
          "uploads/products/6130db54-ccbe-4ada-8401-11d960f48cff.jpeg",
          "uploads/products/e6b0ab7a-ec87-4a9c-903e-8cb412a0ac23.jpeg",
          "uploads/products/f8623386-2fc5-4f7b-badf-06e31f88990a.jpeg",
          "uploads/products/e6baf322-ae7b-4f8b-ad04-6725b29ab90b.jpeg",
        ],
        productViews: 1,
        createdAt: "2025-07-18T19:08:06.698Z",
        updatedAt: "2025-08-09T09:36:28.982Z",
        __v: 0,
      },
      {
        _id: "68962cd5b0db02a2dac66cb2",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Steak",
        productPrice: 20,
        productLeftCount: 150,
        productSize: "LARGE",
        productVolume: 1,
        productDesc: "Delicious meal",
        productImages: [
          "uploads/products/7d2fb09d-96ce-471e-9fa6-d5a60a57bc87.png",
          "uploads/products/c64fe968-9f99-4768-b45e-d4d72877f15c.png",
        ],
        productViews: 0,
        createdAt: "2025-08-08T16:59:01.334Z",
        updatedAt: "2025-08-08T16:59:01.334Z",
        __v: 0,
      },
    ];
    //@ts-ignore
    setPopularDishes(result);
    //slice: Data => Store
  }, []);

  console.log("popularDishes:", popularDishes);
  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
