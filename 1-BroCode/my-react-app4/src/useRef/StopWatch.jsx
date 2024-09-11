import { useEffect, useRef, useState } from 'react';

export default function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            startTimeRef.current = Date.now() - elapsedTime;
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10); // Update every 10 milliseconds
        } else {
            clearInterval(intervalIdRef.current);
        }

        return () => clearInterval(intervalIdRef.current);
    }, [isRunning, elapsedTime]);

    const start = () => {
        if (!isRunning) {
            setIsRunning(true);
        }
    };

    const stop = () => {
        if (isRunning) {
            setIsRunning(false);
        }
    };

    const reset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    };

    const formatTime = () => {
        const hours = Math.floor(elapsedTime / 3600000);
        const minutes = Math.floor((elapsedTime % 3600000) / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        const milliseconds = Math.floor((elapsedTime % 1000) / 10); // Extract milliseconds

        return hours > 0
            ? `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds, 2)}`
            : `${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds, 2)}`;
    };

    const padZero = (num, length = 2) => num.toString().padStart(length, '0');

    return (
        <div>
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="btn start">Start</button>
                <button onClick={stop} className="btn stop">Stop</button>
                <button onClick={reset} className="btn reset">Reset</button>
            </div>

            <style >{`
                div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Arial', sans-serif;
                }

                .display {
                    font-size: 2rem;
                    margin: 20px 0;
                    padding: 10px;
                    background: #000;
                    color: #fff;
                    border-radius: 5px;
                    text-align: center;
                }

                .controls {
                    display: flex;
                    gap: 10px;
                }

                .btn {
                    padding: 10px 20px;
                    font-size: 1rem;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    color: #fff;
                    background-color: #007bff;
                    transition: background-color 0.3s;
                }

                .btn:hover {
                    background-color: #0056b3;
                }

                .start {
                    background-color: #28a745;
                }

                .start:hover {
                    background-color: #218838;
                }

                .stop {
                    background-color: #ffc107;
                }

                .stop:hover {
                    background-color: #e0a800;
                }

                .reset {
                    background-color: #dc3545;
                }

                .reset:hover {
                    background-color: #c82333;
                }
            `}</style>
        </div>
    );
}
