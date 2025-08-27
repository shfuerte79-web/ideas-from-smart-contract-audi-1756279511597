import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '```json
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
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}