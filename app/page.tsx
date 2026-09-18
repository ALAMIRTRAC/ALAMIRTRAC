const services=[
  ["تشخيص دقيق للأعطال","فحص منهجي لتحديد سبب العطل قبل بدء الإصلاح."],
  ["صيانة وإصلاح الأنظمة الهيدروليكية","فحص الدوائر الهيدروليكية ومعالجة الأعطال حسب حالة المعدة."],
  ["إصلاح المضخات الهيدروليكية","فحص وإصلاح المضخات ومكوناتها بما يناسب طبيعة التشغيل."],
  ["صيانة البلوف والصمامات","فحص البلوف والصمامات ومعالجة مشاكل الضغط والتدفق."],
  ["تجديد واستبدال البساتم والسلندرات","خدمات فحص وتجديد واستبدال مكونات الأسطوانات الهيدروليكية."],
  ["صيانة المعدات الثقيلة","دعم فني وصيانة للمعدات الثقيلة والماكينات الصناعية."]
];

const equipment=["الحفارات","اللوادر","الرافعات الشوكية","الشاحنات ومعدات النقل","الماكينات الصناعية","وغيرها من المعدات الثقيلة"];

const faqs=[
  ["ما المناطق التي تخدمها الأمير تراك؟","نخدم القاهرة والجيزة و6 أكتوبر والعاشر من رمضان والمناطق الصناعية بكافة المحافظات."],
  ["هل يمكن التواصل لطلب فحص أو تشخيص عطل؟","نعم، يمكنك الاتصال مباشرة على 01043676451 أو التواصل عبر واتساب لعرض حالة المعدة وتحديد الخطوة المناسبة."],
  ["ما نوع الخدمات التي تقدمها الأمير تراك؟","تشمل الخدمات تشخيص الأعطال وصيانة وإصلاح الأنظمة الهيدروليكية والمضخات والبلوف والصمامات والبساتم والسلندرات والمعدات الثقيلة."],
  ["هل يتم تحديد الإصلاح قبل فحص المعدة؟","التشخيص الفني أولاً هو الأساس؛ وتحديد الإجراء المناسب يعتمد على حالة المعدة ونتائج الفحص."]
];

export default function Home(){
  const structuredData={"@context":"https://schema.org","@type":"LocalBusiness","name":"الأمير تراك لصيانة أنظمة الهيدروليك والمعدات الثقيلة","url":"https://www.alamirtrac.com","telephone":"+201043676451","areaServed":["القاهرة","الجيزة","6 أكتوبر","العاشر من رمضان","مصر"],"description":"خدمات تشخيص وصيانة وإصلاح الأنظمة الهيدروليكية والمعدات الثقيلة والماكينات الصناعية."};
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
    <header><div className="brand"><strong>الأمير تراك</strong><span>لصيانة أنظمة الهيدروليك والمعدات الثقيلة</span></div><nav><a href="#services">الخدمات</a><a href="#equipment">المعدات</a><a href="#about">عن الشركة</a><a href="#faq">الأسئلة الشائعة</a><a href="#contact">تواصل معنا</a></nav></header>
    <section className="hero"><div><p className="eyebrow">خبرة · دقة · اعتمادية</p><h1>الأمير تراك</h1><h2>لصيانة أنظمة الهيدروليك والمعدات الثقيلة</h2><p>حلول سريعة لأداء أقوى واستمرار عملك.</p><div className="actions"><a href="tel:01043676451">اتصل الآن</a><a href="https://wa.me/201043676451">واتساب</a></div></div><div className="hero-card"><span>معداتك تعمل</span><strong>نحن نهتم</strong><small>خدمة فنية للمعدات الثقيلة والماكينات الصناعية</small></div></section>
    <section className="features">{["تشخيص دقيق","صيانة هيدروليك","مضخات وبلف وصمامات","خدمة للمصانع والشركات","سرعة في التنفيذ"].map(x=><div key={x}>⚙<strong>{x}</strong></div>)}</section>
    <section id="services" className="section"><p className="eyebrow">خدماتنا</p><h2>حلول متخصصة للمعدات والأنظمة الهيدروليكية</h2><div className="grid">{services.map(([s,d],i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{d}</p></article>)}</div></section>
    <section id="equipment" className="section equipment-section"><p className="eyebrow">نخدم معداتك</p><h2>مجموعة واسعة من المعدات الثقيلة والماكينات</h2><div className="equipment-grid">{equipment.map(x=><div key={x}>✓ <strong>{x}</strong></div>)}</div></section>
    <section id="about" className="about"><div><p className="eyebrow">الأمير تراك</p><h2>شريكك لعمل مستمر بلا توقف</h2><p>نخدم الشركات والمصانع وأصحاب المعدات الثقيلة من خلال خدمات الصيانة والتشخيص والإصلاح للأنظمة الهيدروليكية والمعدات.</p></div><ul><li>تقليل فترات التوقف عن العمل</li><li>زيادة كفاءة المعدات</li><li>قطع غيار أصلية وعالية الجودة</li><li>فريق فني متخصص وذو خبرة</li></ul></section>
    <section id="faq" className="section"><p className="eyebrow">الأسئلة الشائعة</p><h2>إجابات سريعة قبل التواصل</h2><div className="faq-grid">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <section id="contact" className="contact"><p className="eyebrow">تواصل معنا الآن</p><h2>01043676451</h2><p>القاهرة · الجيزة · 6 أكتوبر · العاشر من رمضان · المناطق الصناعية بكافة المحافظات</p><div className="actions"><a href="tel:01043676451">اتصال مباشر</a><a href="https://wa.me/201043676451">تواصل عبر واتساب</a></div></section>
    <a className="floating-whatsapp" href="https://wa.me/201043676451" aria-label="التواصل مع الأمير تراك عبر واتساب">واتساب</a>
    <footer>الأمير تراك © {new Date().getFullYear()} — لصيانة أنظمة الهيدروليك والمعدات الثقيلة</footer>
  </main>
}