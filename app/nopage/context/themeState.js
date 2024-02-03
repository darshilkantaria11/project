"use client"


import React, { useState, useEffect, useCallback } from "react";
import ThemeContext from "./themeContext";
import { light, dark, forest, vintage, rose, ocean, black, colorful } from '../theme/theme';

const ThemeState = (props) => {


    const [theme, setTheme] = useState(light);



    useEffect(() => {
        try {
          const storedTheme = localStorage.getItem('theme');
      
          if (storedTheme != null) {
            const initialTheme = JSON.parse(storedTheme);
            setTheme(initialTheme);
          } else {
            // console.log('No stored theme found. Using default theme.');
            setTheme(light); // Set your default theme here
          }
        } catch (error) {
        //   console.error('Error parsing stored theme:', error);
          setTheme(light); // Set your default theme here
        }
      }, []);
      


    const switchTheme = useCallback((selectedTheme) => {
        let newTheme;

        switch (selectedTheme) {
            case 'light':
                newTheme = light;
                break;
            case 'dark':
                newTheme = dark;
                break;
            case 'forest':
                newTheme = forest;
                break;
            case 'vintage':
                newTheme = vintage;
                break;
            case 'rose':
                newTheme = rose;
                break;
            case 'ocean':
                newTheme = ocean;
                break;
            case 'black':
                newTheme = black;
                break;
            case 'colorful':
                newTheme = colorful;
                break;
        }

        setTheme(newTheme);
        // console.log(newTheme)


        localStorage.setItem('theme', JSON.stringify(newTheme));
    }, []);



    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeState;
