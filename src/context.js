import {createContext} from "react";

export const themes = {
    light: {
        background: 'background.paper',
        headerColor: '',
        color: '#000'
    },
    dark: {
        background: '#121212',
        headerColor: '',
        color: '#eee'
    }
}

export const ThemeContext = createContext({themes: themes.light, toggleTheme: () => {}});