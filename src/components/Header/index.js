import {Box, AppBar, Toolbar, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <Box m={0} pb={10}>
        <AppBar position="static">
            <Toolbar style={{
                float       : 'none',
                width       : '400px',
                marginLeft  : 'auto',
                marginRight : 'auto'
            }}>
                <Typography variant="h4" display={"inline"} align="center">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    );
}

Header.defaultProps = {
    title: "Expense Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;