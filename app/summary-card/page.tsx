import React, { Suspense } from 'react'
import { getList } from '../api/getList';
import { PersonI } from '../page';
import { TransactionTable } from '../transaction-table/transaction-table';
import { Summarycard } from './summary-card';

export default async function TransactionTablePage() {

    return <Suspense fallback={<div>.......Loading</div>}>
        <TransactionsContent />
    </Suspense>


    async function TransactionsContent() {
        try {
            // Server components can use async/await directly
            const response = await getList();

            if (response.status !== 200) {
                return <div>Server Error</div>;
            }

            const data = response.data as PersonI[];

            await new Promise(resolve => setTimeout(resolve, 1000));

            return (
                <Summarycard
                    items={data}
                />
            );
        } catch (error: any) {
            console.error('Error fetching data:', error);
            return <div>Error: {error.message}</div>;
        }
    }
}
