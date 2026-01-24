
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Smartphone, User, Play, CheckCircle } from 'lucide-react';
import { BookingFormData } from '../FreeTrialBookingForm';

interface BookingThankYouProps {
  formData: BookingFormData;
  onReset: () => void;
}

const BookingThankYou = ({ formData, onReset }: BookingThankYouProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center shadow-lg shadow-green-500/30">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          <span className="gradient-text">You're All Set!</span>
        </h3>
        <p className="text-gray-400">
          Your free trial class has been {formData.wantsEnrollmentCall ? 'requested' : 'booked'}
        </p>
      </div>

      {!formData.wantsEnrollmentCall && formData.selectedClass && (
        <div className="border border-cyan-500/30 rounded-lg p-4 bg-gray-800/50">
          <h4 className="text-lg font-semibold text-cyan-400 mb-4">Your Booking Details</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-fuchsia-400" />
              <span className="text-gray-300">Monday, March 18</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-fuchsia-400" />
              <span className="text-gray-300">7:00 PM - 8:00 PM</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-fuchsia-400" />
              <span className="text-gray-300">The Pole Room {formData.selectedStudio}</span>
            </div>
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-fuchsia-400" />
              <span className="text-gray-300">Instructor: Jasmine</span>
            </div>
          </div>
        </div>
      )}

      {formData.wantsEnrollmentCall && (
        <div className="border border-cyan-500/30 rounded-lg p-4 bg-gray-800/50">
          <h4 className="text-lg font-semibold text-cyan-400 mb-3">What Happens Next?</h4>
          <p className="text-gray-300">
            One of our friendly enrollment specialists will call you within 24 hours to help you find the perfect class time that fits your schedule.
          </p>
        </div>
      )}

      <div className="space-y-4">
        <h4 className="font-semibold text-white">Next Steps:</h4>
        
        {/* Download App Card */}
        <div className="cyber-card p-4 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-white mb-1">Download Our App</h5>
              <p className="text-sm text-gray-400 mb-3">
                Get class schedules, book additional sessions, and connect with our community.
              </p>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="border-fuchsia-500/50 text-white hover:bg-fuchsia-500/20 bg-transparent">
                  App Store
                </Button>
                <Button size="sm" variant="outline" className="border-fuchsia-500/50 text-white hover:bg-fuchsia-500/20 bg-transparent">
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Profile Card */}
        <div className="cyber-card p-4 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-white mb-1">Complete Your Profile</h5>
              <p className="text-sm text-gray-400 mb-3">
                Help us personalize your experience by completing your student profile.
              </p>
              <Button size="sm" className="neon-button">
                Complete Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Welcome Video Card */}
        <div className="cyber-card p-4 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <Play className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-white mb-1">Welcome Video</h5>
              <p className="text-sm text-gray-400 mb-3">
                Watch our welcome video to learn what to expect in your first class.
              </p>
              <div className="aspect-video bg-gray-800/80 rounded-lg flex items-center justify-center border border-fuchsia-500/30">
                <Button variant="outline" className="flex items-center space-x-2 border-fuchsia-500/50 text-white hover:bg-fuchsia-500/20 bg-transparent">
                  <Play className="w-4 h-4" />
                  <span>Play Welcome Video</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
        <h5 className="font-medium text-white mb-2">Questions?</h5>
        <p className="text-sm text-gray-400 mb-3">
          If you have any questions or need to reschedule, don't hesitate to contact us.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="text-gray-300">📞 (03) 9123 4567</span>
          <span className="text-gray-300">✉️ hello@thepoleroom.com.au</span>
        </div>
      </div>

      <Button 
        onClick={onReset}
        variant="outline"
        className="w-full border-fuchsia-500/50 text-white hover:bg-fuchsia-500/20 bg-transparent"
      >
        Book Another Trial Class
      </Button>
    </div>
  );
};

export default BookingThankYou;
