import { User } from "../models/userModel";

export async function authenticate(user?: User): Promise<boolean> {
    let response: any = await fetch("http://localhost:5108/api/User/Validate", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(user)
    });

    return response;
}