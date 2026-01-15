"use server";
import { cookies } from "next/headers";

export async function loginAction(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

   
    if (email === "demo@mail.com" && password === "123y") {
        (await cookies()).set({
            name: "auth",
            value: "true",
            httpOnly: true, // জাভাস্ক্রিপ্ট এটি এক্সেস করতে পারবে না
            path: "/",
            secure: process.env.NODE_ENV === "production", // শুধু HTTPS এ কাজ করবে
        });
        return { success: true };
    }
    
    return { success: false, message: "Invalid Email or Password." };
}

export async function logoutAction() {
    (await cookies()).delete("auth");
}