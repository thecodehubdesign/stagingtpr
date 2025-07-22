import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetTime: string; // Format: "6:00 PM"
  className?: string;
}

const CountdownTimer = ({ targetTime, className = "" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      
      // Parse target time (e.g., "6:00 PM")
      const [time, period] = targetTime.split(' ');
      const [hours, minutes] = time.split(':').map(Number);
      let targetHours = hours;
      
      if (period === 'PM' && hours !== 12) {
        targetHours += 12;
      } else if (period === 'AM' && hours === 12) {
        targetHours = 0;
      }
      
      const target = new Date(today.getFullYear(), today.getMonth(), today.getDate(), targetHours, minutes);
      
      // If target time has passed today, set it for tomorrow
      if (target <= now) {
        target.setDate(target.getDate() + 1);
      }
      
      const diff = target.getTime() - now.getTime();
      
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    return <span className={className}>Class has started</span>;
  }

  return (
    <span className={className}>
      Starts in {timeLeft.hours} hours, {timeLeft.minutes} minutes and {timeLeft.seconds} seconds
    </span>
  );
};

export default CountdownTimer;