import {
  Users,
  Target,
  Heart,
  Zap,
  TrendingUp,
  MessageSquare,
  Briefcase,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

export default function AgencyTeamPage() {
  return (
    <div className="min-h-screen bg-white">

      
       {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[40vh] flex items-center my-10 justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="mb-4 text-3xl font-extrabold tracking-wide md:text-5xl">
            Contact
          </h1>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Link
              href="/"
              className="hover:underline hover:text-[#0AB99D] transition"
            >
              Home
            </Link>
            <span>||</span>
            <Link href="" className="text-[#0AB99D] font-semibold">
              Contact
            </Link>
          </div>
        </div>
      </section>
      
    <section className="px-6 py-16 text-gray-900 bg-white md:py-24">
  <div className="container mx-auto max-w-7xl">
    <div className="grid items-center gap-12 md:grid-cols-2">
      {/* Left side - Quote and text */}
      <div className="space-y-6">
        {/* Large decorative quote mark */}
        <div className="font-serif leading-none text-gray-300 text-9xl">
          "
        </div>

        {/* Main quote */}
        <h2 className="text-3xl font-light text-gray-900 md:text-4xl">
          " None of us is as smart as all of Us "
        </h2>

        {/* Description text */}
        <p className="leading-relaxed text-justify text-gray-600">
          We have the vision to become a leading voice in the digital world not only in Bangladesh but also globally. We have started our journey with a very energetic and skilled team. We love what we do and we do what we love. We are working in a family environment with world-class facilities. Professionalism is our key tool for success.
        </p>

        {/* Attribution */}
        <div>
          <p className="text-lg font-semibold">Md.Millon Hossen</p>
          <p className="text-sm text-gray-500">Founder & CEO</p>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="flex justify-center md:justify-end">
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl lg:aspect-[4/5]">
          <img
            src="/About/millon.jpg"
            alt="Team collaboration"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Section 4: Leadership Team - চতুর্থ সেকশন: নেতৃত্ব টিম (এজেন্সি ফাউন্ডার) */}
      <section className="py-20 bg-gray-50 md:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 text-balance md:text-4xl lg:text-5xl">
              Our Leadership
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-pretty md:text-lg">
              Experienced leaders guiding our agency to new heights
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {[
              {
                name: "Iran Rana",
                role: "Advertising Senior Excutive",
                image: "/About/iran vai.jpg",
                bio: "4+ years crafting brand experiences",
              },
              {
                name: "David Chen",
                role: "Technical Director",
                image: "/About/professional-man-cto.jpg",
                bio: "Expert in scalable web solutions",
              },
              {
                name: "Emma Rodriguez",
                role: "Strategy Lead",
                image: "/About/professional-woman-designer.png",
                bio: "Data-driven marketing strategist",
              },
            ].map((leader, idx) => (
              <div
                key={idx}
                className="overflow-hidden transition-all bg-white border border-gray-200 rounded-lg group hover:shadow-2xl"
              >
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="mb-1 text-xl font-semibold text-gray-900 md:text-2xl">
                    {leader.name}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-[#6B7C4E] md:text-base">
                    {leader.role}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Team Members by Department - পঞ্চম সেকশন: বিভাগ অনুযায়ী টিম মেম্বার (সাদা ব্যাকগ্রাউন্ড) */}
      <section className="py-20 bg-white md:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 text-balance md:text-4xl lg:text-5xl">
              Our Creative Talents
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-pretty md:text-lg">
              Great things in business are never done by one person. They're
              done by a team of people. We have that dynamic group of peoples
            </p>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Management
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-[#6B7C4E] to-transparent"></div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Rowshon Habib Rony",
                  role: "Chief Technical Officer (CTO)",
                  image: "/About/professional-man-suit-white-background.jpg",
                },
                {
                  name: "RS Robin",
                  role: "Head Of Business Development",
                  image:
                    "/About/professional-man-business-attire-white-background.jpg",
                },
                {
                  name: "Tanjiha Chowdhury Vabna",
                  role: "Senior HR Manager",
                  image:
                    "/About/professional-woman-glasses-white-background.jpg",
                },
                {
                  name: "Mehedi Hasan",
                  role: "Sr. Project Manager",
                  image: "/About/professional-man-blazer-white-background.jpg",
                },
                {
                  name: "Jubayer Ahmad",
                  role: "Business Development Manager",
                  image:
                    "/About/professional-man-thinking-white-background.jpg",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden transition-all bg-white border border-gray-200 rounded-lg shadow-md group hover:shadow-2xl"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-white">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100">
                    <h4 className="mb-1 text-base font-semibold text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Development
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-[#6B7C4E] to-transparent"></div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Ahmed Kamal",
                  role: "Lead Full-Stack Developer",
                  image: "/About/professional-man-glasses-white-background.jpg",
                },
                {
                  name: "Fatima Rahman",
                  role: "Senior Frontend Developer",
                  image: "/About/professional-woman-hijab-white-background.jpg",
                },
                {
                  name: "Shakib Hassan",
                  role: "Backend Developer",
                  image: "/About/professional-man-polo-white-background.jpg",
                },
                {
                  name: "Nusrat Jahan",
                  role: "UI/UX Developer",
                  image: "/About/professional-woman-white-background.jpg",
                },
                {
                  name: "Rafiq Ahmed",
                  role: "Mobile App Developer",
                  image: "/About/professional-man-beard-white-background.jpg",
                },
                {
                  name: "Sabrina Khan",
                  role: "WordPress Developer",
                  image:
                    "/About/professional-woman-hijab-2-white-background.jpg",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden transition-all bg-white border border-gray-200 rounded-lg shadow-md group hover:shadow-2xl"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-white">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100">
                    <h4 className="mb-1 text-base font-semibold text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Marketing
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-[#6B7C4E] to-transparent"></div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Syed Hasib Zaman",
                  role: "Digital Marketing (Team Lead)",
                  image:
                    "/About//professional-man-glasses-white-background.jpg",
                },
                {
                  name: "Abir Ahmmad Santo",
                  role: "Digital Marketing (Team Lead)",
                  image: "/About/professional-man-polo-white-background.jpg",
                },
                {
                  name: "Arika Islam",
                  role: "Senior SEO Expert",
                  image: "/About/professional-woman-hijab-white-background.jpg",
                },
                {
                  name: "Mashuka Sarker",
                  role: "Digital Marketer",
                  image: "/About/professional-woman-white-background.jpg",
                },
                {
                  name: "Ridath Bin Mashrur",
                  role: "Digital Marketer",
                  image:
                    "/About/professional-man-glasses-polo-white-background.jpg",
                },
                {
                  name: "Mirza Sanjida Akter Sara",
                  role: "Digital Marketer",
                  image:
                    "/About/professional-woman-hijab-2-white-background.jpg",
                },
                {
                  name: "Mohammad Junaidul Huq",
                  role: "Digital Marketer",
                  image: "/About/professional-man-polo-white-background.jpg",
                },
                {
                  name: "Hasibur Rahman",
                  role: "Digital Marketer",
                  image: "/About/professional-man-beard-white-background.jpg",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden transition-all bg-white border border-gray-200 rounded-lg shadow-md group hover:shadow-2xl"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-white">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100">
                    <h4 className="mb-1 text-base font-semibold text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Ads
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-[#6B7C4E] to-transparent"></div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Imran Hossain",
                  role: "Google Ads Specialist",
                  image: "/About/professional-man-glasses-white-background.jpg",
                },
                {
                  name: "Tasnim Akter",
                  role: "Facebook Ads Manager",
                  image: "/About/professional-woman-hijab-white-background.jpg",
                },
                {
                  name: "Karim Uddin",
                  role: "PPC Campaign Manager",
                  image: "/About/professional-man-polo-white-background.jpg",
                },
                {
                  name: "Rupa Begum",
                  role: "Display Ads Specialist",
                  image: "/About/professional-woman-white-background.jpg",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden transition-all bg-white border border-gray-200 rounded-lg shadow-md group hover:shadow-2xl"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-white">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100">
                    <h4 className="mb-1 text-base font-semibold text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Boostfixter
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-[#6B7C4E] to-transparent"></div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Arif Mahmud",
                  role: "Lead Boostfixter Specialist",
                  image: "/About/professional-man-glasses-white-background.jpg",
                },
                {
                  name: "Sumaiya Islam",
                  role: "Boostfixter Expert",
                  image: "/About/professional-woman-hijab-white-background.jpg",
                },
                {
                  name: "Tanvir Ahmed",
                  role: "Boostfixter Analyst",
                  image: "/About/professional-man-polo-white-background.jpg",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden transition-all bg-white border border-gray-200 rounded-lg shadow-md group hover:shadow-2xl"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-white">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100">
                    <h4 className="mb-1 text-base font-semibold text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                TikTok
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-[#6B7C4E] to-transparent"></div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Nadia Sultana",
                  role: "TikTok Marketing Lead",
                  image:
                    "/About//professional-woman-hijab-white-background.jpg",
                },
                {
                  name: "Fahim Rahman",
                  role: "TikTok Content Creator",
                  image: "/About/professional-man-polo-white-background.jpg",
                },
                {
                  name: "Lamia Haque",
                  role: "TikTok Ads Specialist",
                  image: "/About/professional-woman-white-background.jpg",
                },
                {
                  name: "Sajid Khan",
                  role: "TikTok Growth Manager",
                  image: "/About/professional-man-beard-white-background.jpg",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden transition-all bg-white border border-gray-200 rounded-lg shadow-md group hover:shadow-2xl"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-white">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100">
                    <h4 className="mb-1 text-base font-semibold text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Facebook
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-[#6B7C4E] to-transparent"></div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Mahbub Alam",
                  role: "Facebook Marketing Manager",
                  image: "/About/professional-man-glasses-white-background.jpg",
                },
                {
                  name: "Farzana Yasmin",
                  role: "Facebook Ads Expert",
                  image: "/About/professional-woman-hijab-white-background.jpg",
                },
                {
                  name: "Rakib Hasan",
                  role: "Social Media Strategist",
                  image: "/About/professional-man-polo-white-background.jpg",
                },
                {
                  name: "Sharmin Akter",
                  role: "Community Manager",
                  image: "/About/professional-woman-white-background.jpg",
                },
                {
                  name: "Jahangir Alam",
                  role: "Facebook Analytics Specialist",
                  image: "/About/professional-man-beard-white-background.jpg",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden transition-all bg-white border border-gray-200 rounded-lg shadow-md group hover:shadow-2xl"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-white">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-gray-100">
                    <h4 className="mb-1 text-base font-semibold text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Departments - ষষ্ঠ সেকশন: বিভাগসমূহ (এজেন্সি সার্ভিস এরিয়া) */}
      <section className="py-20 bg-gray-50 md:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 text-balance md:text-4xl lg:text-5xl">
              Our Service Areas
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-pretty md:text-lg">
              Specialized teams delivering comprehensive digital solutions
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Web Development",
                count: "12 specialists",
                icon: Zap,
                desc: "Custom websites & web apps",
              },
              {
                name: "Brand & Design",
                count: "10 specialists",
                icon: Heart,
                desc: "Visual identity & UI/UX",
              },
              {
                name: "Digital Marketing",
                count: "8 specialists",
                icon: TrendingUp,
                desc: "SEO, PPC & social media",
              },
              {
                name: "Content Strategy",
                count: "6 specialists",
                icon: MessageSquare,
                desc: "Copywriting & content",
              },
              {
                name: "Business Strategy",
                count: "5 specialists",
                icon: Target,
                desc: "Consulting & planning",
              },
              {
                name: "Client Success",
                count: "9 specialists",
                icon: Briefcase,
                desc: "Account management",
              },
            ].map((dept, idx) => (
              <div
                key={idx}
                className="p-6 transition-all bg-white border border-gray-200 rounded-lg group hover:shadow-xl md:p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="rounded-lg bg-[#6B7C4E]/10 p-3 transition-colors group-hover:bg-[#6B7C4E]/20">
                    <dept.icon className="h-6 w-6 text-[#6B7C4E] md:h-7 md:w-7" />
                  </div>
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 border border-gray-300 rounded-md">
                    {dept.count}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 md:text-2xl">
                  {dept.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {dept.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Agency Culture & Benefits - সপ্তম সেকশন: এজেন্সি সংস্কৃতি */}
      <section className="py-20 md:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 text-balance md:text-4xl lg:text-5xl">
              Why Work With Us
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-pretty md:text-lg">
              We invest in our team's growth and well-being
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Remote-First Culture",
                desc: "Work from anywhere with flexible schedules that fit your life",
              },
              {
                title: "Professional Development",
                desc: "$3000 annual budget for courses, conferences, and certifications",
              },
              {
                title: "Creative Freedom",
                desc: "Autonomy to explore new ideas and innovative approaches",
              },
              {
                title: "Health & Wellness",
                desc: "Comprehensive health insurance and mental health support",
              },
              {
                title: "Team Retreats",
                desc: "Quarterly team gatherings and annual company retreats",
              },
              {
                title: "Competitive Compensation",
                desc: "Above-market salaries with performance bonuses",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-gray-200 border-l-4 border-l-[#6B7C4E] bg-white p-6 transition-all hover:shadow-lg md:p-8"
              >
                <h3 className="mb-3 text-lg font-semibold text-gray-900 md:text-xl">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Client Testimonials - অষ্টম সেকশন: ক্লায়েন্ট টেস্টিমোনিয়াল */}
      <section className="bg-[#6B7C4E] py-20 text-white md:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl lg:text-5xl">
              What Clients Say
            </h2>
            <p className="max-w-2xl mx-auto text-pretty text-white/90 md:text-lg">
              Real feedback from businesses we've helped grow
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "This agency transformed our digital presence. The team's creativity and technical expertise exceeded all expectations.",
                author: "Michael Stevens",
                role: "CEO, TechStart Inc",
              },
              {
                quote:
                  "Professional, responsive, and results-driven. They delivered a website that increased our conversions by 150%.",
                author: "Jennifer Lee",
                role: "Marketing Director, GrowthCo",
              },
              {
                quote:
                  "Working with this team feels like having an in-house agency. They truly understand our brand and business goals.",
                author: "Robert Martinez",
                role: "Founder, BrandLab",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-6 transition-all border rounded-lg border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/15 md:p-8"
              >
                <p className="mb-6 italic leading-relaxed text-pretty text-white/95">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 font-bold text-white border-2 rounded-full border-white/30 bg-white/20">
                    {testimonial.author.split(" ")[0][0]}
                    {testimonial.author.split(" ")[1][0]}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-white/80">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Agency Approach - নবম সেকশন: এজেন্সি পদ্ধতি */}
      <section className="py-20 md:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 text-balance md:text-4xl lg:text-5xl">
                Our Approach
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600 text-pretty">
                We believe in a collaborative, transparent process that puts
                your goals first. Every project begins with deep discovery and
                ends with measurable results.
              </p>
              <ul className="space-y-4">
                {[
                  "Discovery & Strategy - Understanding your business and objectives",
                  "Design & Development - Creating solutions that resonate",
                  "Testing & Refinement - Ensuring quality and performance",
                  "Launch & Support - Ongoing optimization and growth",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#6B7C4E] text-xs font-bold text-white">
                      {idx + 1}
                    </div>
                    <span className="leading-relaxed text-gray-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl lg:aspect-[4/5]">
              <img
                src="/About/diverse-team-collaboration.png"
                alt="Team collaboration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Open Positions - দশম সেকশন: খোলা পদসমূহ */}
      <section className="py-20 bg-gray-50 md:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 text-balance md:text-4xl lg:text-5xl">
              Join Our Team
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-pretty md:text-lg">
              We're always looking for talented individuals to join our growing
              agency
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                title: "Senior UI/UX Designer",
                dept: "Design",
                location: "Remote",
                type: "Full-time",
                level: "Senior",
              },
              {
                title: "Full-Stack Developer",
                dept: "Development",
                location: "Remote",
                type: "Full-time",
                level: "Mid-Senior",
              },
              {
                title: "Digital Marketing Manager",
                dept: "Marketing",
                location: "Hybrid",
                type: "Full-time",
                level: "Manager",
              },
              {
                title: "Content Strategist",
                dept: "Content",
                location: "Remote",
                type: "Full-time",
                level: "Mid-level",
              },
              {
                title: "Account Manager",
                dept: "Client Services",
                location: "Remote",
                type: "Full-time",
                level: "Mid-level",
              },
            ].map((job, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 p-6 transition-all bg-white border border-gray-200 rounded-lg hover:shadow-xl sm:flex-row sm:items-center sm:justify-between md:p-8"
              >
                <div className="flex-1">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900 md:text-xl">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md bg-[#6B7C4E] px-3 py-1 text-xs font-medium text-white">
                      {job.dept}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-gray-700 border border-gray-300 rounded-md">
                      {job.location}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-gray-700 border border-gray-300 rounded-md">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-md">
                      {job.level}
                    </span>
                  </div>
                </div>
                <button className="rounded-lg bg-[#6B7C4E] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#5a6a42]">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Contact CTA - একাদশ সেকশন: যোগাযোগ কল টু অ্যাকশন */}
      <section className="py-20 md:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg border-2 border-[#6B7C4E] bg-white p-12 text-center shadow-2xl md:p-16 lg:p-20">
            <div className="inline-flex px-4 py-2 mx-auto mb-6 text-sm font-medium border rounded-full border-white/30 bg-white/10 backdrop-blur-sm">
              Creative Agency Team
            </div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 text-balance md:text-4xl lg:text-5xl">
              Ready to Work Together?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-600 text-pretty">
              Whether you're looking to join our team or partner with us on your
              next project, we'd love to hear from you. Let's create something
              amazing together.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-lg bg-[#6B7C4E] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#5a6a42]">
                Start a Project
              </button>
              <button className="rounded-lg border-2 border-[#6B7C4E] bg-transparent px-6 py-3 text-base font-semibold text-[#6B7C4E] transition-colors hover:bg-[#6B7C4E]/10">
                View All Positions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
