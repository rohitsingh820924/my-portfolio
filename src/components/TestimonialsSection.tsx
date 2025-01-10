import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function TestimonialsSection() {
    const testimonials = [
        {
          quote:
            "Rohit's design expertise brought our vision to life. His ability to understand requirements and deliver exceptional results is unmatched.",
          name: "Aarav Mehta",
          designation: "CEO at Nexus Digital Solutions, India",
          src: "/images/testimonials/testimonials-1.jpg",
        },
        {
          quote:
            "The UI/UX designs provided were intuitive and captivating. It's been a pleasure collaborating with Rohit on multiple projects.",
          name: "Fatima Al Zahra",
          designation: "Product Manager at InnovateTech, UAE",
          src: "/images/testimonials/testimonials-3.jpg",
        },
        {
          quote:
            "Working with Rohit has significantly enhanced our online presence. His React and Next.js skills are top-notch.",
          name: "John Peterson",
          designation: "CTO at BrightFuture Inc., USA",
          src: "/images/testimonials/testimonials-5.jpg",
        },
        {
          quote:
            "Rohit's attention to detail and creative approach helped us achieve a seamless user experience. Highly recommended!",
          name: "Sofia Müller",
          designation: "Design Lead at Horizon Tech, Germany",
          src: "/images/testimonials/testimonials-2.jpg",
        },
        {
          quote:
            "The web design and development exceeded our expectations. His ability to handle complex requirements is commendable.",
          name: "Ahmed Khalil",
          designation: "Head of Operations at DigitalWave, UAE",
          src: "/images/testimonials/testimonials-4.jpg",
        },
      ];
      
  return <AnimatedTestimonials testimonials={testimonials} />;
}
