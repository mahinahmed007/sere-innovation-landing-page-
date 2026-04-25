import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-gradient-to-r from-green-700 to-green-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug"
        >
          Start hatching on your own farm today
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-green-100 max-w-2xl mx-auto mb-8 text-sm sm:text-base md:text-lg"
        >
          Take full control of your poultry operations with a simple and reliable solution.
        </motion.p>

        {/* CTA BUTTON */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
        >
         Talk to Our Team
        </motion.button>

        {/* MICRO TRUST LINE */}
        <p className="text-sm text-green-100 mt-6">
          Simple setup • No technical skills needed • Works in real farm conditions
        </p>

      </div>
    </section>
  );
}