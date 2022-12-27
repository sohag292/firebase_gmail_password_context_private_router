import { AuthContext } from '../contexts/UserContext';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
   
    const { signIn } = useContext(AuthContext);
    const [success, setSuccess] = useState(false);
    const navigate=useNavigate()
    // const [userEmail, setUserEmail] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setSuccess(true);
                navigate("/");
            })
            .catch(error => {
                console.error('error', error)
            })

    }

    const handleEmailBlur = event => {
        const email = event.target.value;
        // setUserEmail(email);
        console.log(email);
    }



    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please Login!!</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Your Email</label>
                    <input onBlur={handleEmailBlur} type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Your Password</label>
                    <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Your password" required />
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            {success && <p>Successfully login to the account</p>}
            <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
            {/* <p><small>Forget Password? <button type="button" onClick={handleForgetPassword} className="btn btn-link">Reset Password</button></small></p> */}
        </div>
    );
};

export default Login;