// src/pages/MugDetail.tsx

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp } from "../animation/variants";
import { mugProducts } from "../data/mugProducts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Droplets, 
  Microwave, 
  Palette, 
  Sun,
  Shield,
  Sparkles,
  ThermometerSun,
  Coffee,
  Heart,
  Grip
} from "lucide-react";

// Feature icon mapping
const featureIcons: { [key: string]: React.ReactNode } = {
  "dishwasher": <Droplets className="w-8 h-8" />,
  "microwave": <Microwave className="w-8 h-8" />,
  "color": <Palette className="w-8 h-8" />,
  "vibrant": <Sun className="w-8 h-8" />,
  "durable": <Shield className="w-8 h-8" />,
  "glossy": <Sparkles className="w-8 h-8" />,
  "heat": <ThermometerSun className="w-8 h-8" />,
  "capacity": <Coffee className="w-8 h-8" />,
  "heart": <Heart className="w-8 h-8" />,
  "grip": <Grip className="w-8 h-8" />,
};

const getFeatureIcon = (feature: string) => {
  const lowerFeature = feature.toLowerCase();
  if (lowerFeature.includes("dishwasher")) return featureIcons["dishwasher"];
  if (lowerFeature.includes("microwave")) return featureIcons["microwave"];
  if (lowerFeature.includes("color")) return featureIcons["color"];
  if (lowerFeature.includes("vibrant")) return featureIcons["vibrant"];
  if (lowerFeature.includes("durable") || lowerFeature.includes("scratch")) return featureIcons["durable"];
  if (lowerFeature.includes("glossy") || lowerFeature.includes("finish")) return featureIcons["glossy"];
  if (lowerFeature.includes("heat") || lowerFeature.includes("thermochromic")) return featureIcons["heat"];
  if (lowerFeature.includes("oz") || lowerFeature.includes("capacity")) return featureIcons["capacity"];
  if (lowerFeature.includes("heart") || lowerFeature.includes("gift")) return featureIcons["heart"];
  if (lowerFeature.includes("grip") || lowerFeature.includes("handle")) return featureIcons["grip"];
  return <Sparkles className="w-8 h-8" />;
};

const MugDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const product = mugProducts.find((p) => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/mugs")}>Back to Mugs</Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Request Sent!",
      description: "We'll contact you shortly to discuss your order.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Header />

      {/* Product Detail Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-[#5C5C3D]">
            <span
              className="cursor-pointer hover:text-primary transition-colors"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            {" / "}
            <span
              className="cursor-pointer hover:text-primary transition-colors"
              onClick={() => navigate("/mugs")}
            >
              Mugs
            </span>
            {" / "}
            <span className="text-[#3D3D29] font-semibold">{product.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            {/* Product Image */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <div className="relative overflow-hidden bg-white rounded-3xl aspect-square shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#3D3D29] mb-3">
                  {product.name}
                </h1>
                <p className="text-lg text-[#5C5C3D]">
                  By Kamlesh Group of Companies
                </p>
              </div>

              <div className="border-t border-b border-[#D4D4C4] py-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <span className="text-[#5C5C3D]">USD</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#3D3D29] mb-2">Material</h3>
                <p className="text-[#5C5C3D]">{product.material}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#3D3D29] mb-3">Available Sizes</h3>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-lg border-2 font-medium transition-all ${
                        selectedSize === size
                          ? "border-primary bg-primary text-white"
                          : "border-[#D4D4C4] bg-white hover:border-primary text-[#3D3D29]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#3D3D29] mb-3">Color Options</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      className="px-4 py-2 bg-white border border-[#D4D4C4] rounded-full text-sm font-medium text-[#3D3D29]"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#3D3D29] mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-lg border-2 border-[#D4D4C4] bg-white hover:border-primary font-bold text-[#3D3D29] transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center text-[#3D3D29]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-lg border-2 border-[#D4D4C4] bg-white hover:border-primary font-bold text-[#3D3D29] transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-2xl font-bold mb-4 text-[#3D3D29]">
                  Total: ${(product.price * quantity).toFixed(2)} USD
                </p>
                <Button
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg rounded-lg"
                >
                  Get a Quote
                </Button>
              </div>
            </motion.div>
          </div>

          {/* About Section - Olive/Beige Theme */}
          <div className="mb-20">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-[#3D3D29] mb-6">About</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg text-[#5C5C3D] leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Section - With Icons */}
          <div className="mb-20">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-[#3D3D29]">Key features</h2>
              </div>
              <div className="md:col-span-2">
                <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-col"
                    >
                      <div className="text-[#5C5C3D] mb-4">
                        {getFeatureIcon(feature)}
                      </div>
                      <h3 className="text-lg font-semibold text-[#3D3D29] mb-2">
                        {feature.split(" ").slice(0, 3).join(" ")}
                      </h3>
                      <p className="text-[#5C5C3D] leading-relaxed">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Care Instructions Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-[#3D3D29]">Care instructions</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg text-[#5C5C3D] leading-relaxed">
                  {product.care}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#3D3D29] mb-4">
              Get Your Custom Order
            </h2>
            <p className="text-xl text-[#5C5C3D] max-w-2xl mx-auto">
              Interested in {product.name}? Fill out the form below and our team will
              contact you with pricing, customization options, and delivery details.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#F5F5F0] rounded-2xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#3D3D29]">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-white border-[#D4D4C4]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#3D3D29]">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white border-[#D4D4C4]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#3D3D29]">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white border-[#D4D4C4]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#3D3D29]">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={`Tell us about your order requirements for ${product.name}...`}
                    className="w-full h-32 bg-white border-[#D4D4C4]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg"
                >
                  Send Order Inquiry
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#3D3D29]">Contact Information</h3>
                <p className="text-[#5C5C3D] mb-6">
                  Reach out to us directly through any of these channels:
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-[#F5F5F0] rounded-xl">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-[#3D3D29]">Phone</h4>
                    <p className="text-[#5C5C3D]">+91 9819416689</p>
                    <p className="text-sm text-[#8A8A6D] mt-1">
                      Mon-Fri: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[#F5F5F0] rounded-xl">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-[#3D3D29]">Email</h4>
                    <p className="text-[#5C5C3D]">contact@kamleshgroup.in</p>
                    <p className="text-sm text-[#8A8A6D] mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[#F5F5F0] rounded-xl">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-[#3D3D29]">Address</h4>
                    <p className="text-[#5C5C3D]">
                      Kamlesh Group of Companies
                      <br />
                      Delhi NCR, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-xl p-6 border-2 border-primary/20">
                <h4 className="font-semibold text-lg mb-2 text-[#3D3D29]">Bulk Orders?</h4>
                <p className="text-[#5C5C3D]">
                  Special pricing available for orders of 50+ units. Contact us for
                  a custom quote!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MugDetail;