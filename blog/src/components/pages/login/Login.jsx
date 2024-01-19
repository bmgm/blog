import s from "./Login.module.css"

const Login = () => {
  return (
    <div className={s.login}>
      <form action="" className={s.loginForm}>
      <h2>Login</h2>
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Enter your email"/>
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className={s.loginSubmit}>Login</button>
      </form>
      <button className={s.loginRegisterButton}>Register</button>
    </div>
  )
}

export default Login