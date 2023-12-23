import { styled } from '@mui/material/styles';
import Button from '@mui/material/IconButton';

const FullButton = styled((props) => <Button {...props} />)(
    ({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            width: "100%"
        },
    }),
);


export default FullButton;
