import { MdLogin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from './register.module.scss';

export const Register:React.FC = () => {
  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <form className={styles.register_form}>
        <label className={styles.register_form___label}>
          Email:
          <input className={styles.register_form___input} type="text" />
        </label>
        <label className={styles.register_form___label}>
          Username:
          <input className={styles.register_form___input} type="text" />
        </label>
        <label className={styles.register_form___label}>
          Password:
          <input className={styles.register_form___input} type="password" />
        </label>
        <label className={styles.register_form___label}>
          Repeat Password:
          <input className={styles.register_form___input} type="password" />
        </label>
        <span className={styles.register_form___registerText}>Already have an account? <Link to="/" className={styles.register_form___registerText}>Click Here</Link></span>
        <button className={styles.register_form___submitButton} type="submit">
          <span className={styles.register_form___submitButtonText}>Register <MdLogin className={styles.register_form___submitButtonTextIcon}/></span>
        </button>
      </form>
    </div>
  )
}
