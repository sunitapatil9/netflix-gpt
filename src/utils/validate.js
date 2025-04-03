
export const CheckValidationForForm = (email, password,username) =>{
    let emailError = '';
    let passwordError = "";
    let usernameError = "";
    const emailpattern  = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 
    const passworpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

   if(email === ""){
    emailError = "email is required";
   }else if(!emailpattern.test(email)){
    emailError ="Please enter valid email id";
   }
   if( password === ""){
        passwordError = "password Should not be empty";
   }else if(!passworpattern.test(password)){
    passwordError = "Password is not matching";
   }
   if(username === ""){
    usernameError  = "Username should be empty";
   }
    
   return {emailError , passwordError , usernameError};
}
export default CheckValidationForForm;