import ExpenseForm from "./ExpenseForm";
import styles from "./Overview.module.css";
import { useState } from "react";
const Overview = ({expense,income,addTransaction}) => {
    const[isshow,setIsShow]=useState(false);
    const addHandler=()=>{
        setIsShow(!isshow)
    }
    return (  
      

        <section>
            <div className={styles.add}>
                <h4>Balance:{income-expense}</h4>
                <button  className={styles.addbtn} onClick={addHandler}>{isshow ? "cancle" : "Add"}</button>

            </div>
            <div className={styles.amount}>
                <div className={styles.expenseBox}>
                    Expense:<span style={{color:"red"}}>${expense}</span>
                </div>
                <div className={styles.expenseBox}>
                    Income:<span>
                    ${income}
                        </span>
                </div>
            </div>
            {isshow && <ExpenseForm addTransaction={addTransaction} setIsShow={setIsShow}/>}
            </section>
    );
}
 
export default Overview;
