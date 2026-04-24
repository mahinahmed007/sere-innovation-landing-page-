import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Trust() {
  const { t } = useTranslation();

  const items = t("trust.items", { returnObjects: true });

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE - TRUST POINTS */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t("trust.title")}
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 mb-6 max-w-md">
            Designed with real farm challenges in mind — simple, reliable, and practical.
          </p>

          {/* List (NOT cards) */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                <p className="text-gray-700 text-sm md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE - TRUST HIGHLIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-md"
        >
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
            Built for real farm conditions
          </h3>

          <p className="text-gray-600 mb-4">
            This system is not designed for ideal lab environments — it is built for real farm use where conditions vary daily.
          </p>

          <p className="text-gray-600">
            Easy to operate, dependable, and made to support farmers in their everyday work.
          </p>
        </motion.div>

      </div>
    </section>
  );
}