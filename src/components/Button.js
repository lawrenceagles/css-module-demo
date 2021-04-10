import React from 'react';
import styles from './Button.module.css';

console.log('styles', styles);

const Button = () => (
	<React.Fragment>
		<button class={styles.danger}>Danger btn</button>
		<button class={styles.info}>Info btn</button>
		<button class={styles.secondary}>Secndary btn</button>
		<button class={styles.success}>Success btn</button>
		<button class={styles.warning}>Warning btn</button>
		<button class={styles.primary}>Primary btn</button>
	</React.Fragment>
);

export default Button;
