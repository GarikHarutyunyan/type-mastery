import React, {useState} from 'react';
import style from './SignIn.module.css';
import styles from "../RegistrationModal.module.css";

interface ISignInProps {
    onClose: () => void;
}

const SignIn = ({ onClose }: ISignInProps) => {

    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const signIn = () => {
        setState({
            email: state.email,
            password: state.password,
        })
        console.log(state)
        onClose();
    }

    return (
            <div className={style.innerWindow}>
                <div className={style.image}>
                    <div className={style.logo}>
                        <div className={style.COMPANY}>COMPANY</div>
                        <div className={style.LOGO}>LOGO</div>
                        <div className={style.COMPANY}>NAME</div>
                    </div>
                </div>
                <div className={style.Registration}>
                    <div style={{display: "flex", alignItems: "flex-start", justifyContent: "flex-end", width: "100%", height:"100%"}}>
                        <button onClick={onClose} className={styles.registrationModal__closeButton}>
                            {'X'}
                        </button>
                    </div>
                    <div className={style.headerText}>
                        <div className={style.logo}>
                            <div className={style.COMPANY}>COMPANY</div>
                            <div className={style.COMPANY}>NAME</div>
                        </div>
                    </div>
                    <div className={style.inputEmail}>
                        <div className={style.EMAIL}>EMAIL</div>
                        <input type="email" placeholder="Email address" className={style.email} value={state.email}
                               onChange={e => setState({...state, email: e.target.value})}/>
                    </div>
                    <div className={style.inputPassword}>
                        <div className={style.PASSWORD}>PASSWORD</div>
                        <input type="password" placeholder="Password" className={style.password} value={state.password}
                               onChange={e => setState({...state, password: e.target.value})}/>
                    </div>
                    <div>
                        <nav>
                            <span className={style.textCreateAccount}>Have an account?</span>
                            <a href={"./SignUp"} className={style.CreateAccountLink}>Create Account</a>
                        </nav>
                    </div>
                    <div className={style.buttonLogin}>
                        <button className={style.buttonInput} onClick={signIn}>
                            SIGN IN
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default SignIn;