import React, { Suspense } from 'react'
import { getList } from '../api/getList';
import { PersonI } from '../page';
import { Summarycard } from './summary-card';
import CLoader from '../component/loader/loader';

export default async function SummaryPage() {

    return <Suspense fallback={<CLoader />}>
        <SummaryContent />
    </Suspense>


    async function SummaryContent() {
        try {
            const response = await getList();

            if (response.status !== 200) {
                return <div>Server Error</div>;
            }

            const data = response.data as PersonI[];

            await new Promise(resolve => setTimeout(resolve, 1000));

            const updateCategoryList: string[] = [];

            data.map((e) => e.category).forEach((f) => {
                if (!updateCategoryList.includes(f)) {
                    updateCategoryList.push(f);
                }
            });

            return (
                <Summarycard
                    items={data}
                    categoryList={updateCategoryList}
                />
            );
        } catch (error: any) {
            console.error('Error fetching data:', error);
            return <div>Error: {error.message}</div>;
        }
    }
}
