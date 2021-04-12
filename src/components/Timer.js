import React, { useState, useEffect } from 'react';

const Timer = (props) => {
	const { initialMinutes = 0, initialSeconds = 0 } = props;
	const [minutes, setMinutes] = useState(initialMinutes);
	const [seconds, setSeconds] = useState(initialSeconds);

	useEffect(() => {
		if(!props.pause){
		let myInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			else if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(myInterval);
				} else {
                    setSeconds(59);
					setMinutes(minutes - 1);
				}
			}
		}, 1000);
		return () => {
			clearInterval(myInterval);
		};
	}
	}, [props.pause,minutes, seconds]);

    useEffect(() =>{
		if(props.addSeconds>0){
			setSeconds(seconds + props.addSeconds);
			props.updateTimer()
		}
        if(minutes === 0 && seconds === 0){
            props.onTimer()
        }
    }, [props.addSeconds, minutes, seconds]);


	return (
		<div className = "timer-container" >
			{minutes === 0 && seconds === 0 ? null: (
				<div>
					{' '}
					{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
				</div>
			)}
		</div>
	);
};

export default Timer;
