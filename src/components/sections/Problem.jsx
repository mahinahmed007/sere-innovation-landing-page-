import { useTranslation } from "react-i18next";
import { AlertCircle, DollarSign, Clock, Sliders } from "lucide-react";
import { motion } from "framer-motion";

export default function Problem() {
  const { t } = useTranslation();

  const problems = t("problem.items", { returnObjects: true });

  const icons = [
    <AlertCircle className="w-6 h-6 text-red-500" />,
    <DollarSign className="w-6 h-6 text-red-500" />,
    <Clock className="w-6 h-6 text-red-500" />,
    <Sliders className="w-6 h-6 text-red-500" />
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
          {t("problem.title")}
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
  Many farmers face these common challenges in poultry farming
</p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              
              {/* Icon Container */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 mb-4 group-hover:bg-red-100 transition">
                {icons[index]}
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