import styles from "../app/page.module.css";

export default function ProviderButton({ children, icon, originalColor }) {
  return (
    <button className={styles.btnProvider}>
      <span className={styles.svg}>
        {/* If originalColor=false, your SVGs should use currentColor;
           here we just render whatever you pass in */}
        {icon}
      </span>
      <span>{children}</span>
    </button>
  );
}