import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaRobot, FaBrain, FaCalendar, FaClock, FaTrophy, FaTwitter, FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import { Scene } from '../Scene';

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative py-20 px-4">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Scene />
        </Canvas>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute w-full h-full"
          animate={{
            background: [
              "radial-gradient(circle at 30% 30%, rgba(0,245,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 70%, rgba(138,43,226,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 30%, rgba(0,245,255,0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00f5ff] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-[#00f5ff] to-[#8A2BE2] text-transparent bg-clip-text">
            BOLT
          </span>
          <span className="text-white"> HACKATHON</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The World's Largest Virtual Hackathon
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-[#00f5ff] to-[#8A2BE2] rounded-full"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0,245,255,0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
          <motion.button
            className="px-8 py-4 text-xl font-bold text-white border-2 border-[#00f5ff] rounded-full"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0,245,255,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00f5ff]">$1M+</div>
            <div className="text-gray-400">in Prizes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00f5ff]">10K+</div>
            <div className="text-gray-400">Participants</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00f5ff]">50+</div>
            <div className="text-gray-400">Countries</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-text">About The Event</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Virtual Innovation",
              description: "Join developers worldwide in this groundbreaking virtual hackathon, pushing the boundaries of what's possible in tech.",
              icon: <FaRocket className="text-4xl text-[#00f5ff]" />
            },
            {
              title: "Global Community",
              description: "Connect with like-minded innovators, mentors, and industry experts from every corner of the globe.",
              icon: <FaCode className="text-4xl text-[#00f5ff]" />
            },
            {
              title: "Cutting-edge Tech",
              description: "Work with the latest technologies in AI, blockchain, IoT, and more to build the future.",
              icon: <FaRobot className="text-4xl text-[#00f5ff]" />
            },
            {
              title: "Learn & Grow",
              description: "Access workshops, mentorship sessions, and resources to level up your skills.",
              icon: <FaBrain className="text-4xl text-[#00f5ff]" />
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-[#00f5ff]">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export const CategoriesSection = () => {
  return (
    <section id="categories" className="min-h-screen py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-text">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI/ML",
              prize: "$250,000",
              description: "Build the next generation of intelligent applications"
            },
            {
              title: "Web3",
              prize: "$250,000",
              description: "Innovate in blockchain and decentralized technologies"
            },
            {
              title: "Cloud Native",
              prize: "$200,000",
              description: "Create scalable cloud-based solutions"
            },
            {
              title: "IoT",
              prize: "$150,000",
              description: "Connect the physical and digital worlds"
            },
            {
              title: "Open Innovation",
              prize: "$100,000",
              description: "Your creative solution to real-world problems"
            },
            {
              title: "Social Impact",
              prize: "$50,000",
              description: "Technology for social good and sustainability"
            }
          ].map((category, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl border border-[#00f5ff]/20"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(0, 245, 255, 0.5)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-[#00f5ff]">{category.title}</h3>
              <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#00f5ff] to-[#8A2BE2] text-transparent bg-clip-text">
                {category.prize}
              </div>
              <p className="text-gray-300">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export const JudgesSection = () => {
  return (
    <section id="judges" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-text">Meet The Judges</h2>
        
        {/* 3D Holographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Dr. Sarah Chen",
              role: "AI Research Director",
              company: "TechGiant Inc.",
              bio: "Leading AI research initiatives with focus on neural networks and machine learning applications."
            },
            {
              name: "Michael Rodriguez",
              role: "CTO",
              company: "BlockChain Solutions",
              bio: "Pioneer in blockchain technology with expertise in decentralized systems and smart contracts."
            },
            {
              name: "Emma Watson",
              role: "VP Engineering",
              company: "Cloud Systems",
              bio: "Cloud architecture specialist focusing on scalable and resilient system design."
            },
            {
              name: "David Kim",
              role: "Innovation Lead",
              company: "Future Labs",
              bio: "Driving technological innovation through emerging tech and creative problem-solving."
            },
            {
              name: "Lisa Zhang",
              role: "Tech Director",
              company: "Neural Systems",
              bio: "Expert in neural interfaces and brain-computer interaction technologies."
            },
            {
              name: "James Wilson",
              role: "Research Head",
              company: "Quantum Tech",
              bio: "Leading quantum computing research and development of next-gen quantum algorithms."
            },
            {
              name: "Maria Garcia",
              role: "ML Director",
              company: "AI Solutions",
              bio: "Specializing in machine learning optimization and AI model deployment."
            },
            {
              name: "Alex Thompson",
              role: "Tech Lead",
              company: "Cloud Native Inc",
              bio: "Expert in cloud-native architectures and containerized applications."
            }
          ].map((judge, index) => (
            <motion.div
              key={index}
              className="relative h-[220px] group perspective-1000"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.1
                }
              }}
              animate={{
                y: [0, -5, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }
              }}
            >
              {/* Holographic Panel */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00f5ff]/10 to-[#8A2BE2]/10 rounded-lg 
                          border border-[#00f5ff]/30 backdrop-blur-sm transform-gpu group-hover:scale-95
                          transition-all duration-300 cursor-pointer p-3"
                whileHover={{
                  rotateY: 180,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Front - Holographic Image */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="w-full h-full relative overflow-hidden rounded-lg">
                    {/* Hologram Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00f5ff] to-[#8A2BE2] opacity-10" />
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: [
                          "linear-gradient(0deg, transparent, #ffffff20)",
                          "linear-gradient(360deg, transparent, #ffffff20)"
                        ]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Enhanced Scan Lines */}
                    <motion.div 
                      className="absolute inset-0 bg-scan-lines opacity-20"
                      animate={{
                        opacity: [0.1, 0.2, 0.1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Profile Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00f5ff] to-[#8A2BE2] 
                                  flex items-center justify-center text-3xl font-bold text-white
                                  relative overflow-hidden"
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {/* Rotating Glow Effect */}
                        <motion.div
                          className="absolute w-full h-full"
                          animate={{
                            background: [
                              "linear-gradient(0deg, transparent, #ffffff20)",
                              "linear-gradient(360deg, transparent, #ffffff20)"
                            ],
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                        <span className="relative z-10">{judge.name.charAt(0)}</span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Back - Info Card */}
                <div className="absolute inset-0 backface-hidden transform-gpu rotateY-180 bg-[#000]/90 
                              rounded-lg border border-[#00f5ff]/30 p-3">
                  <div className="h-full flex flex-col justify-center space-y-1">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-center"
                    >
                      <h3 className="text-base font-bold text-[#00f5ff] mb-1">{judge.name}</h3>
                      <div className="text-sm text-[#00f5ff]/80 mb-1">{judge.role}</div>
                      <div className="text-xs text-[#00f5ff]/60 mb-2">{judge.company}</div>
                      <p className="text-xs text-gray-300 leading-relaxed">{judge.bio}</p>
                    </motion.div>
                  </div>
                </div>

                {/* Enhanced Holographic Edge Effects */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(0,245,255,0.2), inset 0 0 15px rgba(0,245,255,0.2)",
                      "0 0 30px rgba(0,245,255,0.4), inset 0 0 30px rgba(0,245,255,0.4)",
                      "0 0 15px rgba(0,245,255,0.2), inset 0 0 15px rgba(0,245,255,0.2)"
                    ]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Add global styles for perspective and backface visibility */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
        .transform-gpu {
          transform-style: preserve-3d;
        }
        .bg-scan-lines {
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 245, 255, 0.1) 2px,
            rgba(0, 245, 255, 0.1) 4px
          );
        }
      `}</style>
    </section>
  );
};

export const SponsorsSection = () => {
  const sponsors = [
    { name: 'TechCorp', logo: '🏢' },
    { name: 'InnovateLabs', logo: '🔬' },
    { name: 'CloudTech', logo: '☁️' },
    { name: 'DataSystems', logo: '💾' },
    { name: 'AIVentures', logo: '🤖' },
    { name: 'BlockChain Co', logo: '⛓️' },
    { name: 'SecureNet', logo: '🔒' },
    { name: 'FutureTech', logo: '🚀' },
  ];

  return (
    <section id="sponsors" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-text">Our Sponsors</h2>
        
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-[#00f5ff]">Platinum Partners</h3>
          
          <div className="relative">
            {/* First Row - Moving Left */}
            <motion.div
              className="flex gap-8 mb-8"
              animate={{
                x: [0, -1920]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                }
              }}
            >
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 glass p-6 rounded-xl w-48 h-48 flex items-center justify-center
                           hover:bg-[#00f5ff]/10 transition-colors cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-6xl group-hover:scale-110 transition-transform">
                    {sponsor.logo}
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 text-center text-sm text-[#00f5ff] opacity-0 
                                group-hover:opacity-100 transition-opacity">
                    {sponsor.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Second Row - Moving Right */}
            <motion.div
              className="flex gap-8"
              animate={{
                x: [-1920, 0]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                }
              }}
            >
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 glass p-6 rounded-xl w-48 h-48 flex items-center justify-center
                           hover:bg-[#8A2BE2]/10 transition-colors cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-6xl group-hover:scale-110 transition-transform">
                    {sponsor.logo}
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 text-center text-sm text-[#8A2BE2] opacity-0 
                                group-hover:opacity-100 transition-opacity">
                    {sponsor.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-[#00f5ff]">Become a Sponsor</h3>
          <p className="text-gray-300 mb-8">Join us in supporting the world's largest virtual hackathon</p>
          <motion.button
            className="px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-[#00f5ff] to-[#8A2BE2] rounded-full"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0,245,255,0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Sponsorship Details
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export const TimelineSection = () => {
  const timelineEvents = [
    {
      date: "March 1, 2024",
      title: "Registration Opens",
      description: "Begin your journey by registering for the hackathon"
    },
    {
      date: "March 15, 2024",
      title: "Kickoff Event",
      description: "Join us for the virtual opening ceremony and team formation"
    },
    {
      date: "March 16-30, 2024",
      title: "Hacking Period",
      description: "Two weeks of intense coding, learning, and building"
    },
    {
      date: "March 31, 2024",
      title: "Project Submission",
      description: "Submit your projects for evaluation"
    },
    {
      date: "April 5, 2024",
      title: "Finals & Demo Day",
      description: "Top teams present their projects to judges"
    },
    {
      date: "April 7, 2024",
      title: "Awards Ceremony",
      description: "Winners announced and prizes distributed"
    }
  ];

  return (
    <section id="timeline" className="min-h-screen py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-text">Event Timeline</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00f5ff] to-[#8A2BE2]" />
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-1/2 px-6">
                <motion.div
                  className="glass p-6 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-sm text-[#00f5ff] mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </motion.div>
              </div>
              
              <div className="w-4 h-4 bg-[#00f5ff] rounded-full absolute left-1/2 transform -translate-x-1/2
                            shadow-[0_0_10px_#00f5ff]" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export const RegistrationSection = () => {
  return (
    <section id="register" className="min-h-screen py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-text">Register Now</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Registration Form */}
          <motion.div
            className="glass p-8 rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-[#00f5ff] mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-black/50 border border-[#00f5ff]/30 rounded-lg
                           focus:outline-none focus:border-[#00f5ff] text-white"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-[#00f5ff] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-black/50 border border-[#00f5ff]/30 rounded-lg
                           focus:outline-none focus:border-[#00f5ff] text-white"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-[#00f5ff] mb-2">Category</label>
                <select
                  className="w-full px-4 py-2 bg-black/50 border border-[#00f5ff]/30 rounded-lg
                           focus:outline-none focus:border-[#00f5ff] text-white"
                >
                  <option value="">Select a category</option>
                  <option value="ai">AI/ML</option>
                  <option value="web3">Web3</option>
                  <option value="cloud">Cloud Native</option>
                  <option value="iot">IoT</option>
                  <option value="open">Open Innovation</option>
                  <option value="social">Social Impact</option>
                </select>
              </div>
              <div>
                <label className="block text-[#00f5ff] mb-2">Team Size</label>
                <select
                  className="w-full px-4 py-2 bg-black/50 border border-[#00f5ff]/30 rounded-lg
                           focus:outline-none focus:border-[#00f5ff] text-white"
                >
                  <option value="1">Individual</option>
                  <option value="2">2 Members</option>
                  <option value="3">3 Members</option>
                  <option value="4">4 Members</option>
                </select>
              </div>
              <motion.button
                className="w-full px-8 py-4 text-xl font-bold text-white bg-gradient-to-r 
                         from-[#00f5ff] to-[#8A2BE2] rounded-lg"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(0,245,255,0.5)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Registration
              </motion.button>
            </form>
          </motion.div>

          {/* Registration Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <FaCalendar className="text-2xl text-[#00f5ff] mr-4" />
                <h3 className="text-xl font-bold text-white">Important Dates</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>Registration Deadline: February 28, 2024</li>
                <li>Team Formation: March 1-14, 2024</li>
                <li>Hackathon Period: March 15-31, 2024</li>
              </ul>
            </div>

            <div className="glass p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <FaClock className="text-2xl text-[#00f5ff] mr-4" />
                <h3 className="text-xl font-bold text-white">Time Commitment</h3>
              </div>
              <p className="text-gray-300">
                The hackathon runs for two weeks. Participants are expected to dedicate
                at least 20 hours per week to their projects.
              </p>
            </div>

            <div className="glass p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <FaTrophy className="text-2xl text-[#00f5ff] mr-4" />
                <h3 className="text-xl font-bold text-white">Prizes</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>Grand Prize: $250,000</li>
                <li>Category Winners: $50,000 each</li>
                <li>Community Choice: $25,000</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export const FAQSection = () => {
  const faqs = [
    {
      question: "What is Bolt Hackathon?",
      answer: "Bolt Hackathon is a global virtual hackathon that brings together developers, designers, and innovators to build cutting-edge solutions across various technology domains including AI/ML, Web3, Cloud Native, IoT, and more."
    },
    {
      question: "Who can participate?",
      answer: "Anyone aged 18 or above with a passion for technology can participate. Whether you're a student, professional, or hobbyist developer, you're welcome to join. Teams can have 1-4 members."
    },
    {
      question: "Is there a participation fee?",
      answer: "No, participation is completely free! We believe in making innovation accessible to everyone."
    },
    {
      question: "What kind of support will be provided?",
      answer: "Participants will have access to mentors, technical workshops, API documentation, and cloud credits from our sponsors. We also provide 24/7 Discord support throughout the event."
    },
    {
      question: "How does the judging work?",
      answer: "Projects will be evaluated based on innovation, technical complexity, practical applicability, and presentation. Our panel of expert judges will review submissions and provide detailed feedback."
    },
    {
      question: "What are the submission requirements?",
      answer: "Teams must submit their project code via GitHub, a demo video (max 5 minutes), and a presentation deck explaining their solution. All submissions must be original work created during the hackathon period."
    }
  ];

  return (
    <section id="faq" className="min-h-screen py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-text">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-xl"
            >
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3 className="text-xl font-bold mb-3 text-[#00f5ff]">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.a
            href="mailto:support@bolthackathon.com"
            className="inline-block px-8 py-3 text-lg font-semibold text-white 
                     bg-gradient-to-r from-[#00f5ff] to-[#8A2BE2] rounded-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0,245,255,0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export const Footer = () => {
  const socialLinks = [
    { icon: FaTwitter, href: "https://twitter.com/bolthackathon" },
    { icon: FaDiscord, href: "https://discord.gg/bolthackathon" },
    { icon: FaGithub, href: "https://github.com/bolthackathon" },
    { icon: FaLinkedin, href: "https://linkedin.com/company/bolthackathon" }
  ];

  const quickLinks = [
    { text: "About", href: "#about" },
    { text: "Categories", href: "#categories" },
    { text: "Timeline", href: "#timeline" },
    { text: "Register", href: "#register" },
    { text: "FAQ", href: "#faq" }
  ];

  return (
    <footer className="bg-black/30 backdrop-blur-lg border-t border-[#00f5ff]/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo and Description */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-4 neon-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Bolt Hackathon
            </motion.h3>
            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join the future of innovation. Build something amazing with us.
            </motion.p>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4 
              className="text-xl font-semibold mb-4 text-[#00f5ff]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Quick Links
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-[#00f5ff] transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact */}
          <div>
            <motion.h4 
              className="text-xl font-semibold mb-4 text-[#00f5ff]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Connect With Us
            </motion.h4>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00f5ff] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="text-2xl" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="text-center pt-8 border-t border-[#00f5ff]/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Bolt Hackathon. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}; 