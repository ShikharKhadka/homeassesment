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



    const handleCategoryChange = useCallback((event: SelectChangeEvent) => {
        const category = event.target.value;
        setFilters((prev) => { return { ...prev, category: event.target.value, type: '' } });
        const filterData = list.filter((e) => e.category == category);
        setFilterList(filterData);

    }, [list]);

    const handleTypeChange = useCallback((event: SelectChangeEvent) => {
        const type = event.target.value;
        setFilters((prev) => { return { type: event.target.value, category: '' } });
        const filterData = list.filter((e) => e.type == type);
        setFilterList(filterData);
    }, [list]);

    const updateList = useCallback(() => {
        setCount(prevCount => {
            const newCount = prevCount + 1;

            if (newCount <= items.length - 1) {
                setList((prevList) => {
                    const newList = items[newCount];
                    const mergedList = [...prevList, ...(newList ?? [])];
                    return mergedList;
                });
            }

            return newCount;
        });
    }, [items]);

    useEffect(() => {
        let lastScrollTop = 0;

        const checkBottom = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            const isScrollingDown = scrollTop > lastScrollTop;
            lastScrollTop = scrollTop;

            if ((isScrollingDown || scrollTop === 0) &&
                scrollTop + windowHeight >= docHeight - 50) {
                updateList();
            }
        };

        const handleScroll = () => {
            checkBottom();
        };

        window.addEventListener("scroll", handleScroll);

        setTimeout(checkBottom, 0); 

        return () => window.removeEventListener("scroll", handleScroll);
    }, [updateList]);

    return (
        <div className='w-[85%] md:w-full'>
            <div className="" >
                <div className="flex justify-start md:justify-end p-4"><CButton title="Add New" onClick={() => { setOpenDialog(true) }} /></div>
                <div className="flex flex-col gap-3 p-4 md:flex-row">
                    <CDropdown label='Category' menuList={categoryList} value={filter.category} handelOnClick={handleCategoryChange} />
                    <CDropdown label='Type' menuList={typeList} value={filter.type} handelOnClick={handleTypeChange} />
                    <CButton title='Clear Filter' onClick={() => { setFilters({ category: '', type: '' }) }} />
                </div>
                <CTable rows={(filter.category || filter.type) ? filterList : list} />
            </div>
            <CDialog open={openDilaog} onClose={closeDialog} />
        </div>
    )
}
