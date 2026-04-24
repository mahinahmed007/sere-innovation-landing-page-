import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { i18n, t } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    return (
        <nav className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur shadow-xl">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <a href="/">
                    <img src={logo} alt="logo"
                        className="h-30 w-auto object-contain scale-125 md:scale-150 origin-left"
                    />
                </a>

                {/* Desktop Right Side */}
                <div className="hidden md:flex items-center gap-4">

                    <select
                        onChange={(e) => changeLanguage(e.target.value)}
                        defaultValue={i18n.language}
                        className="border px-2 py-1 rounded-md text-sm hover:border-green-500"
                    >
                        <option value="en">EN</option>
                        <option value="hi">हिंदी</option>
                        <option value="ta">தமிழ்</option>
                    </select>

                    <button className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded-md text-sm">
                        {t("navbar.demo")}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden text-gray-800"
                    onClick={() => setMenuOpen(!menuOpen)}
                    animate={{ rotate: menuOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </motion.button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col items-center gap-4"
                    >

                        {/* Language */}
                        <select
                            onChange={(e) => changeLanguage(e.target.value)}
                            defaultValue={i18n.language}
                            className="w-full border px-3 py-2 rounded-md text-sm text-center focus:outline-none"
                        >
                            <option value="en">EN</option>
                            <option value="hi">हिंदी</option>
                            <option value="ta">தமிழ்</option>
                        </select>

                        {/* CTA */}
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="w-full bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded-md text-sm"
                        >
                            {t("navbar.demo")}
                        </button>

                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}