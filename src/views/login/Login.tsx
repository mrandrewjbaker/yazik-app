import { MdLogin } from "react-icons/md";
import styles from "./login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginUserMutation } from "../../app/features/User/authApi";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const registerSchema = object({
  username: string().min(1, "Username address is required"),
  password: string().min(1, "Password is required"),
});

interface IFormData {
  username: string;
  password: string;
}

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const [registerUser, { isLoading, isSuccess, error, isError, data }] =
    useLoginUserMutation();

  // @ts-ignore
  const notify = () => toast();
  const onSubmit = (data: IFormData) => {
    console.log({ data });
    registerUser(data);
  };
  console.log({ data });

  console.log({ isSuccess, isError });
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }

    if (isError) {
      notify();
      // @ts-ignore
      console.log();
    }
  }, [isLoading]);

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.login_form___label}>
          Username:
          <input
            className={styles.login_form___input}
            type="text"
            {...register("username")}
          />
          <p className={styles.login_form___error}>
            {errors.username?.message}
          </p>
        </label>
        <label className={styles.login_form___label}>
          Password:
          <input
            className={styles.login_form___input}
            type="password"
            {...register("password")}
          />
          <p className={styles.login_form___error}>
            {errors.password?.message}
          </p>
        </label>
        <span className={styles.login_form___registerText}>
          Don't have an account?{" "}
          <Link to="/register" className={styles.login_form___registerText}>
            Click Here
          </Link>
        </span>
        <p className={styles.login_failed}>
          {/* @ts-ignore */}
          {error?.data?.error as string}
        </p>
        <button className={styles.login_form___submitButton} type="submit">
          <span className={styles.login_form___submitButtonText}>Login </span>
          <MdLogin className={styles.login_form___submitButtonTextIcon} />
        </button>
      </form>
    </div>
  );
};
