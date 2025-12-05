import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Box } from '@mui/system';
import CButton from '../button/button';
import {  useEffect, useState } from 'react';
import { postData } from '@/app/api/postData';
import { useRouter } from 'next/navigation';
import CTextfield from '../textfield/textfield';
import useInput from '@/app/hooks/input';

export type TransactionDataI = {
    description: string,
    amount: number | null,
    category: string,
    type: string,
    date: string,
}

export const CDialog = ({ open, onClose }: { open: boolean, onClose: () => void, }) => {
    const input = useInput<TransactionDataI>();

    const router = useRouter();
    const initialValue = {
        amount: null,
        category: '',
        date: '',
        description: '',
        type: '',
    }
    const [transactionData, setTransactionData] = useState<TransactionDataI>(initialValue);

    const handelOnChange = ({ type, value }: { type: string, value: string }) => {
        if (!transactionData) return;
        setTransactionData({ ...transactionData, [type]: value });
    }

    const submit = async () => {
        postData(transactionData).then((value) => {
            console.log(value)
            if (value.data.id) {
                setTransactionData(initialValue);
                router.replace('/');
            }
        }).catch((e) => {
            console.log('error');
        });
    };

    useEffect(() => {
        if (open) {
            input.reset({
                amount: null,
                category: '',
                date: '',
                description: '',
                type: '',
            });
        }
    }, [open]); // Only 'open' is needed now


    return (
        <Dialog open={open} style={{ padding: '20px' }} >
            <DialogTitle>Add Transaction</DialogTitle>
            <DialogContent style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} >
                <Box display={'flex'} gap={4}>
                    <CTextfield input={input} value={transactionData.description} validationName='description' placeholder='Description' onChange={(e) => { handelOnChange({ type: 'description', value: e.target.value }) }} />
                    <CTextfield input={input} value={transactionData.amount?.toString() ?? ''} validationName='amount' placeholder='Amount' onChange={(e) => { handelOnChange({ type: 'amount', value: e.target.value }) }} />
                </Box>
                <Box display={'flex'} gap={4}>
                    <CTextfield input={input} value={transactionData.category} validationName='category' placeholder='Category' onChange={(e) => { handelOnChange({ type: 'category', value: e.target.value }) }} />
                    <CTextfield input={input} value={transactionData.type} validationName='type' placeholder='Type' onChange={(e) => { handelOnChange({ type: 'type', value: e.target.value }) }} />
                </Box>
                <Box display={'flex'} gap={4}>
                    <CTextfield input={input} value={transactionData.date} validationName='date' placeholder='Date' onChange={(e) => { handelOnChange({ type: 'date', value: e.target.value }) }} />
                </Box>
            </DialogContent>
            <DialogActions style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <CButton title='Submit' onClick={input.handleSubmit(submit)}></CButton>
                <CButton title='Close' onClick={() => { onClose(); setTransactionData(initialValue) }} />
            </DialogActions>
        </Dialog>
    );
}
