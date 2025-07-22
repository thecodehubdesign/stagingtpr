import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, Zap } from 'lucide-react';
const TermCountdown = () => {
  // Set the target date (you can make this configurable later)
  const targetDate = new Date('2025-02-03T09:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
          minutes: Math.floor(difference % (1000 * 60 * 60) / (1000 * 60)),
          seconds: Math.floor(difference % (1000 * 60) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return <section className="py-12 bg-gradient-to-r from-fuchsia-600 to-purple-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute top-4 right-4 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-fuchsia-400/20 rounded-full blur-xl animate-pulse" style={{
      animationDelay: '1s'
    }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 lg:px-[9px]">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock className="w-8 h-8 text-white animate-pulse" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Next 8-Week Term Starts In:
            </h2>
          </div>
          <p className="text-purple-100 text-lg">
            Our next 8-week course term starts February 3rd. Secure your spot now!
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
          {[{
          label: 'Days',
          value: timeLeft.days
        }, {
          label: 'Hours',
          value: timeLeft.hours
        }, {
          label: 'Minutes',
          value: timeLeft.minutes
        }, {
          label: 'Seconds',
          value: timeLeft.seconds
        }].map((unit, index) => <Card key={unit.label} className="cyber-card p-4 text-center animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 font-mono">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">
                {unit.label}
              </div>
            </Card>)}
        </div>

        
      </div>
    </section>;
};
export default TermCountdown;