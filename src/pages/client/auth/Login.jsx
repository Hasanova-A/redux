import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {


  const adminUser = {
    email: "efsaneadmin@gmail.com",
    password: "efsane123"
  }

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate()

  const checkUser = (e) => {
    e.preventDefault()
    if (emailRef.current.value == adminUser.email && passwordRef.current.value == adminUser.password) {
       Swal.fire({
                title: "Login successfull",
                icon: "success",
                confirmButtonText: "OK"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/dashboard")
                }
            });
        } else {
            Swal.fire({
                title: "Email or password is wrong",
                icon: "error",
            })
        }
    }
  
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <form onSubmit={checkUser}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input required ref={emailRef} type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input required ref={passwordRef} type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login