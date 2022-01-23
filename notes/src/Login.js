import { useState } from "react";
import { useHistory } from "react-router-dom";
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername('');
        setPassword('');
        const loginContent = { username, password };
        history.push('/');
    }

    const handleCancel = (e) => {
        history.goBack();
    }

    return (
        <div id="wrap" className="input">
            <section className="input-content">
                <h2 className="login-head">Login</h2>
                <div className="input-content-wrap">
                <div className="inputbox">
                    <dd className="inputbox-content">
                    <input 
                        id="input0" 
                        value={username} 
                        type="text" 
                        required
                        onChange={(e) => setUsername(e.target.value)}    
                    />
                    <label for="input0">Username</label>
                    <span className="underline"></span>
                    </dd>
                </div>
                <div className="inputbox">
                    <dd className="inputbox-content">
                    <input 
                        id="input1" 
                        value={password} 
                        type="password" 
                        required
                        onChange={(e) => setPassword(e.target.value)}    
                    />
                    <label for="input1">Password</label>
                    <span className="underline"></span>
                    </dd>
                </div>
                <div className="btns">
                    <button className="btn btn-confirm" onClick={handleSubmit}>Sign In</button>
                    <button className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
                </div>
                </div>
            </section>
        </div>
    );
}
 
export default Login;