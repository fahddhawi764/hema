import { Logo } from "./Logo";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-hero-bg-image bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      {/* طبقة التراكب Overlay */}
      {/* أضف هذا الـ div الجديد هنا */}
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* طبقة سوداء بشفافية 50% */}
      {/* يمكنك تغيير 'bg-black' إلى 'bg-blue-900' أو أي لون يناسب تصميمك
         ويمكنك تغيير 'opacity-50' إلى قيمة بين 10 (شفاف جدًا) و 90 (شبه معتم)
         حسب درجة التعتيم التي تريدها. */}


      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* يمكنك ترك هذه العناصر أو إزالتها حسب رغبتك.
            إذا تركتها، ستظهر فوق طبقة التراكب ولكن أسفل المحتوى الرئيسي. */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-custom"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-custom" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-custom" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fadeInUp">
          <div className="mb-8 flex justify-center">
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
            شركة فهد ضاوي الحربي
            <span className="block text-amber-300 text-gradient-white">للنقليات</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-blue-100 leading-relaxed">
            نحن متخصصون في نقل البضائع الثقيلة وتأجير المعدات والآليات الثقيلة
            <span className="block mt-2">في جميع أنحاء المملكة العربية السعودية</span>
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="#request" className="btn-accent group">
              <span className="mr-3 group-hover:scale-110 transition-transform">⚡</span>
              طلب عرض سعر الآن
            </a>
            <a href="#services" className="btn-secondary group">
              <span className="mr-3 group-hover:scale-110 transition-transform">🔍</span>
              تعرف على خدماتنا
            </a>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeInUp" style={{animationDelay: '0.5s'}}>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-amber-300 mb-2">+500</div>
            <div className="text-blue-100">مشروع مكتمل</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-amber-300 mb-2">+50</div>
            <div className="text-blue-100">معدة متاحة</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-amber-300 mb-2">24/7</div>
            <div className="text-blue-100">خدمة مستمرة</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}