"use client";
import BreadCrumb from "@/components/BreadCrumb";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <>
      <main className="container">
        <BreadCrumb page="Login" />

        <section className="mn-login p-b-15">
          <div className="mn-title d-none">
            <h2>
              Login<span></span>
            </h2>
            <p>Get access to your Orders, Wishlist and Recommendations.</p>
          </div>
          <div className="mn-login-content">
            <div className="mn-login-box">
              <div className="mn-login-wrapper">
                <div className="mn-login-container">
                  <div className="mn-login-form">
                    <form action="#" method="post">
                      <span className="mn-login-wrap">
                        <label>Email Address*</label>
                        <input
                          type="text"
                          name="name"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          autoComplete="off"
                          required
                        />
                      </span>
                      <span className="mn-login-wrap">
                        <label>Password*</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          autoComplete="new-password"
                          required
                        />
                      </span>
                      <span className="mn-login-wrap mn-login-fp">
                        <span className="mn-remember">
                          <input type="checkbox" value="" />
                          Remember
                          <span className="checked"></span>
                        </span>
                        <label>
                          <a href="#">Forgot Password?</a>
                        </label>
                      </span>
                      <span className="mn-login-wrap mn-login-btn">
                        <span>
                          Don&apos;t have an account yet?{" "}
                          <a href="register.html" className="">
                            Create Account?
                          </a>
                        </span>
                      </span>
                      <button
                        className="mn-btn-1 btn m-t-15 m-b-15 p-t-10 p-b-10 justify-content-center"
                        type="submit"
                      >
                        <span>Login</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="mn-login-box d-n-991">
              <div className="mn-login-img">
                <img src="/assets/img/logo/logo-flat.png" alt="login" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
