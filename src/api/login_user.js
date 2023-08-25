import { API_URL } from "../helpers/constants";

export async function login (username = "", password = "") {
    const result = await fetch(API_URL+"user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Allow-Cross-Origin-Origin": "*"
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    console.log("Perros y centellas");
    return await result.json()
}