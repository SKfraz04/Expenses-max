import "./App.css";
import ExpenseItem from "./component/ExpenseItem";
import ExpenseData from "./component/ExpenseData";
import Card from "./component/Card";

function App() {
  return (
    <Card>
      <h1>Daily Expense</h1>
      <ExpenseItem
        title={ExpenseData[0].title}
        amount={ExpenseData[0].amount}
        date={ExpenseData[0].date}
      />
      <ExpenseItem
        title={ExpenseData[1].title}
        amount={ExpenseData[1].amount}
        date={ExpenseData[1].date}
      />
      <ExpenseItem
        title={ExpenseData[2].title}
        amount={ExpenseData[2].amount}
        date={ExpenseData[2].date}
      />
      <ExpenseItem
        title={ExpenseData[3].title}
        amount={ExpenseData[3].amount}
        date={ExpenseData[3].date}
      />
    </Card>
  );
}

export default App;