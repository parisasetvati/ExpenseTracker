import { useState } from "react";
import styles from "./ExpenseForm.module.css";
const ExpenseForm = ({addTransaction,setIsShow}) => {
    const[addTnx,setAddTnx]=useState({desc:"",amount:0,type:"expense"})
    const changeHandler=(e)=>{
setAddTnx({...addTnx,[e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        addTransaction(addTnx);
        setIsShow(false);
    }
    return (  
        <form onSubmit={submitHandler}>
            <input  className={styles.input} type="text" placeholder="input..." onChange={changeHandler} name="desc" value={addTnx.desc}/>
            <input  className={styles.input} type="number" placeholder="number" onChange={changeHandler} name="amount" value={addTnx.amount}/>
          
            <div className={styles.radio}>
                <div>
                <input type="radio" onChange={changeHandler} name="type" value="expense" checked={addTnx.type==="expense"}/>
            <label>Expense</label>
                </div>
            <div>
            <input type="radio" onChange={changeHandler} name="type" value="income"checked={addTnx.type==="income"}/>
            <label>Income</label>
            </div>
            
            </div>
          
            <button className={styles.addTransaction}type="submit">Add Transaction</button>
        </form>
    );
}
 
export default ExpenseForm;