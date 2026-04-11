import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'app.title': 'Civil QC Application',
      'app.description': 'Quality Control Application for Civil Engineering Projects',
      'nav.projects': 'Projects',
      'nav.logout': 'Logout',
      'auth.login': 'Login',
      'auth.email': 'Email',
      'auth.password': 'Password',
      'project.new': 'New Project',
      'project.create': 'Create Project',
      'project.name': 'Project Name',
      'project.contractor': 'Contractor',
      'project.consultant': 'Consultant',
    },
  },
  ar: {
    translation: {
      'app.title': 'تطبيق مراقبة الجودة المدنية',
      'app.description': 'تطبيق مراقبة الجودة لمشاريع الهندسة المدنية',
      'nav.projects': 'المشاريع',
      'nav.logout': 'تسجيل الخروج',
      'auth.login': 'دخول',
      'auth.email': 'البريد الإلكتروني',
      'auth.password': 'كلمة المرور',
      'project.new': 'مشروع جديد',
      'project.create': 'إنشاء مشروع',
      'project.name': 'اسم المشروع',
      'project.contractor': 'المقاول',
      'project.consultant': 'الاستشاري',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
