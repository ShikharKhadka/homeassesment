import { commonColors } from '@/app/colors/color'
import { Button } from '@mui/material'
import React from 'react'

const CButton = ({ title }: { title: string }) => {
    return (
        <Button style={{backgroundColor: commonColors.primary,color:'white',textTransform:'none',padding:' 10px 20px 10px 20px' }}>
            {title}
        </Button>
    )
}

export default CButton
