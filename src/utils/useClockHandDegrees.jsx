import { useEffect, useState } from "react";

export function useClockHandDegrees() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => {clearInterval(timerId)};
    }, [])


    const getDegrees = (unit, maxUnits) => {
        return (unit/maxUnits) * 360 + 90
    }
    const secondsDegrees = getDegrees(time.getSeconds(), 60);
    const minutesDegrees = getDegrees(time.getMinutes(), 60);
    const hoursDegrees = getDegrees(time.getHours(), 12);

    return {secondsDegrees, minutesDegrees, hoursDegrees}
}