import styled from '@emotion/styled';
import { ReactNode } from 'react';
import Header from './Header';
import Nav from './Nav';

interface PageWrapperProps {
    children: ReactNode;
    page: string;
}

const PageWrapper = ({ children, page }: PageWrapperProps) => {
    const Wrapper = styled('div')(() => ({
        display: 'flex',
    }));

    const ContentWrapper = styled('div')(() => ({
        display: 'flex',
        flexDirection: 'column',
        width: 'calc(100% - 300px)',
        height: '100vh',
    }));

    return (
        <Wrapper>
            <Nav />
            <ContentWrapper>
                <Header title={page} />
                <div style={{ display: 'flex', height: 'inherit' }}>
                    {children}
                </div>
            </ContentWrapper>
        </Wrapper>
    );
};

export default PageWrapper;
