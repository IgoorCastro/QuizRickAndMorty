import styles from "./Button.module.css";

type ButtonProps = React.ComponentProps<"button">;

export default function Button({ children, className, onClick, disabled = false }: ButtonProps) {
   return (
      <button className={`${styles.button} ${className}`} onClick={onClick} disabled={disabled} >
         <p>{children}</p>
      </button>
   )
};