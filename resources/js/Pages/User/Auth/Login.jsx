import React, {useEffect} from 'react'
import { Link, Head, useForm } from '@inertiajs/react';
import InputError from "../../../Components/InputError";

const Login = () => {
    const{data, setData, post, processing, errors, clearErrors, reset} = useForm({
        email: "",
        password: "",
    })

    useEffect(() => {
        // Clear error message after a certain timeout
        const interval = setInterval(() => {
            clearErrors();
        }, 7000);

        // Change the timeout value as needed
        return () => {
            clearInterval(interval);
            reset('password');
        }
    }, []);

    /**
     * Handle change event for input fields.
     * @param {Event} e - The event object.
     * */
    const handleChange = (e) => {
        e.persist()
        setData(e.target.name, e.target.type === "checkbox" ? e.target.checked : e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Make a POST request to the "user.login" route
        post(route("user.login"), {
            onSuccess: () => {
                // Display a success message using Swal              
                Swal({
                    icon: 'success',
                    title: 'Login Successfully!',
                    showConfirmButton: false,
                    // timer: 1500
                })
                // .then(() => {
                //     window.location.href = route('user.dashboard');
                // });
            }
        })
    }


  return (
    <React.Fragment>
        <Head title="User|Login" />

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Login</div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit} >
                                

                                <div className="row mb-3">
                                    <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email Address</label>

                                    <div className="col-md-6">
                                        <input id="email" type="email" className={`form-control errors('email') ? 'is-invalid' : ''`} name="email" value={data.email} onChange={handleChange} autoComplete="email" autoFocus/>
                                        <InputError message={errors.email} />
                                        {/* @error('email')
                                            <span className="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror */}
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="password" className="col-md-4 col-form-label text-md-end">Password</label>

                                    <div className="col-md-6">
                                        <input id="password" type="password" className={`form-control errors('password') ? 'is-invalid' : ''`} name="password" value={data.password} onChange={handleChange}autoComplete="current-password"/>

                                        {/* @error('password')
                                            <span className="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror */}
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6 offset-md-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="remember" id="remember" />

                                            <label className="form-check-label" htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-0">
                                    <div className="col-md-8 offset-md-4">
                                        <button type="submit" className="btn btn-primary">
                                            Login
                                        </button>

                                        {/* @if (Route::has('password.request'))
                                            <a className="btn btn-link" href="#">
                                                Forgot Your Password?
                                            </a>
                                        @endif */}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Login
