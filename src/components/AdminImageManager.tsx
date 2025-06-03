import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { ImageUpload } from "./ImageUpload";
import { toast } from "sonner";

export function AdminImageManager() {
  const [selectedCategory, setSelectedCategory] = useState<string>("hero");
  const siteImages = useQuery(api.siteImages.getAllImages) || [];
  const updateSiteImage = useMutation(api.siteImages.updateSiteImage);
  const deleteSiteImage = useMutation(api.siteImages.deleteSiteImage);

  const categories = [
    { id: "hero", name: "الصفحة الرئيسية", description: "صور الخلفية والبانر الرئيسي" },
    { id: "services", name: "الخدمات", description: "صور توضيحية للخدمات" },
    { id: "equipment", name: "المعدات", description: "صور المعدات والآليات" },
    { id: "company", name: "الشركة", description: "صور الشركة والفريق" },
    { id: "gallery", name: "معرض الصور", description: "مجموعة متنوعة من الصور" }
  ];

  const handleImageUpload = async (storageId: any, category: string, title: string) => {
    try {
      await updateSiteImage({
        category,
        title,
        storageId,
        isActive: true
      });
      toast.success("تم حفظ الصورة بنجاح!");
    } catch (error) {
      toast.error("حدث خطأ في حفظ الصورة");
    }
  };

  const handleDeleteImage = async (imageId: any) => {
    if (confirm("هل أنت متأكد من حذف هذه الصورة؟")) {
      try {
        await deleteSiteImage({ imageId });
        toast.success("تم حذف الصورة بنجاح!");
      } catch (error) {
        toast.error("حدث خطأ في حذف الصورة");
      }
    }
  };

  const categoryImages = siteImages.filter(img => img.category === selectedCategory);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">إدارة صور الموقع</h2>
      
      {/* اختيار الفئة */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">اختر فئة الصور:</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedCategory === category.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <h4 className="font-semibold text-gray-800">{category.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{category.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* رفع صورة جديدة */}
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium mb-4">إضافة صورة جديدة</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">عنوان الصورة</label>
            <input
              type="text"
              id="imageTitle"
              className="form-input"
              placeholder="أدخل عنوان الصورة"
            />
          </div>
          <ImageUpload
            label="اختر الصورة"
            onImageUploaded={(storageId) => {
              const titleInput = document.getElementById('imageTitle') as HTMLInputElement;
              const title = titleInput?.value || 'صورة جديدة';
              handleImageUpload(storageId, selectedCategory, title);
              if (titleInput) titleInput.value = '';
            }}
          />
        </div>
      </div>

      {/* عرض الصور الحالية */}
      <div>
        <h3 className="text-lg font-medium mb-4">
          الصور الحالية - {categories.find(c => c.id === selectedCategory)?.name}
        </h3>
        
        {categoryImages.length === 0 ? (
          <p className="text-gray-500 text-center py-8">لا توجد صور في هذه الفئة</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {categoryImages.map((image) => (
              <div key={image._id} className="bg-white border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-100">
                  {image.imageUrl && (
                    <img 
                      src={image.imageUrl} 
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{image.title}</h4>
                  <div className="flex justify-between items-center">
                    <span className={`px-2 py-1 rounded text-xs ${
                      image.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {image.isActive ? 'نشط' : 'غير نشط'}
                    </span>
                    <button
                      onClick={() => handleDeleteImage(image._id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
