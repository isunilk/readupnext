"use client"
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setData] = useState({
    email: null,
    password: null,
  })
  const route = useRouter();

  const confirmUser = async (data) => {
    let res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    
    res = await res.json();
    if (res.success) {
      alert(res.message)
      route.push('/admin')
    } else {
      alert(res.message)
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    const { email, password } = userData;
    if (email, password) {
      confirmUser(userData)

    } else {
      alert("Fill all field OR confirm password")
    }
  };

  const handleInputs = (e) => {
    const { value, name } = e.target;
    setData({
      ...userData,
      [name]: value.length <= 0 ? null : value
    })
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      action="#"
      className="user-data-form mt-40 lg-mt-30"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Email</label>
            <input type="email" placeholder="hasan@gmail.com" name="email" onChange={handleInputs} required />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="pass_log_id"
              name="password"
              onChange={handleInputs}
              required
            />
            <span className="placeholder_icon" onClick={handleTogglePassword}>
              <span className=" d-flex align-items-center">
                {showPassword ? (
                  <>
                    <i class="fa-regular fa-eye"></i>
                  </>
                ) : (
                  <>
                    <i class=" fa-regular fa-eye-slash"></i>
                  </>
                )}
              </span>
            </span>
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Keep me logged in</label>
            </div>
            <a href="#">Forget Password?</a>
          </div>
          {/* /.agreement-checkbox */}
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <button className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">
            Login
          </button>
        </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
};

export default LoginForm;
