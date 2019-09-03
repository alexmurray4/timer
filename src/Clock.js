import React, {Component} from 'react';
import Timer from 'react-compound-timer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";


class Clock extends Component {
	constructor(props) {
	    super(props);
		this.toggle = this.toggle.bind(this);
	    this.state = {
	        isRunning: false,
	    };
	  }
	  toggle() {
		    this.setState({
		        isRunning: !this.state.isRunning,
		    });
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
							console.log('onStart hook')
						}
						onStop={() =>
							console.log('onStop hook')
						}
							>
							{({ start, resume, pause, stop, reset, getTimerState }) => (
								<React.Fragment>
									<div className="time-controls">
										<a href="#" className="timedown">
											<FontAwesomeIcon icon={faMinusSquare} />
										</a>
										<a href="#" className="timepower" onClick={start} isRunning={this.state.isRunning}>
											<FontAwesomeIcon icon={faPowerOff} />
										</a>
										<a href="#" className="timeup">
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
