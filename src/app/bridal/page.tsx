import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BridalForm from '@/components/BridalForm';
import MobileCTA from '@/components/MobileCTA';

export const metadata: Metadata = {
  title: 'Bridal Hair Services Milford OH | Wedding Hair Styling',
  description: 'Professional bridal hair services in Milford, OH. Specializing in wedding hair styling for brides, bridesmaids, and flower girls. Book your wedding hair appointment today.',
  keywords: [
    'bridal hair Milford OH',
    'wedding hair styling',
    'bride hair services',
    'bridesmaid hair',
    'flower girl hair',
    'wedding hair appointment',
    'bridal hair consultation',
    'wedding hair stylist Milford'
  ],
  openGraph: {
    title: 'Bridal Hair Services Milford OH | Wedding Hair Styling',
    description: 'Professional bridal hair services in Milford, OH. Specializing in wedding hair styling for brides, bridesmaids, and flower girls.',
  },
};

export default function BridalPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-heading text-h1-mobile md:text-h1 font-bold text-text mb-6">
                Bridal Hair Services
              </h1>
              <p className="text-body text-body-mobile md:text-body text-text/90 mb-8">
                Make your wedding day perfect with professional bridal hair styling. 
                From elegant updos to romantic curls, I specialize in creating the perfect look 
                for brides, bridesmaids, and flower girls in Milford, OH.
              </p>
            </div>
          </div>
        </section>

        {/* Rates Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-heading text-3xl font-bold text-text mb-6">
                  Bridal Hair Rates
                </h2>
                <p className="text-body text-text/80">
                  Professional wedding hair styling for your special day
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                  <h3 className="text-heading text-2xl font-bold text-text mb-4">Bride</h3>
                  <div className="text-3xl font-bold text-accent mb-4">$85</div>
                  <p className="text-body text-text/80">
                    Complete styling with consultation
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                  <h3 className="text-heading text-2xl font-bold text-text mb-4">Bridesmaids & Family</h3>
                  <div className="text-3xl font-bold text-accent mb-4">$75</div>
                  <p className="text-body text-text/80">
                    Professional bridal party styling
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                  <h3 className="text-heading text-2xl font-bold text-text mb-4">Flower Girl</h3>
                  <div className="text-3xl font-bold text-accent mb-4">$50</div>
                  <p className="text-body text-text/80">
                    Sweet styling for little ones
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-accent/10 rounded-2xl p-8">
                <h3 className="text-heading text-xl font-bold text-text mb-4">Important Information</h3>
                <div className="space-y-4 text-body text-text/90">
                  <p>
                    <strong>Deposit Required:</strong> 50% deposit required to secure your booking after consultation.
                  </p>
                  <p>
                    <strong>Consultation:</strong> We&apos;ll discuss your vision and wedding details to create the perfect look.
                  </p>
                  <p>
                    <strong>Travel:</strong> On-site services available at your venue or location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-seamless">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-heading text-3xl font-bold text-text mb-6">
                  Inquire About Bridal Hair
                </h2>
                <p className="text-body text-text/90">
                  Please fill out this form to inquire about bridal hair services. 
                  Your responses will help me tailor the perfect look to your needs.
                </p>
              </div>
              
              <BridalForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA variant="floating" />
    </>
  );
} 