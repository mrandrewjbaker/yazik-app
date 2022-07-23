import { useState } from 'react';
import { MdLogin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import styles from './login.module.scss';
import { loginAsync } from './login.slice';
import { ILoginEntity } from './loginTypes';

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loginEntity, setLoginEntity] = useState<ILoginEntity>({
    username: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginEntity({ ...loginEntity, [name]: value });
  }

  const handleLogin = () => {
    dispatch(loginAsync(loginEntity));
  }

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form className={styles.login_form} onSubmit={(e)=>e.preventDefault()}>
        <label className={styles.login_form___label}>
          Username:
          <input className={styles.login_form___input} type="text" name="username" onChange={(e)=>handleChange(e)}/>
        </label>
        <label className={styles.login_form___label}>
          Password:
          <input className={styles.login_form___input} type="password" name="password" onChange={(e)=>handleChange(e)} />
        </label>
        <span className={styles.login_form___registerText}>Don't have an account? <Link to="/register" className={styles.login_form___registerText}>Click Here</Link></span>
        <button className={styles.login_form___submitButton} type="submit" onClick={(e)=>handleLogin()}>
          <span className={styles.login_form___submitButtonText}>Login <MdLogin className={styles.login_form___submitButtonTextIcon}/></span>
        </button>
      </form>
    </div>
  )
}