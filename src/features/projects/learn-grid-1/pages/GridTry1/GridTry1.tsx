import styles from './GridTry1.module.css';

const GridTry1 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={`${styles.e1} ${styles.e}`}>1</div>
        <div className={`${styles.e2} ${styles.e}`}>2</div>
        <div className={`${styles.e3} ${styles.e}`}>3</div>
        <div className={`${styles.e4} ${styles.e}`}>4</div>
        <div className={`${styles.e5} ${styles.e}`}>5</div>
        <div className={`${styles.e6} ${styles.e}`}>6</div>
        <div className={`${styles.e7} ${styles.e}`}>7</div>
      </div>
    </div>
  )
}

export default GridTry1
