"use client"
import React from 'react';
import { logoutAction } from '../Actions/LoginAction';

const LoguotButton = () => {
    return (
        <div>
            <button
                onClick={() => { logoutAction().then(() => location.reload()) }}
                className="bg-red-500 text-white px-3 py-1 rounded"
            >
                Logout
            </button>
        </div>
    );
};

export default LoguotButton;