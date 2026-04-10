import PedagogyHero from "./PedagogyHero";
import StaffGrid from "./StaffGrid";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <main className="min-h-screen bg-white">
            {/* Section 1: Pedagogy & Image Gallery */}
            <PedagogyHero />

            {/* Aesthetic Divider */}
            <div className="flex justify-center">
                <div className="w-24 h-1 bg-gray-100 rounded-full" />
            </div>

            {/* Section 2: Staff Information */}
            <StaffGrid />

            {/* Footer Section with Form */}
            <section className="bg-white py-24 border-t border-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <ContactForm />
                </div>
            </section>
        </main>
    );
}