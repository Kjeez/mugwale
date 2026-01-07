import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const services = [
    {
      title: "Mug Wale",
      link: "https://mugwale.vercel.app/mugs",
      isExternal: true,
      subServices: [
        { title: "White 11 oz Mugs", tagline: "Classic ceramic", link: "https://mugwale.vercel.app/mugs" },
        { title: "Color Handle Mugs", tagline: "Dual tone", link: "https://mugwale.vercel.app/mugs" },
        { title: "Magic Mugs", tagline: "Heat reveal", link: "https://mugwale.vercel.app/mugs" },
        { title: "Patch Mugs", tagline: "Modern style", link: "https://mugwale.vercel.app/mugs" }
      ]
    },
    {
      title: "Kamlesh Enterprises",
      link: "/products/t-shirts",
      isExternal: false,
      subServices: [
        { title: "Polyester T-Shirts", tagline: "180 GSM", link: "/products/t-shirts" },
        { title: "Collar Matty T-Shirt", tagline: "Polo neck", link: "/products/t-shirts" },
        { title: "Blank T-Shirt", tagline: "Multi-style", link: "/products/t-shirts" },
        { title: "Cotton Feel T-Shirt", tagline: "160 GSM", link: "/products/t-shirts" }
      ]
    },
    {
      title: "Powerbook",
      link: "/corporate-gifting",
      isExternal: false,
      subServices: [
        { title: "Premium Trophies", tagline: "Corporate awards", link: "/corporate-gifting/awards" },
        { title: "Branded Keychains", tagline: "Brand recall", link: "/corporate-gifting/keychains" },
        { title: "Luxury Pens", tagline: "Executive style", link: "/corporate-gifting/pens" },
        { title: "Professional Bags", tagline: "On the move", link: "/corporate-gifting/backpacks" }
      ]
    },
    {
      title: "Corporate Gifting",
      link: "/corporate-gifting",
      isExternal: false,
      subServices: [
        { title: "Powerbooks", tagline: "Tech enabled", link: "/corporate-gifting/notebooks" },
        { title: "Diaries", tagline: "Premium leather", link: "/corporate-gifting/notebooks" },
        { title: "Corporate Notebooks", tagline: "Custom sizes", link: "/corporate-gifting/notebooks" },
        { title: "Office Essentials", tagline: "Desk ready", link: "/corporate-gifting/desk-accessories" }
      ]
    },
    {
      title: "Allure Space",
      link: "/allure-space",
      isExternal: false,
      subServices: [
        { title: "Architectural Design", tagline: "Visionary", link: "/allure-space" },
        { title: "Interior Architecture", tagline: "Sophisticated", link: "/allure-space" },
        { title: "Commercial Spaces", tagline: "Functional", link: "/allure-space" },
        { title: "Turnkey Projects", tagline: "Seamless", link: "/allure-space" }
      ]
    },
    {
      title: "NARS Surgicals",
      link: "/nars",
      isExternal: false,
      subServices: [
        { title: "Surgical Gowns", tagline: "Max protection", link: "/nars" },
        { title: "Laminated Fabrics", tagline: "Viral barrier", link: "/nars" },
        { title: "Biodegradable PPE", tagline: "Eco-conscious", link: "/nars" },
        { title: "Antimicrobial Tech", tagline: "Germ defense", link: "/nars" }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Changed to 50 for quicker response
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu when route changes
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToId: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceClick = (service: typeof services[0]) => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    
    if (service.isExternal) {
      window.open(service.link, "_blank");
    } else {
      navigate(service.link);
    }
  };

  const handleSubServiceClick = (link: string) => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    
    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-lg border-b border-gray-200 py-3" 
          : "bg-gradient-to-b from-black/60 to-transparent py-5" // UPDATED: Added Gradient & padding change
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" onClick={() => setIsMegaMenuOpen(false)}>
          <img
            src="/img/MUGWALE.png"
            alt="Kamlesh Group Logo"
            className={`h-14 w-auto transition-all duration-300 ${
              !isScrolled ? "brightness-0 invert drop-shadow-md" : "" // UPDATED: Turns logo white when transparent
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            onClick={() => handleNavClick("about")}
            className={`cursor-pointer text-lg font-medium transition-colors duration-300 ${
              isScrolled 
                ? "text-black hover:text-primary" 
                : "text-white hover:text-primary drop-shadow-md" // UPDATED: White text with shadow
            }`}
          >
            About us
          </a>
          
          {/* Services with Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <a
              className={`cursor-pointer text-lg font-medium transition-colors duration-300 flex items-center gap-1 ${
                isScrolled 
                  ? "text-black hover:text-primary" 
                  : "text-white hover:text-primary drop-shadow-md" // UPDATED
              }`}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </a>

            {/* Compact Mega Menu */}
            {isMegaMenuOpen && (
              <div 
                className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4"
                style={{ width: '800px' }}
              >
                {/* Added an arrow indicator pointing up to the menu */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>
                
                <div className="bg-white shadow-2xl border border-gray-100 rounded-xl overflow-hidden">
                  {/* 3x2 Grid - Compact */}
                  <div className="grid grid-cols-3">
                    {services.map((service, index) => (
                      <div 
                        key={index} 
                        className={`p-4 hover:bg-gray-50 transition-colors border-r border-gray-100 last:border-r-0 ${index >= 3 ? 'border-t border-gray-100' : ''}`}
                      >
                        {/* Service Title */}
                        <div 
                          className="flex items-center gap-2 cursor-pointer group mb-2"
                          onClick={() => handleServiceClick(service)}
                        >
                          <h3 className="font-bold text-sm text-gray-900 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          {service.isExternal && (
                            <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-primary" />
                          )}
                        </div>
                        
                        {/* Sub Services - Compact List */}
                        <div className="space-y-1">
                          {service.subServices.map((sub, subIndex) => (
                            <div
                              key={subIndex}
                              className="flex items-center gap-1.5 cursor-pointer group/item py-0.5"
                              onClick={() => handleSubServiceClick(sub.link)}
                            >
                              <ChevronRight className="w-3 h-3 text-gray-300 group-hover/item:text-primary flex-shrink-0 transition-colors" />
                              <span className="text-xs text-gray-500 group-hover/item:text-primary transition-colors font-medium">
                                {sub.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Footer */}
                  <div className="bg-gray-50 px-5 py-3 border-t border-gray-100 flex items-center justify-between">
                    <a 
                      onClick={() => { setIsMegaMenuOpen(false); navigate("/corporate-gifting"); }}
                      className="text-xs font-semibold text-primary hover:underline cursor-pointer flex items-center gap-1"
                    >
                      View All Products <ChevronRight className="w-3 h-3" />
                    </a>
                    <span className="text-[10px] text-gray-400 font-medium tracking-wide">TRUSTED BY 100+ BRANDS</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            onClick={() => { setIsMegaMenuOpen(false); navigate("/news"); }}
            className={`cursor-pointer text-lg font-medium transition-colors duration-300 ${
              isScrolled 
                ? "text-black hover:text-primary" 
                : "text-white hover:text-primary drop-shadow-md" // UPDATED
            }`}
          >
            Client Showcase
          </a>
          <a
            onClick={() => { setIsMegaMenuOpen(false); navigate("/blogs"); }}
            className={`cursor-pointer text-lg font-medium transition-colors duration-300 ${
              isScrolled 
                ? "text-black hover:text-primary" 
                : "text-white hover:text-primary drop-shadow-md" // UPDATED
            }`}
          >
            Blog
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="default"
            className={`hidden sm:flex font-medium px-6 rounded-full transition-all ${
              isScrolled 
               ? "bg-primary hover:bg-primary/90 text-white"
               : "bg-white text-primary hover:bg-gray-100" // UPDATED: White button when transparent header
            }`}
            onClick={() => { setIsMegaMenuOpen(false); navigate("/contact"); }}
          >
            Contact us
          </Button>

          {/* Mobile menu toggle */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white drop-shadow-md"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto shadow-xl">
          <nav className="container mx-auto px-6 py-6 space-y-2">
            <a
              onClick={() => handleNavClick("about")}
              className="block py-3 text-base font-medium text-gray-800 hover:text-primary transition-colors cursor-pointer border-b border-gray-100"
            >
              About us
            </a>

            {/* Mobile Services Dropdown */}
            <div className="border-b border-gray-100">
              <div
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between py-3 text-base font-medium text-gray-800 hover:text-primary transition-colors cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isMobileServicesOpen && (
                <div className="pb-3 space-y-4 mt-1">
                  {services.map((service, index) => (
                    <div key={index} className="pl-4">
                      <div 
                        className="flex items-center gap-2 cursor-pointer py-1"
                        onClick={() => handleServiceClick(service)}
                      >
                        <h4 className="font-semibold text-sm text-gray-900 hover:text-primary transition-colors">
                          {service.title}
                        </h4>
                        {service.isExternal && (
                          <ExternalLink className="w-3 h-3 text-gray-400" />
                        )}
                      </div>
                      <div className="pl-3 space-y-2 mt-2 border-l-2 border-gray-100">
                        {service.subServices.slice(0, 3).map((sub, subIndex) => (
                          <div
                            key={subIndex}
                            onClick={() => handleSubServiceClick(sub.link)}
                            className="flex items-center gap-2 pl-3 py-0.5 cursor-pointer text-gray-600 hover:text-primary transition-colors"
                          >
                            <span className="text-xs font-medium">{sub.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a
              onClick={() => { setIsMobileMenuOpen(false); navigate("/news"); }}
              className="block py-3 text-base font-medium text-gray-800 hover:text-primary transition-colors cursor-pointer border-b border-gray-100"
            >
              Client Showcase
            </a>
            <a
              onClick={() => { setIsMobileMenuOpen(false); navigate("/blogs"); }}
              className="block py-3 text-base font-medium text-gray-800 hover:text-primary transition-colors cursor-pointer border-b border-gray-100"
            >
              Blog
            </a>
            <Button
              variant="default"
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-lg mt-6 py-6"
              onClick={() => { setIsMobileMenuOpen(false); navigate("/contact"); }}
            >
              Contact us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;