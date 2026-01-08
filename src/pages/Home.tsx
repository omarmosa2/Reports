import { Link } from "react-router-dom";
import { FileText, TrendingUp, Users } from "lucide-react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { statistics } from "../data/mockReports";

export function Home() {
  const features = [
    {
      icon: FileText,
      title: "تقارير احترافية",
      titleEn: "Professional Reports",
      description: "تقارير مفصلة ومنظمة بتصميم عصري",
      descriptionEn: "Detailed and organized reports with modern design",
      color: "text-blue-500",
    },
    {
      icon: TrendingUp,
      title: "تحليلات متقدمة",
      titleEn: "Advanced Analytics",
      description: "رؤى وتحليلات عميقة لاتخاذ قرارات مستنيرة",
      descriptionEn: "Deep insights and analytics for informed decisions",
      color: "text-green-500",
    },
    {
      icon: Users,
      title: "سهولة الاستخدام",
      titleEn: "Easy to Use",
      description: "واجهة بسيطة وسهلة للوصول للمعلومات",
      descriptionEn: "Simple and easy interface to access information",
      color: "text-purple-500",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-right">
              <h1 className="text-4xl md:text-6xl font-black text-primary mb-6 leading-tight">
                تقارير شهرية
                <span className="block text-accent">بتصميم احترافي</span>
              </h1>
              <p className="text-lg md:text-xl text-secondary mb-8 leading-relaxed">
                منصة متكاملة لعرض وإدارة تقرير قسم العمليات بأسلوب احترافي مع
                دعم الثيمات المتعددة وتصميم يعمل على جميع الشاشات
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link to="/reports">
                  <Button size="lg" className="gap-2">
                    استعرض التقارير
                  </Button>
                </Link>
                <Link to="/statistics">
                  <Button variant="outline" size="lg">
                    الإحصائيات
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative flex justify-center md:justify-end">
              <div className="mr-0 md:mr-6 w-full max-w-xs md:max-w-md">
                <img
                  src="assets/Syrian_logo_icon_gold.png"
                  alt="شعار"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-10 flex items-center justify-center">
                <FileText
                  className="w-8 h-8 text-accent"
                  style={{
                    width: "32px",
                    height: "32px",
                    color: "var(--color-accent)",
                  }}
                />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">
                {statistics.totalReports}
              </h3>
              <p className="text-secondary">إجمالي التقارير</p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                <TrendingUp
                  className="w-8 h-8 text-green-500"
                  style={{ width: "32px", height: "32px", color: "#22c55e" }}
                />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">
                {statistics.categories}
              </h3>
              <p className="text-secondary">أنواع التقارير</p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Users
                  className="w-8 h-8 text-purple-500"
                  style={{ width: "32px", height: "32px", color: "#a855f7" }}
                />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">
                100%
              </h3>
              <p className="text-secondary">التقييم</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">
              المميزات
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ميزات الموقع
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              يتم عرض التقارير بطريقة سهلة واحترافية ومحمية
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent-10 flex items-center justify-center`}>
                    <Icon
                      className={`w-8 h-8 ${feature.color}`}
                      style={{ width: "32px", height: "32px" }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-secondary">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            ابدأ باستعراض التقارير الآن
          </h2>
          <p className="text-lg text-secondary mb-8">
            استكشف مجموعة واسعة من التقارير الاحترافية المنظمة والجاهزة
            للاستخدام
          </p>
          <Link to="/reports">
            <Button size="lg" className="gap-2">
              استعراض جميع التقارير
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
