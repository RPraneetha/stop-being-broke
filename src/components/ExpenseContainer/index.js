import PropTypes from 'prop-types';
import ExpenseItem from '../ExpenseItem';
import { DataGrid } from '@material-ui/data-grid';

const ExpenseContainer = ({ expenseList, columns }) => {
    return (
    <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={expenseList}
            columns={columns}
            pageSize={10}
        />
    </div>
    );
}

ExpenseContainer.defaultProps = {
    expenseList: []
}

ExpenseContainer.propTypes = {
    expenseList: PropTypes.array.isRequired,
};

export default ExpenseContainer;