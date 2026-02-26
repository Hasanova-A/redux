import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const newUser = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        localStorage.setItem("registeredUser", JSON.stringify(newUser))

        Swal.fire({
            title: "Qeydiyyat uğurludur!",
            text: "İndi daxil ola bilərsiniz.",
            icon: "success",
            confirmButtonText: "Log in səhifəsinə keç"
        }).then(() => {
            navigate("/login");
        });
    }

    return (
    <div className="d-flex align-items-center justify-content-center flex-column my-5">
      <h2 className="mb-4">Register</h2>
      <form onSubmit={handleRegister} className="col-12 col-md-4">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input required ref={emailRef} type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input required ref={passwordRef} type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
    </div>
    )
}

export default Register