import CustomLink from "../../Share/CustomLink";

export default function MetricsSection() {
  const metrics = [
    {
      number: "01",
      title: "Largest Contentful Paint",
      subtitle: "(LCP)",
      description:
        "This metric determines a website's loading performance, specifically how long it takes for the largest content element to load.",
    },
    {
      number: "02",
      title: "First Input Delay",
      subtitle: "(FID)",
      description:
        "This metric evaluates a website's interactivity. It measures a website's responsiveness to an interaction triggered by the user, such as clicking a button.",
    },
    {
      number: "03",
      title: "Cumulative Layout Shift",
      subtitle: "(CLS)",
      description:
        "This metric focuses on a website's visual stability. It determines the percentage of the screen affected by movement.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Metrics Cards */}
        <div className="space-y-4 mb-12">
          {metrics.map((metric) => (
            <div key={metric.number} className="flex gap-0">
              {/* Arrow/Chevron Shape */}
              <div className="relative w-64 flex-shrink-0">
                <div
                  className="bg-green-700 text-white px-8 py-8 flex items-center gap-6 relative z-10"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 0 100%)",
                  }}
                >
                  <span className="text-4xl font-bold">{metric.number}</span>
                  <div>
                    <h3 className="font-semibold text-lg">{metric.title}</h3>
                    <p className="text-sm opacity-90">{metric.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Description Area */}
              <div className="flex-1 bg-gray-100 px-8 py-8 flex items-center">
                <p className="text-gray-700 leading-relaxed">
                  {metric.description.split(", ").map((part, idx) => (
                    <span key={idx}>
                      {idx > 0 && <span className="font-semibold">, </span>}
                      {idx === 0 ? (
                        <>
                          {part.split(" ").map((word, i) => (
                            <span key={i}>
                              {["loading", "interactivity", "visual"].includes(word) ? (
                                <span className="font-semibold">{word}</span>
                              ) : (
                                word
                              )}{" "}
                            </span>
                          ))}
                        </>
                      ) : (
                        part
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text Section */}
        <div className="space-y-4 text-gray-700">
          <p className="text-base leading-relaxed">
            At Thrive, we are 100% committed to your digital success. With our website design agency, you can expect a
            search engine-friendly web design that works across devices, engages page visitors and showcases your unique
            brand identity.
          </p>
          <p className="text-base leading-relaxed">
            Entrust your website design and development service to us and let us help you attract and convert prospects
            into paying customers.
          </p>
        </div>
          </div>
          <div className="flex justify-center mt-10">
              <CustomLink text={"Level Up My Website"}></CustomLink>
          </div>
    </section>
  );
}
