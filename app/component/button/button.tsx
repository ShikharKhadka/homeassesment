import { commonColors } from '@/app/colors/color'
import { Button } from '@mui/material'

const CButton = ({ title, onClick }: { title: string, onClick?: () => void }) => {
    return (
        <Button
            style={{ backgroundColor: commonColors.primary, color: 'white', textTransform: 'none', padding: ' 10px 20px 10px 20px' }}
            onClick={onClick}
        >
            {title}
        </Button>
    )
}

export default CButton
