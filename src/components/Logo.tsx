// src/components/Logo.tsx
import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

export function Logo({ size = 'medium', showText = true }: LogoProps) {
  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-3xl',
    large: 'text-4xl'
  };

  const imageHeightClasses = {
    small: 'h-8',
    medium: 'h-12',
    large: 'h-16'
  };

  // فئات حجم الخط لكلمة "للنقليات" بناءً على حجم اللوجو الكلي
  const taglineSizeClasses = {
    small: 'text-xs',   // أصغر قليلاً من text-sm
    medium: 'text-base', // حجم أساسي (16px افتراضيًا)
    large: 'text-lg'     // أكبر قليلاً (18px افتراضيًا)
  };


  return (
    <div className={`${sizeClasses[size]} font-bold text-gradient flex items-center gap-3`}>
      <div className="relative">
        <img
          src="/images/logo.png"
          alt="شعار شركة فهد ضاوي الحربي للنقليات"
          className={`${imageHeightClasses[size]} w-auto object-contain animate-float`}
        />
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full opacity-20 blur-sm"></div>
      </div>

      {showText && (
        <div className="flex flex-col">
          {/* النص الرئيسي */}
          <span className="leading-tight">فهد ضاوي الحربي</span>
          {/* كلمة النقليات مع تعديل الحجم والفئات */}
          <span className={`${taglineSizeClasses[size]} text-amber-600 font-semibold leading-tight`}>للنقليات</span>
          {/* ملاحظات:
              - text-base أو text-lg أو text-xl لتكبير الحجم. اختر ما يناسبك.
              - leading-tight (أو leading-none/leading-snug) للتحكم في ارتفاع السطر والمحاذاة العمودية.
              - يمكنك تجربة إضافة 'pr-X' أو 'pl-X' للهامش الأفقي إذا كانت المحاذاة الأفقية تحتاج إلى تعديل.
          */}
        </div>
      )}
    </div>
  );
}