import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, DownloadIcon, ExternalLinkIcon, MenuIcon, XIcon, Loader2Icon, ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import './styles/animations.css';

// Form validation schema with enhanced error messages
const validateForm = (values) => {
  const errors = {};
  if (!values.name) errors.name = 'Please enter your name';
  if (!values.email) {
    errors.email = 'Please enter your email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!values.message) errors.message = 'Please enter your message';
  else if (values.message.length < 10) errors.message = 'Message must be at least 10 characters long';
  return errors;
};

// Experience data
const experience = [
  {
    title: "Technical Content Writer Intern",
    company: "GeeksforGeeks",
    period: "Aug 2024 - Present",
    description: "Write comprehensive technical articles focusing on data science, machine learning, and web development. Created educational content reaching millions of developers worldwide.",
    logo: "./assets/companies/gfg-logo.png"
  }
];

// Publications data
const publications = [
  {
    title: "Estimating Pi with Buffon's Needle in Python",
    platform: "GeeksforGeeks",
    thumbnail: "/assets/publications/buffon-needle-thumb.png",
    link: "https://www.geeksforgeeks.org/estimating-pi-with-buffons-needle-in-python/",
    date: "December 2023",
    description: "A deep dive into the mathematical principles of Buffon's Needle problem with Python implementation.",
    tags: ["Python", "Mathematics", "Probability"]
  }
];

// Projects data
const projects = [
  {
    title: "Project Raksha - Safety Navigation System",
    description: "AI-powered navigation system prioritizing user safety through crime data analysis and emergency service location integration.",
    longDescription: "An innovative navigation system that uses artificial intelligence to analyze crime data and emergency service locations, providing users with the safest possible routes. Features include voice-activated SOS, real-time route optimization, and emergency service integration.",
    technologies: ["Python", "TensorFlow", "Google Maps API", "Twilio API"],
    thumbnail: "/assets/projects/raksha/thumbnail.jpeg",
    screenshots: [
      "./assets/projects/raksha/screenshots/dashboard.webp",
      "./assets/projects/raksha/screenshots/screenshot2.jpg",
      "./assets/projects/raksha/screenshots/screenshot3.jpg"
    ],
    link: "https://projectraksha.netlify.app",
    github: "https://github.com/whyvineet/projectraksha",
    featured: true
  },
  {
    title: "QueryGenie - AI powered Telegram Bot",
    description: "QueryGenie is a Telegram bot using the Gemini API to deliver intelligent responses and real-time weather updates with generative AI.",
    longDescription: "QueryGenie is a feature-rich Telegram bot integrating generative AI for intelligent conversations and real-time weather updates. Built on the Gemini API, it ensures seamless interaction and practical functionality for users.",
    technologies: ["Python", "Google Generative AI", "Telegram API"],
    thumbnail: "/assets/projects/querygenie/thumbnail.webp",
    screenshots: [
      "./assets/projects/querygenie/screenshots/screenshot1.png",
      "./assets/projects/querygenie/screenshots/screenshot2.png",
      "./assets/projects/querygenie/screenshots/screenshot3.png"
    ],
    link: "https://t.me/QueryGenie_Bot",
    github: "https://github.com/whyvineet/querygenie",
    featured: true
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects, skills, and experience with a clean, modern design.",
    longDescription: "A personal portfolio website designed to showcase projects, skills, and experience in a clean, modern layout. Features include project galleries, interactive animations, and seamless navigation.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    thumbnail: "/assets/projects/portfolio/thumbnail.png",
    screenshots: [
      "./assets/projects/portfolio/screenshots/homepage.png",
      "./assets/projects/portfolio/screenshots/experience-section.png",
      "./assets/projects/portfolio/screenshots/project-section.png"
    ],
    link: "https://whyvineet.xyz",
    github: "https://github.com/whyvineet/portfolio",
    featured: true
  }
];

// Skills data
const skills = [
  {
    category: "Programming Languages",
    items: [
      {
        name: "Python",
        level: "Advanced",
        icon: "./assets/skills/python.svg"
      },
      {
        name: "Java",
        level: "Intermediate",
        icon: "./assets/skills/java.svg"
      },
      {
        name: "JavaScript",
        level: "Intermediate",
        icon: "./assets/skills/javascript.svg"
      }
    ]
  },
  {
    category: "Web Development",
    items: [
      {
        name: "HTML",
        level: "Advanced",
        icon: "/assets/skills/html.svg"
      },
      {
        name: "CSS",
        level: "Advanced",
        icon: "/assets/skills/css.svg"
      },
      {
        name: "React",
        level: "Intermediate",
        icon: "/assets/skills/react.svg"
      },
      {
        name: "Tailwind CSS",
        level: "Intermediate",
        icon: "/assets/skills/tailwindcss.svg"
      },
      {
        name: "Flask",
        level: "Intermediate",
        icon: "/assets/skills/flask.svg"
      }
    ]
  },
  {
    category: "Data Science",
    items: [
      {
        name: "Pandas",
        level: "Advanced",
        icon: "/assets/skills/pandas.svg"
      },
      {
        name: "NumPy",
        level: "Advanced",
        icon: "/assets/skills/numpy.svg"
      },
      {
        name: "Matplotlib",
        level: "Intermediate",
        icon: "/assets/skills/matplotlib.svg"
      },
      {
        name: "Scikit-learn",
        level: "Intermediate",
        icon: "/assets/skills/scikit-learn.svg"
      }
    ]
  },
  {
    category: "Machine Learning",
    items: [
      {
        name: "TensorFlow",
        level: "Intermediate",
        icon: "/assets/skills/tensorflow.svg"
      },
      {
        name: "PyTorch",
        level: "Beginner",
        icon: "/assets/skills/pytorch.svg"
      }
    ]
  }
];

const Portfolio = () => {
  // State management
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Profile images configuration
  const profileImages = {
    headshot: "./assets/profile/headshot.jpg",
    headshotRetina: "./assets/profile/headshot-2x.jpg"
  };

  // Navigation items
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Navigation visibility
      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);

      // Show/hide scroll to top button
      setShowScrollTop(currentScrollY > 500);

      // Active section detection
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Image loading handler
  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => ({ ...prev, [imageId]: true }));
  };

  // Form handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setFormErrors({});

    try {
      // Netlify handles the form submission automatically
      // We just need to reset the form and show success message
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  // Project modal handlers
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    if (!selectedProject) return;

    const maxIndex = selectedProject.screenshots.length - 1;
    if (direction === 'next') {
      setCurrentImageIndex(prev => prev === maxIndex ? 0 : prev + 1);
    } else {
      setCurrentImageIndex(prev => prev === 0 ? maxIndex : prev - 1);
    }
  };

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isNavVisible ? 'top-0' : '-top-20'}`}>
        <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-xl border-b border-white/10"></div>
        <div className="container mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <img src="./assets/profile/logo.png" alt="Vineet Kumar" className="w-8 h-8" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-4 py-2 group ${activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                    }`}
                >
                  <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                    {item.label}
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>
              ))}
              <a
                href="./resume.pdf"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2"
                download
              >
                <DownloadIcon size={16} />
                <span>Resume</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-900/98 backdrop-blur-xl z-40">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-2xl font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="./resume.pdf"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2"
                download
              >
                <DownloadIcon size={16} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black"></div>

        {/* Content */}
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-cyan-500 relative">
              <img
                src={profileImages.headshot}
                srcSet={`${profileImages.headshot} 1x, ${profileImages.headshotRetina} 2x`}
                alt="Vineet Kumar"
                className="w-full h-full object-cover"
                onLoad={() => handleImageLoad('profile-image')}
              />
              {!loadedImages['profile-image'] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <Loader2Icon className="w-8 h-8 animate-spin text-cyan-500" />
                </div>
              )}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Vineet Kumar
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Data Science & AI Developer
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="#projects"


                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2"
              >
                <span>View Projects</span>
                <ExternalLinkIcon size={16} />
              </a>
              <a
                href="./resume.pdf"
                className="px-8 py-3 border border-cyan-500 rounded-lg hover:bg-cyan-500/20 transition-colors flex items-center space-x-2"
                download
              >
                <DownloadIcon size={16} />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-12">
              <a
                href="https://github.com/whyvineet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href="https://linkedin.com/in/whyvineet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <LinkedinIcon size={24} />
              </a>
              <a
                href="https://twitter.com/whyvineet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <TwitterIcon size={24} />
              </a>
              <a
                href="https://instagram.com/whyvineet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <InstagramIcon size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Hello! I'm a BTech CSE student specializing in AI at Galgotias University,
                set to graduate in 2027. My journey in technology is driven by a passion
                for solving complex problems through innovative solutions.
              </p>
              <p className="text-lg text-gray-300">
                I specialize in data science and artificial intelligence, with a particular
                focus on developing practical applications that can make a real difference.
                Currently, I'm exploring opportunities to apply my skills in meaningful projects
                and collaborations.
              </p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:opacity-90 transition-colors flex items-center justify-center space-x-2">
                  <DownloadIcon size={20} />
                  <a href="./resume.pdf" download>
                    <span>Download Resume</span>
                  </a>
                </button>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-cyan-500 rounded-lg hover:bg-cyan-500/20 transition-colors text-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full max-w-md mx-auto relative">
                <div className="aspect-square rounded-lg overflow-hidden border-2 border-cyan-500">
                  <img
                    src="/assets/profile/about-image.jpg"
                    alt="Vineet Kumar"
                    className="w-full h-full object-cover"
                    onLoad={() => handleImageLoad('about-image')}
                  />
                  {!loadedImages['about-image'] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                      <Loader2Icon className="w-8 h-8 animate-spin text-cyan-500" />
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-cyan-500 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="grid gap-8 max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Company Logo */}
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-white p-2">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                      onLoad={() => handleImageLoad(`company-logo-${index}`)}
                    />
                    {!loadedImages[`company-logo-${index}`] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <Loader2Icon className="w-6 h-6 animate-spin text-cyan-500" />
                      </div>
                    )}
                  </div>

                  {/* Experience Details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{exp.title}</h3>
                    <p className="text-gray-300 mb-2">{exp.company}</p>
                    <p className="text-gray-400 mb-4">{exp.period}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <a
                      href="./assets/companies/gfg-certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                {/* Publications Section (if applicable) */}
                {exp.title === "Technical Content Writer Intern" && (
                  <div className="mt-8 space-y-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-4">Published Articles</h4>
                    {publications.map((pub, pubIndex) => (
                      <div
                        key={pubIndex}
                        className="bg-gray-900 rounded-lg p-6 hover:shadow-lg transition-all"
                      >
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Publication Thumbnail */}
                        <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden">
                          <img
                            src={pub.thumbnail}
                            alt={pub.title}
                            className="w-full h-full object-cover"
                            onLoad={() => handleImageLoad(`pub-thumb-${pubIndex}`)}
                          />
                          {!loadedImages[`pub-thumb-${pubIndex}`] && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                              <Loader2Icon className="w-6 h-6 animate-spin text-cyan-500" />
                            </div>
                          )}
                        </div>

                        {/* Publication Details */}
                        <div className="flex-1">
                        <h5 className="text-lg font-semibold mb-2">
                          <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
                          >
                          {pub.title}
                          <ExternalLinkIcon size={16} />
                          </a>
                        </h5>
                        <p className="text-gray-400 mb-3">
                          Published on {pub.platform} • {pub.date}
                        </p>
                        <p className="text-gray-300 mb-4">{pub.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {pub.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300"
                          >
                            {tag}
                          </span>
                          ))}
                        </div>
                        </div>
                      </div>
                      </div>
                    ))}
                    <div className="mt-8">
                      <a
                      href="https://www.geeksforgeeks.org/user/whyvineet/contributions/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border border-cyan-500 rounded-lg hover:bg-cyan-500/20 transition-opacity"
                      >
                      View All Articles
                      </a>
                    </div>
                    </div>
                  )}
                  </div>
              ))}
            </div>
          </div>
        </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg group hover:bg-gray-700 transition-colors"
                    >
                      <div className="w-8 h-8">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          onLoad={() => handleImageLoad(`skill-${index}-${skillIndex}`)}
                        />
                        {!loadedImages[`skill-${index}-${skillIndex}`] && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Loader2Icon className="w-4 h-4 animate-spin text-cyan-500" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-gray-400">{skill.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all transform hover:scale-[1.02] cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                {/* Project Thumbnail */}
                <div className="relative h-48">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onLoad={() => handleImageLoad(`project-thumb-${index}`)}
                  />
                  {!loadedImages[`project-thumb-${index}`] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                      <Loader2Icon className="w-8 h-8 animate-spin text-cyan-500" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cyan-400">Contact Information</h3>
              <p className="text-gray-300">
                If you have any questions or would like to discuss a project, feel free to reach out using the form below or any of the following methods.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="mailto:whyvineet@outlook.com"></a>
              </div>
            </div>

            {/* Contact Form */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="bg-gray-900 rounded-xl p-8 space-y-6"
              onSubmit={handleSubmit}
            >
              {/* Netlify Hidden Fields */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <input name="bot-field" />
              </div>

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className={`w-full bg-gray-800 rounded-lg p-3 text-gray-300 border ${
                        formErrors.name ? 'border-red-500' : 'border-transparent'
                      }`}
                      required
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className={`w-full bg-gray-800 rounded-lg p-3 text-gray-300 border ${
                        formErrors.email ? 'border-red-500' : 'border-transparent'
                      }`}
                      required
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="5"
                    className={`w-full bg-gray-800 rounded-lg p-3 text-gray-300 border ${
                      formErrors.message ? 'border-red-500' : 'border-transparent'
                    }`}
                    required
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg py-3 hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader2Icon className="w-6 h-6 animate-spin mx-auto" />
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus && (
                <div
                  className={`text-sm text-center p-3 rounded-lg ${
                    submitStatus === 'success'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {submitStatus === 'success'
                    ? 'Message sent successfully! I will get back to you soon.'
                    : 'An error occurred. Please try again later.'}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-center">
        <div className="flex items-center justify-center space-x-4">
          <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <GithubIcon size={24} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <LinkedinIcon size={24} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <TwitterIcon size={24} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <InstagramIcon size={24} />
          </a>
        </div>
        <p className="text-gray-400 mt-4">&copy; {new Date().getFullYear()} Vineet Kumar. All rights reserved.</p>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 bg-gray-900/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <ChevronUpIcon size={24} />
        </button>
      )
      }

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-gray-900/95 flex items-center justify-center z-50 p-4">
          <div className="container mx-auto px-6">
            <div className="bg-gray-800 rounded-xl overflow-hidden max-w-4xl w-full relative">
              {/* Modal Close Button */}
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 bg-gray-900/90 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all z-20"
              >
                <XIcon size={24} />
              </button>

              {/* Project Images */}
              <div className="relative h-96">
                <img
                  src={selectedProject.screenshots[currentImageIndex]}
                  alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  onLoad={() => handleImageLoad('project-modal-image')}
                />
                {!loadedImages['project-modal-image'] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <Loader2Icon className="w-8 h-8 animate-spin text-cyan-500" />
                  </div>
                )}

                {/* Navigation Buttons */}
                {selectedProject.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={() => navigateImage('prev')}
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900/90 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all"
                      aria-label="Previous image"
                    >
                      <ChevronLeftIcon size={24} />
                    </button>
                    <button
                      onClick={() => navigateImage('next')}
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900/90 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all"
                      aria-label="Next image"
                    >
                      <ChevronRightIcon size={24} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-gray-900/90 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedProject.screenshots.length}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-4">{selectedProject.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg py-2 px-4 hover:opacity-90 transition-opacity flex items-center space-x-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>View Project</span>
                    <ExternalLinkIcon size={16} />
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 rounded-lg py-2 px-4 hover:bg-gray-700 transition-colors flex items-center space-x-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubIcon size={16} />
                    <span>View Source</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;