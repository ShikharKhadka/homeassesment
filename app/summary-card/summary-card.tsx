'use client';
import { BarChart } from '@mui/x-charts';
import { PersonI } from '../page'

export const Summarycard = ({ items, categoryList }: { items: PersonI[], categoryList: string[] }) => {

    const getTransaction = {
        income: items.filter((e) => e.type == 'income').reduce((total, value) => total + value.amount, 0),
        expenses: items.filter((e) => e.type == 'expense').reduce((total, value) => total + value.amount, 0),
        totalBalance: items.reduce((total, value) => total + value.amount, 0),
        category: items.map((e) => e.category),
    };

    const groupByCategory: Record<string, number[]> = {};
    categoryList.forEach((e) => {
        groupByCategory[e] = [];
    });


    items.forEach((e) => {
        Object.entries(groupByCategory).forEach((f) => {
            if (f[0] == e.category) {
                groupByCategory[e.category].push(e.amount);
            }
        })
    });

    const listoF: number[] = [];

    Object.entries(groupByCategory).forEach((f) => {
        const totalAmount = f[1].reduce((total, e) => total + e, 0);
        listoF.push(totalAmount);
    })


    return (
        <div>
            <BarChart
                xAxis={[{ data: categoryList }]}
                series={[{ data: listoF }]}
                yAxis={[
                    { id: 'leftAxis', label: 'Amount' },
                ]}
                height={500}
            />

            <div className='flex justify-center gap-5'>
                <div className='heading2'> <span className='heading1'>Total Income: </span>{getTransaction.income}</div>
                <div className='heading2'> <span className='heading1'>Total Expenses: </span>{getTransaction.expenses}</div>
                <div className='heading2'><span className='heading1'>Total Balance: </span>{getTransaction.totalBalance}</div>
            </div>
        </div>
    )
}
