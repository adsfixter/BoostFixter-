export default function CoreValuesTree() {
  const values = [
    {
      letter: "G",
      title: "Gratitude",
      description:
        "We lead with an attitude of thankfulness and humility and find ways to express our gratitude to those around us every day. We embrace giving back, impacting the world for a greater good.",
      position: "left",
      top: "35%",
    },
    {
      letter: "R",
      title: "Respect",
      description:
        "We operate with positive assumptions and give the benefit of the doubt, choosing to see the best in ourselves and others. We will respect others at all times and refrain from gossip or reacting with anger.",
      position: "right",
      top: "38%",
    },
    {
      letter: "O",
      title: "Ownership",
      description:
        "We take personal responsibility for our actions and commit to responsible stewardship over company and client resources. We apologize when we make mistakes and work to make things right. We can do hard things.",
      position: "left",
      top: "50%",
    },
    {
      letter: "W",
      title: "Work Ethic",
      description:
        "We give our best effort and have high-performance expectations. We are organized, proactive and work with a sense of urgency. We emphasize a work-life balance where we work hard during business hours but prioritize our time off for our own well-being.",
      position: "right",
      top: "53%",
    },
    {
      letter: "T",
      title: "Think Bigger",
      description:
        "We strive for continuous improvement and believe that better never stops! We don't take the easy way out. We embrace change, adapt and overcome.",
      position: "left",
      top: "65%",
    },
    {
      letter: "H",
      title: "Honesty",
      description:
        "We seek to build trust and mutual respect by acting with integrity and doing the right thing no matter how difficult.",
      position: "right",
      top: "68%",
    },
  ];

  return (
    <div className="relative w-full px-4 pt-2 pb-0 overflow-hidden md:px-8">
      {/* --- Top Section: Core Values + Mission --- */}
      <div className="relative z-10 mx-auto -mb-40 flex max-w-[1400px] items-start justify-between">
        <div className="max-w-sm p-6 rounded-lg shadow-sm bg-white/80 backdrop-blur-sm">
          <h1 className="mb-2 font-serif text-2xl font-bold text-[#5a6b3f]">
            Thrive&apos;s Core Values
          </h1>
          <p className="text-sm leading-relaxed text-gray-700">
            Throughout the years, we stay committed to the ideas that founded
            our success:
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-sm bg-white/80 backdrop-blur-sm">
          <div className="mb-2 inline-block rounded-full bg-[#5a6b3f] px-4 py-1 text-xs font-bold text-white">
            MISSION
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-800">
            <span>RELATIONSHIPS</span>
            <span className="text-[#5a6b3f]">+</span>
            <span>RESULTS</span>
          </div>
        </div>
      </div>

      {/* --- Tree Section --- */}
      <div className="relative mx-auto max-w-[1400px] mt-0">
        {/* Tree Image Container */}
        <div className="relative flex justify-center">
          <img
            src="/About/tree.png"
            alt="Core Values Tree"
            className="w-full h-auto max-w-4xl"
          />

          {/* Values positioned around the tree */}
          <div className="absolute inset-0 hidden lg:block">
            {values.map((value, index) => {
              const isLeft = value.position === "left";
              const circleColors = [
                "bg-[#4a7c9e]",
                "bg-[#5a7c9e]",
                "bg-[#6a8c7e]",
                "bg-[#5a7b4f]",
                "bg-[#6a8b5f]",
                "bg-[#8a9b5f]",
              ];

              return (
                <div
                  key={index}
                  className="absolute flex items-center gap-4 "
                  style={{
                    top: value.top,
                    [isLeft ? "left" : "right"]: "2%",
                    flexDirection: isLeft ? "row" : "row-reverse",
                  }}
                >
                  <div
                    className={`max-w-[280px]  rounded-lg bg-[#f5f5f0]/95 p-5 shadow-md backdrop-blur-sm ${
                      isLeft
                        ? "border-r-4 border-[#5a6b3f] text-right"
                        : "border-l-4 border-[#5a6b3f] text-left"
                    }`}
                  >
                    <h3 className="mb-2 text-lg font-bold text-gray-800">
                      {value.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-gray-700">
                      {value.description}
                    </p>
                  </div>

                  {/* Circular Badge */}
                  <div
                    className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full ${circleColors[index]} text-3xl font-bold text-white shadow-lg ring-4 ring-white`}
                  >
                    {value.letter}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile version */}
        <div className="mt-8 space-y-4 lg:hidden">
          {values.map((value, index) => {
            const circleColors = [
              "bg-[#4a7c9e]",
              "bg-[#5a7c9e]",
              "bg-[#6a8c7e]",
              "bg-[#5a7b4f]",
              "bg-[#6a8b5f]",
              "bg-[#8a9b5f]",
            ];

            return (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg border-l-4 border-[#5a6b3f] bg-[#f5f5f0]/95 p-4 shadow-md backdrop-blur-sm"
              >
                <div
                  className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full ${circleColors[index]} text-2xl font-bold text-white ring-4 ring-white`}
                >
                  {value.letter}
                </div>
                <div>
                  <h3 className="mb-1 text-base font-bold text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-700">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
