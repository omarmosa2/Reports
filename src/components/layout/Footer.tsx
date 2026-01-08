import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-(--color-bg-secondary) border-t border-(--color-border) mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-(--color-accent) to-(--dark-accent) rounded-lg flex items-center justify-center">
                <FileText
                  className="w-6 h-6 text-white"
                  style={{ color: "white", width: "24px", height: "24px" }}
                />
              </div>
              <span className="text-lg font-bold text-(--color-text-primary)">
                تقارير احترافية
              </span>
            </div>
            <p className="text-(--color-text-secondary) text-sm">
              منصة احترافية لعرض وإدارة التقارير بتصميم عصري وسهل الاستخدام
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-(--color-text-primary) mb-4">
              روابط سريعة
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-(--color-text-secondary) hover:text-(--color-accent) transition-colors"
              >
                الرئيسية
              </Link>
              <Link
                to="/reports"
                className="text-(--color-text-secondary) hover:text-(--color-accent) transition-colors"
              >
                التقارير
              </Link>
              <Link
                to="/statistics"
                className="text-(--color-text-secondary) hover:text-(--color-accent) transition-colors"
              >
                الإحصائيات
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-(--color-border) mt-8 pt-8 text-center">
          <p className="text-(--color-text-secondary) text-sm">
            © {currentYear} تقارير العمليات. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
