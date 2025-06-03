import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "966558301397";

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="md:col-span-2 animate-fadeInLeft">
            <div className="mb-6">
              <Logo size="large" showText={true} />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              شركة رائدة في مجال النقل الثقيل وتأجير المعدات في المملكة العربية السعودية. 
              نقدم خدمات متميزة بأعلى معايير الجودة والأمان منذ أكثر من 15 عاماً.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a 
                href="tel:+966558301397"
                className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors cursor-pointer transform hover:scale-110"
              >
                <span className="text-xl">📱</span>
              </a>
              <a 
                href="mailto:fahddhawi764@gmail.com"
                className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors cursor-pointer transform hover:scale-110"
              >
                <span className="text-xl">📧</span>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors cursor-pointer transform hover:scale-110"
              >
                <span className="text-xl">💬</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <h4 className="text-xl font-bold mb-6 text-amber-300 flex items-center">
              <span className="mr-2">⚙️</span>
              خدماتنا
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center">
                <span className="mr-2">🚛</span>
                نقل البضائع الثقيلة
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center">
                <span className="mr-2">🏗️</span>
                تأجير الكرينات
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center">
                <span className="mr-2">🚚</span>
                تأجير اللوبد
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center">
                <span className="mr-2">⚙️</span>
                النقل المتخصص
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <h4 className="text-xl font-bold mb-6 text-amber-300 flex items-center">
              <span className="mr-2">📞</span>
              معلومات الاتصال
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                <a href="tel:+966558301397" className="hover:text-white transition-colors">
                  +966 55 830 1397
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:fahddhawi764@gmail.com" className="hover:text-white transition-colors">
                  fahddhawi764@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                <span>البتراء - القصيم</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">💬</span>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  واتساب
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0 animate-fadeInLeft">
              <p className="flex items-center">
                <span className="mr-2">©</span>
                {currentYear} شركة فهد ضاوي الحربي للنقليات. جميع الحقوق محفوظة.
              </p>
            </div>
            <div className="flex items-center space-x-6 space-x-reverse text-gray-400 animate-fadeInRight">
              <span className="hover:text-white transition-colors cursor-pointer">سياسة الخصوصية</span>
              <span className="hover:text-white transition-colors cursor-pointer">الشروط والأحكام</span>
              <div className="flex items-center">
                <span className="mr-2">🇸🇦</span>
                <span>صنع بفخر في السعودية</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
