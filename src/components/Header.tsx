import styled from '@emotion/styled';
import { H2 } from './Headings';

interface props {
    title: string;
}

const Header = ({ title }: props) => {
    const Wrapper = styled('div')(() => ({
        paddingTop: 24,
        paddingLeft: 24,
    }));
    return (
        <Wrapper>
            <H2>{title}</H2>
        </Wrapper>
    );
};

export default Header;
