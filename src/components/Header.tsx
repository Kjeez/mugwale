import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
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
      title: "Sublimation Mugs",
      slug: "sublimation-mugs",
      description: "Our core specialty. We offer a diverse range of high-quality sublimation mugs, perfect for corporate branding, personalized gifts, and promotional campaigns. From classic white to magic color-changing options.",
      subServices: [
        {
          title: "White 11 oz Mugs",
          description: "The industry standard classic white ceramic mug, perfect for vibrant, full-color sublimation prints."
        },
        {
          title: "Color Handle Mugs",
          description: "Dual-tone mugs featuring colored handles and rims to perfectly match your brand's color palette."
        },
        {
          title: "Magic Mugs",
          description: "Black 'Magic' mugs that reveal your custom design or photo only when hot liquid is poured inside."
        },
        {
          title: "Patch Mugs",
          description: "Stylish Black and White patch mugs offering a modern, contrasting aesthetic for your logos."
        }
      ]
    },
    {
      title: "Sublimation Merchandise",
      slug: "sublimation-merchandise",
      description: "Beyond mugs, we provide a full suite of sublimation-ready merchandise. Whether for sports events, corporate giveaways, or fashion, our sublimation products ensure long-lasting, high-definition prints.",
      subServices: [
        {
          title: "Sublimation T-Shirts",
          description: "High-quality polyester blend t-shirts designed specifically for durable, full-color sublimation printing."
        },
        {
          title: "Sublimation Bottles",
          description: "Durable aluminum and steel sipper bottles, ideal for sports teams, gyms, and eco-friendly corporate gifts."
        },
        {
          title: "Sublimation Cups",
          description: "Versatile tumblers and cups available in various finishes, ready for your custom artwork."
        },
        {
          title: "Coffee Mugs",
          description: "Standard and custom-shaped coffee mugs for cafes, offices, and daily use."
        }
      ]
    },
    {
      title: "Corporate Gifting",
      slug: "corporate-gifting",
      description: "Strengthen business relationships and recognize excellence with our premium corporate gifting solutions. We offer a wide array of customizable items suitable for clients, employees, and partners.",
      subServices: [
        {
          title: "Trophies",
          description: "Elegant trophies and awards to recognize achievement, milestones, and excellence within your organization."
        },
        {
          title: "Keychains",
          description: "Custom branded keychains in metal, leather, or plastic – a cost-effective and practical promotional item."
        },
        {
          title: "Pens",
          description: "Premium metal and plastic pens engraved or printed with your company logo for lasting brand recall."
        },
        {
          title: "Bags",
          description: "Functional corporate bags, laptop bags, and totes designed for professionals on the move."
        }
      ]
    },
    {
      title: "Stationery & Powerbooks",
      slug: "stationery-powerbooks",
      description: "Equip your team with essential office stationery that combines utility with professional branding. Our Powerbooks and diaries are perfect for the modern professional workspace.",
      subServices: [
        {
          title: "Powerbooks",
          description: "Innovative notebooks with built-in power banks and charging cables – the ultimate utility for professionals."
        },
        {
          title: "Diaries",
          description: "Premium leather and hardbound diaries for organizing schedules, notes, and daily tasks."
        },
        {
          title: "Corporate Notebooks",
          description: "Customized notebooks available in various sizes (A5, B5) and finishes for office use."
        },
        {
          title: "Office Essentials",
          description: "A complete range of branded desk accessories and stationery to unify your office look."
        }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToId: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img
            src={isScrolled ? "/img/MUGWALE.png" : "/img/MUGWALE.png"}
            alt="NewsMakerIndia Logo"
            className="h-16  w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            onClick={() => handleNavClick("about")}
            className={`cursor-pointer text-lg transition-colors duration-300 ${
              isScrolled ? "text-black hover:text-primary" : "text-white hover:text-black"
            }`}
          >
            About us
          </a>
          <div
            className="relative"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <a
              onClick={() => navigate("/services")}
              className={`cursor-pointer text-lg transition-colors duration-300 ${
                isScrolled ? "text-black hover:text-primary" : "text-white hover:text-black"
              }`}
            >
              Services
            </a>

            {/* Mega Menu */}
            {isMegaMenuOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-screen max-w-6xl bg-white shadow-2xl border border-gray-200 rounded-lg z-50">
                <div className="grid grid-cols-4 gap-6 p-8">
                  {services.map((service, index) => (
                    <div key={index} className="space-y-4">
                      <h3 className="font-bold text-lg text-black border-b-2 border-primary pb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-3">
                        {service.subServices.map((subService, subIndex) => (
                          <div
                            key={subIndex}
                            className="group cursor-pointer"
                            onClick={() => {
                              setIsMegaMenuOpen(false);
                              // Corrected: Uses dynamic slug instead of hardcoded '/mugs'
                              navigate(`/services/${service.slug}`);
                            }}
                          >
                            <div className="flex items-start gap-2 p-2 rounded hover:bg-gray-50 transition-colors">
                              <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                              <div>
                                <h4 className="font-semibold text-sm text-black group-hover:text-primary transition-colors">
                                  {subService.title}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                  {subService.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            onClick={() => navigate("/people")}
            className={`cursor-pointer text-lg transition-colors duration-300 ${
              isScrolled ? "text-black hover:text-primary" : "text-white hover:text-black"
            }`}
          >
            People
          </a>
          <a
            onClick={() => navigate("/news")}
            className={`cursor-pointer text-lg transition-colors duration-300 ${
              isScrolled ? "text-black hover:text-primary" : "text-white hover:text-black"
            }`}
          >
            Client Showcase
          </a>
          <a
            onClick={() => navigate("/blogs")}
            className={`cursor-pointer text-lg transition-colors duration-300 ${
              isScrolled ? "text-black hover:text-primary" : "text-white hover:text-black"
            }`}
          >
            Blog
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="default"
            className="hidden sm:flex bg-primary hover:bg-primary/90 text-white font-medium px-6 rounded-full"
            onClick={() => navigate("/contact")}
          >
            Contact us
          </Button>

          {/* Mobile menu toggle */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          <nav className="container mx-auto px-6 py-4 space-y-4">
            <a
              onClick={() => handleNavClick("about")}
              className="block py-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              About us
            </a>

            {/* Services with Mega Menu for Mobile */}
            <div className="space-y-2">
              <div
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between py-2 text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                <span>Services</span>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    isMobileServicesOpen ? "rotate-90" : ""
                  }`}
                />
              </div>

              {isMobileServicesOpen && (
                <div className="pl-4 space-y-4 border-l-2 border-primary">
                  {services.map((service, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-bold text-sm text-black">
                        {service.title}
                      </h4>
                      <div className="space-y-2 pl-2">
                        {service.subServices.map((subService, subIndex) => (
                          <div
                            key={subIndex}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileServicesOpen(false);
                              // Corrected: Dynamic navigation
                              navigate(`/services/${service.slug}`);
                            }}
                            className="flex items-start gap-2 py-1 cursor-pointer hover:text-primary transition-colors"
                          >
                            <ChevronRight className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                            <span className="text-sm">{subService.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Fixed the 'People' link which was previously commented out improperly */}
            <a
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/people");
              }}
              className="block py-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              People
            </a>

            <a
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/news");
              }}
              className="block py-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Client Showcase
            </a>
            <a
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/blogs");
              }}
              className="block py-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Blogs
            </a>
            <Button
              variant="default"
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-full mt-4"
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/contact");
              }}
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