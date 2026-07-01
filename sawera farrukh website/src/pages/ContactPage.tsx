import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactHero from "../sections/ContactHero";
import ContactInfo from "../sections/ContactInfo";
import ContactForm from "../sections/ContactForm";

export default function ContactPage() {
  return (
    <div
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navigation />
      <main>
        <ContactHero />
        <div
          className="container-main"
          style={{
            paddingTop: 48,
            paddingBottom: 120,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
