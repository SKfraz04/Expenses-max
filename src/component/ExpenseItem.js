import Card from "./Card";
import { ExpenseDate } from "./ExpenseData";
import "./ExpenseItem.css";

function ExpenseItem (props) {
    // const expenseDate = new Date(2022,12,28);
    // const expenseTitle = "Car Insurance";
    // const expenseAmount ='300.95';
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description"> 
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
    
}
export default ExpenseItem