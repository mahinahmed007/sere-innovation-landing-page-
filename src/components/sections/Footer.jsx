import { useTranslation } from "react-i18next";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* BRAND */}
          <div>
            <img
  src="/src/assets/images/logo.png"
  alt="Sere Innovations"
   className="h-30 w-auto object-contain scale-125 md:scale-150 "
/>
            <p className="text-sm text-gray-400">
              {t("footer.tagline")}
            </p>
          </div>

          {/* QUICK INFO */}
          <div>
            <h3 className="text-sm font-medium text-white mb-3">
              {t("footer.contact")}
            </h3>

            <div className="space-y-2 text-sm">

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-500" />
                <span>{t("footer.phone")}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-500" />
                <span>{t("footer.email")}</span>
              </div>

            </div>
          </div>

          {/* TRUST NOTE */}
          <div>
            <h3 className="text-sm font-medium text-white mb-3">
              About
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Designed to help farmers take control of their poultry operations with simple, practical, and reliable solutions.
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* COPYRIGHT */}
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} {t("footer.brand")} — All rights reserved
          </p>

          {/* SMALL NOTE */}
          <p className="text-xs text-gray-500">
            Built for real farm conditions
          </p>

        </div>

      </div>
    </footer>
  );
}