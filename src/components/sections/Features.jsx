import { useTranslation } from "react-i18next";
import {
  Thermometer,
  Droplets,
  RefreshCw,
  Smile,
  IndianRupee,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const { t } = useTranslation();

  const features = t("features.items", { returnObjects: true });

  const icons = [
    <Thermometer className="w-6 h-6 text-green-600" />,
    <Droplets className="w-6 h-6 text-green-600" />,
    <RefreshCw className="w-6 h-6 text-green-600" />,
    <Smile className="w-6 h-6 text-green-600" />,
    <IndianRupee className="w-6 h-6 text-green-600" />,
    <Zap className="w-6 h-6 text-green-600" /> // NEW
  ];

  

  const allFeatures = [...features];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
          {t("features.title")}
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Designed to make poultry farming easier, more reliable, and efficient
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allFeatures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-50 mb-4 group-hover:bg-green-100 transition">
                {icons[index]}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}