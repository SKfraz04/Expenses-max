import"./ExpenseDate.css";
const ExpenseData = [
  {
    id: "e1",
    title: "Repair",
    amount: "30.05",
    date: new Date(2020, 10, 17),
  },
  {
    id: "e1",
    title: "Maintainance",
    amount: "70.09",
    date: new Date(2020, 10, 18),
  },
  {
    id: "e1",
    title: "Oil",
    amount: "23.03",
    date: new Date(2020, 10, 19),
  },
  {
    id: "e1",
    title: "Service",
    amount: "30.09",
    date: new Date(2020, 10, 20),
  },
];
export default ExpenseData;

export const ExpenseDate=(props)=>{
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
