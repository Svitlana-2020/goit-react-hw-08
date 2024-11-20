import css from '../components/ContactForm.module.css'
const HomePage = () => {

const nameId = crypto.randomUUID();
const numberId = crypto.randomUUID();

    return (
    <div>
        <p>Home</p>
        <p>Register</p>
        <p>Log In</p>
        <form className={css.form}>
           
           <label htmlFor={nameId} className={css.label}>Login</label>
       <input type="text" name="login" className={css.name}  ></input>
    
               
           <label htmlFor={numberId} className={css.label}>Password</label>
       <input type="text" name="password" className={css.name} ></input>
       
      
       <button type="submit" className={css.button}>Log In</button>
       </form>
    </div>
)}

export default HomePage