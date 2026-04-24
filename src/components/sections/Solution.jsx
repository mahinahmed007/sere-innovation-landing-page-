import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Solution() {
  const { t } = useTranslation();

  const steps = [
    "Place eggs in the incubator",
    "System maintains temperature & humidity",
    "Automatic turning ensures proper development",
    "Get healthy chicks on your farm"
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t("solution.title")}
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6 max-w-md">
            {t("solution.description")}
          </p>

          {/* Steps */}
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                <p className="text-gray-700 text-sm md:text-base">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE - VISUAL CARD */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-green-50 rounded-2xl p-6 shadow-md"
        >
          <h3 className="font-semibold text-lg mb-4 text-gray-800">
            Simple and reliable process
          </h3>

          <div className="space-y-4 text-sm text-gray-600">
            <div>✔ No manual monitoring needed</div>
            <div>✔ Works in real farm conditions</div>
            <div>✔ Designed for ease of use</div>
            <div>✔ Saves time and effort</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}