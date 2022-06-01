import React from "react";
import "./navigationBar.css";
import DrawerLeft from "./DrawerLeft";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const NavigationBar = ({ setCategory }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <div className="navBar">
      <div className="menuIcon">
        <ThemeProvider theme={darkTheme}>
          <DrawerLeft setCategory={setCategory} />
        </ThemeProvider>
      </div>

      <img
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="Inshorts Logo"
        height="80%"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default NavigationBar;
