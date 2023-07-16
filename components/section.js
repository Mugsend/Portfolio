import styles from '../styles/section.module.css';
export default function Section({ children }) {
	return <div className={styles.section}>{children}</div>;
}
