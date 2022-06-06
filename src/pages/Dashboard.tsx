import Card, { ProfileCard } from '../components/Card';
import { Grid } from '../components/Grid';
import { BigData } from '../components/Headings';
import PageWrapper from '../components/PageWrapper';
import { useTheme, useThemeUpdate } from '../utils/ThemeContext';

const dashboard = () => {
    const darkTheme = useTheme();

    return (
        <PageWrapper page="Dashboard">
            <Grid cols="repeat(6, 1fr)" gap={24} w="calc(100vw - 600px)">
                <Card title="Total Income" colSpan={2}>
                    <BigData>£35000</BigData>
                </Card>
                <Card title="Net Income" colSpan={2}>
                    <BigData>£22000</BigData>
                </Card>
                <Card title="Reoccuring Payments" colSpan={2} />
                <Card title="Income Split" rowSpan={2} colSpan={2} />
                <Card title="Spending" colSpan={4} rowSpan={2} />
                <Card title="Transactions" colSpan={3} rowSpan={2} />
                <Card title="Expenses" colSpan={3} rowSpan={2} />
            </Grid>
            <Grid cols="repeat(1, 300px)" gap={24} p={'24px 24px 24px 0'}>
                <ProfileCard />
                <Card title="Savings" />
                <Card title="Goals" />
            </Grid>
        </PageWrapper>
    );
};

export default dashboard;
