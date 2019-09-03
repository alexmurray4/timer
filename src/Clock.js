import React, {Component} from 'react';
import Timer from 'react-compound-timer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

function buttonLink(start, stop, state){
	console.log('here');
	console.log(state);

	const isRunning = state.isRunning;
	if (state == 'INITED' || state == 'STOPPED') {
		return <a href="# " className="timepower" onClick={start}>
			<FontAwesomeIcon icon={faPowerOff} />
		</a>;
	} else {
		return <a href="# " className="timepower" onClick={stop}>
			<FontAwesomeIcon icon={faPowerOff} />
		</a>;
	}
}

class Clock extends Component {
	constructor(props) {
	    super(props);
		this.state = {isRunning: false};
	}

	render() {
		return (
			<div className="timer">
				<div className="t-circle">
					<div className="t-circle-inner">
						<Timer
						initialTime={0}
						startImmediately={false}
				    	onStart={() =>
							this.setState({isRunning: true})
						}
						onStop={() =>
							this.setState({isRunning: false})
						}
							>
							{({ start, resume, pause, stop, reset, getTimerState }) => (
								<React.Fragment>
									<div className="time-controls">
										<a href="# " className="timedown">
											<FontAwesomeIcon icon={faMinusSquare} />
										</a>
										{buttonLink(start, stop, getTimerState())}
										<a href="# " className="timeup">
											<FontAwesomeIcon icon={faPlusSquare} />
										</a>
									</div>
									<div>{getTimerState()}</div>
									<div className="time-info">
										<div className="hours"><Timer.Hours /></div>
										<span>:</span>
										<div className="minutes"><Timer.Minutes /></div>
										<span>:</span>
										<div className="seconds"><Timer.Seconds /></div>
									</div>
									<div><input class="text-input" placeholder="Job Title" /></div>
									{/*
									<div>
										<button onClick={start}>Start</button>
										<button onClick={pause}>Pause</button>
										<button onClick={resume}>Resume</button>
										<button onClick={stop}>Stop</button>
										<button onClick={reset}>Reset</button>
									</div>
									*/}
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
