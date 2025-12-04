import { TextField } from '@mui/material'
import React from 'react'

export const CTextfield = ({ placeholder, value, onChange }: { placeholder: string, value?: string, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void }) => {
    return (
        <TextField fullWidth placeholder={placeholder} value={value} onChange={onChange} />
    )
}
