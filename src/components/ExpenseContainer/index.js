import PropTypes from 'prop-types';
import ExpenseItem from '../ExpenseItem';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import {Box, FormControlLabel, IconButton, Tooltip } from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons";
import {blue, red} from "@material-ui/core/colors";
import {useState} from "react";
import EditDialog from "./EditDialog";

//Remove border on cell selection
const useStyles = makeStyles({
    root: {
        '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
            outline: 'none',
        },
    }
});

const ExpenseContainer = ({  }) => {
    const classes = useStyles();
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            minWidth: 50,
            flex: 0.2,
            type: 'number'
        },
        {
            field: 'expenseItem',
            headerName: 'Expense Item',
            minWidth: 100,
            flex: 1,
            type: 'string'
        },
        {
            field: 'amount',
            headerName: 'Amount',
            minWidth: 50,
            flex: 0.2,
            type: 'number',
            valueFormatter: (params) => {
                return `€${params.value}`;
            },
        },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            width: 140,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <Actions index={params.row.id} />
                );
            }
        }
    ]

    const [expenses, setExpenses] = useState([
        {
            id: 1,
            expenseItem: "Pizza from Dominoes",
            amount: 150,

        },
        {
            id: 2,
            expenseItem: "Book from Amazon",
            amount: 40,

        },
        {
            id: 3,
            expenseItem: "Anker Soundcore Headphones",
            amount: 7,

        },
    ])

    const [isEditOpen, setIsEditOpen] = useState(false)
    const [editItem, setEditItem] = useState({})

    const updateExpenseItem = (expenseItem) => {
        setExpenses([...expenses].map(expense => {
            if(expense.id === expenseItem.id)
                return expenseItem
            return expense
        }))
    }

    const Actions = ({ index }) => {
        const handleEditClick = () => {
            if(!isEditOpen) //if isEditOpen is false, that means it's about to be changed to true and hence editItem should be set
                setEditItem(expenses.find((expense) => expense.id === index))
            setIsEditOpen(!isEditOpen)
        }

        const handleDeleteClick = () => {
            setExpenses(expenses.filter((expense) => expense.id !== index))
        }

        return <FormControlLabel
            control={
                <Box display={"flex"} flexGrow={1}  justifyContent={"space-around"} style={{ cursor: "pointer" }}>
                    <Tooltip title="Edit">
                        <IconButton aria-label="edit" onClick={handleEditClick}>
                            <Edit style={{ color: blue[500] }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete" onClick={handleDeleteClick}>
                            <Delete style={{ color: red[500] }} />
                        </IconButton>
                    </Tooltip>
                    <EditDialog expense={editItem} isOpen={isEditOpen} handleClose={handleEditClick} updateHelper={updateExpenseItem}/>
                </Box>
            }
            style = {{
                width: "100%"
            }}
        />
    }
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                className={classes.root}
                rows={expenses}
                columns={columns}
                pageSize={10}
            />
        </div>
    );
}

ExpenseContainer.defaultProps = {

}

ExpenseContainer.propTypes = {

};

export default ExpenseContainer;