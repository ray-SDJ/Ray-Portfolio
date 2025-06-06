export default function Home() {
  return (
    <div>
      <header className="bg-gray-900 py-4 shadow-lg sticky top-0 z-50">
        <div className="mx-auto px-4 justify-between items-center container flex">
          <div className="text-violet-500 text-2xl font-bold">Portfolio</div>
          <nav className="md:flex hidden space-x-8">
            <a
              href="/jORyICWDABwehg3ZExsx#home"
              className="text-white hover:text-violet-400 transition duration-300"
            >
              Home
            </a>
            <a
              href="/jORyICWDABwehg3ZExsx#about"
              className="text-white hover:text-violet-400 transition duration-300"
            >
              About
            </a>
            <a
              href="/jORyICWDABwehg3ZExsx#projects"
              className="text-white hover:text-violet-400 transition
                duration-300"
            >
              Projects
            </a>
            <a
              href="/jORyICWDABwehg3ZExsx#skills"
              className="text-white hover:text-violet-400 transition
                duration-300"
            >
              Skills
            </a>
            <a
              href="/jORyICWDABwehg3ZExsx#contact"
              className="text-white hover:text-violet-400 transition
                duration-300"
            >
              Contact
            </a>
          </nav>
          <button
            type="submit"
            className="focus:outline-none md:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              id="Windframe_TfDm389FF"
            >
              yuh
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      <section
        style={{ backgroundImage: "url()" }}
        className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black"
        id="home"
      >
        <div className="mx-auto px-4 md:flex-row items-center container flex flex-col">
          <div className="md:w-1/2 md:mb-0 mb-12">
            <p className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Hello, I'm</span>
              <span className="text-violet-500"> Rayner Soto</span>
            </p>
            <p className="text-2xl md:text-3xl mb-6 text-gray-400">
              Security Engineer & Penetration Tester
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-lg">
              OSCP Candidate specializing in application security, vulnerability
              assessment, and ethical hacking. Combining development expertise
              with offensive security to strengthen organizational defenses.
            </p>
            <div className="flex space-x-4">
              <a
                href="/jORyICWDABwehg3ZExsx#contact"
                className="px-8 py-3 bg-violet-600 text-white rounded-lg shadow-lg
                  hover:bg-violet-700 transition duration-300 hover:shadow-xl"
              >
                Hire Me
              </a>
              <a
                href="/jORyICWDABwehg3ZExsx#projects"
                className="px-8 py-3 text-violet-500 rounded-lg shadow-lg border
                  border-violet-500 hover:bg-violet-900 hover:bg-opacity-20 transition duration-300 hover:shadow-xl"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              alt="Professional portrait of John Doe, a full stack developer with a confident stance wearing professional attire against a dark background"
              src="https://placehold.co/600x600/252525/E0E0E0?text=Professional+Portrait"
              className="object-cover border-4 border-violet-500 rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto shadow-2xl"
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-900" id="about">
        <div className="mx-auto px-4 container">
          <p className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
            About
          </p>
          <div className="md:flex-row items-center flex flex-col">
            <div className="md:w-1/2 md:mb-0 mb-10">
              <img
                alt="Full body portrait of John Doe in casual professional attire, showcasing personality and professionalism in a modern setting"
                src="https://placehold.co/600x800/252525/E0E0E0?text=About+Me"
                className="max-w-md rounded-lg w-full mx-auto shadow-2xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <p className="text-2xl md:text-3xl font-bold mb-4 text-violet-400">
                Who I Am
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Security Engineer with strong foundations in both software
                development and cybersecurity, actively pursuing the Offensive
                Security Certified Professional (OSCP) certification. Recently
                earned CompTIA Security+ and Google Cybersecurity
                certifications, complementing existing full-stack development
                experience.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Passionate about offensive security, vulnerability detection,
                and ethical hacking, with hands-on experience in penetration
                testing tools, vulnerability scanning, secure authentication
                systems, and API security.
              </p>
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-violet-500 font-bold mb-2">Name:</p>
                  <p className="text-gray-300">Rayner Soto</p>
                </div>
                <div>
                  <p className="text-violet-500 font-bold mb-2">Email:</p>
                  <p className="text-gray-300">raynersoto0908@outlook.com</p>
                </div>
                <div>
                  <p className="text-violet-500 font-bold mb-2">From:</p>
                  <p className="text-gray-300">Little Ferry, NJ</p>
                </div>
                <div>
                  <p className="text-violet-500 font-bold mb-2">
                    Phone Number:
                  </p>
                  <p className="text-gray-300">201-687-3237</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black" id="projects">
        <div className="mx-auto px-4 container">
          <p className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
            My Projects
          </p>
          <div className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-8">
            {/* Lane Trucking Corp Project */}
            <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img
                alt="Network security infrastructure diagram showing enterprise firewall and security implementations"
                src="https://placehold.co/600x400/252525/E0E0E0?text=Lane+Trucking+Corp"
                className="object-cover w-full h-56"
              />
              <div className="p-6">
                <p className="text-xl font-bold mb-2 text-violet-400">
                  Lane Trucking Corp Security Infrastructure
                </p>
                <p className="text-gray-400 mb-4">
                  Led implementation of enterprise-wide security infrastructure
                  including ELK Stack SIEM, advanced threat protection, and
                  network segmentation strategy.
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    SIEM
                  </span>
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    Network Security
                  </span>
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    Penetration Testing
                  </span>
                </div>
              </div>
            </div>

            {/* Ten86 Cigars Project */}
            <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img
                alt="Retail security system implementation showing network infrastructure and monitoring systems"
                src="https://placehold.co/600x400/252525/E0E0E0?text=Ten86+Cigars"
                className="object-cover w-full h-56"
              />
              <div className="p-6">
                <p className="text-xl font-bold mb-2 text-violet-400">
                  Ten86 Cigars Security Architecture
                </p>
                <p className="text-gray-400 mb-4">
                  Designed and implemented comprehensive security architecture
                  including EDR, WPA3 Enterprise Wi-Fi, and IDS/IPS capabilities
                  for retail environment.
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    EDR
                  </span>
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    WPA3
                  </span>
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    IDS/IPS
                  </span>
                </div>
              </div>
            </div>

            {/* Home Lab Project */}
            <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img
                alt="Home cybersecurity lab setup showing security tools and monitoring systems"
                src="https://placehold.co/600x400/252525/E0E0E0?text=Home+Security+Lab"
                className="object-cover w-full h-56"
              />
              <div className="p-6">
                <p className="text-xl font-bold mb-2 text-violet-400">
                  Advanced Home Cybersecurity Lab
                </p>
                <p className="text-gray-400 mb-4">
                  Built comprehensive security testing environment with Nessus
                  Scanner, ELK Stack SIEM, and advanced network segmentation
                  using VLANs.
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    Nessus
                  </span>
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    Kali Linux
                  </span>
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    VLAN
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img
                alt="Python-based vulnerability scanner interface showing security assessment results"
                src="https://placehold.co/600x400/252525/E0E0E0?text=Vyln-Scanner"
                className="object-cover w-full h-56"
              />
              <div className="p-6">
                <p className="text-xl font-bold mb-2 text-violet-400">
                  Vyln-Scanner
                </p>
                <p className="text-gray-400 mb-4">
                  Advanced Python-based vulnerability scanner featuring
                  comprehensive security assessments, including SSL/TLS
                  analysis, port discovery, and web vulnerability detection.
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    Security
                  </span>
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    Nmap
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img
                alt="AI-powered tongue diagnosis application interface"
                src="https://placehold.co/600x400/252525/E0E0E0?text=Tongue+Diagnosis+AI"
                className="object-cover w-full h-56"
              />
              <div className="p-6">
                <p className="text-xl font-bold mb-2 text-violet-400">
                  Tongue Diagnosis AI
                </p>
                <p className="text-gray-400 mb-4">
                  AI-powered web application for traditional Chinese medicine
                  diagnosis through tongue image analysis, utilizing deep
                  learning and computer vision.
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    TensorFlow
                  </span>
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    Flask
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img
                alt="D&D Campaign Generator showing AI-generated campaign elements"
                src="https://placehold.co/600x400/252525/E0E0E0?text=MyDDCampaign"
                className="object-cover w-full h-56"
              />
              <div className="p-6">
                <p className="text-xl font-bold mb-2 text-violet-400">
                  MyDDCampaign
                </p>
                <p className="text-gray-400 mb-4">
                  Next.js application leveraging Google's Gemini AI to generate
                  customized D&D campaigns, complete with storylines,
                  encounters, and locations.
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    AI
                  </span>
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img
                alt="E-commerce platform showing product catalog and shopping cart"
                src="https://placehold.co/600x400/252525/E0E0E0?text=E-commerce+Platform"
                className="object-cover w-full h-56"
              />
              <div className="p-6">
                <p className="text-xl font-bold mb-2 text-violet-400">
                  E-commerce Platform
                </p>
                <p className="text-gray-400 mb-4">
                  Full-featured online store with user authentication, product
                  management, secure checkout, and admin dashboard built with
                  Next.js and MongoDB.
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 bg-violet-900 text-violet-300 rounded-full text-sm bg-opacity-40">
                    Stripe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-900" id="skills">
        <div className="mx-auto px-4 container">
          <p className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
            Technical Proficiencies
          </p>
          <div className="md:grid-cols-2 grid grid-cols-1 gap-12">
            <div>
              <p className="text-2xl font-bold mb-8 text-violet-400">
                Development
              </p>
              <div className="space-y-6">
                <div>
                  <div className="justify-between mb-2 flex">
                    <span className="text-gray-300 font-medium">
                      React/Next.js
                    </span>
                    <span className="text-violet-400">95%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      style={{ width: "95%" }}
                      className="bg-violet-600 h-2.5 rounded-full"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="justify-between mb-2 flex">
                    <span className="text-gray-300 font-medium">
                      JavaScript/TypeScript
                    </span>
                    <span className="text-violet-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      style={{ width: "90%" }}
                      className="bg-violet-600 h-2.5 rounded-full"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="justify-between mb-2 flex">
                    <span className="text-gray-300 font-medium">
                      Python/Django/Flask
                    </span>
                    <span className="text-violet-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      style={{ width: "85%" }}
                      className="bg-violet-600 h-2.5 rounded-full"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="justify-between mb-2 flex">
                    <span className="text-gray-300 font-medium">Java</span>
                    <span className="text-violet-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      style={{ width: "80%" }}
                      className="bg-violet-600 h-2.5 rounded-full"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="justify-between mb-2 flex">
                    <span className="text-gray-300 font-medium">
                      SQL/PostgreSQL
                    </span>
                    <span className="text-violet-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      style={{ width: "85%" }}
                      className="bg-violet-600 h-2.5 rounded-full"
                    ></div>
                  </div>
                </div>
              </div>

              <p className="text-2xl font-bold mb-8 mt-12 text-violet-400">
                Security & Testing
              </p>
              <div className="space-y-6">
                <div>
                  <div className="justify-between mb-2 flex">
                    <span className="text-gray-300 font-medium">
                      Penetration Testing & Kali Linux Tools
                    </span>
                    <span className="text-violet-400">95%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      style={{ width: "95%" }}
                      className="bg-violet-600 h-2.5 rounded-full"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="justify-between mb-2 flex">
                    <span className="text-gray-300 font-medium">
                      Security Architecture & Frameworks
                    </span>
                    <span className="text-violet-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      style={{ width: "90%" }}
                      className="bg-violet-600 h-2.5 rounded-full"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="justify-between mb-2 flex">
                    <span className="text-gray-300 font-medium">
                      Risk Management & Assessment
                    </span>
                    <span className="text-violet-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      style={{ width: "90%" }}
                      className="bg-violet-600 h-2.5 rounded-full"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="justify-between mb-2 flex">
                    <span className="text-gray-300 font-medium">
                      Security Compliance & Regulations
                    </span>
                    <span className="text-violet-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      style={{ width: "85%" }}
                      className="bg-violet-600 h-2.5 rounded-full"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="justify-between mb-2 flex">
                    <span className="text-gray-300 font-medium">
                      SIEM/IDS/IPS
                    </span>
                    <span className="text-violet-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      style={{ width: "85%" }}
                      className="bg-violet-600 h-2.5 rounded-full"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-2xl font-bold mb-8 text-violet-400">
                Tools & Technologies
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg text-center p-6 hover:bg-gray-700 transition duration-300">
                  <p className="text-lg font-bold text-white">Kali Linux</p>
                </div>
                <div className="bg-gray-800 rounded-lg text-center p-6 hover:bg-gray-700 transition duration-300">
                  <p className="text-lg font-bold text-white">OWASP Tools</p>
                </div>
                <div className="bg-gray-800 rounded-lg text-center p-6 hover:bg-gray-700 transition duration-300">
                  <p className="text-lg font-bold text-white">Burp Suite</p>
                </div>
                <div className="bg-gray-800 rounded-lg text-center p-6 hover:bg-gray-700 transition duration-300">
                  <p className="text-lg font-bold text-white">Metasploit</p>
                </div>
                <div className="bg-gray-800 rounded-lg text-center p-6 hover:bg-gray-700 transition duration-300">
                  <p className="text-lg font-bold text-white">Wireshark</p>
                </div>
                <div className="bg-gray-800 rounded-lg text-center p-6 hover:bg-gray-700 transition duration-300">
                  <p className="text-lg font-bold text-white">Nmap</p>
                </div>
                <div className="bg-gray-800 rounded-lg text-center p-6 hover:bg-gray-700 transition duration-300">
                  <p className="text-lg font-bold text-white">Docker</p>
                </div>
                <div className="bg-gray-800 rounded-lg text-center p-6 hover:bg-gray-700 transition duration-300">
                  <p className="text-lg font-bold text-white">Git/GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black" id="contact">
        <div className="mx-auto px-4 container">
          <p className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
            Get In
          </p>
          <div className="md:flex-row flex flex-col gap-12">
            <div className="md:w-1/3 space-y-8">
              <div className="items-center flex space-x-4">
                <div className="bg-violet-600 rounded-full mt-1 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    id="Windframe_9AsYtCn6M"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-violet-400 mb-2">
                    Phone
                  </p>
                  <p className="text-gray-300">(201) 687-3237</p>
                </div>
              </div>
              <div className="items-start flex space-x-4">
                <div className="bg-violet-600 rounded-full mt-1 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    id="Windframe_rgSe5NsfH"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-violet-400 mb-2">
                    Email
                  </p>
                  <p className="text-gray-300">Raynersoto0908@outlook.com</p>
                </div>
              </div>
              <div className="items-start flex space-x-4">
                <div className="bg-violet-600 rounded-full mt-1 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    id="Windframe_efNrNkaN4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-violet-400 mb-2">
                    Location
                  </p>
                  <p className="text-gray-300">Little Ferry, NJ</p>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-xl font-bold text-violet-400 mb-4">
                  Follow Me
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/ray-SDJ"
                    className="bg-gray-800 rounded-full hover:bg-violet-700 transition-colors
                      duration-300 p-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      id="Windframe_Uj3i6EjX5"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </a>
                  <a
                    href="www.linkedin.com/in/rayner-soto-de-jesus-baa6b6215"
                    className="bg-gray-800 rounded-full hover:bg-violet-700 transition-colors
                      duration-300 p-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      id="Windframe_0h3W0arkE"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 py-8">
        <div className="mx-auto px-4 container">
          <div className="text-center">
            <div className="text-violet-500 text-2xl font-bold mb-4">
              Portfolio
            </div>
            <p className="text-gray-400 mb-6">
              Living, learning, & leveling up one day at a time.
            </p>
            <p className="text-gray-500">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
