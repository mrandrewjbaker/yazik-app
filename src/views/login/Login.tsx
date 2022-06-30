import { MdLogin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from './login.module.scss';

export const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form className={styles.login_form}>
        <label className={styles.login_form___label}>
          Username:
          <input className={styles.login_form___input} type="text" />
        </label>
        <label className={styles.login_form___label}>
          Password:
          <input className={styles.login_form___input} type="password" />
        </label>
        <span className={styles.login_form___registerText}>Don't have an account? <Link to="/register" className={styles.login_form___registerText}>Click Here</Link></span>
        <button className={styles.login_form___submitButton} type="submit">
          <span className={styles.login_form___submitButtonText}>Login <MdLogin className={styles.login_form___submitButtonTextIcon}/></span>
        </button>
      </form>
    </div>
  )
}