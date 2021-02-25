import { useContext } from 'react';

import {FaCheck} from 'react-icons/fa';
import styles from '../styles/components/Countdown.module.css';
import { CountdownContext } from '../contexts/CountdownContext';


export  function Countdown() {
    const {
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown
      } = useContext(CountdownContext);


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')




    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>


            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}>
                    Ciclo Encerrado &nbsp; <FaCheck  className={styles.ButtonFinishedCheckedIcon}/>
                </button>
            ) : (
                    <>
                        {isActive ? (//if ternario, se tiver mais de uma linha usa parenteses
                            <button
                                type='button'
                                onClick={resetCountdown}
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                                Abandonar Ciclo
                            </button>
                        ) : (
                                <button
                                    type='button'
                                    onClick={startCountdown}
                                    className={styles.countdownButton}>
                                    Iniciar um Ciclo
                                </button>
                            )}
                    </>
                )}






        </div>
    );
}