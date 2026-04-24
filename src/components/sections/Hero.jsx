import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
    const { t } = useTranslation();

    const slides = [
        "/src/assets/images/hero1.jpg",
        "/src/assets/images/hero2.webp",
        "/src/assets/images/hero3.webp",
    ];

    return (
        <section className="w-full h-[85vh] md:h-[80vh] relative">

            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 4500 }}
                loop={true}
                className="h-full"
            >
                {slides.map((img, index) => (
                    <SwiperSlide key={index}>

                        {/* Background */}
                        <motion.div
                            key={index}
                            initial={{ scale: 1.05 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 8, ease: "linear" }}
                            className="w-full h-full bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${img})` }}
                        >

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 text-white max-w-3xl mx-auto">

                                {/* Tagline */}
                                <p className="text-sm md:text-lg mb-3 opacity-90">
                                    Designed for real farmers
                                </p>

                                {/* Heading */}
                                <h1 className="text-5xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight px-2">
                                    {t("hero.title")}
                                </h1>

                                {/* Subtitle */}
                                <p className="max-w-md md:max-w-xl text-sm md:text-lg px-2 mb-6 opacity-90">
                                    {t("hero.subtitle")}
                                </p>

                                {/* CTA */}
                                <button className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-lg text-white font-medium shadow-md px-6 py-3 md:px-6 md:py-3 py-3 text-base rounded-lg w-auto max-w-[220px]">
                                    {t("hero.cta")}
                                </button>
                                {/* 🔹 HERO STATS */}
                                <div className="flex flex-col sm:flex-row gap-3 mt-8 items-center">
                                    <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg text-sm w-full sm:w-auto text-center">
                                        ₹10,000 approx
                                    </div>
                                    <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg text-sm w-full sm:w-auto text-center">
                                        Easy to use
                                    </div>
                                    <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg text-sm w-full sm:w-auto text-center">
                                        No technical skills
                                    </div>
                                </div> 
                                 </div>
                                {/* 🔹 FLOATING CARD (OUTSIDE) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="absolute bottom-24 left-1/2 -translate-x-1/2 md:left-20 md:translate-x-0 bg-white text-gray-800 p-4 md:p-5 rounded-xl shadow-lg max-w-xs md:max-w-sm w-[90%] md:w-auto"
                                >
                                    <p className="text-sm font-medium">
                                        Hatch eggs directly on your farm without depending on hatcheries.
                                    </p>
                                </motion.div>


                           
                        </motion.div>

                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}