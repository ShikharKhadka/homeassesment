import { defaultPadding } from '@/app/utils/box_component'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

const CTable = () => {
    return (
        <div style={{ padding: defaultPadding }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <CTableCell title={'Description'} />
                        <CTableCell title={'Amount'} />
                        <CTableCell title={'Type'} />
                        <CTableCell title={'Category'} />
                        <CTableCell title={'Date'} />
                    </TableRow>

                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>32131</TableCell>
                        <TableCell>32131</TableCell>
                        <TableCell>32131</TableCell>
                        <TableCell>32131</TableCell>
                        <TableCell>32131</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
}

export default CTable


export const CTableCell = ({ title }: { title: string }) => {
    return (
        <TableCell style={{
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            padding: '12px 16px',
            backgroundColor: '#ffffff'
        }}>{title}</TableCell>

    )
}


