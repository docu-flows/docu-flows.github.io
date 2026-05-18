// =====================================================
// DocuFlow — UI interactions
// =====================================================

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// =====================================================
// i18n — translation dictionary
// Keys map to data-i18n / data-i18n-html / data-i18n-ph attributes
// =====================================================
const I18N = {
  en: {
    // Nav
    'nav.solutions': 'Solutions',
    'nav.products': 'Products',
    'nav.workflow': 'Workflow',
    'nav.industries': 'Industries',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Get a Demo',

    // Hero
    'hero.eyebrow': 'The Future of Document Flow in SEA',
    'hero.title': 'Move documents at the <span class="gradient-text">speed of business.</span>',
    'hero.sub': 'DocuFlow engineers next-generation document, ERP, POS, Inventory, Budget, Security and IoT platforms — helping organizations across Southeast Asia run smarter, safer and faster.',
    'hero.cta1': 'Explore Products →',
    'hero.cta2': 'Talk to Sales',
    'hero.stat1': 'Enterprise deployments',
    'hero.stat2': 'Industries served',
    'hero.stat3': 'Platform uptime',

    // Trust
    'trust.label': 'Powering operations across Southeast Asia — from retail floors to factory lines',
    'trust.retail': 'RETAIL',
    'trust.hospitality': 'HOSPITALITY',
    'trust.manufacturing': 'MANUFACTURING',
    'trust.logistics': 'LOGISTICS',
    'trust.government': 'GOVERNMENT',
    'trust.finance': 'FINANCE',

    // Solutions
    'solutions.eyebrow': 'Our Solutions',
    'solutions.title': 'One platform. <span class="gradient-text">Every workflow.</span>',
    'solutions.sub': 'From front-of-house transactions to back-office finance and edge-device monitoring — DocuFlow covers the full enterprise stack.',
    'sol.erp.title': 'ERP',
    'sol.erp.desc': 'Unified finance, HR, sales and operations — built for Lao-language workflows and local tax compliance.',
    'sol.pos.title': 'POS',
    'sol.pos.desc': 'Lightning-fast point-of-sale for retail, F&B and franchises. Works online and offline, syncs everywhere.',
    'sol.inv.title': 'Inventory',
    'sol.inv.desc': 'Real-time stock visibility across warehouses, branches and shelves — with barcode and RFID support.',
    'sol.pur.title': 'Purchase',
    'sol.pur.desc': 'Procure-to-pay automation: RFQs, approvals, vendor scoring and GR/IR matching in one flow.',
    'sol.bud.title': 'Budget',
    'sol.bud.desc': 'Plan, forecast and track budgets with rolling scenarios, variance alerts and multi-currency support.',
    'sol.sec.title': 'Security',
    'sol.sec.desc': 'Identity, access, audit logs and CCTV/VMS integration — engineered to meet enterprise compliance.',
    'sol.iot.title': 'IoT Platform',
    'sol.iot.desc': 'Connect sensors, gateways and machines. Stream telemetry, trigger automations and visualize the physical world in real time.',

    // Products
    'products.eyebrow': 'Flagship Products',
    'products.title': 'Software engineered for <span class="gradient-text">Southeast Asia.</span>',
    'products.sub': 'Two flagship platforms purpose-built for the way modern SEA businesses operate today.',
    'prod.docu.badge': 'Document Workflow + E-Signature',
    'prod.docu.tagline': 'The document workflow platform with built-in e-signature.',
    'prod.docu.desc': 'DocuFlow runs the whole lifecycle of a document — <strong>upload, assign signers, route, e-sign, complete, archive</strong> — in one auditable flow. Internal teams and external counterparties sign side-by-side from the same workflow, with real-time status, role-based access and a bilingual interface in English and ລາວ.',
    'prod.docu.m1': 'Multi-Signer Routing',
    'prod.docu.m2': 'Signer Ordering',
    'prod.docu.m3': 'External Signer Links',
    'prod.docu.m4': 'E-Signature on PDF',
    'prod.docu.m5': 'Status & Audit Trail',
    'prod.docu.m6': '2FA & Role Access',
    'prod.docu.m7': 'Customer Directory',
    'prod.docu.m8': 'Quotation Module',
    'prod.docu.m9': 'Bilingual EN / ລາວ',
    'prod.docu.f1': 'End-to-end document workflow — every step tracked, every action logged',
    'prod.docu.f2': 'Internal & external e-signing — external signers need no account',
    'prod.docu.f3': 'Multi-signer ordering with live status (draft, pending, completed, cancelled, expired)',
    'prod.docu.f4': 'Tamper-evident signed PDFs with full audit trail',
    'prod.docu.f5': 'Role-based access: Super Admin / Admin / User, gated per route',
    'prod.docu.cta1': 'Request a DocuFlow demo →',
    'prod.docu.cta2': 'Free PDF tools →',
    'prod.fb.badge': 'All-in-One Business Suite',
    'prod.fb.tagline': '11 integrated modules. One platform. Run the whole business.',
    'prod.fb.desc': 'FlowBiz unifies Sales, Purchasing, POS, Inventory, Accounting, HR, Payroll, Fixed Assets, Projects, Document In-Out and Reports — with multi-language (EN/LO/ZH), multi-currency (LAK/THB/USD) and a perpetual license you own forever.',
    'prod.fb.m1': 'Core & Security',
    'prod.fb.m2': 'Sales & AR',
    'prod.fb.m3': 'Purchasing & AP',
    'prod.fb.m4': 'Inventory & Stock',
    'prod.fb.m5': 'POS',
    'prod.fb.m6': 'Accounting',
    'prod.fb.m7': 'Fixed Assets',
    'prod.fb.m8': 'HR & Payroll',
    'prod.fb.m9': 'Projects',
    'prod.fb.m10': 'Document In-Out',
    'prod.fb.m11': 'Reports & Analytics',
    'prod.fb.m12': 'Approval Engine',
    'prod.fb.f1': 'Multi-language EN / ລາວ / 中文 — built in',
    'prod.fb.f2': 'Multi-currency LAK / THB / USD with daily rates',
    'prod.fb.f3': 'QR-verified PDF approvals & digital signatures',
    'prod.fb.f4': 'Perpetual license — on-premise or cloud',
    'prod.fb.pkg1.t': 'Starter',
    'prod.fb.pkg1.d': 'Core + Sales',
    'prod.fb.pkg2.t': 'Business',
    'prod.fb.pkg2.d': 'Most popular',
    'prod.fb.pkg3.t': 'Enterprise',
    'prod.fb.pkg3.d': 'All 11 modules',
    'prod.fb.cta': 'Request a FlowBiz demo →',

    // Workflow
    'wf.eyebrow': 'How DocuFlow works',
    'wf.title': 'From upload to <span class="gradient-text">signed and archived.</span>',
    'wf.sub': 'Every document moves through the same auditable lifecycle — six steps, full visibility for every signer, every status logged.',
    'wf.s1.t': 'Upload',
    'wf.s1.d': 'Drop in a PDF, tag it with document type and metadata.',
    'wf.s2.t': 'Assign signers',
    'wf.s2.d': 'Add internal users or external email links — in signing order.',
    'wf.s3.t': 'Pending',
    'wf.s3.d': 'Each signer is notified. Status updates live as they act.',
    'wf.s4.t': 'E-sign',
    'wf.s4.d': 'Internal users sign in-app. External signers use a secure link — no account needed.',
    'wf.s5.t': 'Completed',
    'wf.s5.d': 'A tamper-evident signed PDF is generated and distributed automatically.',
    'wf.s6.t': 'Archive',
    'wf.s6.d': 'Signed document plus full audit trail retained and searchable.',

    // Industries
    'ind.eyebrow': 'Industries',
    'ind.title': 'Tailored for the way <span class="gradient-text">you work.</span>',
    'ind.retail.t': 'Retail & F&B',
    'ind.retail.d': 'POS, loyalty, kitchen displays.',
    'ind.mfg.t': 'Manufacturing',
    'ind.mfg.d': 'MES, MRP and IoT line monitoring.',
    'ind.log.t': 'Logistics',
    'ind.log.d': 'Fleet, warehouse and last-mile.',
    'ind.gov.t': 'Government',
    'ind.gov.d': 'Secure document & budget workflows.',
    'ind.fin.t': 'Finance',
    'ind.fin.d': 'Audit-grade ERP and reporting.',
    'ind.hos.t': 'Hospitality',
    'ind.hos.d': 'PMS, POS and guest experience.',

    // About / values
    'about.eyebrow': 'About DocuFlow',
    'about.title': "Engineering Southeast Asia's <span class=\"gradient-text\">digital future.</span>",
    'val.inn.t': 'Innovation first',
    'val.inn.d': 'Modern stacks, AI-assisted features and cloud-native architecture.',
    'val.sea.t': 'Built for SEA',
    'val.sea.d': 'Multi-language UX, multi-currency, regional tax & banking integrations.',
    'val.ent.t': 'Enterprise-grade',
    'val.ent.d': 'Security, compliance and 24/7 support for mission-critical operations.',

    // Contact
    'contact.eyebrow': 'Get in touch',
    'contact.title': "Let's build your <span class=\"gradient-text\">document flow.</span>",
    'contact.sub': "Schedule a discovery call with our team. We'll map your workflow and propose the right DocuFlow stack — usually within 48 hours.",
    'form.name': 'Full name',
    'form.name.ph': 'Your name',
    'form.company': 'Company',
    'form.company.ph': 'Company name',
    'form.email': 'Work email',
    'form.interest': 'Interested in',
    'form.opt1': 'FlowBiz (ERP / POS / Inventory)',
    'form.opt2': 'DocuFlow (Document Workflow)',
    'form.opt3': 'IoT & Security',
    'form.opt4': 'Custom solution',
    'form.message': 'Tell us about your project',
    'form.message.ph': "A short description of what you'd like to achieve…",
    'form.submit': 'Send message →',
    'form.errMissing': 'Please enter your name and email.',
    'form.errEmail': 'That email address looks invalid.',
    'form.sending': 'Sending…',
    'form.thanks': 'Thanks {name}! Our team will contact you within 48 hours.',

    // Contact info
    'ci.office': 'Office',
    'ci.email': 'Email',
    'ci.phone': 'Phone',
    'ci.hours': 'Hours',
    'ci.hoursVal': 'Mon – Fri · 08:30 – 17:30 (ICT)',

    // Footer
    'footer.tag': 'The Future of Document Flow in SEA — engineered in Laos, scaling across Southeast Asia.',
    'footer.products': 'Products',
    'footer.solutions': 'Solutions',
    'footer.erpPos': 'ERP & POS',
    'footer.inv': 'Inventory',
    'footer.iotSec': 'IoT & Security',
    'footer.company': 'Company',
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.copy': '© ',
    'footer.rights': ' DocuFlow Co., Ltd. All rights reserved.',
    'footer.made': 'Made with ❤ in Vientiane',
  },

  lo: {
    // Nav
    'nav.solutions': 'ໂຊລູຊັນ',
    'nav.products': 'ຜະລິດຕະພັນ',
    'nav.workflow': 'ຂັ້ນຕອນວຽກ',
    'nav.industries': 'ອຸດສາຫະກໍາ',
    'nav.about': 'ກ່ຽວກັບ',
    'nav.contact': 'ຕິດຕໍ່',
    'nav.cta': 'ຂໍສາທິດ',

    // Hero
    'hero.eyebrow': 'ອະນາຄົດຂອງການໄຫຼວຽນເອກະສານໃນ ອາຊີຕາເວັນອອກສ່ຽງໃຕ້',
    'hero.title': 'ໝູນວຽນເອກະສານໃນ <span class="gradient-text">ຄວາມໄວຂອງທຸລະກິດ.</span>',
    'hero.sub': 'DocuFlow ສ້າງແພລດຟອມ ເອກະສານ, ERP, POS, ສິນຄ້າຄົງຄັງ, ງົບປະມານ, ຄວາມປອດໄພ ແລະ IoT ຂັ້ນສູງ — ຊ່ວຍໃຫ້ອົງກອນທົ່ວອາຊີຕາເວັນອອກສ່ຽງໃຕ້ດໍາເນີນງານໄດ້ສະຫຼາດ, ປອດໄພ ແລະ ໄວຂຶ້ນ.',
    'hero.cta1': 'ສຳຫຼວດຜະລິດຕະພັນ →',
    'hero.cta2': 'ລົມກັບຝ່າຍຂາຍ',
    'hero.stat1': 'ການນຳໃຊ້ໃນອົງກອນ',
    'hero.stat2': 'ອຸດສາຫະກໍາທີ່ບໍລິການ',
    'hero.stat3': 'ເວລາແພລດຟອມພ້ອມໃຊ້',

    // Trust
    'trust.label': 'ຂັບເຄື່ອນການດໍາເນີນງານທົ່ວອາຊີຕາເວັນອອກສ່ຽງໃຕ້ — ຈາກຮ້ານຄ້າເຖິງໂຮງງານ',
    'trust.retail': 'ຄ້າຂາຍ',
    'trust.hospitality': 'ໂຮງແຮມ',
    'trust.manufacturing': 'ການຜະລິດ',
    'trust.logistics': 'ໂລຈິສຕິກ',
    'trust.government': 'ລັດຖະບານ',
    'trust.finance': 'ການເງິນ',

    // Solutions
    'solutions.eyebrow': 'ໂຊລູຊັນຂອງພວກເຮົາ',
    'solutions.title': 'ໜຶ່ງແພລດຟອມ. <span class="gradient-text">ທຸກຂັ້ນຕອນວຽກ.</span>',
    'solutions.sub': 'ຕັ້ງແຕ່ການຂາຍໜ້າຮ້ານ ໄປຈົນເຖິງການເງິນຫ້ອງຫຼັງ ແລະ ການກວດກາອຸປະກອນ — DocuFlow ຄຸ້ມຄອງເຕັມຮູບແບບ.',
    'sol.erp.title': 'ERP',
    'sol.erp.desc': 'ການເງິນ, HR, ການຂາຍ ແລະ ການດໍາເນີນງານ ໃນລະບົບດຽວ — ສ້າງສຳລັບພາສາລາວ ແລະ ກົດໝາຍພາສີທ້ອງຖິ່ນ.',
    'sol.pos.title': 'POS',
    'sol.pos.desc': 'ລະບົບຂາຍໜ້າຮ້ານໄວ ສຳລັບຮ້ານຄ້າ, ອາຫານ ແລະ ສາຂາ. ໃຊ້ໄດ້ທັງອອນລາຍ ແລະ ອອບລາຍ.',
    'sol.inv.title': 'ສິນຄ້າຄົງຄັງ',
    'sol.inv.desc': 'ເຫັນສະຕັອກແບບສົດໆ ທົ່ວທຸກຄັງສິນຄ້າ, ສາຂາ ແລະ ຊັ້ນວາງ — ຮອງຮັບ barcode ແລະ RFID.',
    'sol.pur.title': 'ການຊື້',
    'sol.pur.desc': 'ອັດຕະໂນມັດ Procure-to-pay: RFQ, ການອະນຸມັດ, ການໃຫ້ຄະແນນຜູ້ສະໜອງ ໃນຂັ້ນຕອນດຽວ.',
    'sol.bud.title': 'ງົບປະມານ',
    'sol.bud.desc': 'ວາງແຜນ, ຄາດຄະເນ ແລະ ຕິດຕາມງົບປະມານ ດ້ວຍສະຖານະການແບບ rolling ແລະ ຫຼາຍສະກຸນເງິນ.',
    'sol.sec.title': 'ຄວາມປອດໄພ',
    'sol.sec.desc': 'ການຢັ້ງຢືນຕົວຕົນ, ການເຂົ້າເຖິງ, audit log ແລະ ການເຊື່ອມ CCTV/VMS — ໄດ້ມາດຕະຖານສາກົນ.',
    'sol.iot.title': 'ແພລດຟອມ IoT',
    'sol.iot.desc': 'ເຊື່ອມຕໍ່ sensor, gateway ແລະ ເຄື່ອງຈັກ. ສະຕີມຂໍ້ມູນ ແລະ ເຫັນໂລກພາຍນອກແບບສົດໆ.',

    // Products
    'products.eyebrow': 'ຜະລິດຕະພັນຫຼັກ',
    'products.title': 'ຊອບແວທີ່ສ້າງສຳລັບ <span class="gradient-text">ອາຊີຕາເວັນອອກສ່ຽງໃຕ້.</span>',
    'products.sub': 'ສອງແພລດຟອມຫຼັກ ທີ່ສ້າງສຳລັບວິທີການເຮັດທຸລະກິດໃນພູມິພາກ.',
    'prod.docu.badge': 'ຂັ້ນຕອນເອກະສານ + ລາຍເຊັນອີເລັກໂທຣນິກ',
    'prod.docu.tagline': 'ແພລດຟອມຂັ້ນຕອນເອກະສານ ພ້ອມລາຍເຊັນອີເລັກໂທຣນິກ.',
    'prod.docu.desc': 'DocuFlow ດໍາເນີນວົງຈອນທັງໝົດຂອງເອກະສານ — <strong>ອັບໂຫຼດ, ກໍານົດຜູ້ເຊັນ, ສົ່ງ, ເຊັນອີເລັກໂທຣນິກ, ສຳເລັດ, ເກັບຮັກສາ</strong> — ໃນຂັ້ນຕອນດຽວທີ່ກວດສອບໄດ້. ທີມພາຍໃນ ແລະ ຄູ່ສັນຍາພາຍນອກເຊັນຄຽງຄູ່ກັນໃນຂັ້ນຕອນດຽວກັນ, ດ້ວຍສະຖານະສົດໆ, ການເຂົ້າເຖິງຕາມບົດບາດ ແລະ ສ່ວນຕິດຕໍ່ສອງພາສາ ອັງກິດ ແລະ ລາວ.',
    'prod.docu.m1': 'ການກໍານົດຜູ້ເຊັນຫຼາຍຄົນ',
    'prod.docu.m2': 'ລໍາດັບຜູ້ເຊັນ',
    'prod.docu.m3': 'ລິ້ງຜູ້ເຊັນພາຍນອກ',
    'prod.docu.m4': 'ລາຍເຊັນອີເລັກໂທຣນິກໃນ PDF',
    'prod.docu.m5': 'ສະຖານະ & Audit Trail',
    'prod.docu.m6': '2FA & ການເຂົ້າເຖິງຕາມບົດບາດ',
    'prod.docu.m7': 'ໄດເລັກທໍຣີລູກຄ້າ',
    'prod.docu.m8': 'ໂມດູນໃບສະເໜີລາຄາ',
    'prod.docu.m9': 'ສອງພາສາ EN / ລາວ',
    'prod.docu.f1': 'ຂັ້ນຕອນເອກະສານຄົບວົງຈອນ — ທຸກຂັ້ນຖືກຕິດຕາມ, ທຸກການກະທໍາຖືກບັນທຶກ',
    'prod.docu.f2': 'ການເຊັນອີເລັກໂທຣນິກ ພາຍໃນ & ພາຍນອກ — ຜູ້ເຊັນພາຍນອກບໍ່ຕ້ອງມີບັນຊີ',
    'prod.docu.f3': 'ການກໍານົດລໍາດັບຜູ້ເຊັນຫຼາຍຄົນ ກັບສະຖານະສົດໆ (ຮ່າງ, ລໍຖ້າ, ສຳເລັດ, ຍົກເລີກ, ໝົດອາຍຸ)',
    'prod.docu.f4': 'PDF ທີ່ເຊັນແລ້ວ ປ້ອງກັນການແກ້ໄຂ ພ້ອມ audit trail ຄົບຖ້ວນ',
    'prod.docu.f5': 'ການເຂົ້າເຖິງຕາມບົດບາດ: Super Admin / Admin / User, ຄວບຄຸມຕາມເສັ້ນທາງ',
    'prod.docu.cta1': 'ຂໍສາທິດ DocuFlow →',
    'prod.docu.cta2': 'ເຄື່ອງມື PDF ຟຣີ →',
    'prod.fb.badge': 'ຊຸດທຸລະກິດຄົບວົງຈອນ',
    'prod.fb.tagline': '11 ໂມດູນເຊື່ອມຕໍ່ກັນ. ໜຶ່ງແພລດຟອມ. ດໍາເນີນທຸລະກິດທັງໝົດ.',
    'prod.fb.desc': 'FlowBiz ລວມ ການຂາຍ, ການຊື້, POS, ສິນຄ້າຄົງຄັງ, ບັນຊີ, HR, ເງິນເດືອນ, ຊັບສິນຄົງທີ່, ໂຄງການ, ເອກະສານເຂົ້າ-ອອກ ແລະ ລາຍງານ — ດ້ວຍຫຼາຍພາສາ (EN/ລາວ/中文), ຫຼາຍສະກຸນເງິນ (LAK/THB/USD) ແລະ ໃບອະນຸຍາດຕະຫຼອດກາລະນະທີ່ທ່ານເປັນເຈົ້າຂອງ.',
    'prod.fb.m1': 'ຫຼັກ & ຄວາມປອດໄພ',
    'prod.fb.m2': 'ການຂາຍ & ລູກໜີ້',
    'prod.fb.m3': 'ການຊື້ & ເຈົ້າໜີ້',
    'prod.fb.m4': 'ສິນຄ້າ & ສະຕັອກ',
    'prod.fb.m5': 'POS',
    'prod.fb.m6': 'ບັນຊີ',
    'prod.fb.m7': 'ຊັບສິນຄົງທີ່',
    'prod.fb.m8': 'HR & ເງິນເດືອນ',
    'prod.fb.m9': 'ໂຄງການ',
    'prod.fb.m10': 'ເອກະສານເຂົ້າ-ອອກ',
    'prod.fb.m11': 'ລາຍງານ & ການວິເຄາະ',
    'prod.fb.m12': 'ກົນໄກອະນຸມັດ',
    'prod.fb.f1': 'ຫຼາຍພາສາ EN / ລາວ / 中文 — ມີໃນຕົວ',
    'prod.fb.f2': 'ຫຼາຍສະກຸນເງິນ LAK / THB / USD ດ້ວຍອັດຕາແລກປ່ຽນປະຈໍາວັນ',
    'prod.fb.f3': 'ການອະນຸມັດ PDF ດ້ວຍ QR ກວດສອບໄດ້ & ລາຍເຊັນດິຈິຕອນ',
    'prod.fb.f4': 'ໃບອະນຸຍາດຕະຫຼອດກາລະນະ — on-premise ຫຼື ຄລາວ',
    'prod.fb.pkg1.t': 'ເລີ່ມຕົ້ນ',
    'prod.fb.pkg1.d': 'ຫຼັກ + ການຂາຍ',
    'prod.fb.pkg2.t': 'ທຸລະກິດ',
    'prod.fb.pkg2.d': 'ນິຍົມທີ່ສຸດ',
    'prod.fb.pkg3.t': 'ອົງກອນ',
    'prod.fb.pkg3.d': 'ທັງໝົດ 11 ໂມດູນ',
    'prod.fb.cta': 'ຂໍສາທິດ FlowBiz →',

    // Workflow
    'wf.eyebrow': 'DocuFlow ເຮັດວຽກແນວໃດ',
    'wf.title': 'ຈາກອັບໂຫຼດ ເຖິງ <span class="gradient-text">ເຊັນ ແລະ ເກັບຮັກສາ.</span>',
    'wf.sub': 'ທຸກເອກະສານຜ່ານຂັ້ນຕອນດຽວກັນ — ຫົກຂັ້ນ, ເຫັນທຸກຄົນທີ່ເຊັນ, ບັນທຶກທຸກສະຖານະ.',
    'wf.s1.t': 'ອັບໂຫຼດ',
    'wf.s1.d': 'ໃສ່ PDF, ຕິດປ້າຍປະເພດເອກະສານ ແລະ metadata.',
    'wf.s2.t': 'ກໍານົດຜູ້ເຊັນ',
    'wf.s2.d': 'ເພີ່ມຜູ້ໃຊ້ພາຍໃນ ຫຼື ລິ້ງອີເມວພາຍນອກ — ຕາມລໍາດັບການເຊັນ.',
    'wf.s3.t': 'ລໍຖ້າ',
    'wf.s3.d': 'ຜູ້ເຊັນແຕ່ລະຄົນຮັບແຈ້ງ. ສະຖານະອັບເດດແບບສົດໆ.',
    'wf.s4.t': 'ເຊັນອີເລັກໂທຣນິກ',
    'wf.s4.d': 'ຜູ້ໃຊ້ພາຍໃນເຊັນໃນແອັບ. ຜູ້ເຊັນພາຍນອກໃຊ້ລິ້ງປອດໄພ — ບໍ່ຈໍາເປັນຕ້ອງມີບັນຊີ.',
    'wf.s5.t': 'ສຳເລັດ',
    'wf.s5.d': 'PDF ທີ່ເຊັນແລ້ວແບບປ້ອງກັນການແກ້ໄຂ ຖືກສ້າງ ແລະ ສົ່ງອັດຕະໂນມັດ.',
    'wf.s6.t': 'ເກັບຮັກສາ',
    'wf.s6.d': 'ເອກະສານທີ່ເຊັນແລ້ວ ແລະ audit trail ຖືກເກັບ ແລະ ຄົ້ນຫາໄດ້.',

    // Industries
    'ind.eyebrow': 'ອຸດສາຫະກໍາ',
    'ind.title': 'ປັບແຕ່ງສຳລັບ <span class="gradient-text">ວິທີທີ່ທ່ານເຮັດວຽກ.</span>',
    'ind.retail.t': 'ຄ້າຂາຍ & ອາຫານ',
    'ind.retail.d': 'POS, ໂປຣແກຣມສະສົມ, ໜ້າຈໍຄົວ.',
    'ind.mfg.t': 'ການຜະລິດ',
    'ind.mfg.d': 'MES, MRP ແລະ ການກວດສາຍຜະລິດດ້ວຍ IoT.',
    'ind.log.t': 'ໂລຈິສຕິກ',
    'ind.log.d': 'ກອງລົດ, ຄັງສິນຄ້າ ແລະ ສົ່ງປາຍທາງ.',
    'ind.gov.t': 'ລັດຖະບານ',
    'ind.gov.d': 'ຂັ້ນຕອນເອກະສານ ແລະ ງົບປະມານ ທີ່ປອດໄພ.',
    'ind.fin.t': 'ການເງິນ',
    'ind.fin.d': 'ERP ແລະ ລາຍງານ ລະດັບກວດສອບ.',
    'ind.hos.t': 'ໂຮງແຮມ',
    'ind.hos.d': 'PMS, POS ແລະ ປະສົບການແຂກ.',

    // About / values
    'about.eyebrow': 'ກ່ຽວກັບ DocuFlow',
    'about.title': 'ສ້າງ <span class="gradient-text">ອະນາຄົດດິຈິຕອນ</span> ຂອງອາຊີຕາເວັນອອກສ່ຽງໃຕ້.',
    'val.inn.t': 'ນະວັດຕະກໍາມາກ່ອນ',
    'val.inn.d': 'ສະຖາປັດຕະຍະກໍາທັນສະໄໝ, ຄຸນສົມບັດ AI ແລະ cloud-native.',
    'val.sea.t': 'ສ້າງສຳລັບອາຊີຕາເວັນອອກສ່ຽງໃຕ້',
    'val.sea.d': 'UX ຫຼາຍພາສາ, ຫຼາຍສະກຸນເງິນ, ການເຊື່ອມພາສີ ແລະ ທະນາຄານທ້ອງຖິ່ນ.',
    'val.ent.t': 'ລະດັບອົງກອນ',
    'val.ent.d': 'ຄວາມປອດໄພ, ການປະຕິບັດຕາມ ແລະ ການສະໜັບສະໜູນ 24/7.',

    // Contact
    'contact.eyebrow': 'ຕິດຕໍ່ພວກເຮົາ',
    'contact.title': 'ມາສ້າງ <span class="gradient-text">ການໄຫຼວຽນເອກະສານ</span> ຂອງທ່ານ.',
    'contact.sub': 'ນັດໝາຍກັບທີມງານ. ພວກເຮົາຈະວາງແຜນຂັ້ນຕອນວຽກ ແລະ ສະເໜີຊຸດ DocuFlow ທີ່ເໝາະສົມ — ປົກກະຕິພາຍໃນ 48 ຊົ່ວໂມງ.',
    'form.name': 'ຊື່ເຕັມ',
    'form.name.ph': 'ຊື່ຂອງທ່ານ',
    'form.company': 'ບໍລິສັດ',
    'form.company.ph': 'ຊື່ບໍລິສັດ',
    'form.email': 'ອີເມວວຽກ',
    'form.interest': 'ສົນໃຈ',
    'form.opt1': 'FlowBiz (ERP / POS / ສິນຄ້າ)',
    'form.opt2': 'DocuFlow (ຂັ້ນຕອນເອກະສານ)',
    'form.opt3': 'IoT & ຄວາມປອດໄພ',
    'form.opt4': 'ໂຊລູຊັນສະເພາະ',
    'form.message': 'ບອກພວກເຮົາກ່ຽວກັບໂຄງການ',
    'form.message.ph': 'ຄຳອະທິບາຍສັ້ນກ່ຽວກັບສິ່ງທີ່ທ່ານຕ້ອງການ…',
    'form.submit': 'ສົ່ງຂໍ້ຄວາມ →',
    'form.errMissing': 'ກະລຸນາໃສ່ຊື່ ແລະ ອີເມວ.',
    'form.errEmail': 'ອີເມວນີ້ເບິ່ງບໍ່ຖືກຕ້ອງ.',
    'form.sending': 'ກໍາລັງສົ່ງ…',
    'form.thanks': 'ຂອບໃຈ {name}! ທີມງານຂອງພວກເຮົາຈະຕິດຕໍ່ກັບໃນ 48 ຊົ່ວໂມງ.',

    // Contact info
    'ci.office': 'ສຳນັກງານ',
    'ci.email': 'ອີເມວ',
    'ci.phone': 'ໂທລະສັບ',
    'ci.hours': 'ເວລາ',
    'ci.hoursVal': 'ຈັນ – ສຸກ · 08:30 – 17:30 (ICT)',

    // Footer
    'footer.tag': 'ອະນາຄົດຂອງການໄຫຼວຽນເອກະສານໃນອາຊີຕາເວັນອອກສ່ຽງໃຕ້ — ສ້າງໃນລາວ, ຂະຫຍາຍທົ່ວພູມິພາກ.',
    'footer.products': 'ຜະລິດຕະພັນ',
    'footer.solutions': 'ໂຊລູຊັນ',
    'footer.erpPos': 'ERP & POS',
    'footer.inv': 'ສິນຄ້າຄົງຄັງ',
    'footer.iotSec': 'IoT & ຄວາມປອດໄພ',
    'footer.company': 'ບໍລິສັດ',
    'footer.about': 'ກ່ຽວກັບ',
    'footer.contact': 'ຕິດຕໍ່',
    'footer.copy': '© ',
    'footer.rights': ' DocuFlow Co., Ltd. ສະຫງວນລິຂະສິດທັງໝົດ.',
    'footer.made': 'ສ້າງດ້ວຍຫົວໃຈ ❤ ໃນວຽງຈັນ',
  },

  zh: {
    // Nav
    'nav.solutions': '解决方案',
    'nav.products': '产品',
    'nav.workflow': '工作流',
    'nav.industries': '行业',
    'nav.about': '关于',
    'nav.contact': '联系',
    'nav.cta': '申请演示',

    // Hero
    'hero.eyebrow': '东南亚文档流转的未来',
    'hero.title': '以<span class="gradient-text">业务速度</span>流转文档。',
    'hero.sub': 'DocuFlow 打造新一代文档、ERP、POS、库存、预算、安全与 IoT 平台 — 助力东南亚组织运营得更智能、更安全、更高效。',
    'hero.cta1': '浏览产品 →',
    'hero.cta2': '联系销售',
    'hero.stat1': '企业部署',
    'hero.stat2': '服务行业',
    'hero.stat3': '平台可用率',

    // Trust
    'trust.label': '驱动东南亚的运营 — 从零售门店到生产线',
    'trust.retail': '零售',
    'trust.hospitality': '酒店',
    'trust.manufacturing': '制造',
    'trust.logistics': '物流',
    'trust.government': '政府',
    'trust.finance': '金融',

    // Solutions
    'solutions.eyebrow': '我们的解决方案',
    'solutions.title': '一个平台。<span class="gradient-text">所有工作流。</span>',
    'solutions.sub': '从前台交易到后台财务,再到边缘设备监控 — DocuFlow 覆盖完整企业栈。',
    'sol.erp.title': 'ERP',
    'sol.erp.desc': '统一财务、人事、销售与运营 — 为老挝语工作流和本地税务合规而构建。',
    'sol.pos.title': 'POS',
    'sol.pos.desc': '面向零售、餐饮和连锁的极速 POS。在线离线均可使用,处处同步。',
    'sol.inv.title': '库存',
    'sol.inv.desc': '跨仓库、门店和货架的实时库存可见性 — 支持条码与 RFID。',
    'sol.pur.title': '采购',
    'sol.pur.desc': '采购到付款自动化:询价、审批、供应商评分与三单匹配一气呵成。',
    'sol.bud.title': '预算',
    'sol.bud.desc': '规划、预测和跟踪预算,支持滚动场景、差异预警和多币种。',
    'sol.sec.title': '安全',
    'sol.sec.desc': '身份、访问、审计日志与 CCTV/VMS 集成 — 满足企业级合规要求。',
    'sol.iot.title': 'IoT 平台',
    'sol.iot.desc': '连接传感器、网关和设备。流式遥测、触发自动化、实时可视化物理世界。',

    // Products
    'products.eyebrow': '旗舰产品',
    'products.title': '为<span class="gradient-text">东南亚</span>打造的软件。',
    'products.sub': '两款旗舰平台,专为现代东南亚企业的运营方式而生。',
    'prod.docu.badge': '文档工作流 + 电子签名',
    'prod.docu.tagline': '内置电子签名的文档工作流平台。',
    'prod.docu.desc': 'DocuFlow 全程驱动一份文档的生命周期 — <strong>上传、指定签署人、流转、电子签名、完成、归档</strong> — 全部在一个可审计的流程里。内部团队和外部签署人在同一工作流中并肩签署,提供实时状态、基于角色的访问控制,以及英文与老挝语双语界面。',
    'prod.docu.m1': '多签署人路由',
    'prod.docu.m2': '签署顺序',
    'prod.docu.m3': '外部签署链接',
    'prod.docu.m4': 'PDF 电子签名',
    'prod.docu.m5': '状态与审计轨迹',
    'prod.docu.m6': '2FA 与角色权限',
    'prod.docu.m7': '客户目录',
    'prod.docu.m8': '报价单模块',
    'prod.docu.m9': '双语 EN / ລາວ',
    'prod.docu.f1': '端到端的文档工作流 — 每一步都被追踪,每一个动作都被记录',
    'prod.docu.f2': '内部与外部电子签名 — 外部签署人无需注册账号',
    'prod.docu.f3': '多签署人按序签署并实时显示状态(草稿、待签、完成、取消、过期)',
    'prod.docu.f4': '防篡改的已签署 PDF,附完整审计轨迹',
    'prod.docu.f5': '基于角色的访问控制:Super Admin / Admin / User,按路由分级',
    'prod.docu.cta1': '申请 DocuFlow 演示 →',
    'prod.docu.cta2': '免费 PDF 工具 →',
    'prod.fb.badge': '一体化业务套件',
    'prod.fb.tagline': '11 个集成模块。一个平台。运营整个业务。',
    'prod.fb.desc': 'FlowBiz 整合 销售、采购、POS、库存、会计、人事、薪资、固定资产、项目、文档收发与报表 — 多语言 (EN/老挝语/中文)、多币种 (LAK/THB/USD),提供您永久拥有的永久授权。',
    'prod.fb.m1': '核心与安全',
    'prod.fb.m2': '销售与应收',
    'prod.fb.m3': '采购与应付',
    'prod.fb.m4': '库存与备料',
    'prod.fb.m5': 'POS',
    'prod.fb.m6': '会计',
    'prod.fb.m7': '固定资产',
    'prod.fb.m8': '人事与薪资',
    'prod.fb.m9': '项目',
    'prod.fb.m10': '文档收发',
    'prod.fb.m11': '报表与分析',
    'prod.fb.m12': '审批引擎',
    'prod.fb.f1': '多语言 EN / ລາວ / 中文 — 内置',
    'prod.fb.f2': '多币种 LAK / THB / USD,每日汇率',
    'prod.fb.f3': '二维码验证的 PDF 审批与数字签名',
    'prod.fb.f4': '永久授权 — 本地部署或云端',
    'prod.fb.pkg1.t': '入门版',
    'prod.fb.pkg1.d': '核心 + 销售',
    'prod.fb.pkg2.t': '商业版',
    'prod.fb.pkg2.d': '最受欢迎',
    'prod.fb.pkg3.t': '企业版',
    'prod.fb.pkg3.d': '全部 11 个模块',
    'prod.fb.cta': '申请 FlowBiz 演示 →',

    // Workflow
    'wf.eyebrow': 'DocuFlow 如何运转',
    'wf.title': '从上传到<span class="gradient-text">签署并归档。</span>',
    'wf.sub': '每份文档都走完全相同的可审计生命周期 — 六个步骤,签署人全程可见,状态全程记录。',
    'wf.s1.t': '上传',
    'wf.s1.d': '放入 PDF,标注文档类型和元数据。',
    'wf.s2.t': '指定签署人',
    'wf.s2.d': '添加内部用户或外部邮件链接 — 按签署顺序。',
    'wf.s3.t': '待签',
    'wf.s3.d': '每位签署人收到通知。状态实时更新。',
    'wf.s4.t': '电子签名',
    'wf.s4.d': '内部用户在应用内签署。外部签署人通过安全链接 — 无需账号。',
    'wf.s5.t': '完成',
    'wf.s5.d': '自动生成防篡改的签署 PDF 并分发。',
    'wf.s6.t': '归档',
    'wf.s6.d': '签署文档及完整审计轨迹被保留并可检索。',

    // Industries
    'ind.eyebrow': '行业',
    'ind.title': '为<span class="gradient-text">您的工作方式</span>量身定制。',
    'ind.retail.t': '零售 & 餐饮',
    'ind.retail.d': 'POS、会员、后厨屏。',
    'ind.mfg.t': '制造',
    'ind.mfg.d': 'MES、MRP 与 IoT 产线监控。',
    'ind.log.t': '物流',
    'ind.log.d': '车队、仓储与末端配送。',
    'ind.gov.t': '政府',
    'ind.gov.d': '安全的文档与预算工作流。',
    'ind.fin.t': '金融',
    'ind.fin.d': '审计级 ERP 与报表。',
    'ind.hos.t': '酒店',
    'ind.hos.d': 'PMS、POS 与宾客体验。',

    // About / values
    'about.eyebrow': '关于 DocuFlow',
    'about.title': '打造东南亚的<span class="gradient-text">数字未来。</span>',
    'val.inn.t': '创新优先',
    'val.inn.d': '现代技术栈、AI 辅助功能与云原生架构。',
    'val.sea.t': '为东南亚而生',
    'val.sea.d': '多语言 UX、多币种、区域税务与银行集成。',
    'val.ent.t': '企业级',
    'val.ent.d': '安全、合规与 7×24 全天候支持,服务关键业务。',

    // Contact
    'contact.eyebrow': '联系我们',
    'contact.title': '一起构建您的<span class="gradient-text">文档流。</span>',
    'contact.sub': '与我们的团队预约一次发现通话。我们将梳理您的工作流并提出合适的 DocuFlow 方案 — 通常在 48 小时内。',
    'form.name': '姓名',
    'form.name.ph': '您的姓名',
    'form.company': '公司',
    'form.company.ph': '公司名称',
    'form.email': '工作邮箱',
    'form.interest': '感兴趣的',
    'form.opt1': 'FlowBiz (ERP / POS / 库存)',
    'form.opt2': 'DocuFlow (文档工作流)',
    'form.opt3': 'IoT & 安全',
    'form.opt4': '定制方案',
    'form.message': '介绍一下您的项目',
    'form.message.ph': '简要说明您希望达成的目标…',
    'form.submit': '发送消息 →',
    'form.errMissing': '请输入您的姓名和邮箱。',
    'form.errEmail': '邮箱地址格式不正确。',
    'form.sending': '正在发送…',
    'form.thanks': '{name},谢谢!我们的团队将在 48 小时内与您联系。',

    // Contact info
    'ci.office': '办公地址',
    'ci.email': '邮箱',
    'ci.phone': '电话',
    'ci.hours': '工作时间',
    'ci.hoursVal': '周一至周五 · 08:30 – 17:30 (ICT)',

    // Footer
    'footer.tag': '东南亚文档流转的未来 — 在老挝打造,服务整个区域。',
    'footer.products': '产品',
    'footer.solutions': '解决方案',
    'footer.erpPos': 'ERP & POS',
    'footer.inv': '库存',
    'footer.iotSec': 'IoT & 安全',
    'footer.company': '公司',
    'footer.about': '关于',
    'footer.contact': '联系',
    'footer.copy': '© ',
    'footer.rights': ' DocuFlow Co., Ltd. 版权所有。',
    'footer.made': '用心 ❤ 制作于万象',
  },
};

const SUPPORTED_LANGS = ['en', 'lo', 'zh'];

function applyLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
  const dict = I18N[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  document.querySelectorAll('.lang-btn').forEach((b) => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });

  try { localStorage.setItem('docuflow.lang', lang); } catch (e) {}
  window.__currentLang = lang;
}

function t(key) {
  const lang = window.__currentLang || 'en';
  return (I18N[lang] && I18N[lang][key]) || (I18N.en && I18N.en[key]) || key;
}

// Wire up the switcher
document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
});

// Initial language: stored choice → browser → en
(function initLang() {
  let lang = 'en';
  try { lang = localStorage.getItem('docuflow.lang') || lang; } catch (e) {}
  if (!SUPPORTED_LANGS.includes(lang)) {
    const browser = (navigator.language || 'en').toLowerCase();
    if (browser.startsWith('lo')) lang = 'lo';
    else if (browser.startsWith('zh')) lang = 'zh';
    else lang = 'en';
  }
  applyLang(lang);
})();

// =====================================================
// Mobile nav toggle
// =====================================================
const nav = document.querySelector('.nav');
const navToggle = document.getElementById('navToggle');
navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav-links a').forEach((a) => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

// Smooth scroll with sticky-nav offset
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = document.querySelector('.nav').offsetHeight - 4;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Reveal-on-scroll
const revealTargets = document.querySelectorAll(
  '.section-head, .solution, .product, .wf-card, .industry, .value, .contact-card, .contact-item, .hero-content, .hero-visual'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => io.observe(el));

// Contact form
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get('name') || '').toString().trim();
  const email = (data.get('email') || '').toString().trim();

  if (!name || !email) {
    status.style.color = '#dc2626';
    status.textContent = t('form.errMissing');
    return;
  }
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    status.style.color = '#dc2626';
    status.textContent = t('form.errEmail');
    return;
  }

  status.style.color = '';
  status.textContent = t('form.sending');
  setTimeout(() => {
    status.textContent = t('form.thanks').replace('{name}', name.split(' ')[0]);
    form.reset();
  }, 700);
});

// Subtle parallax on hero cards
const cards = document.querySelectorAll('.float-card');
const hero = document.querySelector('.hero');
hero?.addEventListener('mousemove', (e) => {
  const rect = hero.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  cards.forEach((c, i) => {
    const depth = (i + 1) * 6;
    c.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
  });
});
hero?.addEventListener('mouseleave', () => {
  cards.forEach((c) => (c.style.transform = ''));
});
