
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const notify = (msg,type) =>  {
    if(type ==='success')
    toast.success(msg,type)
    else if(type ==='error')
    toast.error(msg,type)
    else if(type ==='warn')
    toast.warn(msg,type)
  }
   


  export default notify