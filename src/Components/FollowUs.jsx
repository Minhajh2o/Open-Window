import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FollowUs = () => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-5">Follow Us</h3>
            <div className="join join-vertical w-full">
                <a className="btn join-item cursor-pointer"> <FaFacebook className="inline mr-2" /> Facebook</a>
                <a className="btn join-item cursor-pointer"> <FaSquareXTwitter className="inline mr-2" /> X (Twitter)</a>
                <a className="btn join-item cursor-pointer"> <FaInstagramSquare className="inline mr-2" /> Instagram</a>
            </div>
        </div>
    );
};

export default FollowUs;