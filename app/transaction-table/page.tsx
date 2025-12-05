
import { TransactionTable } from "./transaction-table";
import { getList } from "../api/getList";
import { Suspense } from "react";
import CLoader from "../component/loader/loader";

export type PersonI = {
    id: number;
    description: string;
    amount: number,
    category: string;
    type: string;
    date: string;
}

export default async function TransactionTablePage() {

    return <Suspense fallback={<CLoader/>}>
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
            const b = [];

            for (let i = 0; i < data.length; i = i + 10) {
                const d = [];
                for (let j = i; j <= data.length - 1 && j < i + 10; j++) {
                    d.push(data[j]);
                }
                b.push(d);
            }

            const updateCategoryList: string[] = [];
            const updatedTypeList: string[] = [];

            data.map((e) => e.category).forEach((f) => {
                if (!updateCategoryList.includes(f)) {
                    updateCategoryList.push(f);
                }
            });

            // const removeDuplicate = 
            data.map((e) => e.type).forEach((f) => {
                if (!updatedTypeList.includes(f)) {
                    updatedTypeList.push(f);
                }
            });

            return (
                <TransactionTable
                    items={b}
                    categoryList={updateCategoryList}
                    typeList={updatedTypeList}
                />
            );
        } catch (error: any) {
            console.error('Error fetching data:', error);
            return <div>Error: {error.message}</div>;
        }
    }
}
