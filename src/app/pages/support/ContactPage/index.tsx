import { ContactHeader } from './ContactHeader';
import { ContactMethods } from './ContactMethods';
import { ContactForm } from './ContactForm';
import { SupportCategories } from './SupportCategories';
import { EmergencyContacts } from './EmergencyContacts';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 xl:py-12">
        <ContactHeader />
        
        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <ContactMethods />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              <SupportCategories />
              <EmergencyContacts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};