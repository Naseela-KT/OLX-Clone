export const validate=(values)=>{
    const nameRegex=/^[a-zA-Z]+$/
    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const errors={};
    if(!values.username){
      errors.username="Username is required"
    }else if(!nameRegex.test(values.username)){
      errors.username="Enter a valid name"
    }
    if(!values.email){
      errors.email="Email is required"
    }else if(!emailRegex.test(values.email)){
      errors.email="Enter a valid email"
    }
    if(!values.phone){
      errors.phone="Phone is required"
    }else if(values.phone.length<10 || values.phone.length>10){
      errors.phone="Enter a valid phone number"
    }
    if(!values.password){
      errors.password="Password is required"
    }else if(values.password.length<6){
      errors.password="Password should contain atleast 6 characters"
    }
    return errors;
  }