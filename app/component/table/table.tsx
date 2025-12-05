/* eslint-disable react/display-name */
import { commonColors } from '@/app/colors/color'
import { PersonI } from '@/app/page'
import { defaultPadding } from '@/app/utils/box_component'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'


import React from 'react';

const CTable = React.memo(({ rows }: { rows: PersonI[] }) => {
    return (
        <TableContainer style={{
            // padding: defaultPadding,

        }}>
            <Table sx={{overflowX: 'scroll'}}>
                <TableHead style={{}}>
                    <TableRow>
                        <TableCell style={{
                            border: "none",
                            borderRadius: " 12px 0 0 12px",
                            padding: "16px 20px",
                            backgroundColor: commonColors.tableHead,
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                        }}>{'S.No'}</TableCell>
                        <CTableCell title='Description' />
                        <CTableCell title='Amount' />
                        <CTableCell title='Type' />
                        <CTableCell title='Category' />
                        <TableCell style={{
                            border: "none",
                            borderRadius: " 0 12px 12px  0",
                            padding: "16px 20px",
                            backgroundColor: commonColors.tableHead,
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                            whiteSpace: 'nowrap'
                        }}>{'Date'}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((e, index) => (
                        <TableRow key={index}>
                            <RowTableCell title={(index + 1).toString()} />
                            <RowTableCell title={e?.description ?? ''} />
                            <RowTableCell title={e?.amount.toString() ?? ''} />
                            <RowTableCell title={e?.type ?? ''} />
                            <RowTableCell title={e?.category ?? ''} />
                            <RowTableCell title={e?.date ?? ''} />
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
});

export default CTable;



export const CTableCell = React.memo(({ title }: { title: string }) => {
    return (
        <TableCell sx={{

        }} style={{
            border: "none",
            // borderRadius: " 12px 0 0 12px",
            padding: "16px 20px",
            backgroundColor: commonColors.tableHead,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)", // card-like shadow
        }}>{title}</TableCell>
    )
});

export const RowTableCell = ({ title }: { title: string }) => {
    return (
        <TableCell style={{
            border: "none",
            padding: "16px 20px",
            backgroundColor: "#ffffff",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)", // card-like shadow
        }}>{title}</TableCell>

    )
}


