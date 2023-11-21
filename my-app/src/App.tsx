// App.tsx
import React from "react";
import Header from "./layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";


const App: React.FC = () => {
  return (
 <>
 <Header/>
 <Outlet/>
 <Footer/>
 </>
  );
};

export default App;
