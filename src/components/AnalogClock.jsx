import { useClockHandDegrees } from "../utils/useClockHandDegrees"
import ClockHand from "./ClockHand"
import './AnalogClock.css'
const AnalogClock = () => {
    const {hoursDegrees, minutesDegrees, secondsDegrees} = useClockHandDegrees()
    return (
      <div className="container">
        <div className="clock">
          <div className="clock-face">
            <ClockHand type="hour-hand" degrees={hoursDegrees}></ClockHand>
            <ClockHand type="minute-hand" degrees={minutesDegrees}></ClockHand>
            <ClockHand type="second-hand" degrees={secondsDegrees}></ClockHand>
          </div>
        </div>
      </div>
    )
}
export default AnalogClock;