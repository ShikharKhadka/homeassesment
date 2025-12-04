'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { PersonI } from "../page";
import { getList } from "../api/getList";
import { AxiosError, AxiosResponse } from "axios";

export type ListContextI = {
    loading: boolean,
    data: PersonI[],
    error: string,
}

const ListContext = createContext<ListContextI | null>(null);

// Custom hook for using the loading context
export const useLoading = () => {
    const context = useContext(ListContext);
    if (!context) {
        throw new Error('useLoading must be used within LoadingProvider');
    }
    return context;
};

export const ListProvider = ({ children }: { children: ReactNode }) => {
    const [apiState, setApiState] = useState<{
        loading: boolean,
        data: PersonI[],
        error: string
    }>({
        loading: true,
        data: [],
        error: ''
    });

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response: AxiosResponse<any, any, {}> = await getList();
    //             if (response.status == 200) {
    //                 const data = response.data() as PersonI[];
    //                 console.log(data, "from data");
    //                 setApiState((prev) => { return { ...prev, loading: false, data: data } });
    //             }
    //             else {
    //                 setApiState((prev) => { return { ...prev, loading: false, error: 'Server Error' } });
    //             }
    //         } catch (error) {
    //             const errRes = error as AxiosError;
    //             setApiState((prev) => { return { ...prev, loading: false, error: errRes.message } });
    //         }
    //     };
    //     ;

    //     setTimeout(fetchData, 1000);
    // }, [])

    return (
        <ListContext.Provider value={apiState}>
            {children}
        </ListContext.Provider>
    );
};