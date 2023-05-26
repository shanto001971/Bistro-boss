import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const Login = () => {


    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const { singUpUser, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const froms = location.state?.from?.pathname || "/";
    const handelLogin = (event) => {
        event.preventDefault();


        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        // console.log(email, password)
        singUpUser(email, password)
            .then(result => {
                setUser(result.user);
                
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'successfully LogIn',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(froms, { replace: true });
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handelValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;


        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <form onSubmit={handelLogin} className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} name="captcha" placeholder="type the captcha above" className="input input-bordered" />
                            <button onClick={handelValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>

                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
                <p>New hare to  <Link to="/singup" className='link'>SingUp</Link></p>
            </div>
        </div>
    );
};

export default Login;