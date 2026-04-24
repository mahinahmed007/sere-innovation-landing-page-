import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Shield, Wallet } from "lucide-react";

export default function Benefits() {
  const { t } = useTranslation();

  const benefits = t("benefits.items", { returnObjects: true });

  const icons = [
    <CheckCircle className="text-green-600 w-6 h-6" />,
    <Shield className="text-green-600 w-6 h-6" />,
    <Wallet className="text-green-600 w-6 h-6" />,
    <TrendingUp className="text-green-600 w-6 h-6" />
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
          {t("benefits.title")}
        </h2>

        {/* Subtitle (conversion psychology) */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Built to improve your farm operations and increase your income potential
        </p>

        {/* 🔥 MAIN HIGHLIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-green-600 text-white rounded-2xl p-6 md:p-8 mb-10 shadow-lg"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Take full control of your hatching process
          </h3>
          <p className="text-green-100 max-w-2xl">
            No more dependence on external hatcheries. Manage everything directly on your farm with confidence.
          </p>
        </motion.div>

        {/* GRID BENEFITS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-gray-50 rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 group-hover:bg-green-200 transition">
                {icons[index % icons.length]}
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}