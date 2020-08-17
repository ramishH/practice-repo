import React from 'react';
import {Typography,Button} from '@material-ui/core'
import ButtonComponent from '../WrappedComponents/Button'

const Header = () => {
    return(
        <div>
            <Typography>Header</Typography>
            <ButtonComponent variant="contained" color="primary">Hello</ButtonComponent>
        </div>
    )
}

export default Header