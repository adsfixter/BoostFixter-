import CustomLink from "../../Share/CustomLink";

export default function DigitalPlaceholder() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Your Website Is More Than Just a Digital Placeholder
        </h2>

        {/* 3 Column Content */}
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Your Website Is Your Business’s Online Foundation
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Creating a digital presence doesn’t mean simply building a website
              and waiting for customers to approach your brand. It serves as your
              primary customer touchpoint and conversion machine. Ensure it ranks
              high in search engines, stands out from competitors, and aligns with
              your visitors’ intentions.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              First Impressions Are Formed in Seconds
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Statistics reveal that website design and navigation influence{" "}
              <span className="font-semibold text-gray-900">94% of first impressions.</span>{" "}
              Search engines favor responsive web design and structured content.
              75% of site credibility comes from web design — don’t let outdated
              design cost you conversions.
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Responsive Design Is Non-Negotiable According to Google
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Run-of-the-mill sites won’t cut it. You need a responsive web
              design that appeals to both search engines and users. Your target
              audience must see a legitimate business when they visit your site —
              otherwise, you risk losing trust and discouraging engagement.
            </p>
          </div>
        </div>

        {/* Bottom Paragraph */}
        <p className="mt-10 text-gray-700 max-w-5xl mx-auto leading-relaxed">
          At <span className="font-semibold">BoostFixter</span>, we provide SEO-friendly
          web design and development services that check all the boxes — building
          your online foundation, boosting your credibility, and giving you a
          platform that both search engines and customers will love.{" "}
          <a
            href="#contact"
            className="text-green-600 font-semibold hover:underline"
          >
            Schedule a consultation
          </a>{" "}
          today and let us help you build a web presence that drives traffic and
          increases your conversion rate.
        </p>
          </div>
          <div className="flex justify-center mt-10">
              <CustomLink text={"Explore Our Web Design Services"}></CustomLink>
          </div>
    </section>
  );
}
