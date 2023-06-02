import { FaGoogle } from "react-icons/fa";
import { useContext} from 'react';
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Google = () => {

const {googleLogin, setUser}=useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();
    const froms = location.state?.from?.pathname || "/";

const handelGoogleLogIn =()=>{
    googleLogin()
    .then((result)=>{
        const user = result.user;
        setUser(result.user)

        const saveUser = { name: user.displayName, email: user.email };
        fetch(`http://localhost:5000/user`, {

                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                           
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data.insertedId) {
                                    
                                    Swal.fire(
                                        'Good job!',
                                        'SingIn Successfully',
                                        'success'
                                    )
                                }
                                navigate(froms, { replace: true });
                               
                            })

        
    })
    .catch((err)=>{
        console.log(err)
    })
}
    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center p-5">
                <button onClick={handelGoogleLogIn} className="btn btn-circle btn-outline">
                    <FaGoogle/>
                </button>
            </div>
        </div>
    );
};

export default Google;