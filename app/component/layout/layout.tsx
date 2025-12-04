'use client';

import { ListProvider, useLoading } from '@/app/context/listContext';
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
