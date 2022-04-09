import { useEffect, useState } from "react";
import styles from "./TransactionList.module.css";
const TransactionList = ({ transaction }) => {
  const [searchItem, setSearchItem] = useState("");
  const [copytnx, setCopyTnx] = useState(transaction);
  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    serchFunction(e.target.value);
  };
  const serchFunction = (search) => {
    if (!search || search === "") {
      setCopyTnx(transaction);
      return;
    }
    const filtered = transaction.filter((t) => 
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setCopyTnx(filtered);
  };
  useEffect(() => {
    serchFunction(searchItem);
  }, [transaction]);
  if (!transaction.length) return <p>add Some Teansaction</p>;
  return (
    <section>
      <div>
        <h4>search Transaction</h4>
        <input className={styles.input}
          type="text"
          placeholder="search...."
          onChange={changeHandler}
          value={searchItem}
        />
      </div>
      {copytnx.length ? (
        copytnx.map((t) => {
        
          return (
            <div className={styles.transaction}key={t.id}>
              <span>name:
              {t.desc}
                </span>
            
              <span>amount:{t.amount}
                </span>
            </div>
          );
        })
      ) : (
        <p>No Item Match</p>
      )}
    </section>
  );
};
export default TransactionList;
