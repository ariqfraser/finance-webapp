import styled from '@emotion/styled';

interface GridProps {
    cols: string;
    gap?: string | number;
    w?: string | number;
    p?: string | number;
}

export const Grid = styled('div')(({ cols, gap, w, p }: GridProps) => ({
    display: 'grid',
    gridTemplateColumns: cols,
    gap: gap,
    padding: p ? p : gap,
    width: w,
}));
