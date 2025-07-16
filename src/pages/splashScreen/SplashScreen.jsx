import Loading from "../../Loading";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SplashScreen = () => {

    const [isDataLoading, setIsDataLoading] = useState(true);
    const loadDuration = 3000;

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsDataLoading(false);
        }, loadDuration);
        // Cleanup
        return () => clearTimeout(timeoutId);
    }, []); // Empty array to run once



    const navigate = useNavigate();
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/activity');
        }, 7500);
        return () => clearTimeout(timeoutId);
    }, [navigate]);

    return <div className='splash-screen-container'>
        <div className='splash-screen-gradient-container'></div>
        <div className='splash-screen-content-container'>
            <h1>Active Balance</h1>
            <img src={require('../../assets/PolarWatch.webp')} alt='watch' className='splash-screen-image'/>
            <div className='splash-screen-loading-container'>
                <Loading 
                    isDataLoading={isDataLoading}
                    duration={loadDuration}
                    strokeWidth={8}
                /> 
            {!isDataLoading && <h4 className='expanding-text'>Connected to your device</h4>}
            </div>
        </div>
    </div>
};

export default SplashScreen;