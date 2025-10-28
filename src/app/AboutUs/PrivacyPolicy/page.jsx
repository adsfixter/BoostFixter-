"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function PrivacyPolicyPage() {
  const lottieRef = useRef(null)

  useEffect(() => {
    const loadLottie = async () => {
      const lottie = (await import("lottie-web")).default

      if (lottieRef.current) {
        lottie.loadAnimation({
          container: lottieRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          // ✅ Load from local public folder
          path: "/lottie/privacy.json",
        })
      }
    }

    loadLottie()
  }, [])

  return (
    <div className="min-h-screen bg-muted/30">

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

      
      

      {/* Main Content */}
      <main className="container px-4 py-12 mx-auto">
        <div className="mx-auto max-w-7xl">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 mb-6 text-sm text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          {/* Title Section */}
          <div className="mb-8">
            <h1 className="mb-2 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last Updated: January 2025</p>
          </div>

          {/* Two Column Layout */}
          <div className="p-8 rounded-lg shadow-sm bg-background md:p-12">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                {/* Introduction */}
                <div>
                  <p className="leading-relaxed text-muted-foreground">
                    Your privacy is important to us. It is BoostFixer Agency's policy to respect your privacy regarding
                    any information we may collect from you across our website, and other sites we own and operate.
                  </p>
                </div>

                {/* Section 1: Information We Collect */}
                <section>
                  <h2 className="mb-4 text-2xl font-semibold">Information We Collect</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    We only collect information about you if we have a reason to do so – for example, to provide our
                    agency services, to communicate with you, or to improve our services.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        <strong className="text-foreground">Personal Information:</strong> We collect personal
                        information that you provide to us when you use our services, such as your name, email address,
                        company name, and any other contact information you provide.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        <strong className="text-foreground">Project Data:</strong> Information about your marketing
                        campaigns, social media accounts, and business objectives that you share with us to deliver our
                        services.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        <strong className="text-foreground">Usage Data:</strong> We collect information about your
                        interactions with our services, such as the pages you visit, the links you click, and the search
                        terms you use.
                      </span>
                    </li>
                  </ul>
                </section>

                {/* Section 2: How We Use Information */}
                <section>
                  <h2 className="mb-4 text-2xl font-semibold">How We Use Information</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    We use the information we collect in various ways, including to:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>Provide, operate, and maintain our agency services</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>Improve, personalize, and expand our service offerings</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>Understand and analyze how you use our services</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>Develop new products, services, features, and functionality</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        Communicate with you, either directly or through one of our partners, including for customer
                        service, to provide you with updates and other information relating to the service, and for
                        marketing and promotional purposes
                      </span>
                    </li>
                  </ul>
                </section>

                {/* Section 3: Data Security */}
                <section>
                  <h2 className="mb-4 text-2xl font-semibold">Data Security</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    We take the security of your data seriously and implement appropriate technical and organizational
                    measures to protect your personal information.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>All data transmissions are encrypted using SSL/TLS protocols</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>We use secure servers and databases with restricted access</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>Regular security audits and updates to our systems</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>Employee training on data protection and privacy best practices</span>
                    </li>
                  </ul>
                </section>

                {/* Section 4: Third-Party Services */}
                <section>
                  <h2 className="mb-4 text-2xl font-semibold">Third-Party Services</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    We may employ third-party companies and individuals to facilitate our services, provide services on
                    our behalf, or assist us in analyzing how our services are used.
                  </p>
                  <p className="mb-4 leading-relaxed text-muted-foreground">These third parties include:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        <strong className="text-foreground">Analytics providers:</strong> To help us understand how our
                        services are being used
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        <strong className="text-foreground">Social media platforms:</strong> For campaign management and
                        performance tracking
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        <strong className="text-foreground">Payment processors:</strong> To handle billing and payment
                        transactions securely
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        <strong className="text-foreground">Cloud service providers:</strong> For secure data storage
                        and hosting
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    These third parties have access to your personal information only to perform these tasks on our
                    behalf and are obligated not to disclose or use it for any other purpose.
                  </p>
                </section>

                {/* Section 5: Your Rights */}
                <section>
                  <h2 className="mb-4 text-2xl font-semibold">Your Rights</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    You have certain rights regarding your personal information. These include:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        <strong className="text-foreground">Access:</strong> You have the right to request copies of
                        your personal data
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        <strong className="text-foreground">Rectification:</strong> You have the right to request that
                        we correct any information you believe is inaccurate or complete information you believe is
                        incomplete
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        <strong className="text-foreground">Erasure:</strong> You have the right to request that we
                        erase your personal data, under certain conditions
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        <strong className="text-foreground">Restrict processing:</strong> You have the right to request
                        that we restrict the processing of your personal data, under certain conditions
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        <strong className="text-foreground">Data portability:</strong> You have the right to request
                        that we transfer the data that we have collected to another organization, or directly to you,
                        under certain conditions
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    If you make a request, we have one month to respond to you. If you would like to exercise any of
                    these rights, please contact us at{" "}
                    <a href="mailto:privacy@boostfixer.com" className="text-primary hover:underline">
                      privacy@boostfixer.com
                    </a>
                  </p>
                </section>

                {/* Contact Section */}
                <section className="pt-4 border-t">
                  <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at{" "}
                    <a href="mailto:privacy@boostfixer.com" className="text-primary hover:underline">
                      privacy@boostfixer.com
                    </a>
                  </p>
                </section>
              </div>

              {/* Right Column - Lottie Animation */}
              <div className="sticky items-start justify-center hidden lg:flex top-8">
                <div
                  ref={lottieRef}
                  className="w-full max-w-md aspect-square"
                  aria-label="Privacy and security illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

     
    </div>
  )
}
