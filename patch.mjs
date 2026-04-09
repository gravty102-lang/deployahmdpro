import fs from 'fs';
import path from 'path';

const srcDir = 'c:/downloads/antigravity/project test v2/src';

const enJsonPath = path.join(srcDir, 'locales/en.json');
const arJsonPath = path.join(srcDir, 'locales/ar.json');

const enData = JSON.parse(fs.readFileSync(enJsonPath, 'utf-8'));
const arData = JSON.parse(fs.readFileSync(arJsonPath, 'utf-8'));

// Add checklist data to EN
enData.checklists.excavationChecklist = {
  screenTitle: 'Excavation Works',
  preHandover: {
    title: 'Excavation Works',
    items: [
      'Verify approval of materials used in the item\\'s execution and inspect equipment before starting work.',
      'Confirm approval of workshop drawings required for execution and review site boundaries.',
      'Ensure the execution method for the item is approved.',
      'Verify required tests are conducted per specifications, and review soil reports/groundwater analysis.',
      'Confirm handover of foundational items supporting the current item.',
      'Ensure the site is handed over without obstructions.',
      'Confirm site cleanliness before starting work.',
      'Review design drawings, technical specifications, other documents, and the execution program.',
      'Verify occupational safety conditions for item handover.',
      'Ensure the ground is free of water pipes, electrical cables, and gas connections.',
      'Confirm excavation does not affect adjacent structures.',
      'Verify removal of waste generated during execution.',
      'Designate storage areas before excavation begins.'
    ]
  },
  worksInspection: {
    title: 'Excavation Works Handover Checklist',
    items: [
      'Verify coordinates of excavation boundaries match building boundaries.',
      'Review foundation level and excavation depth against the soil report.',
      'Confirm foundation level aligns with the design.',
      'Check cleanliness, evenness, and disinfection of the excavation base and sides.',
      'Ensure foundation soil type matches the soil report.',
      'If excavation depth exceeds requirements, confirm backfilling with plain concrete to the specified level.'
    ]
  }
};

enData.checklists.backfillingChecklist = {
  screenTitle: 'Backfilling Works',
  preHandover: {
    title: 'Backfilling',
    items: [
      'Verify approval of materials used for execution and inspect equipment/machinery before work begins.',
      'Confirm approval of workshop drawings required for execution.',
      'Ensure the execution method for the item is approved.',
      'Verify required tests per specifications, and review soil reports/compaction tests.',
      'Confirm handover of foundational items supporting the current item.',
      'Ensure the isolation work is handed over before backfilling begins.',
      'Review design drawings, technical specifications, and other documents.',
      'Verify occupational safety conditions for item handover.',
      'Confirm removal of waste generated during execution.',
      'Designate storage and curing areas.'
    ]
  },
  worksInspection: {
    title: 'Backfilling Works Handover Checklist',
    items: [
      'Confirm backfill layer thickness matches consultant recommendations.',
      'Verify elevation of the backfill layer (foundation level).',
      'Ensure compaction method aligns with consultant recommendations.',
      'Verify weight used for compaction complies with consultant instructions.',
      'Confirm compaction test results and water content percentage before proceeding to the next layer.',
      'Ensure the replacement layer matches approved samples and is free of impurities/organic materials.',
      'Confirm backfill elevation meets the final specified level.'
    ]
  }
};

// Add checklist data to AR
arData.checklists.excavationChecklist = {
  screenTitle: 'أعمال الحفر',
  preHandover: {
    title: 'أعمال الحفر',
    items: [
      'التحقق من الموافقة على المواد المستخدمة وفحص المعدات قبل بدء العمل.',
      'تأكيد الموافقة على المخططات التنفيذية الضرورية ومراجعة حدود الموقع.',
      'التأكد من اعتماد طريقة التنفيذ الخاصة بالبند.',
      'التحقق من إجراء الاختبارات المطلوبة وفقاً للمواصفات ومراجعة تقارير التربة/المياه الجوفية.',
      'تأكيد استلام بنود التأسيس التي يعتمد عليها البند الحالي.',
      'التأكد من تسليم الموقع خاليًا من العوائق.',
      'تأكيد نظافة الموقع قبل بدء العمل.',
      'مراجعة المخططات التصميمية والمواصفات الفنية والوثائق الأخرى وبرنامج التنفيذ.',
      'التحقق من شروط السلامة المهنية لتسليم البند.',
      'التأكد من خلو الأرض من أنابيب المياه والكابلات الكهربائية وتوصيلات الغاز.',
      'تأكيد عدم تأثر الهياكل المجاورة بأعمال الحفر.',
      'التحقق من إزالة المخلفات الناتجة عن التنفيذ.',
      'تحديد مناطق التخزين قبل بدء الحفر.'
    ]
  },
  worksInspection: {
    title: 'قائمة فحص تسليم أعمال الحفر',
    items: [
      'التحقق من تطابق إحداثيات حدود الحفر مع حدود المبنى.',
      'مراجعة منسوب التأسيس وعمق الحفر مقابل تقرير التربة.',
      'تأكيد مطابقة منسوب التأسيس مع التصميم.',
      'فحص نظافة واستواء وتطهير قاعدة الحفر والجوانب.',
      'التأكد من مطابقة نوع تربة التأسيس مع تقرير التربة.',
      'إذا تجاوز عمق الحفر المتطلبات، يجب تأكيد الردم بالخرسانة العادية حتى المنسوب المحدد.'
    ]
  }
};

arData.checklists.backfillingChecklist = {
  screenTitle: 'أعمال الردم',
  preHandover: {
    title: 'الردم',
    items: [
      'التحقق من الموافقة على المواد المستخدمة وفحص المعدات/الآلات قبل بدء العمل.',
      'تأكيد الموافقة على المخططات التنفيذية الضرورية للعمل.',
      'التأكد من اعتماد طريقة التنفيذ الخاصة بالبند.',
      'التحقق من الاختبارات المطلوبة وفقاً للمواصفات ومراجعة تقارير التربة/اختبارات الدك.',
      'تأكيد استلام بنود التأسيس التي يعتمد عليها البند الحالي.',
      'التأكد من تسليم أعمال العزل قبل البدء بالردم.',
      'مراجعة المخططات التصميمية والمواصفات الفنية والوثائق الأخرى.',
      'التحقق من شروط السلامة المهنية لتسليم البند.',
      'تأكيد إزالة المخلفات الناتجة عن التنفيذ.',
      'تحديد مناطق التخزين والمعالجة.'
    ]
  },
  worksInspection: {
    title: 'قائمة فحص تسليم أعمال الردم',
    items: [
      'تأكيد سمك طبقة الردم وفقاً لتوصيات الاستشاري.',
      'التحقق من منسوب طبقة الردم (منسوب التأسيس).',
      'التأكد من طريقة الدك وتوافقها مع توصيات الاستشاري.',
      'التحقق من أن الوزن المستخدم للدك يتوافق مع تعليمات الاستشاري.',
      'تأكيد نتائج اختبارات الدك ونسبة المحتوى المائي قبل الانتقال للطبقة التالية.',
      'التأكد من مطابقة طبقة الإحلال للعينات المعتمدة وخلوها من الشوائب/المواد العضوية.',
      'تأكيد منسوب الردم لتلبية المنسوب النهائي المحدد.'
    ]
  }
};

// Shared terms for the screens
enData.checklists.signatures = 'Signatures';
enData.checklists.contractorSignature = 'Contractor Signature';
enData.checklists.consultantSignature = 'Consultant Signature';
enData.checklists.ownerSignature = 'Owner Signature';
arData.checklists.signatures = 'التوقيعات';
arData.checklists.contractorSignature = 'توقيع المقاول';
arData.checklists.consultantSignature = 'توقيع الاستشاري';
arData.checklists.ownerSignature = 'توقيع المالك';

fs.writeFileSync(enJsonPath, JSON.stringify(enData, null, 2));
fs.writeFileSync(arJsonPath, JSON.stringify(arData, null, 2));


// Edit ExcavationDetailScreen.tsx
const excDetalPath = path.join(srcDir, 'components/excavation/ExcavationDetailScreen.tsx');
let excDetail = fs.readFileSync(excDetalPath, 'utf-8');

excDetail = excDetail.replace(/import \{ motion \} from 'framer-motion';/, `import { motion } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';`);
excDetail = excDetail.replace(/export function ExcavationDetailScreen\(\) \{/, `export function ExcavationDetailScreen() {\n  const { t, i18n } = useTranslation();`);

// Remove hardcoded initialChecklists
excDetail = excDetail.replace(/const initialChecklists: ChecklistSection\[\] = \[[\s\S]*?\];\n\nconst containerVariants =/, `const containerVariants =`);

// Inside the component, regenerate checklists dynamically
excDetail = excDetail.replace(/const \[checklists, setChecklists\] = useState\(initialChecklists\);/, `
  const [checklists, setChecklists] = useState<ChecklistSection[]>([]);

  useEffect(() => {
    const preHandoverItems = t('checklists.excavationChecklist.preHandover.items', { returnObjects: true }) as string[];
    const worksInspectionItems = t('checklists.excavationChecklist.worksInspection.items', { returnObjects: true }) as string[];
    
    setChecklists([
      {
        title: t('checklists.excavationChecklist.preHandover.title'),
        items: preHandoverItems.map((text, i) => ({ id: i + 1, text, checked: false }))
      },
      {
        title: t('checklists.excavationChecklist.worksInspection.title'),
        items: worksInspectionItems.map((text, i) => ({ id: i + 1 + preHandoverItems.length, text, checked: false }))
      }
    ]);
  }, [t]);
`);

// Apply theme & rtl fixes
excDetail = excDetail.replace(/<div className="min-h-screen bg-gray-900">/, `<div className={\`min-h-screen bg-brand-cream dark:bg-slate-900 \${i18n.dir() === 'rtl' ? 'rtl' : 'ltr'}\`} dir={i18n.dir()}>`);
excDetail = excDetail.replace(/<div className="bg-gray-800 shadow">/, `<div className="bg-white/80 dark:bg-slate-800/70 shadow border-b border-gray-200 dark:border-slate-700">`);
excDetail = excDetail.replace(/<h1 className="text-xl font-semibold text-white">Excavation Works<\/h1>/, `<h1 className="text-xl font-semibold text-gray-900 dark:text-white">{t('checklists.excavationChecklist.screenTitle')}</h1>`);
excDetail = excDetail.replace(/<div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden"/, `<div className="bg-white/80 dark:bg-slate-800/70 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-slate-700"`);
excDetail = excDetail.replace(/className="mt-8 mb-8 p-6 bg-gray-700\/50 rounded-xl border border-gray-600"/, `className="mt-8 mb-8 p-6 bg-gray-50 dark:bg-slate-700/50 rounded-xl border border-gray-200 dark:border-slate-600"`);

excDetail = excDetail.replace(/<h3 className="text-lg font-semibold text-brand-teal mb-6 flex items-center">\s*<PenTool className="w-5 h-5 mr-2" \/>\s*Signatures\s*<\/h3>/, `<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">\n                <PenTool className="w-5 h-5 mr-2" />\n                {t('checklists.signatures')}\n              </h3>`);

excDetail = excDetail.replace(/Contractor Signature/, `{t('checklists.contractorSignature')}`);
excDetail = excDetail.replace(/Consultant Signature/, `{t('checklists.consultantSignature')}`);
excDetail = excDetail.replace(/Owner Signature/, `{t('checklists.ownerSignature')}`);

// text-gray-300 to text-gray-700 dark:text-gray-300 for labels
excDetail = excDetail.replace(/text-gray-300 mb-2/g, `text-gray-700 dark:text-gray-300 mb-2`);
excDetail = excDetail.replace(/bg-gray-800 border border-gray-600 rounded-lg text-white/g, `bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white`);

// Buttons
excDetail = excDetail.replace(/Save Checklist/, `{t('checklists.saveChecklist')}`);
excDetail = excDetail.replace(/Export PDF/, `{t('checklists.exportPdf')}`);

fs.writeFileSync(excDetalPath, excDetail);


// Edit BackfillingDetailScreen.tsx
const backDetailPath = path.join(srcDir, 'components/excavation/BackfillingDetailScreen.tsx');
let backDetail = fs.readFileSync(backDetailPath, 'utf-8');

backDetail = backDetail.replace(/import \{ motion \} from 'framer-motion';/, `import { motion } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';`);
backDetail = backDetail.replace(/export function BackfillingDetailScreen\(\) \{/, `export function BackfillingDetailScreen() {\n  const { t, i18n } = useTranslation();`);

// Remove hardcoded initialChecklists
backDetail = backDetail.replace(/const initialChecklists: ChecklistSection\[\] = \[[\s\S]*?\];\n\nconst containerVariants =/, `const containerVariants =`);

// Inside the component, regenerate checklists dynamically
backDetail = backDetail.replace(/const \[checklists, setChecklists\] = useState\(initialChecklists\);/, `
  const [checklists, setChecklists] = useState<ChecklistSection[]>([]);

  useEffect(() => {
    const preHandoverItems = t('checklists.backfillingChecklist.preHandover.items', { returnObjects: true }) as string[];
    const worksInspectionItems = t('checklists.backfillingChecklist.worksInspection.items', { returnObjects: true }) as string[];
    
    setChecklists([
      {
        title: t('checklists.backfillingChecklist.preHandover.title'),
        items: preHandoverItems.map((text, i) => ({ id: i + 1, text, checked: false }))
      },
      {
        title: t('checklists.backfillingChecklist.worksInspection.title'),
        items: worksInspectionItems.map((text, i) => ({ id: i + 1 + preHandoverItems.length, text, checked: false }))
      }
    ]);
  }, [t]);
`);

// Apply theme & rtl fixes
backDetail = backDetail.replace(/<div className="min-h-screen bg-gray-900">/, `<div className={\`min-h-screen bg-brand-cream dark:bg-slate-900 \${i18n.dir() === 'rtl' ? 'rtl' : 'ltr'}\`} dir={i18n.dir()}>`);
backDetail = backDetail.replace(/<div className="bg-gray-800 shadow">/, `<div className="bg-white/80 dark:bg-slate-800/70 shadow border-b border-gray-200 dark:border-slate-700">`);
backDetail = backDetail.replace(/<h1 className="text-xl font-semibold text-white">Backfilling Works<\/h1>/, `<h1 className="text-xl font-semibold text-gray-900 dark:text-white">{t('checklists.backfillingChecklist.screenTitle')}</h1>`);
backDetail = backDetail.replace(/<div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden"/, `<div className="bg-white/80 dark:bg-slate-800/70 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-slate-700"`);
backDetail = backDetail.replace(/className="mt-8 mb-8 p-6 bg-gray-700\/50 rounded-xl border border-gray-600"/, `className="mt-8 mb-8 p-6 bg-gray-50 dark:bg-slate-700/50 rounded-xl border border-gray-200 dark:border-slate-600"`);

backDetail = backDetail.replace(/<h3 className="text-lg font-semibold text-brand-teal mb-6 flex items-center">\s*<PenTool className="w-5 h-5 mr-2" \/>\s*Signatures\s*<\/h3>/, `<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">\n                <PenTool className="w-5 h-5 mr-2" />\n                {t('checklists.signatures')}\n              </h3>`);

backDetail = backDetail.replace(/Contractor Signature/, `{t('checklists.contractorSignature')}`);
backDetail = backDetail.replace(/Consultant Signature/, `{t('checklists.consultantSignature')}`);
backDetail = backDetail.replace(/Owner Signature/, `{t('checklists.ownerSignature')}`);

// text-gray-300 to text-gray-700 dark:text-gray-300 for labels
backDetail = backDetail.replace(/text-gray-300 mb-2/g, `text-gray-700 dark:text-gray-300 mb-2`);
backDetail = backDetail.replace(/bg-gray-800 border border-gray-600 rounded-lg text-white/g, `bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white`);

// Buttons
backDetail = backDetail.replace(/Save Checklist/, `{t('checklists.saveChecklist')}`);
backDetail = backDetail.replace(/Export PDF/, `{t('checklists.exportPdf')}`);

fs.writeFileSync(backDetailPath, backDetail);


// Also fix ExcavationScreen.tsx
const excScreenPath = path.join(srcDir, 'components/excavation/ExcavationScreen.tsx');
let excScreen = fs.readFileSync(excScreenPath, 'utf-8');
excScreen = excScreen.replace(/import \{ FileText/g, `import { useTranslation } from 'react-i18next';\nimport { FileText`);
excScreen = excScreen.replace(/export function ExcavationScreen\(\) \{/, `export function ExcavationScreen() {\n  const { t, i18n } = useTranslation();`);
excScreen = excScreen.replace(/<div className="min-h-screen bg-gray-900">/, `<div className={\`min-h-screen bg-brand-cream dark:bg-slate-900 \${i18n.dir() === 'rtl' ? 'rtl' : 'ltr'}\`} dir={i18n.dir()}>`);
excScreen = excScreen.replace(/<div className="bg-gray-800 shadow">/, `<div className="bg-white/80 dark:bg-slate-800/70 shadow border-b border-gray-200 dark:border-slate-700">`);
excScreen = excScreen.replace(/<h1 className="text-xl font-semibold text-white">Excavation<\/h1>/, `<h1 className="text-xl font-semibold text-gray-900 dark:text-white">{t('projectActions.menu.excavation.title')}</h1>`);
excScreen = excScreen.replace(/className="group relative overflow-hidden bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 text-left"/g, `className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 text-left border border-gray-200 dark:border-slate-700"`);
excScreen = excScreen.replace(/<h3 className="text-lg font-semibold text-white group-hover:text-brand-teal transition-colors mb-2/g, `<h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-brand-teal transition-colors mb-2`);
excScreen = excScreen.replace(/<p className="text-gray-400 text-sm">/g, `<p className="text-gray-600 dark:text-gray-400 text-sm">`);
excScreen = excScreen.replace(/'Excavation Works'/, `t('checklists.excavationChecklist.screenTitle')`);
excScreen = excScreen.replace(/'Backfilling Works'/, `t('checklists.backfillingChecklist.screenTitle')`);
// We also replace "View Checklist" text to translate it if it exists
excScreen = excScreen.replace(/View Checklist/g, `{t('reports.viewReports')}`);

fs.writeFileSync(excScreenPath, excScreen);

console.log("Patch complete!");
