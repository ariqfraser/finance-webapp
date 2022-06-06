import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useTheme } from '../utils/ThemeContext';

interface NavButtonProps {
    children: ReactNode;
    onClick?: any;
    icon?: string;
    bottom?: boolean;
    active?: boolean;
}

const NavButton = ({
    children,
    onClick,
    icon,
    bottom,
    active,
}: NavButtonProps) => {
    const darkMode = useTheme();

    const Button = styled('button')(() => ({
        fontSize: '1.25rem',
        fontWeight: 100,
        backgroundColor: 'transparent',
        border: 'none',
        padding: '0.75rem 2rem',
        cursor: 'pointer',
        textAlign: 'left',
        marginTop: bottom ? 'auto' : 0,
        background: active
            ? 'linear-gradient(90deg, rgba(118,101,255,1) 0%, rgba(224,101,255,1) 75%)'
            : 'linear-gradient(90deg, transparent 0%, transparent 75%)',
        color: active || darkMode ? '#fff' : '#252141',
        '&:hover': {
            background:
                'linear-gradient(90deg, rgba(118,101,255,1) 0%, rgba(224,101,255,1) 75%)',
            color: '#fff',
        },
    }));

    return <Button onClick={onClick}>{children}</Button>;
};

export default NavButton;
