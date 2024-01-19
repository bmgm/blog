import s from "./Register.module.css";

const Register = () => {
  return (
    <div className={s.register}>
      <form action="" className={s.registerForm}>
      <h2>Register</h2>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter your username" />
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Enter your email" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className={s.registerSubmit}>Register</button>
      </form>
      <button className={s.registerLoginButton}>Login</button>
    </div>
  );
};

export default Register;
