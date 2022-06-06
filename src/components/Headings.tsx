import styled from '@emotion/styled';
import { useTheme } from '../utils/ThemeContext';
import { ReactNode } from 'react';

interface textProps {
    children: ReactNode;
}

export const H1 = ({ children }: textProps) => {
    const darkMode = useTheme();
    const Heading = styled('h1')(() => ({
        color: darkMode ? '#5D5FA7' : '#5758A3',
        padding: 0,
        margin: 0,
        fontSize: '2.5rem',
    }));
    return <Heading>{children}</Heading>;
};

export const H2 = ({ children }: textProps) => {
    const darkMode = useTheme();
    const Heading = styled('h2')(() => ({
        background: '-webkit-linear-gradient(#7665ff, #e065ff)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        fontWeight: 500,
        padding: 0,
        margin: 0,
        fontSize: '2rem',
    }));
    return <Heading>{children}</Heading>;
};

export const H3 = ({ children }: textProps) => {
    const darkMode = useTheme();
    const Heading = styled('h3')(() => ({
        color: darkMode ? '#fff' : '#252141',
        fontWeight: 500,
        padding: 0,
        margin: 0,
        fontSize: '1.25rem',
    }));
    return <Heading>{children}</Heading>;
};

export const BigData = ({ children }: textProps) => {
    const darkMode = useTheme();
    const Heading = styled('p')(() => ({
        color: darkMode ? '#fff' : '#252141',
        fontWeight: 600,
        padding: 0,
        margin: 0,
        fontSize: '3em',
    }));
    return <Heading>{children}</Heading>;
};
