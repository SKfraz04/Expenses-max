import { useState } from "react";
import Card from "../Ui/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem (props) {

    const [title, setTitle]= useState(props.title);
    const clickHandler =()=>{
        setTitle("updated!!!");
        console.log(title);
    };
    // const expenseDate = new Date(2022,12,28);
    // const expenseTitle = "Car Insurance";
    // const expenseAmount ='300.95';
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description"> 
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Title</button>
        </Card>
    );
}
export default ExpenseItem