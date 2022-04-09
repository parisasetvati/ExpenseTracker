import { useEffect, useState } from "react";
import styles from "./ExpenseTracker.module.css"
import ExpenseForm from "./ExpenseForm";
import Overview from "./Overview";
import TransactionList from "./TransactionList";

const ExpenseTracker = () => {
    const [expense,setExpense]=useState(0);
    const[income,setIncome]=useState(0);
    const[transaction,setTransaction]=useState([]);
    
       const addTransaction=(add)=>{
setTransaction([...transaction,{...add,id:Date.now()}])
       }
    useEffect(()=>{
        let exp=0;
        let inc=0;
        transaction.forEach((t)=>{
            t.type==="expense" ? exp=exp+parseFloat(t.amount) :inc=inc+parseFloat(t.amount);
        })
      
        setExpense(exp);
        setIncome(inc);
    }
    ,[transaction])
    return(
        <section className={styles.section}>
            <h2>Expense Tracker</h2>
            <div className={styles.container}>
 <Overview expense={expense} income={income} addTransaction={addTransaction}/>
<TransactionList transaction={transaction}/>
</div>
        </section>
       
    )
    ;
}
 
export default ExpenseTracker;