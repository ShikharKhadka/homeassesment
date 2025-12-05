import { CircularProgress } from '@mui/material'
import React from 'react'

const CLoader = () => {
    return (
        <div style={{height:'90vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <CircularProgress/>
        </div>
    )
}

export default CLoader
