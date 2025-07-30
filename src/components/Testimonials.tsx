import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  business: string;
  rating: number;
  image?: string;
}

const PLACEHOLDER_IMAGES = [
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  const imageUrl = testimonial.image || PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length];
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 h-full flex flex-col"
      whileHover={{ 
        scale: 1.03, 
        boxShadow: '0 10px 25px rgba(0, 128, 128, 0.1)',
      }}
    >
      <div className="flex-grow">
        <div className="flex mb-3">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <p className="text-secondary/90 text-sm md:text-base italic mb-6">"{testimonial.text}"</p>
      </div>
      <div className="flex items-center">
        <img src={imageUrl} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-medium text-sm md:text-base">{testimonial.name}</h4>
          <p className="text-xs md:text-sm text-secondary/70">{testimonial.business}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const testimonials: Testimonial[] = t('reviews.testimonials', { returnObjects: true });
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [totalPages]);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section id="reviews" className="py-24 bg-light-gray relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-primary">{t('reviews.title')}</h2>
          <p className="section-subtitle">{t('reviews.subtitle')}</p>
        </motion.div>

        {/* Testimonials Carousel for Mobile */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {testimonials.slice(currentPage * 1, currentPage * 1 + 1).map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: testimonials.length }).map((_, i) => (
              <button 
                key={i}
                onClick={() => goToPage(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPage === i ? 'bg-primary w-4' : 'bg-primary/30'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid for Tablet and Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;