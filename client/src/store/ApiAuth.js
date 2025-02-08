import { create } from "zustand";
import { API } from "./api.js";

const useApi = create((set, get) => ({

    login: async (username, password) => {
        try {
            const res = await fetch(`${API}/admin/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
                credentials: "include"
            });
            const data = await res.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error)
        }
    },
    signup: async (username, password) => {
        try {
            const res = await fetch(`${API}/admin/api/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: "zaheer", password: "1234567" }),
                credentials: "include"
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    },
    checkUser: async () => {
        try {
            const res = await fetch(`${API}/admin/api/checkUser`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })
            const data = await res.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error)
        }
    },
    logout: async () => {
        try {
            const res = await fetch(`${API}/admin/api/logout`, {
                method: "GET", headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })
            const data = await res.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error)
        }
    }
}));

export default useApi;