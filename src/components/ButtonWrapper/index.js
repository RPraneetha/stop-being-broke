import { Fab, Grid, Paper, Box } from '@material-ui/core';
import { PostAdd } from '@material-ui/icons';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

const ButtonWrapper = ({ onClick, buttonText }) => {
    return (
        <Paper>
            <Box p={3} m={3}>
                <Grid container alignItems={"center"} justifyContent={"space-between"} spacing={3} >
                    <Typography variant='h4' color={'textPrimary'} align={"left"} >
                        Track Your Expenses Here
                    </Typography>
                    <Fab
                        variant="extended"
                        color="primary"
                        onClick={onClick}
                    >
                        <PostAdd />
                        {buttonText}
                    </Fab>
                </Grid>
            </Box>
        </Paper>
    );
}

ButtonWrapper.defaultProps = {
    buttonText: "Add expense",
    onClick: () => {
        console.log("Add an onClick handler!")
    }
}


ButtonWrapper.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ButtonWrapper;