import React, {Component} from 'react';
import Timer from 'react-compound-timer';

class Clock extends Component {
	render() {
		return (
			<div className="timer">
				<div className="t-circle">
					<div className="t-circle-inner">
						<Timer
						initialTime={0}
						startImmediately={false}
							>
							{({ start, resume, pause, stop, reset, timerState }) => (
								<React.Fragment>
									<div className="time-info">
										<div className="hours"><Timer.Hours /> hours</div>
										<div className="minutes"><Timer.Minutes /> minutes</div>
										<div className="seconds"><Timer.Seconds /> seconds</div>
									</div>
									<div>{timerState}</div>
									<br />
									<div>
										<button onClick={start}>Start</button>
										<button onClick={pause}>Pause</button>
										<button onClick={resume}>Resume</button>
										<button onClick={stop}>Stop</button>
										<button onClick={reset}>Reset</button>
									</div>
								</React.Fragment>
							)}
						</Timer>
					</div>
				</div>
			</div>
		)
	}
}

export default Clock
