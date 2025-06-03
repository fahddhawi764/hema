export function Services() {
  const services = [
    {
      title: "نقل البضائع الثقيلة",
      description: "نقل آمن وسريع للبضائع الثقيلة والمعدات الصناعية بأحدث الشاحنات",
      icon: "/images/trucks-fleet.jpg",
      features: ["شاحنات حديثة", "سائقون مدربون", "تأمين شامل", "متابعة مستمرة"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "تأجير الكرينات",
      description: "كرينات بأحجام مختلفة لجميع أعمال الرفع والتحميل مع مشغلين خبراء",
      icon: "/images/crane-construction-site.jpeg",
      features: ["كرينات متنوعة", "مشغلون خبراء", "صيانة دورية", "أسعار تنافسية"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "تأجير اللوبد",
      description: "معدات لوبد متخصصة للأعمال الثقيلة والنقل بكفاءة عالية",
      icon: "/images/lowbed.jpg",
      features: ["معدات حديثة", "كفاءة عالية", "خدمة 24/7", "دعم فني"],
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "النقل المتخصص",
      description: "نقل المعدات الحساسة والآليات الثقيلة بأعلى معايير الأمان",
      icon: "/images/heavy-equipment-group.jpg",
      features: ["نقل آمن", "تغليف محترف", "تسليم سريع", "ضمان الجودة"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  // رقم الواتساب والرسالة الافتراضية
  const whatsappNumber = "966558301397"; // استخدم نفس الرقم من مكون Contact
  // يمكنك تخصيص الرسالة لكل خدمة إذا أردت
  const defaultWhatsappMessage = "مرحباً، أود الاستفسار عن خدماتكم العامة.";


  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="text-6xl animate-pulse-custom">⚡</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">خدماتنا</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من خدمات النقل والمعدات الثقيلة
            <span className="block mt-2 font-semibold text-blue-800">بأعلى معايير الجودة والأمان</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-service group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="icon-large text-center group-hover:animate-pulse-custom">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-40 h-40 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-blue-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors">
                        <span className="text-green-500 mr-3 text-xl">✓</span>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 text-center">
                    {/* هنا يتم إضافة رابط الواتساب إلى الزر */}
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`مرحباً، أود الاستفسار عن خدمة: ${service.title}. ${service.description}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      اطلب الخدمة
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <div className="bg-white rounded-3xl shadow-custom-lg p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">هل تحتاج خدمة مخصصة؟</h3>
            <p className="text-xl text-gray-600 mb-8">تواصل معنا لنقدم لك حلول مخصصة تناسب احتياجاتك</p>
            <a href="#contact" className="btn-accent">
              <span className="mr-3">📞</span>
              تواصل معنا الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}