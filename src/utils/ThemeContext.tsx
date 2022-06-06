import { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeContextProps {
    children: ReactNode;
}

if (!localStorage.getItem('darkTheme')) {
    localStorage.setItem('darkTheme', 'false');
}

const theme = localStorage.getItem('darkTheme') === 'false' ? false : true;

const ThemeContext = createContext(theme);
const ThemeUpdateContext = createContext(() => {});

export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => useContext(ThemeUpdateContext);

export const ThemeProvider = ({ children }: ThemeContextProps) => {
    const [darkTheme, setDarkTheme] = useState(theme);

    document.body.style.backgroundColor = darkTheme ? '#24234C' : '#FCF8FB';

    function toggleTheme() {
        localStorage.setItem('darkTheme', `${!darkTheme}`);

        setDarkTheme(!darkTheme);
        document.body.style.backgroundColor = darkTheme ? '#24234C' : '#FCF8FB';
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
};
