import styled from '@emotion/styled';
import NavButton from './NavButton';
import { useThemeUpdate, useTheme } from '../utils/ThemeContext';
import { H1 } from './Headings';
import Divider from './Divider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const LogoWrapper = styled('div')(() => ({
    display: 'flex',
    padding: '24px 2rem ',
}));

const Nav = () => {
    const toggleTheme = useThemeUpdate();
    const darkTheme = useTheme();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const handleNavigate = useCallback(
        (path: string) => {
            console.log('navigating');
            navigate(path);
        },
        [navigate]
    );

    const Wrapper = styled('nav')(() => ({
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        height: '100vh',
        position: 'sticky',
        top: 0,
        left: 0,
        backgroundColor: darkTheme ? '#302E7C' : '#fff',
        filter: 'drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1))',
    }));

    return (
        <Wrapper>
            <LogoWrapper>
                <H1>Finance</H1>
            </LogoWrapper>
            <NavButton
                active={pathname === '/' && true}
                onClick={() => handleNavigate('/')}
            >
                Dashboard
            </NavButton>
            <NavButton
                onClick={() => handleNavigate('/income')}
                active={pathname === '/income' && true}
            >
                Income
            </NavButton>
            <NavButton onClick={() => handleNavigate('/transactions')}>
                Tansactions
            </NavButton>
            <NavButton onClick={() => handleNavigate('/savings')}>
                Savings
            </NavButton>
            <NavButton onClick={() => handleNavigate('/goals')}>
                Goals
            </NavButton>
            <Divider m="2rem" />
            <NavButton onClick={() => handleNavigate('/help')}>Help</NavButton>
            <NavButton onClick={() => handleNavigate('/settings')}>
                Settings
            </NavButton>
            <NavButton onClick={() => handleNavigate('/logout')}>
                Logout
            </NavButton>
            <NavButton onClick={() => toggleTheme()} bottom={true}>
                Toggle Darkmode
            </NavButton>
        </Wrapper>
    );
};

export default Nav;
