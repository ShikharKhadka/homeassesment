import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { CTextfield } from '../textfield/textfield';
import { Box } from '@mui/system';
import CButton from '../button/button';
import { CDropdown } from '../dropdown/dropdown';
import { useState } from 'react';
import { postData } from '@/app/api/postData';
import { useRouter } from 'next/navigation';

export type TransactionDataI = {
    description: string,
    amount: number | null,
    category: string,
    type: string,
    date: string,
}

export const CDialog = ({ open, onClose, categoryList, typeList }: { open: boolean, onClose: () => void, categoryList: string[], typeList: string[] }) => {

    const router = useRouter();
    const [transactionData, setTransactionData] = useState<TransactionDataI>({
        amount: null,
        category: '',
        date: '',
        description: '',
        type: '',
    });

    const handelOnChange = ({ type, value }: { type: string, value: string }) => {
        if (!transactionData) return;
        setTransactionData({ ...transactionData, [type]: value });
    }

    const submit = async () => {
        postData(transactionData).then((value) => {
            if (value.id) {
                router.push('/transaction-table');
            }
        }).catch((e) => {
            console.log('error');
        });
    };

    return (
        <Dialog onClose={onClose} open={open} style={{ padding: '20px' }} >
            <DialogTitle>Add Transaction</DialogTitle>
            <DialogContent style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} >
                <Box display={'flex'} gap={4}>
                    <CTextfield placeholder='Description' onChange={(e) => { handelOnChange({ type: 'description', value: e.target.value }) }} />
                    <CTextfield placeholder='Amount' onChange={(e) => { handelOnChange({ type: 'amount', value: e.target.value }) }} />
                </Box>
                <Box display={'flex'} gap={4}>
                    <CTextfield placeholder='Category' onChange={(e) => { handelOnChange({ type: 'category', value: e.target.value }) }} />
                    <CTextfield placeholder='Type' onChange={(e) => { handelOnChange({ type: 'type', value: e.target.value }) }} />
                </Box>
                <Box display={'flex'} gap={4}>
                    <CTextfield placeholder='Date' onChange={(e) => { handelOnChange({ type: 'date', value: e.target.value }) }} />
                </Box>
            </DialogContent>
            <DialogActions style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <CButton title='Submit' onClick={submit}></CButton>
                <CButton title='Close' onClick={onClose} />
            </DialogActions>
        </Dialog>
    );
}
