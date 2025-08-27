export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: Smart Contract Auditor AI
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
[
  {
    \"title\": \"AI-Powered Vulnerability Scanner\",
    \"description\": \"أداة تعتمد على الذكاء الاصطناعي لتحليل العقود الذكية واكتشاف الثغرات الأمنية المحتملة.\",
    \"mvp_plan\": \"استخدام نموذج تعلم آلي مدرب مسبقًا لتحليل 10 عقود ذكية شائعة، وتقديم تقرير بسيط عن الثغرات المكتشفة خلال 72 ساعة.\"
  },
  {
    \"title\": \"Smart Contract Best Practices Advisor\",
    \"description\": \"منصة تقدم نصائح حول أفضل الممارسات لتطوير العقود الذكية بناءً على تحليل الذكاء الاصطناعي.\",
    \"mvp_plan\": \"إنشاء واجهة مستخدم بسيطة حيث يمكن للمستخدمين إدخال كود العقد الذكي، والحصول على نصائح حول تحسين الأمان خلال 72 ساعة.\"
  },
  {
    \"title\": \"Real-Time Audit Alerts\",
    \"description\": \"خدمة تنبه المطورين في الوقت الحقيقي عند اكتشاف أي ثغرات في العقود الذكية التي تم نشرها.\",
    \"mvp_plan\": \"تطوير نظام تنبيهات بسيط يعتمد على تحليل العقود الذكية التي يتم نشرها على شبكة اختبار، وإرسال إشعارات عبر البريد الإلكتروني عند اكتشاف أي مشكلة خلال 72 ساعة.\"
  }
]
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}