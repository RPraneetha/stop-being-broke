import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    InputAdornment,
    TextField
} from "@material-ui/core";

const EditDialog = ({ expense, isOpen, handleClose, updateHelper }) => {
    let expenseItem = {...expense};

    const onSubmit = (e) => {
        updateHelper(expenseItem)
        handleClose()
    }

    return (
        <Dialog onClose={handleClose} aria-label="edit-expense-item-box" open={isOpen}>
            <DialogTitle id="edit-expense-item">Edit Expense Item</DialogTitle>
            <DialogContent>
                <form validate autoComplete="off">
                    <TextField
                        fullWidth
                        autoFocus
                        margin="normal"
                        id="expenseItem"
                        label="Expense Item"
                        type="text"
                        defaultValue={expenseItem.expenseItem}
                        onChange={(e) => expenseItem.expenseItem = e.target.value}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        id="expenseAmount"
                        label="Expense Amount"
                        type="number"
                        defaultValue={expenseItem.amount}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">€</InputAdornment>,
                        }}
                        onChange={(e) => expenseItem.amount = parseFloat(e.target.value)}
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={(e) => onSubmit(e)} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default EditDialog;