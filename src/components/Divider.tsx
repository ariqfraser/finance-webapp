import styled from '@emotion/styled';

interface DividerProps {
    m?: number | string;
}

const Divider = ({ m }: DividerProps) => {
    const Div = styled('div')(() => ({
        width: '80%',
        marginInline: 'auto',
        marginTop: m,
        marginBottom: m,
        height: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    }));

    return <Div />;
};

export default Divider;
