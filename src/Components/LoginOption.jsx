import { useContext } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const LoginOption = () => {
    const { user, setUser, googleLogin } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        if (user) {
            toast.error("You are already logged in.");
            return;
        }
        googleLogin()
        .then((result) => {
            const loggedUser = result.user;
            setUser(loggedUser);
        })
        .catch((error) => {
            console.log("Google login error:", error);
        });
    }

    return (
        <div>
            <h3 className="text-xl font-bold mb-5">Login With</h3>
            <div className="flex flex-col gap-2">
                <a onClick={handleGoogleLogin} className="btn cursor-pointer"> <FaGoogle className="inline mr-2" /> Login with Google</a>
                <a className="btn cursor-pointer"> <FaFacebook className="inline mr-2" /> Login with Facebook</a>
                <a className="btn cursor-pointer"> <FaSquareXTwitter className="inline mr-2" /> Login with X (Twitter)</a>
            </div>
        </div>
    );
};

export default LoginOption;