import React, { useEffect, useRef, useState, FormEvent, ChangeEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Github, Linkedin, MapPin, Twitter } from "lucide-react";
import emailjs from '@emailjs/browser';

interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

type SubmitStatus = "" | "success" | "error";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    from_name: "",
    from_email: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("");

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      value: "ayoub.anjaimi99@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Location",
      value: "Khouribga, Morocco"
    },
    {
      icon: <Github className="w-6 h-6 text-blue-600" />,
      title: "GitHub",
      value: "github.com/aanjaimi",
      link: "https://github.com/aanjaimi"
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-600" />,
      title: "LinkedIn",
      value: "linkedin.com/in/ayoub_anjaimi",
      link: "https://www.linkedin.com/in/ayoub-anjaimi-3b1150240"
    },
    {
      icon: <Twitter className="w-6 h-6 text-blue-600" />,
      title: "X",
      value: "x.com/ayoub_anjaimi",
      link: "https://x.com/ayoub_anjaimi"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initial animations for form and contacts
    const ctx = gsap.context(() => {
      // Form container animation
      gsap.fromTo(
        formContainerRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formContainerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Contact items stagger animation
      gsap.fromTo(
        contactsRef.current?.children || [],
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Cleanup
    return () => {
      ctx.revert(); // This will clean up all GSAP animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Success animation
  const animateSuccess = () => {
    gsap.to(formContainerRef.current, {
      keyframes: [
        { scale: 1.02, duration: 0.2 },
        { scale: 1, duration: 0.2 }
      ],
      ease: "power2.out"
    });
  };

  // Error shake animation
  const animateError = () => {
    gsap.to(formContainerRef.current, {
      keyframes: [
        { x: -10, duration: 0.1 },
        { x: 10, duration: 0.1 },
        { x: -7, duration: 0.1 },
        { x: 7, duration: 0.1 },
        { x: 0, duration: 0.1 }
      ],
      ease: "power2.out"
    });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.from_name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.from_name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.from_email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.from_email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      animateError();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env;
      
      if (!REACT_APP_SERVICE_ID || !REACT_APP_TEMPLATE_ID || !REACT_APP_PUBLIC_KEY) {
        throw new Error('Missing EmailJS configuration');
      }

      const result = await emailjs.sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        formRef.current!,
        REACT_APP_PUBLIC_KEY
      );

      if (result.text !== 'OK') throw new Error('Failed to send message');
      
      setSubmitStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
      animateSuccess();
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus("error");
      animateError();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div ref={formContainerRef} className="bg-white text-black p-8 rounded-lg shadow-lg">
            {submitStatus === "success" && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg border border-green-200">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg border border-red-200">
                Failed to send message. Please try again or contact us directly via email.
              </div>
            )}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="from_name"
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg transition-all duration-200
                    focus:ring-2 focus:ring-blue-500 outline-none
                    ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="from_email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="from_email"
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg transition-all duration-200
                    focus:ring-2 focus:ring-blue-500 outline-none
                    ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg h-32 resize-none transition-all duration-200
                    focus:ring-2 focus:ring-blue-500 outline-none
                    ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                />
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 px-4 py-2
                  rounded-full w-full font-medium text-white
                  bg-gradient-to-r from-[#ff56f6] via-[#b936ee] via-[#3bace2] to-[#406aff]
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-300
                  hover:shadow-lg hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#406af3]"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          <div ref={contactsRef} className="space-y-8 p-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                {info.icon}
                <div>
                  <h3 className="font-medium">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <span className="bg-gradient-to-r from-[#ff56f6] via-[#b936ee] via-[#3bace2] to-[#406aff] inline-block text-transparent bg-clip-text">
                        {info.value}
                      </span>
                    </a>
                  ) : (
                    <p className="text-gray-600">
                      <span className="bg-gradient-to-r from-[#ff56f6] via-[#b936ee] via-[#3bace2] to-[#406aff] inline-block text-transparent bg-clip-text">
                        {info.value}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;