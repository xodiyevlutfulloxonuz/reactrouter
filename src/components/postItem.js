
import { useParams,useNavigate, useLocation} from "react-router-dom";

function PostItem() {
    const {id}=useParams()
    const navigate=useNavigate()
    const location=useLocation()
    console.log(location)
    return (
     <>
     PostItem 
     </>
    );
  }
  
  export default PostItem;
  