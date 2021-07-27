import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';

const ExpenseItem = ({ expenseItem }) => {
    return(
        <Paper>
            <span>{expenseItem.expenseItem} </span>
            <span>€{expenseItem.amount} </span>
        </Paper>
    )

}

ExpenseItem.defaultProps = {
    expenseItem: {
        expenseItem: "No expenses",
        amount: 0
    }
}

ExpenseItem.propTypes = {
    // expenseList: PropTypes.objectOf(
    //
    // ),,
};

export default ExpenseItem;