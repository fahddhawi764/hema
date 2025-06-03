export function Contact() {
  const contactInfo = [
    {
      icon: "📞", // سنعدل هذا لاحقًا إذا أردت صورة
      title: "الهاتف",
      details: ["966 55 830 1397"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "📧", // سنعدل هذا لاحقًا إذا أردت صورة
      title: "البريد الإلكتروني",
      details: ["fahddhawi764@gmail.com"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: "📍", // سنعدل هذا لاحقًا إذا أردت صورة
      title: "العنوان",
      details: ["البتراء - القصيم", "المملكة العربية السعودية"],
      color: "from-amber-500 to-amber-600"
    }
  ];

  const whatsappNumber = "966558301397";
  const whatsappMessage = "مرحباً، أود الاستفسار عن خدماتكم";

  return (
    <section id="contact" className="section-padding gradient-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="text-6xl animate-pulse-custom">📞</span> {/* هذا الرمز التعبيري في العنوان الرئيسي، هل تريد استبداله؟ */}
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">تواصل معنا</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لخدمتك على مدار الساعة
            <span className="block mt-2 text-amber-300 font-semibold">في جميع أنحاء المملكة</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 text-center group hover:bg-white/20 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {/* هنا يمكن استبدال الرموز التعبيرية بصور، مؤقتًا نتركها كما هي */}
                    {info.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-gray-300 group-hover:text-white transition-colors text-lg"
                        // تطبيق direction: 'ltr' على الرقم فقط لضمان العرض الصحيح
                        // هذا الحل الأمثل للرقم.
                        style={info.title === "الهاتف" ? { direction: 'ltr' } : {}}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Button */}
        <div className="text-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25"
          >
            <span className="text-3xl mr-4">💬</span>
            تواصل عبر الواتساب
          </a>
        </div>

        {/* Working hours */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 text-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <div className="mb-8">
            <span className="text-5xl animate-float">🕐</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-8">ساعات العمل</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-xl font-bold text-amber-300 mb-2">السبت - الخميس</p>
              <p className="text-gray-300 text-lg">7:00 ص - 7:00 م</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-xl font-bold text-amber-300 mb-2">الجمعة</p>
              <p className="text-gray-300 text-lg">2:00 م - 7:00 م</p>
            </div>
          </div>

          <div className="mt-12">
            <div className="inline-flex items-center bg-green-500/20 text-green-300 px-6 py-3 rounded-full">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              <span className="font-semibold">متاحون الآن للخدمة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}