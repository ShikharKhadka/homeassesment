import { commonColors } from '@/app/colors/color'
import { PersonI } from '@/app/page'
import { defaultPadding } from '@/app/utils/box_component'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'


const CTable = ({ rows }: { rows: PersonI[] }) => {
    return (
        <div style={{ padding: defaultPadding }}>
            <Table >
                <TableHead style={{}}>
                    <TableRow style={{}}>
                        <TableCell style={{
                            border: "none",
                            borderRadius: " 12px 0 0 12px",
                            padding: "16px 20px",
                            backgroundColor: commonColors.tableHead,
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)", // card-like shadow
                        }} >{'S.No'}</TableCell>
                        <CTableCell title='Description' />
                        <CTableCell title='Amount' />
                        <CTableCell title='Type' />
                        <CTableCell title='Category' />
                        <TableCell style={{
                            border: "none",
                            borderRadius: " 0 12px 12px  0",
                            padding: "16px 20px",
                            backgroundColor: commonColors.tableHead,
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)", // card-like shadow
                        }}>{'Date'}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{}}>
                    {rows.map((e, index) => <TableRow key={index}>
                        <RowTableCell title={(index + 1).toString()} />
                        <RowTableCell title={e?.description ?? ''} />
                        <RowTableCell title={e?.amount.toString() ?? ''} />
                        <RowTableCell title={e?.type ?? ''} />
                        <RowTableCell title={e?.category ?? ''} />
                        <RowTableCell title={e?.date ?? ''} />
                    </TableRow>)}
                </TableBody>
            </Table>
        </div>
    )
}

export default CTable


export const CTableCell = ({ title }: { title: string }) => {
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
}

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


