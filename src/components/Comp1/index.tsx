// import "./comp1.scss"
import styles from "./comp1.module.scss"

//模块化引入




function Comp() {
    return (
        <div className={styles.box}>
            <p>
                这是comp1内容
            </p>
        </div>
    )
}

export default Comp