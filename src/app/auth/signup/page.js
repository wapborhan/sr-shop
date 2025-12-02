"use client";

import { registerUser } from "@/app/actions/auth/registerUser";
import BreadCrumb from "@/components/BreadCrumb";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

const RegisterPage = () => {
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const username = email.split("@")[0];
    const password = form.password.value;
    const payload = {
      email,
      password,
      username,
      role: "user",
    };
    const result = await registerUser(payload);
    console.log(result, payload);

    if (result?.success) {
      setError("");
      window.location.href = "/";
    } else {
      setError(result?.error);
    }
  };
  return (
    <>
      <section className="container">
        <BreadCrumb page="Sign Up" />
        <div className="mn-register p-b-15">
          <div className="row">
            <div className="mn-register-wrapper">
              <div className="mn-register-container">
                <div className="mn-title">
                  <h2>
                    Register<span></span>
                  </h2>
                  <p>Best place to buy and sell digital products.</p>{" "}
                  {error && (
                    <p
                      style={{ color: "red" }}
                      clasName="text-center mx-auto w-full"
                    >
                      {error}
                    </p>
                  )}
                </div>
                <div className="mn-register-form">
                  <form id="form" onSubmit={handleRegister}>
                    <span className="mn-register-wrap">
                      <label>
                        Email <span className={styles.requerd}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your Email"
                        required
                      />
                    </span>
                    <span className="mn-register-wrap">
                      <label>
                        Password <span className={styles.requerd}>*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        required
                      />
                    </span>
                    <span className="mn-register-wrap">
                      <label>
                        Confirm Password{" "}
                        <span className={styles.requerd}>*</span>
                      </label>
                      <input
                        type="password"
                        name="confirmpassword"
                        id="confirmpassword"
                        placeholder="Enter Confirm Password"
                        required
                      />
                    </span>

                    <span className="mn-register-wrap mn-register-btn">
                      <span>
                        Have an account?<Link href="/auth/signin">Login</Link>
                      </span>
                      <button className="mn-btn-1" type="submit">
                        <span>Register</span>
                      </button>
                    </span>
                  </form>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      className={styles.googleSigninBtn}
                      onClick={() => signIn("google")}
                    >
                      <span className={styles.googleWrapper}>
                        <img
                          className={styles.googleImg}
                          src="https://www.svgrepo.com/show/475656/google-color.svg"
                          alt="Google sigin"
                        />
                      </span>
                      <span>Sign Up with Google</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
