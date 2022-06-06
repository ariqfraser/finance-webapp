import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '../utils/ThemeContext';
import { H3 } from './Headings';

interface cardProps {
    children?: React.ReactNode;
    title?: string;
    colSpan?: number;
    rowSpan?: number;
}
const Card = ({ children, title, colSpan, rowSpan }: cardProps) => {
    const darkMode = useTheme();
    const Wrapper = styled('div')(() => ({
        backgroundColor: darkMode ? '#302E7C' : '#fff',
        borderRadius: 16,
        filter: 'drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1))',
        gridColumn: `span ${colSpan}`,
        gridRow: rowSpan ? `span ${rowSpan}` : 'span 1',
        padding: 16,
    }));

    const ContentWrapper = styled('div')(() => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
    }));
    return (
        <Wrapper>
            <H3>{title}</H3>

            <ContentWrapper>{children}</ContentWrapper>
        </Wrapper>
    );
};

export default Card;

interface ProfileCardProps extends cardProps {}

export const ProfileCard = ({ colSpan, rowSpan }: ProfileCardProps) => {
    const darkMode = useTheme();
    const Wrapper = styled('div')(() => ({
        backgroundColor: darkMode ? '#302E7C' : '#fff',
        borderRadius: 16,
        filter: 'drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1))',
        gridColumn: `span ${colSpan}`,
        gridRow: rowSpan ? `span ${rowSpan}` : 'span 1',
        padding: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        '&>*': {
            margin: '0.5rem 0',
        },
    }));

    const ProfilePicture = styled('div')(() => ({
        height: 200,
        width: 200,
        backgroundColor: '#AC8BC0',
        borderRadius: '50%',
    }));
    return (
        <Wrapper>
            <span>Welcome!</span>
            <ProfilePicture />
            <span>fName sName</span>
            <span>Joined: Monday 6th June</span>
        </Wrapper>
    );
};
