import { User } from "../models/userModel";

export function authenticate(user?: User): boolean {
    if(user?.username == "username" 
        && user?.password == "password") 
    {
        return true
    }

    return false
}