
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Smartphone, User, Play, CheckCircle, Clock, Phone } from 'lucide-react';
import { VoucherFormData } from '../VoucherClaimForm';

interface VoucherThankYouProps {
  formData: VoucherFormData;
  onReset: () => void;
}

const VoucherThankYou = ({ formData, onReset }: VoucherThankYouProps) => {
  const getVoucherDetails = () => {
    switch (formData.selectedVoucher) {
      case 'first-class-80-off':
        return {
          title: '80% Off First Class',
          value: '$7 (Save $28)',
          code: 'FIRST80',
          expires: '30 days from today'
        };
      case 'intro-package-50-off':
        return {
          title: '50% Off Intro Package',
          value: '$60 (Save $60)',
          code: 'INTRO50',
          expires: '30 days from today'
        };
      case 'unlimited-month-40-off':
        return {
          title: '40% Off First Month Unlimited',
          value: '$108 (Save $72)',
          code: 'MONTH40',
          expires: '30 days from today'
        };
      default:
        return null;
    }
  };

  const voucherDetails = getVoucherDetails();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {formData.wantsEnrollmentCall ? 'We\'ll Be In Touch!' : 'Your Voucher is Ready!'}
        </h3>
        <p className="text-gray-600">
          {formData.wantsEnrollmentCall 
            ? 'Our enrollment specialist will call you within 24 hours to help you choose the perfect offer.'
            : 'Your special offer voucher has been sent to your email.'}
        </p>
      </div>

      {!formData.wantsEnrollmentCall && voucherDetails && (
        <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="text-lg text-green-800 flex items-center space-x-2">
              <Gift className="w-5 h-5" />
              <span>Your Voucher Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-white rounded-lg p-4 border-2 border-dashed border-green-300">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{voucherDetails.title}</h4>
                <div className="text-3xl font-bold text-green-600 mb-2">{voucherDetails.value}</div>
                <div className="text-sm text-gray-600 mb-4">
                  Use code: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{voucherDetails.code}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>Expires: {voucherDetails.expires}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {formData.wantsEnrollmentCall && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-lg text-blue-800 flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>What Happens Next?</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800">
              One of our friendly enrollment specialists will call you within 24 hours to help you choose the perfect voucher offer that fits your goals and budget.
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
                  Get class schedules, book sessions, and connect with our community.
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
          If you have any questions about your voucher or need help booking, don't hesitate to contact us.
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
        Claim Another Voucher
      </Button>
    </div>
  );
};

export default VoucherThankYou;
