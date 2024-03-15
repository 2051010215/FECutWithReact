import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        gradientGreen: "linear-gradient(90.13deg, #49DD81 0%, #22B4C6 100%)",
        gradientPink: "linear-gradient(91.47deg, #DA458F -6%, #DA34DD 113.05%)",
        gradientPurple: "linear-gradient(90.13deg, #DD5AFE 0%, #6366F1 100%)",
        gradientOrange: "linear-gradient(90.13deg, #FE955A 1%, #F1DA63 100%)",
        gradientBlue: "linear-gradient(90deg, #43A6F6 0%, #5868F3 100%)",
        gradientRed: "linear-gradient(90.13deg, #FE5A5A 0%, #F163D2 100%)",
    },
    fontFamilys: {
        fontRoboTo: ["sans-serif", "Roboto"],
        fontInter: ["sans-serif", "Inter"],
    },
    fontSizes: {
        small1: "12px",     
        small2: "14px",
        medium: "16px",
        large: "20px",
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme