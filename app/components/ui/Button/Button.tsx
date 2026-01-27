import styles from "./Button.module.css";

type ButtonProps = React.ComponentProps<"button">;

export default function Button({ children, ...rest }: ButtonProps) {
   return (
      <button className={styles.button} {...rest}>
         <p>{children}</p>
      </button>
   )
};