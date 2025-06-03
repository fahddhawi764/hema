import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";

interface ImageUploadProps {
  onImageUploaded: (storageId: any) => void;
  currentImageUrl?: string;
  label: string;
}

export function ImageUpload({ onImageUploaded, currentImageUrl, label }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // التحقق من نوع الملف
    if (!file.type.startsWith('image/')) {
      toast.error("يرجى اختيار ملف صورة صحيح");
      return;
    }

    // التحقق من حجم الملف (5MB كحد أقصى)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("حجم الصورة يجب أن يكون أقل من 5 ميجابايت");
      return;
    }

    setIsUploading(true);
    try {
      // الحصول على رابط الرفع
      const postUrl = await generateUploadUrl();
      
      // رفع الملف
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });

      const json = await result.json();
      if (!result.ok) {
        throw new Error(`فشل في رفع الصورة: ${JSON.stringify(json)}`);
      }

      const { storageId } = json;
      onImageUploaded(storageId);
      toast.success("تم رفع الصورة بنجاح!");
      
    } catch (error) {
      console.error("خطأ في رفع الصورة:", error);
      toast.error("حدث خطأ في رفع الصورة");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <label className="form-label">{label}</label>
      
      {currentImageUrl && (
        <div className="relative w-full h-48 bg-gray-100 rounded-xl overflow-hidden">
          <img 
            src={currentImageUrl} 
            alt="معاينة الصورة"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <span className="text-3xl mb-2">📷</span>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">اضغط لرفع صورة</span>
            </p>
            <p className="text-xs text-gray-500">PNG, JPG أو JPEG (حد أقصى 5MB)</p>
          </div>
          <input 
            type="file" 
            className="hidden" 
            accept="image/*"
            onChange={handleFileUpload}
            disabled={isUploading}
          />
        </label>
      </div>
      
      {isUploading && (
        <div className="flex items-center justify-center space-x-2 space-x-reverse">
          <span className="animate-spin text-2xl">⏳</span>
          <span className="text-gray-600">جاري رفع الصورة...</span>
        </div>
      )}
    </div>
  );
}
