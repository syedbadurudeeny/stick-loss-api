// customer 

export const  setUserDetails = (token) =>{
    localStorage.setItem("userToken", token);
}

export const  getUserDetails = () =>{
   return localStorage.getItem("userToken");
}

export const  removeUserDetails = () =>{
    localStorage.removeItem("userToken");
}