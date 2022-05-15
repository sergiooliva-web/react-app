import Modal from "./Modal";
import classes from "./Cart.module.css";

const Finshes = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "e2",
          title: "Fusion_OWL_HD",
          amount: 1032400,
        },
      ].map((item) => (
        <li>{item.title}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Сумма всего</span>
        <span>123090</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Закрыть
        </button>
        <button className={classes.button}>Оформить</button>
      </div>
    </Modal>
  );
};

export default Finshes;
