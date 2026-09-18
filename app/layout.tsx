import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"الأمير تراك | صيانة أنظمة الهيدروليك والمعدات الثقيلة",description:"الأمير تراك لصيانة أنظمة الهيدروليك والمعدات الثقيلة — تشخيص وإصلاح المضخات والبلوف والبساتم والسلندرات والمعدات الثقيلة."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><body>{children}</body></html>}