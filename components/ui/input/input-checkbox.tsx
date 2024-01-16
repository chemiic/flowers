import styles from "./input.module.css";

type props = {
  id: string;
  name: string;
  label: string;
  color?: string;
};

const InputCheckbox = ({id, label, color}: props) => {
  return (
    <div className={styles.checkbox}>
      <input
        id={id}
        name={id}
        value={label}
        type="checkbox"
      />
      <label
        htmlFor={id}
      >
        <span className={color ? `text-xl text-[--gray] bg-[${color}] px-2` : "text-xl text-[--gray]"}>
          {label}
        </span>
      </label>
    </div>
  );
};

export default InputCheckbox;