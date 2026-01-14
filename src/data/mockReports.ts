export interface Report {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  category: "قسم الدعم الفني" | "قسم البلاغات" | "قسم الدرون" | "البرقيات";
  categoryEn: "technical_support" | "reports" | "drones" | "telegrams";
  date: string;
  summary: string;
  summaryEn: string;
  sections: {
    title: string;
    titleEn: string;
    content: string;
    contentEn: string;
  }[];
}

export const mockReports: Report[] = [
  {
    id: "1",
    title: "تقرير قسم الدعم الفني - كانون الثاني 2026",
    titleEn: "",
    description: "تقرير شامل عن الأعمال المنجزة خلال شهر كانون الثاني",
    descriptionEn: "",
    category: "قسم الدعم الفني",
    categoryEn: "technical_support",
    date: "2026-01-10",
    summary:
      "يوضح هذا التقرير جميع الأعمال والمهام الدورية والطارئة التي تمت خلال الشهر.",
    summaryEn:
      "This report outlines all routine and emergency maintenance, technical problem resolution, and system updates completed during the month.",
    sections: [
      {
        title: "طباعة الخرائط",
        titleEn: "Completed Maintenance",
        content: `طباعة أكثر من 15 خريطة للمديريات
        طباعة 245 خريطة للشيخ مقصود والأشرفية لوزارة الدفاع
        طباعة خريطة لمناطق استهداف الطيران المسير لمدينة حلب`,
        contentEn:
          "156 maintenance requests were completed during the month, including 128 routine and 28 emergency maintenance. All requests were resolved with a 98% success rate, with an average response time of 2.5 hours for emergency requests.",
      },
      {
        title: "الطبقات",
        titleEn: "Updates and Improvements",
        content: `تم اضافة جميع طبقات الشيخ مقصود والأشرفية إلى الشاشة التفاعلية في غرفة العمليات
        تم تجميع كامل طبقات الشيخ مقصود والأشرفية في مجلد واحد
        تجهيز طبقة مناطق السيطرة على حي الشيخ مقصود 
        البدء بتجهيز طبقة تشمل النقاط الطبية للمديريات
        تجهيز طبقة عن مناطق استهداف الطيران المسير لمدينة حلب
        تجهيز طبقة للدوريات الجديدة التي ستنتشر في حيي الشيخ مقصود والأشرفية

        `,
        contentEn:
          "12 security updates were applied to main systems, and core software was updated for 45 devices. Network performance was also improved by 35% through communication equipment upgrades.",
      },
      {
        title: "التدريبات",
        titleEn: "Future Plan",
        content: `تقديم تدريب على برنامج Alpine Quist للمتدربين القادمين من المديريات في حلب وريفها
         تقديم تدريب تصميم جرافيكي و أكسل و QGIS للأخوة ضمن النوبات
         تقديم تدريب QGIS للمتدربين القادمين من المديريات في حلب وريفها
         تقديم تدريب Excel للمتدربين القادمين من المديريات في حلب وريفها
         تقديم تدريب على برنامج QGIS للفريق المناوب قدمه الأخ أبو ربيع 
         تقديم تدريب على برامج التصميم للفريق المناوب قدمه الأخ أبو زيد 
         تقديم تدريب على برنامج Excel للفريق المناوب قدمه الأخ أبو ياسر
         تقديم تدريب على برنامج Excel للفريق المناوب قدمه الأخ أبو جندل

 `,
        contentEn:
          "Next month will focus on implementing a new proactive monitoring system for early problem detection and training the team on the latest technical support techniques.",
      },
      {
        title: "الدعم الفني",
        titleEn: "Recurring tasks",
        content: `تقدير الدعم الفني لكامل الأقسام 
        المناوبة في غرفة العلميات بشكل مستمر
        كتابة تقرير سري لقسم التنصت مع كافة المعلومات الموجهة
        إنشاء ملف Excel لقسم البلاغات يتضمن معلومات أقسام الشرطةوالدراسات والأمن في مدينة حلب
        `,
        contentEn:
          "Next month will focus on implementing a new proactive monitoring system for early problem detection and training the team on the latest technical support techniques.",
      },
      {
        title: "الزيارات",
        titleEn: "Recurring tasks",
        content: `زيارة السيد وزير الداخلية ومعاونيه ومحافظ حلب أثناء تقديم تدريب الأكسل وتم الإثناء على العمل بتاريخ 03/01/2026
      	زيارة العميد محمد عبد الغني (أبو حذيفة) مع ضيوف الساعة 11:00 مساءً اثناء تأدية المهام 03/01/2026
        زيارة العميد محمد عبدالغني الساعة 03:00 مساءً بتاريخ 06/01/2026
        زيارة العميد محمد عبدالغني الساعة 11:00 صباحاً بتاريخ 10/01/2026
        زيارة العميد محمد عبدالغني الساعة 03:00 مساءً بتاريخ 10/01/2026
        زيارة العميد محمد عبدالغني ورئيس فرع العمليات أبو مصطفى الساعة 09:00 مساءً بتاريخ 10/01/2026

        `,
        contentEn:
          "Next month will focus on implementing a new proactive monitoring system for early problem detection and training the team on the latest technical support techniques.",
      },
      {
        title: "التحديات",
        titleEn: "Challenges",
        content: `صعوبة استخدام بعض الأجهزة بسبب فيروس قد أصابها وبحاجة لقدوم قسم المعلومات من اجل الصيانة 
        نقص اللوجستيات اللازمة للعمل
        تعرض المبنى للقصف من الطيران المسير واستشهاد أخ واصابة عدد من الأخوة
        إلغاء مكان النوم بحاجة ماسة لإيجاد مكان بديل
        `,
        contentEn:
          "Next month will focus on implementing a new proactive monitoring system for early problem detection and training the team on the latest technical support techniques.",
      },
      {
        title: "العمل الميداني",
        titleEn: "fild work",
        content: ` جولات ميدانية لحي الشيخ مقصود وجمع بيانات مكانية ووصفية عن الأنفاق الموجودة
        `,
        contentEn:
          "Next month will focus on implementing a new proactive monitoring system for early problem detection and training the team on the latest technical support techniques.",
      },
    ],
  },
  {
    id: "2",
    title: "تقرير البلاغات الواردة - الأسبوع الأول من يناير",
    titleEn: "Incoming Reports - First Week of January",
    description:
      "ملخص البلاغات والشكاوى الواردة مع حالة المعالجة والإجراءات المتخذة",
    descriptionEn:
      "Summary of incoming reports and complaints with processing status and actions taken",
    category: "قسم البلاغات",
    categoryEn: "reports",
    date: "2025-12-15",
    summary:
      "يتضمن التقرير تحليل شامل للبلاغات المستلمة، تصنيفها حسب الأولوية، وحالة المعالجة لكل بلاغ.",
    summaryEn:
      "The report includes comprehensive analysis of received reports, classification by priority, and processing status for each report.",
    sections: [
      {
        title: "إحصائيات البلاغات",
        titleEn: "Report Statistics",
        content:
          "تم استقبال 89 بلاغ خلال الأسبوع، منها 23 عالية الأولوية، 45 متوسطة الأولوية، و21 منخفضة الأولوية. تم حل 67 بلاغ بنجاح، و15 قيد المعالجة، و7 تم تحويلها للجهات المختصة.",
        contentEn:
          "89 reports were received during the week, including 23 high priority, 45 medium priority, and 21 low priority. 67 reports were successfully resolved, 15 are being processed, and 7 were transferred to competent authorities.",
      },
      {
        title: "التصنيف حسب النوع",
        titleEn: "Classification by Type",
        content:
          "البلاغات الفنية: 34 بلاغ، الشكاوى الإدارية: 28 بلاغ، طلبات التحسين: 18 بلاغ، استفسارات عامة: 9 بلاغات. تم التعامل مع جميع البلاغات العاجلة خلال 24 ساعة من الاستلام.",
        contentEn:
          "Technical reports: 34, Administrative complaints: 28, Improvement requests: 18, General inquiries: 9. All urgent reports were handled within 24 hours of receipt.",
      },
    ],
  },
  {
    id: "3",
    title: "تقرير عمليات الدرون - ديسمبر 2025",
    titleEn: "Drone Operations Report - December 2025",
    description:
      "تقرير مفصل عن جميع رحلات الدرون والمهام المنفذة والبيانات المجمعة",
    descriptionEn:
      "Detailed report on all drone flights, executed missions, and collected data",
    category: "قسم الدرون",
    categoryEn: "drones",
    date: "2025-12-01",
    summary:
      "يشمل التقرير كافة رحلات الطيران، المناطق المغطاة، البيانات المجمعة، والحوادث إن وجدت خلال الفترة المحددة.",
    summaryEn:
      "The report includes all flights, covered areas, collected data, and incidents if any during the specified period.",
    sections: [
      {
        title: "ملخص الرحلات",
        titleEn: "Flight Summary",
        content:
          "تم تنفيذ 45 رحلة جوية خلال الشهر بإجمالي 127 ساعة طيران. غطت الرحلات مساحة إجمالية 2,340 كيلومتر مربع، وتم جمع أكثر من 15,000 صورة عالية الدقة و890 مقطع فيديو.",
        contentEn:
          "45 flights were executed during the month with a total of 127 flight hours. Flights covered a total area of 2,340 square kilometers, collecting over 15,000 high-resolution images and 890 video clips.",
      },
      {
        title: "المهام المنفذة",
        titleEn: "Executed Missions",
        content:
          "مسح جوي: 18 مهمة، مراقبة أمنية: 12 مهمة، تصوير بنية تحتية: 10 مهام، رصد بيئي: 5 مهام. تم إنجاز جميع المهام بنجاح بدون حوادث تذكر.",
        contentEn:
          "Aerial survey: 18 missions, Security monitoring: 12 missions, Infrastructure photography: 10 missions, Environmental monitoring: 5 missions. All missions were successfully completed without notable incidents.",
      },
    ],
  },
  {
    id: "4",
    title: "برقية عاجلة - تحديث إجراءات السلامة",
    titleEn: "Urgent Telegram - Safety Procedures Update",
    description:
      "برقية رسمية بخصوص تحديث بروتوكولات السلامة والأمان الواجب اتباعها",
    descriptionEn:
      "Official telegram regarding safety and security protocol updates to be followed",
    category: "البرقيات",
    categoryEn: "telegrams",
    date: "2025-11-20",
    summary:
      "برقية صادرة من الإدارة العليا تتضمن تعليمات فورية بشأن تحديثات السلامة والأمان في جميع المواقع.",
    summaryEn:
      "Telegram issued from senior management containing immediate instructions regarding safety and security updates at all locations.",
    sections: [
      {
        title: "التعليمات العامة",
        titleEn: "General Instructions",
        content:
          "تطبيق بروتوكولات السلامة المحدثة اعتبارًا من 1 يناير 2026. جميع الموظفين ملزمون بحضور دورة التدريب على الإجراءات الجديدة خلال أسبوعين من تاريخ هذه البرقية.",
        contentEn:
          "Apply updated safety protocols starting January 1, 2026. All employees are required to attend training on new procedures within two weeks from the date of this telegram.",
      },
      {
        title: "الإجراءات المطلوبة",
        titleEn: "Required Procedures",
        content:
          "1. فحص معدات السلامة أسبوعياً، 2. الإبلاغ الفوري عن أي خلل أو خطر محتمل، 3. الالتزام بارتداء معدات الوقاية الشخصية، 4. تحديث سجلات السلامة يومياً، 5. المشاركة في التدريبات الدورية.",
        contentEn:
          "1. Check safety equipment weekly, 2. Immediately report any malfunction or potential hazard, 3. Comply with wearing personal protective equipment, 4. Update safety records daily, 5. Participate in periodic drills.",
      },
    ],
  },
];

export const reportCategories = [
  { id: "all", name: "جميع التقارير", nameEn: "All Reports" },
  {
    id: "قسم الدعم الفني",
    name: "قسم الدعم الفني",
    nameEn: "Technical Support",
  },
  { id: "قسم البلاغات", name: "قسم البلاغات", nameEn: "Reports" },
  { id: "قسم الدرون", name: "قسم الدرون", nameEn: "Drones" },
  { id: "البرقيات", name: "البرقيات", nameEn: "Telegrams" },
];

export const statistics = {
  totalReports: mockReports.length,
  categories: reportCategories.length - 1,
  lastUpdate: "2026-01-07",
};
