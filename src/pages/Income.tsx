import PageWrapper from '../components/PageWrapper';
import { Grid } from '../components/Grid';
import Card from '../components/Card';
import { BigData } from '../components/Headings';

const Income = () => {
    return (
        <PageWrapper page="Income">
            <Grid cols="repeat(6, 1fr)" gap={24} w="calc(100vw - 300px)">
                <Card title="Income Split" colSpan={2} rowSpan={2}>
                    <BigData>Graph</BigData>
                </Card>
                <Card title="Salary" colSpan={2}></Card>
                <Card title="Additional Income" colSpan={2} />
                <Card title="Income Split" colSpan={2} />
                <Card title="Spending" colSpan={2} />
                <Card title="Monthly Expenses" colSpan={3} rowSpan={2} />
                <Card title="Expenses" colSpan={3} rowSpan={2} />
            </Grid>
        </PageWrapper>
    );
};

export default Income;
