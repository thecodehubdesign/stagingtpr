
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          You're All Set!
        </h3>
        <p className="text-gray-600">
          Your free trial class has been {formData.wantsEnrollmentCall ? 'requested' : 'booked'}
        </p>
      </div>

      {!formData.wantsEnrollmentCall && formData.selectedClass && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-lg text-green-800">Your Booking Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-green-600" />
              <span className="text-green-800">Monday, March 18</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-green-600" />
              <span className="text-green-800">7:00 PM - 8:00 PM</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-green-600" />
              <span className="text-green-800">The Pole Room {formData.selectedStudio}</span>
            </div>
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-green-600" />
              <span className="text-green-800">Instructor: Jasmine</span>
            </div>
          </CardContent>
        </Card>
      )}

      {formData.wantsEnrollmentCall && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-lg text-blue-800">What Happens Next?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800">
              One of our friendly enrollment specialists will call you within 24 hours to help you find the perfect class time that fits your schedule.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">Next Steps:</h4>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Smartphone className="w-6 h-6 text-rose-500 mt-1" />
              <div className="flex-1">
                <h5 className="font-medium text-gray-900 mb-1">Download Our App</h5>
                <p className="text-sm text-gray-600 mb-3">
                  Get class schedules, book additional sessions, and connect with our community.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    App Store
                  </Button>
                  <Button size="sm" variant="outline">
                    Google Play
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <User className="w-6 h-6 text-purple-500 mt-1" />
              <div className="flex-1">
                <h5 className="font-medium text-gray-900 mb-1">Complete Your Profile</h5>
                <p className="text-sm text-gray-600 mb-3">
                  Help us personalize your experience by completing your student profile.
                </p>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  Complete Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Play className="w-6 h-6 text-rose-500 mt-1" />
              <div className="flex-1">
                <h5 className="font-medium text-gray-900 mb-1">Welcome Video</h5>
                <p className="text-sm text-gray-600 mb-3">
                  Watch our welcome video to learn what to expect in your first class.
                </p>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Play Welcome Video</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h5 className="font-medium text-gray-900 mb-2">Questions?</h5>
        <p className="text-sm text-gray-600 mb-3">
          If you have any questions or need to reschedule, don't hesitate to contact us.
        </p>
        <div className="flex space-x-4 text-sm">
          <span className="text-gray-600">📞 (03) 9123 4567</span>
          <span className="text-gray-600">✉️ hello@thepoleroom.com.au</span>
        </div>
      </div>

      <Button 
        onClick={onReset}
        variant="outline"
        className="w-full"
      >
        Book Another Trial Class
      </Button>
    </div>
  );
};

export default BookingThankYou;
