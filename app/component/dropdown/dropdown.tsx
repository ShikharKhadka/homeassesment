import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

export const CDropdown = ({ label, menuList, value, handelOnClick, fullWidth = false }: { label: string, menuList: string[], value: string, handelOnClick: (event: SelectChangeEvent) => void, fullWidth?: boolean },) => {
    return (
        <FormControl fullWidth style={{ width: fullWidth ? '' : '200px' }}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                value={value}
                label={label}
                onChange={handelOnClick}
            >
                {menuList.map((e) => <MenuItem value={e}>{e}</MenuItem>)}
            </Select>
        </FormControl>
    )
}
