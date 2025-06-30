import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const AnimatedTitle = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const title = "Contactez-nous".split('');
  const subtitle = "Nous sommes à votre écoute pour toute question ou suggestion".split(' ');

  return (
    <div className="text-center mb-16">
      <div className="relative inline-block">
        <motion.div
          ref={ref}
          className="relative"
        >
          {title.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, rotate: -10 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                type: "spring",
                stiffness: 100
              }}
              className="inline-block text-4xl md:text-5xl font-bold text-primary-800"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: title.length * 0.05,
              ease: "easeOut"
            }}
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 0.15, scale: 1 } : {}}
          transition={{
            duration: 1,
            delay: title.length * 0.05 + 0.3
          }}
          className="absolute -inset-4 bg-primary-200 -z-10 rounded-full blur-2xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: title.length * 0.05 + 0.4
        }}
        className="text-primary-600 text-lg max-w-2xl mx-auto mt-6"
      >
        {subtitle.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: (title.length * 0.05) + 0.4 + (i * 0.1)
            }}
            className="inline-block mx-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

const AnimatedCoordinatesTitle = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const title = "Nos coordonnées".split('');

  return (
    <div ref={ref} className="relative mb-6">
      <div className="relative inline-block">
        {title.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: i * 0.05,
              type: "spring",
              stiffness: 200
            }}
            className="inline-block text-2xl font-bold text-primary-800"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{
          duration: 0.6,
          delay: title.length * 0.05,
          ease: "easeOut"
        }}
        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-300 via-primary-400 to-primary-300"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.1 } : {}}
        transition={{
          duration: 0.8,
          delay: title.length * 0.05 + 0.2
        }}
        className="absolute -inset-2 bg-primary-200 rounded-lg blur-sm -z-10"
      />
    </div>
  );
};

const MapSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white p-2 rounded-2xl shadow-xl overflow-hidden space-y-4"
    >
      <div className="h-[400px] relative overflow-hidden rounded-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1711901064531!6m8!1m7!1siLm2HlfrJLVK10BgJ6F9uw!2m2!1d14.72819916981452!2d-17.20890573698145!3f159.80177536981452!4f-11.130630981841378!5f0.7820865974627469"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation Suñuy Artisan"
          className="rounded-xl"
        />
      </div>

      <motion.a
        href="https://www.google.fr/maps/place/Living+place/@14.7281992,-17.2089057,3a,75y,159.8h,101.13t/data=!3m7!1e1!3m5!1siLm2HlfrJLVK10BgJ6F9uw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-11.130630981841378%26panoid%3DiLm2HlfrJLVK10BgJ6F9uw%26yaw%3D159.80177536981452!7i16384!8i8192!4m14!1m7!3m6!1s0xec19f77ea5acc3b:0x1377cb6372e45a45!2sLiving+place!8m2!3d14.7280419!4d-17.2089059!16s%2Fg%2F11q2trdmws!3m5!1s0xec19f77ea5acc3b:0x1377cb6372e45a45!8m2!3d14.7280419!4d-17.2089059!16s%2Fg%2F11q2trdmws"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 transition-colors p-2 group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <MapPin className="w-5 h-5" />
        <span className="relative">
          Voir dans Google Maps
          <motion.span
            className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary-600"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </span>
        <motion.span
          className="inline-block"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          →
        </motion.span>
      </motion.a>
    </motion.div>
  );
};

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: new Date().toISOString()
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedTitle />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label htmlFor="name" className="block text-lg font-medium text-primary-700 mb-2">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400 w-6 h-6" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-14 w-full h-14 rounded-xl border-2 border-primary-200 focus:border-primary-500 
                             focus:ring-2 focus:ring-primary-200 transition-all duration-200 text-lg"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-lg font-medium text-primary-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400 w-6 h-6" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-14 w-full h-14 rounded-xl border-2 border-primary-200 focus:border-primary-500 
                             focus:ring-2 focus:ring-primary-200 transition-all duration-200 text-lg"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="phone" className="block text-lg font-medium text-primary-700 mb-2">
                  Téléphone <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400 w-6 h-6" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{9}"
                    placeholder="76 624 85 05"
                    className="pl-14 w-full h-14 rounded-xl border-2 border-primary-200 focus:border-primary-500 
                             focus:ring-2 focus:ring-primary-200 transition-all duration-200 text-lg"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-lg font-medium text-primary-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-primary-400 w-6 h-6" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="pl-14 w-full rounded-xl border-2 border-primary-200 focus:border-primary-500 
                             focus:ring-2 focus:ring-primary-200 transition-all duration-200 text-lg py-3"
                    placeholder="Votre message..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 bg-primary-600 text-white py-4 px-8 
                         rounded-xl text-lg font-semibold hover:bg-primary-700 transition-colors duration-300 
                         disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] 
                         active:scale-[0.98] transition-transform"
              >
                <Send className="w-6 h-6" />
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-100 text-green-700 p-4 rounded-xl text-lg">
                  Message envoyé avec succès !
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-100 text-red-700 p-4 rounded-xl text-lg">
                  Une erreur est survenue. Veuillez réessayer.
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <AnimatedCoordinatesTitle />
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="bg-primary-100 p-3 rounded-lg group-hover:bg-primary-200 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-800">Adresse</h4>
                    <p className="text-primary-600">Living place, Diamniadio</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="bg-primary-100 p-3 rounded-lg group-hover:bg-primary-200 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-800">Téléphone</h4>
                    <a 
                      href="tel:+221766248505" 
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      +221 76 624 85 05
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="bg-primary-100 p-3 rounded-lg group-hover:bg-primary-200 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-800">Email</h4>
                    <a 
                      href="mailto:info.sunuyartisan@pmn.sn" 
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      info.sunuyartisan@pmn.sn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <MapSection />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;