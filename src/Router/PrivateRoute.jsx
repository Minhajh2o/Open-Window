import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(Location);
    if(loading){
        return <Loading />; 
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={{ from: location }} to="/auth/login" replace />;
};

export default PrivateRoute;