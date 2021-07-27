import {useState} from "react";
import { Container } from '@material-ui/core';
import Header from './components/Header';
import ButtonWrapper from './components/ButtonWrapper';
import ExpenseContainer from './components/ExpenseContainer';
import {columns} from "./components/data";

function App() {
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

    const onClick = (e) => {
        console.log("Added expense yay!")
        console.log(e)
    }
    return (
        <Container>
            <Header title={"Stop Being Broke!"}/>
            <ButtonWrapper onClick={onClick} buttonText={"Add Expense"}/>
            <ExpenseContainer columns={columns} expenseList={expenses}/>
        </Container>
    );
}

export default App;
