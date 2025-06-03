import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { AdminImageManager } from "./AdminImageManager";
import { useState } from "react";

export function AdminPanel() {
  const serviceRequests = useQuery(api.services.getServiceRequests) || [];
  const [activeTab, setActiveTab] = useState<"requests" | "images">("requests");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">لوحة الإدارة</h1>
      
      {/* التبويبات */}
      <div className="flex space-x-4 space-x-reverse mb-8">
        <button
          onClick={() => setActiveTab("requests")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === "requests"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          طلبات الخدمة
        </button>
        <button
          onClick={() => setActiveTab("images")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === "images"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          إدارة الصور
        </button>
      </div>

      {/* المحتوى */}
      {activeTab === "requests" && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">طلبات الخدمة</h2>
          
          {serviceRequests.length === 0 ? (
            <p className="text-gray-500">لا توجد طلبات حالياً</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-right">الاسم</th>
                    <th className="px-4 py-2 text-right">الهاتف</th>
                    <th className="px-4 py-2 text-right">نوع الخدمة</th>
                    <th className="px-4 py-2 text-right">الموقع</th>
                    <th className="px-4 py-2 text-right">الحالة</th>
                    <th className="px-4 py-2 text-right">التاريخ</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceRequests.map((request) => (
                    <tr key={request._id} className="border-b">
                      <td className="px-4 py-2">{request.name}</td>
                      <td className="px-4 py-2">{request.phone}</td>
                      <td className="px-4 py-2">{request.serviceType}</td>
                      <td className="px-4 py-2">{request.location}</td>
                      <td className="px-4 py-2">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                          {request.status === 'pending' ? 'قيد المراجعة' : request.status}
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        {new Date(request._creationTime).toLocaleDateString('ar-SA')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {activeTab === "images" && <AdminImageManager />}
    </div>
  );
}
