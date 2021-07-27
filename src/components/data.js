import {Box, FormControlLabel} from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons";
import {blue, red} from "@material-ui/core/colors";

export const columns = [
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

const Actions = ({ index }) => {
    const handleEditClick = () => {
        console.log(index, "row selected")
    }

    const handleDeleteClick = () => {
        console.log(index, "row deleted")
    }

    return <FormControlLabel
        control={
            <Box display={"flex"} flexGrow={1}  justifyContent={"space-around"} style={{ cursor: "pointer" }}>
                <Edit style={{ color: blue[500] }} onClick={handleEditClick}/>
                <Delete style={{ color: red[500] }} onClick={handleDeleteClick}/>
            </Box>
        }
        style = {{
            width: "100%"
        }}
    />
}