import React from 'react'

const Register = () => {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Register</div>

                    <div className="card-body">
                        <form method="POST" action={ route('user.register') }>

                            <div className="row mb-3">
                                <label forHtml="name" className="col-md-4 col-form-label text-md-end">Name</label>

                                <div className="col-md-6">
                                    <input id="name" type="text" className="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autoComplete="name" autoFocus/>

                                    {/* @error('name')
                                        <span className="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror */}
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label forHtml="email" className="col-md-4 col-form-label text-md-end">Email Address</label>

                                <div className="col-md-6">
                                    <input id="email" type="email" className="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autoComplete="email"/>

                                    {/* @error('email')
                                        <span className="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror */}
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label forHtml="password" className="col-md-4 col-form-label text-md-end">Password</label>

                                <div className="col-md-6">
                                    <input id="password" type="password" className="form-control @error('password') is-invalid @enderror" name="password" required autoComplete="new-password"/>

                                    {/* @error('password')
                                        <span className="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror */}
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label forHtml="password-confirm" className="col-md-4 col-form-label text-md-end">Confirm Password</label>

                                <div className="col-md-6">
                                    <input id="password-confirm" type="password" className="form-control" name="password_confirmation" required autoComplete="new-password"/>
                                </div>
                            </div>

                            <div className="row mb-0">
                                <div className="col-md-6 offset-md-4">
                                    <button type="submit" className="btn btn-primary">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
