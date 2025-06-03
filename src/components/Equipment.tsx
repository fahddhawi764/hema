import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export function Equipment() {
  const equipment = useQuery(api.services.getEquipment) || [];

  const defaultEquipment = [
    {
      name: "كرين 50 طن",
      type: "crane",
      description: "كرين هيدروليكي بقدرة رفع 50 طن، مناسب للمشاريع الكبيرة والأعمال الثقيلة",
      imageUrl: "/api/placeholder/300/200",
      features: ["قدرة رفع 50 طن", "تشغيل هيدروليكي", "مشغل خبير"]
    },
    {
      name: "شاحنة نقل ثقيل",
      type: "truck",
      description: "شاحنة نقل ثقيل بحمولة 40 طن مع أحدث أنظمة الأمان",
      imageUrl: "/api/placeholder/300/200",
      features: ["حمولة 40 طن", "أنظمة أمان حديثة", "سائق مدرب"]
    },
    {
      name: "لوبد متخصص",
      type: "lubed",
      description: "معدة لوبد متخصصة للأعمال الثقيلة والنقل بكفاءة عالية",
      imageUrl: "/api/placeholder/300/200",
      features: ["كفاءة عالية", "استهلاك وقود اقتصادي", "صيانة دورية"]
    }
  ];

  const displayEquipment = equipment.length > 0 ? equipment : defaultEquipment;

  const getEquipmentIcon = (type: string) => {
    switch(type) {
      case 'crane': return '🏗️';
      case 'lubed': return '🚚';
      case 'truck': return '🚛';
      default: return '⚙️';
    }
  };

  const getEquipmentColor = (type: string) => {
    switch(type) {
      case 'crane': return 'from-blue-500 to-blue-600';
      case 'lubed': return 'from-amber-500 to-amber-600';
      case 'truck': return 'from-emerald-500 to-emerald-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const whatsappNumber = "966558301397";

  return (
    <section id="equipment" className="section-padding bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="text-6xl animate-float">🏗️</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">معداتنا</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            أسطول حديث من المعدات والآليات الثقيلة
            <span className="block mt-2 font-semibold text-blue-800">المتاحة للإيجار</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayEquipment.map((item, index) => (
            <div 
              key={index} 
              className="card-equipment group animate-fadeInUp"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${getEquipmentColor(item.type)} opacity-10`}></div>
                <span className="text-8xl group-hover:scale-110 transition-transform duration-500 relative z-10">
                  {getEquipmentIcon(item.type)}
                </span>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  متاح الآن
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-800 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                {'features' in item && item.features && (
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="text-green-500 mr-2 text-lg">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="text-center pt-4 border-t border-gray-100">
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`مرحباً، أود الاستفسار عن ${item.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group inline-flex items-center"
                  >
                    <span className="mr-2 group-hover:scale-110 transition-transform">💬</span>
                    استفسار عبر الواتساب
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
          <div className="text-center p-8 bg-white rounded-2xl shadow-custom">
            <div className="text-4xl mb-4">🛡️</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">ضمان شامل</h4>
            <p className="text-gray-600">جميع معداتنا مؤمنة بالكامل</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-custom">
            <div className="text-4xl mb-4">🔧</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">صيانة دورية</h4>
            <p className="text-gray-600">صيانة منتظمة لضمان الأداء الأمثل</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-custom">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">خدمة سريعة</h4>
            <p className="text-gray-600">توصيل المعدات في أسرع وقت</p>
          </div>
        </div>
      </div>
    </section>
  );
}
