import React, { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({children}:any) => {
    const [theme, setTheme] = React.useState<String>('light');

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);  // eslint-disable-line react-hooks/exhaustive-deps