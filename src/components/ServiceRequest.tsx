import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";

export function ServiceRequest() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    description: "",
    location: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitRequest = useMutation(api.services.submitServiceRequest);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.serviceType || !formData.location) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    setIsSubmitting(true);
    try {
      await submitRequest(formData);
      
      // إرسال رسالة واتساب تلقائية
      const whatsappNumber = "966558301397";
      const serviceTypeText = {
        "transport": "نقل البضائع الثقيلة",
        "crane": "تأجير كرين", 
        "lubed": "تأجير لوبد",
        "specialized": "نقل متخصص",
        "other": "أخرى"
      }[formData.serviceType] || formData.serviceType;
      
      const whatsappMessage = `طلب خدمة جديد:
الاسم: ${formData.name}
الهاتف: ${formData.phone}
${formData.email ? `الإيميل: ${formData.email}` : ''}
نوع الخدمة: ${serviceTypeText}
الموقع: ${formData.location}
${formData.description ? `التفاصيل: ${formData.description}` : ''}`;

      // فتح واتساب في نافذة جديدة
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      
      toast.success("تم إرسال طلبك بنجاح! سيتم توجيهك للواتساب لإرسال التفاصيل");
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        description: "",
        location: ""
      });
    } catch (error) {
      toast.error("حدث خطأ في إرسال الطلب");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="request" className="section-padding bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="text-6xl animate-pulse-custom">📋</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">طلب عرض سعر </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            املأ النموذج أدناه وسنتواصل معك في أقرب وقت
            <span className="block mt-2 font-semibold text-blue-800">لتقديم أفضل الخدمات</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-custom-lg p-12 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="form-label flex items-center">
                    <span className="mr-2 text-blue-800">👤</span>
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="form-label flex items-center">
                    <span className="mr-2 text-blue-800">📱</span>
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="05xxxxxxxx"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="form-label flex items-center">
                  <span className="mr-2 text-blue-800">📧</span>
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="example@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="form-label flex items-center">
                  <span className="mr-2 text-blue-800">⚙️</span>
                  نوع الخدمة المطلوبة *
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">اختر نوع الخدمة</option>
                  <option value="transport">🚛 نقل البضائع الثقيلة</option>
                  <option value="crane">🏗️ تأجير كرين</option>
                  <option value="lubed">🚚 تأجير لوبد</option>
                  <option value="specialized">⚙️ نقل متخصص</option>
                  <option value="other">📦 أخرى</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="form-label flex items-center">
                  <span className="mr-2 text-blue-800">📍</span>
                  الموقع *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="المدينة أو المنطقة"
                  className="form-input"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="form-label flex items-center">
                  <span className="mr-2 text-blue-800">📝</span>
                  تفاصيل الطلب
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="اكتب تفاصيل إضافية عن طلبك، مثل نوع البضائع، الوزن المتوقع، التاريخ المطلوب..."
                  className="form-input resize-none"
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary text-xl px-12 py-5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-3">⏳</span>
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <span className="mr-3">📤</span>
                      إرسال الطلب
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact info cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <div className="bg-white rounded-2xl shadow-custom p-6 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold text-gray-800 mb-2">استجابة سريعة</h4>
              <p className="text-gray-600 text-sm">نرد خلال ساعة واحدة</p>
            </div>
            <div className="bg-white rounded-2xl shadow-custom p-6 text-center">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="font-bold text-gray-800 mb-2">أسعار تنافسية</h4>
              <p className="text-gray-600 text-sm">أفضل الأسعار في السوق</p>
            </div>
            <div className="bg-white rounded-2xl shadow-custom p-6 text-center">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="font-bold text-gray-800 mb-2">ضمان الجودة</h4>
              <p className="text-gray-600 text-sm">خدمة مضمونة 100%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
