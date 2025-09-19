import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const LoginOption = () => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-5">Login With</h3>
            <div className="flex flex-col gap-2">
                <a className="btn cursor-pointer"> <FaGoogle className="inline mr-2" /> Login with Google</a>
                <a className="btn cursor-pointer"> <FaFacebook className="inline mr-2" /> Login with Facebook</a>
                <a className="btn cursor-pointer"> <FaSquareXTwitter className="inline mr-2" /> Login with X (Twitter)</a>
            </div>
        </div>
    );
};

export default LoginOption;