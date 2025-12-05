'use client';

import { ListProvider } from '@/app/context/listContext';
import React, { ReactNode } from 'react'

export const MainComponent = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <ListProvider>
                <div>{children}</div>
            </ListProvider>
        </>
    )
}
