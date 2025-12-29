import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [email, setEmail] = useState("");
  const contactEmail = "contact@kamleshgroup.in";
  const phone = "+91 9819416689";

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowCookieBanner(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowCookieBanner(false);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setEmail("");
  };

  // Structured Data Object
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kamlesh Group of Companies",
    url: "https://kamleshgroup.in",
    email: contactEmail,
    telephone: phone,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phone,
        email: contactEmail,
        contactType: "customer support",
        areaServed: "India",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  return (
    <footer className="bg-[#1a1a2e]">
      {/* Cookie consent banner */}
      {showCookieBanner && (
        <div className="bg-gray-100 text-black py-4">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm mb-4 md:mb-0">
              Kamlesh Group uses cookies to analyze traffic to this site.{" "}
              <a href="#" className="underline hover:no-underline text-primary">
                See details.
              </a>
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRejectCookies}
                className="bg-[#EF4343] text-white hover:bg-[#f96464] rounded-full"
              >
                No thanks
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleAcceptCookies}
                className="bg-[#EF4343] text-white hover:bg-[#f96464] rounded-full"
              >
                OK, got it
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Subscription Bar */}
      <div className="bg-[#0f0f1a] border-b border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-white text-xl md:text-2xl font-semibold">
              Subscribe to Our News Alerts
            </h3>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <input
                  type="email"
                  placeholder="Email Id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-5 py-3 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#EF4343] min-w-[250px]"
                />
                <Button
                  type="submit"
                  className="bg-[#EF4343] hover:bg-[#d63636] text-white px-8 py-3 rounded-lg font-semibold"
                >
                  Subscribe
                </Button>
              </form>

              {/* Social Icons */}
              <div className="flex items-center gap-3 ml-0 sm:ml-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#1877f2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 bg-[#0077b5] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 bg-[#ff0000] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & Badge (MUGWALE IS HERE NOW) */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/img/MUGWALE.png"
              alt="Mug Wale Logo"
              className="h-20 mb-6"
            />
          </div>

          {/* About Us */}
          <nav aria-label="About Us">
            <h4 className="font-semibold mb-5 text-[#EF4343] text-lg">
              About Us
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Company Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/people"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Our Leadership
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Awards and Achievements
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  News and Events
                </Link>
              </li>
            </ul>
          </nav>

          {/* Products */}
          <nav aria-label="Products">
            <h4 className="font-semibold mb-5 text-[#EF4343] text-lg">
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/mugs"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Sublimation Mugs
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Corporate Gifts
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Merchandise
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Stationery
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold mb-4 mt-8 text-[#EF4343] text-lg">
              Community
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blogs"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h4 className="font-semibold mb-5 text-[#EF4343] text-lg">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Sublimation Printing
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Custom Branding
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Bulk Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Corporate Solutions
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold mb-4 mt-8 text-[#EF4343] text-lg">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact Form
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${phone}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {phone}
                </a>
              </li>
            </ul>
          </nav>

          {/* Brands / Partnerships */}
          <nav aria-label="Brands">
            <h4 className="font-semibold mb-5 text-[#EF4343] text-lg">
              Our Brands
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/mugs"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Mug Wale
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Kamlesh Enterprises
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Powerbook
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Allure Space
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold mb-4 mt-8 text-[#EF4343] text-lg">
              Careers
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Current Openings
                </Link>
              </li>
            </ul>
          </nav>

          {/* Partner Logo & CTA (COLORWHITE IS HERE NOW) */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/img/colorwhite.png"
              alt="Kamlesh Group Logo"
              className="h-16 mb-4"
            />
            <p className="text-gray-400 text-sm mb-4">
              Kamlesh Group of Companies
            </p>
            <Link
              to="/mugs"
              className="inline-block bg-[#EF4343] hover:bg-[#d63636] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Explore Mugs
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0f0f1a] border-t border-gray-800">
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-3">
              <img
                src="/img/MUGWALE.png"
                alt="Kamlesh Group"
                className="h-6"
              />
              <span className="text-gray-400">
                Copyright 2025 Kamlesh Group | All Rights Reserved
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of use
              </a>
              <span className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                India
              </span>
              <a
                href={`mailto:${contactEmail}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </footer>
  );
};

export default Footer;