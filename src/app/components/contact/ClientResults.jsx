import Image from "next/image";
import Link from "next/link";

export default function ClientResults() {
  const results = [
    {
      percentage: "+218%",
      metric: "eCommerce Orders",
      businessType: "HVAC AND EMS SUPPLIER",
      image: "/ClientResult/hvac-technician-work.png",
    },
    {
      percentage: "+343.2%",
      metric: "Conversion Rate",
      businessType: "PRIVATE WOUND CARE CLINIC",
      image: "/ClientResult/medical-stethoscope-healthcare-professional.jpg",
    },
    {
      percentage: "+295.69%",
      metric: "Top 5 Keyword Rankings",
      businessType: "MULTI-LOCATION RESTORATION AND RECONSTRUCTION FIRM",
      image: "/ClientResult/construction-worker-with-insulation-materials.jpg",
    },
  ];

  return (
    <section className="px-4 py-12 sm:py-16 lg:py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-[#6B7F3C] leading-tight">
          Our Clients Get Results
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-10">
          {results.map((result, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden transition-all duration-500 shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Card */}
              <div className="relative overflow-hidden bg-gray-900 h-72 sm:h-80 lg:h-96">
                <Image
                  src={result.image || "/placeholder.svg"}
                  alt={result.businessType}
                  fill
                  className="object-cover transition-all duration-500 opacity-80 group-hover:opacity-90 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white sm:px-6">
                  <div className="mb-2 text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl sm:mb-3 drop-shadow-lg">
                    {result.percentage}
                  </div>
                  <div className="text-base font-semibold tracking-wide sm:text-lg lg:text-xl drop-shadow-md">
                    {result.metric}
                  </div>
                </div>
              </div>

              {/* Business Type Link */}
              <div className="bg-[#F4D35E] py-5 sm:py-6 lg:py-7 px-4 sm:px-6 flex-grow flex items-end justify-center group-hover:bg-[#F0C952] transition-colors duration-300">
                <Link
                  href="#"
                  className="text-xs font-bold leading-relaxed tracking-wider text-[#6B7F3C] uppercase sm:text-sm lg:text-base underline"
                >
                  {result.businessType}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
