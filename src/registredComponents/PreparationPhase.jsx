/* eslint-disable react-hooks/exhaustive-deps */
import { Circle } from 'rc-progress'
import { useEffect, useState } from 'react'
import ellipseLight from '../assets/Image/RegistredImages/ellipseLight.png'
import okImage from '../assets/Image/RegistredImages/okImage.png'
import finishedPicture from '../assets/Image/RegistredImages/finishedPicture.png'

export const PreparationPhase = () => {
    const [ percentage, setPercentage ] = useState(0)
    const [ showCircle, setShowCircle ] = useState(false)

    console.log(percentage)

    useEffect(() => {
        const showCircleInterval = setInterval(() => {
            setShowCircle(true)
        }, 500)

        return () => clearInterval(showCircleInterval)
    }, [])


    useEffect(() => {
        if (showCircle && percentage < 102) {
            let timer = setInterval(() => {
                setPercentage(prev => prev + 1);
            }, 200);
            
            return () => clearInterval(timer);
        }
    }, [percentage < 102, showCircle]);



    return <div id='orderedContainer'>
        <div className='orderedContainerClass'>
            <section>

                <div className={showCircle ? 'preparingCoffeeClass' : 'preparingCoffeeClassStart'}>
                    <div>
                        <img src={okImage} alt="okImage" />
                        <p>Primljena</p>
                    </div>
                    <div className='line'></div>
                    
                        { percentage > 100 ? 
                        <>
                            <div>
                                <img src={okImage} alt="okImage" />
                                <p>U pripremi</p>  
                            </div>
                            <div className='line'></div>
                            <div>
                                <img src={okImage} alt="okImage" />
                                <p>Spremna</p>
                            </div>
                        
                        </>
                        :

                        showCircle ?
                        <>
                        <div  className='preparingCircle'>
                        <Circle
                            className='circleClass'
                            percent={percentage} 
                            strokeColor={'rgba(36, 140, 197, 1)'} 
                            strokeWidth={15}
                            trailColor={'rgba(36, 140, 197, 0.5)'}                       trailWidth={5}
                            strokeLinecap='round'
                            gapDegree={10}
                            gapPosition='top'
                        />
                        <p>U pripremi</p>
                        </div>
                        <div className='line'></div>
                        <div>
                            <img src={ellipseLight} alt="ellipse" />
                            <p>Spremna</p>
                        </div>
                        </> 
                    :
                    <>
                        <div>
                            <img src={ellipseLight} alt="ellipse" />
                            <p>U pripremi</p>
                        </div>
                        <div className='line'></div>
                        <div>
                            <img src={ellipseLight} alt="ellipse" />
                            <p>Spremna</p>
                        </div>
                    </>
                }
                </div>
                { percentage > 100 && 
                <>
                    <img 
                    src={finishedPicture} 
                    alt="Finished Picture"
                    id='finishedClassImg'
                    />
                    <p className='finishedClassText'>Hvala na poverenju!</p>
                </>
                }
            </section>
        </div>
        

    </div>
}