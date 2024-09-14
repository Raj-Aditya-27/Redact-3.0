import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1725979956276.json'; 

const MyLottieAnimation = ({handleAnimation}) => {

    function handleAnimationLoading(){
        handleAnimation(false);
    }

    return (
        <>
            <div className='animation-background'>
                <Lottie
                    className='animation'
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ width: 300, height: 300 }} 
                />
                <div >
                  <i onClick={handleAnimationLoading} className="bi bi-x-circle"></i>
                </div>
            </div>
        </>
    );
};

export default MyLottieAnimation;

