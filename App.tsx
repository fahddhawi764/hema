import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Equipment } from "./components/Equipment";
import { ServiceRequest } from "./components/ServiceRequest";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AdminPanel } from "./components/AdminPanel";

export default function App() {
  const loggedInUser = useQuery(api.auth.loggedInUser);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Authenticated>
        {loggedInUser?.email === "admin@fahdalharbi.com" ? (
          <AdminPanel />
        ) : (
          <MainContent />
        )}
      </Authenticated>
      
      <Unauthenticated>
        <MainContent />
      </Unauthenticated>
      
      <Footer />
      <Toaster />
    </div>
  );
}

function MainContent() {
  return (
    <>
      <Hero />
      <Services />
      <Equipment />
      <ServiceRequest />
      <Contact />
    </>
  );
}
