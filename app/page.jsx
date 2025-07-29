import About from "@/components/About/About";
import Appointment from "@/components/Appoinment/Appoinment";
import Consultation from "@/components/Consultation/Consultation";
import Counter from "@/components/Counter/Counter";
import Features from "@/components/Features/Features";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Services from "@/components/Services/Services";
import BookAppointment from "@/components/BookAppointment/BookAppointment";


export default function Home() {
  return (
    <main id="main">
      <HeroBanner />
      <Features />
      <About />
      <Counter />
      <Services />
      <Consultation />
    </main>
  );
}
