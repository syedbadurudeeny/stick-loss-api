import { getUserDetails , removeUserDetails } from "./Storage";

//customer-auth

export const isUserAuthenticated = () =>{
    return getUserDetails() !== null ? true : false;
}


export const logoutUser = () =>{
    removeUserDetails();
}