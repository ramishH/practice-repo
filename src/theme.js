import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
           main:'#FF6347',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
        tonalOffset: 0.5,

    },
    typography:{
        fontFamily:'Raleway, sans-serif'
    }
});

export default theme