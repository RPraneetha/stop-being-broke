import { Container } from '@material-ui/core';
import Header from './components/Header';
import ButtonWrapper from './components/ButtonWrapper';
import ExpenseContainer from './components/ExpenseContainer';

function App() {
    const onClick = (e) => {
        console.log("Added expense yay!")
        console.log(e)
    }
    return (
        <Container>
            <Header title={"Stop Being Broke!"}/>
            <ButtonWrapper onClick={onClick} buttonText={"Add Expense"}/>
            <ExpenseContainer />
        </Container>
    );
}

export default App;
