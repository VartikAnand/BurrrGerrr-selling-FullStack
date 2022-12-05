import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import Home from "./components/HeadingMenu/Home";
import AboutsUs from "./components/HeadingMenu/AboutsUs";
import Menu from "./components/HeadingMenu/Menu";
import CustomnBurger from "./components/HeadingMenu/CustomnBurger";
import Services from "./components/HeadingMenu/Services";


const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // remove unwanted collision or multiple animated
    <AnimatePresence exitBeforeEnter>

      <div className="w-screen h-auto flex flex-col ">
        <Header />

        <main className="mt-14 md:mt-20 px-0 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="Home" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/AboutUs" element={<AboutsUs />} />
            <Route path="/Service" element={<Services />} />
            <Route path="/CustomBurger" element={<CustomnBurger />} />
            <Route path="/Home/CustomBurger" element={<CustomnBurger />} />
            <Route path="/Menu" element={<Menu />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
