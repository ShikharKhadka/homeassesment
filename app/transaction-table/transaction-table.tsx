'use client';

import { useCallback, useEffect, useState } from 'react'
import CTable from '../component/table/table';
import { PersonI } from '../page';
import CButton from '../component/button/button';
import { CDropdown } from '../component/dropdown/dropdown';
import { SelectChangeEvent } from '@mui/material';
import { CDialog } from '../component/dialog/dialog';

export const TransactionTable = ({ items, categoryList, typeList }: { items: PersonI[][], categoryList: string[], typeList: string[] }) => {

    const [list, setList] = useState<PersonI[]>(items[0]);
    const [filterList, setFilterList] = useState<PersonI[]>([]);
    const [openDilaog, setOpenDialog] = useState(false);
    const [count, setCount] = useState(0);
    const [filter, setFilters] = useState({
        category: '',
        type: '',
    });

    const closeDialog = () => {
        setOpenDialog(false);
    }

    const updateList = useCallback(() => {
        setCount(count + 1);
        const updateCount = count + 1;
        if (count <= items.length - 1) {
            setList((prev) => {
                const newList = items[updateCount];
                const mergedList = [...prev, ...newList ?? []];
                return mergedList;
            });
        }
    }, [count, items]);

    const handleCategoryChange = (event: SelectChangeEvent) => {
        const category = event.target.value;
        setFilters((prev) => { return { ...prev, category: event.target.value, type: '' } });
        const filterData = list.filter((e) => e.category == category);
        setFilterList(filterData);

    };

    const handleTypeChange = (event: SelectChangeEvent) => {
        const type = event.target.value;
        setFilters((prev) => { return { type: event.target.value, category: '' } });
        const filterData = list.filter((e) => e.type == type);
        setFilterList(filterData);
    };

    useEffect(() => {
        let lastScrollTop = 0;

        const checkBottom = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            const isScrollingDown = scrollTop > lastScrollTop;
            lastScrollTop = scrollTop;

            // Only load more when scrolling down OR initial page load check
            if ((isScrollingDown || scrollTop === 0) &&
                scrollTop + windowHeight >= docHeight - 50) {
                updateList();
            }
        };

        const handleScroll = () => {
            checkBottom();
        };

        window.addEventListener("scroll", handleScroll);

        // 🔹 Run once on initial mount
        setTimeout(checkBottom, 0); // ensure DOM is ready

        return () => window.removeEventListener("scroll", handleScroll);
    }, [updateList]);

    return (
        <div>
            <div className="box1" >
                <div className="flex justify-end p-4"><CButton title="Add New" onClick={() => { setOpenDialog(true) }} /></div>
                <div className='flex gap-3 p-4'>
                    <CDropdown label='Category' menuList={categoryList} value={filter.category} handelOnClick={handleCategoryChange} />
                    <CDropdown label='Type' menuList={typeList} value={filter.type} handelOnClick={handleTypeChange} />
                    <CButton title='Clear Filter' onClick={() => { setFilters({ category: '', type: '' }) }} />
                </div>
                <CTable rows={(filter.category || filter.type) ? filterList : list} />
                
            </div>
            <CDialog open={openDilaog} onClose={closeDialog} typeList={typeList} categoryList={categoryList} />
        </div>
    )
}
