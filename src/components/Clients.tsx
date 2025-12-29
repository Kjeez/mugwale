const Clients = () => {
  const clients = [
    { name: "SMDC", logo: "/icons/1.png" },
    { name: "LT Foods", logo: "/icons/2.png" },
    { name: "India Gate", logo: "/icons/3.png" },
    { name: "Microdacyn", logo: "/icons/4.png" },
    { name: "Maybelline", logo: "/icons/5.png" },
    { name: "Bharat Petroleum", logo: "/icons/6.png" },
    { name: "Anixter", logo: "/icons/7.png" },
    { name: "Bose", logo: "/icons/8.png" },
    { name: "Syndicate Bank", logo: "/icons/9.png" },
    { name: "Valvoline", logo: "/icons/10.png" },
    { name: "Condeco", logo: "/icons/11.png" },
    { name: "AISSMS", logo: "/icons/12.png" },
    { name: "Jaypee", logo: "/icons/13.png" },
    { name: "REC", logo: "/icons/14.png" },
    { name: "Sarvatra", logo: "/icons/15.png" },
    { name: "Orient Electric", logo: "/icons/16.png" },
    { name: "Eli Lilly", logo: "/icons/17.png" },
    { name: "Mother Dairy", logo: "/icons/18.png" },
    { name: "Dharmastra Strategic", logo: "/icons/19.png" },
    { name: "Ricoh", logo: "/icons/20.png" },
    { name: "Apollo Tyres", logo: "/icons/21.png" },
    { name: "DuPont", logo: "/icons/22.png" },
    { name: "Radisson Blu", logo: "/icons/23.png" },
    { name: "Unknown 24", logo: "/icons/24.png" },
    { name: "41 Artillery", logo: "/icons/25.png" },
    { name: "Aon Hewitt", logo: "/icons/26.png" },
    { name: "Austin", logo: "/icons/27.png" },
    { name: "Bajaj", logo: "/icons/28.png" },
    { name: "Ironclad Warriors", logo: "/icons/29.png" },
    { name: "Ameriprise Financial", logo: "/icons/30.png" },
    { name: "Horlicks", logo: "/icons/31.png" },
    { name: "Honda", logo: "/icons/32.png" },
    { name: "CKA Birla Group", logo: "/icons/33.png" },
    { name: "Wildlife Safari", logo: "/icons/34.png" },
    { name: "Desert Warriors", logo: "/icons/35.png" },
    { name: "365 Medical", logo: "/icons/36.png" },
    { name: "Cafe Coffee Day", logo: "/icons/37.png" },
    { name: "Fevicol", logo: "/icons/38.png" },
    { name: "GeM", logo: "/icons/39.png" },
    { name: "GlaxoSmithKline", logo: "/icons/40.png" },
    { name: "Indus Towers", logo: "/icons/41.png" },
    { name: "Cox & Kings", logo: "/icons/42.png" },
    { name: "Kyocera", logo: "/icons/43.png" },
    { name: "PHD Chamber", logo: "/icons/44.png" },
    { name: "Pidilite", logo: "/icons/45.png" },
    { name: "Bangur", logo: "/icons/46.png" },
    { name: "Direct Benefit Transfer", logo: "/icons/47.png" },
    { name: "Fine Italian Wine", logo: "/icons/48.png" },
    { name: "PMG Group", logo: "/icons/49.png" },
    { name: "Ireo", logo: "/icons/50.png" },
    { name: "Deals You", logo: "/icons/51.png" },
    { name: "Alstom", logo: "/icons/52.png" },
    { name: "PDM", logo: "/icons/53.png" },
    { name: "TUI", logo: "/icons/54.png" },
    { name: "Pulp Strategy", logo: "/icons/55.png" },
    { name: "Percept", logo: "/icons/56.png" },
    { name: "Matrix", logo: "/icons/57.png" },
    { name: "Metalnox", logo: "/icons/58.png" },
    { name: "Unknown 60", logo: "/icons/60.png" },
    { name: "SAE India", logo: "/icons/61.png" },
    { name: "Autonom India 2021", logo: "/icons/62.png" },
    { name: "Unknown 63", logo: "/icons/63.png" },
    { name: "Boost", logo: "/icons/64.png" },
    { name: "NASSCOM", logo: "/icons/65.png" },
    { name: "DRDO", logo: "/icons/66.png" },
    { name: "Vodafone", logo: "/icons/67.png" },
    { name: "Impetus", logo: "/icons/68.png" },
    { name: "Binary", logo: "/icons/69.png" },
  ];

  // Split into 4 rows (17 logos each, last row has remaining)
  const row1 = clients.slice(0, 17);
  const row2 = clients.slice(17, 34);
  const row3 = clients.slice(34, 51);
  const row4 = clients.slice(51);

  return (
    <section id="people" className="py-20 bg-[#fff] overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-black md:text-5xl font-bold mb-12 text-center">
          Clients
        </h2>

        {/* Row 1 - scrolls left */}
        <div className="relative w-full overflow-hidden mb-8">
          <div className="flex animate-scroll-slow gap-2 md:gap-12">
            {[...row1, ...row1].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] p-2 md:p-4"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-20 w-auto hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right (reverse) */}
        <div className="relative w-full overflow-hidden mb-8">
          <div className="flex animate-scroll-fast-reverse gap-2 md:gap-12">
            {[...row2, ...row2].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] p-2 md:p-4"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-20 w-auto hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - scrolls left */}
        <div className="relative w-full overflow-hidden mb-8">
          <div className="flex animate-scroll-slow gap-2 md:gap-12">
            {[...row3, ...row3].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] p-2 md:p-4"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-20 w-auto hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 4 - scrolls right (reverse) */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-fast-reverse gap-2 md:gap-12">
            {[...row4, ...row4].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] p-2 md:p-4"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-20 w-auto hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll-slow {
          animation: scroll-left 50s linear infinite;
        }
        .animate-scroll-medium {
          animation: scroll-left 10s linear infinite;
        }
        .animate-scroll-fast-reverse {
          animation: scroll-right 30s linear infinite;
        }

        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Clients;