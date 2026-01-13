"use client";
import React, { useState } from "react";

const LoginForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        if (email === "demo@mail.com" && password == "123y") {
            console.log("valid registered data:", { email, password });
            cookies().set('auth', 'true');
        }
        else {
            console.log("invalid registered data:", { email, password });
        }

    };

    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white text-gray-900 p-6 rounded-xl shadow">
                <h1 className="text-2xl font-bold  mb-2">
                    Create an account
                </h1>
                <p className="text-sm mb-6">
                    This is a demo Login form for practice.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        required
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <button
                        className={`w-full py-2 rounded-lg font-medium transition"bg-indigo-600 text-white bg-indigo-700`}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
