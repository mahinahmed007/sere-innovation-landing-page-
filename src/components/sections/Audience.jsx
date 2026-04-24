import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Audience() {
  const { t } = useTranslation();

  const audience = t("audience.items", { returnObjects: true });

  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {t("audience.title")}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Designed for people who want simple and practical poultry solutions
        </p>

        {/* Pills instead of cards */}
        <div className="flex flex-wrap justify-center gap-4">
          {audience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="px-5 py-3 bg-green-50 text-green-700 rounded-full text-sm md:text-base font-medium shadow-sm hover:shadow-md transition"
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* Optional reassurance line */}
        <p className="text-sm text-gray-500 mt-10">
          No technical experience required — anyone can start easily
        </p>

      </div>
    </section>
  );
}