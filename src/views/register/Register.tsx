import { MdLogin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import styles from "./register.module.scss";
import { useForm } from "react-hook-form";
import { object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterUserMutation } from "../../app/features/User/authApi";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface IFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const registerSchema = object({
  username: string().min(1, "Full name is required").max(100),
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters"),
  confirmPassword: string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match",
});

export const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();

  const [registerUser, { isLoading, isSuccess, error, isError, data }] =
    useRegisterUserMutation();

  const onSubmit = (data: IFormData) => {
    registerUser(data);
  };
  console.log({ data });

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }

    if (isError) {
      console.log(error);
    }
  }, [isLoading]);

  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <form className={styles.register_form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.register_form___label}>
          Email:
          <input
            className={styles.register_form___input}
            type="text"
            {...register("email")}
          />
          <p className={styles.register_form___error}>
            {errors.email?.message}
          </p>
        </label>
        <label className={styles.register_form___label}>
          Username:
          <input
            className={styles.register_form___input}
            type="text"
            {...register("username")}
          />
          <p className={styles.register_form___error}>
            {errors.username?.message}
          </p>
        </label>
        <label className={styles.register_form___label}>
          Password:
          <input
            className={styles.register_form___input}
            type="password"
            {...register("password")}
          />
          <p className={styles.register_form___error}>
            {errors.password?.message}
          </p>
        </label>
        <label className={styles.register_form___label}>
          Repeat Password:
          <input
            className={styles.register_form___input}
            type="password"
            {...register("confirmPassword")}
          />
          <p className={styles.register_form___error}>
            {errors.confirmPassword?.message}
          </p>
        </label>
        <span className={styles.register_form___registerText}>
          Already have an account?{" "}
          <Link to="/" className={styles.register_form___registerText}>
            Click Here
          </Link>
        </span>
        <button
          disabled={isLoading}
          className={styles.register_form___submitButton}
          type="submit"
        >
          <span className={styles.register_form___submitButtonText}>
            Register{" "}
          </span>
          <MdLogin className={styles.register_form___submitButtonTextIcon} />
        </button>
      </form>
    </div>
  );
};
