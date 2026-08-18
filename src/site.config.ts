// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: '林君璇 Shelly 的個人網站',
  role: 'AI 應用工程師 | python工程師 |資料工程師 ',
  email: 'dumpling8877@gmail.com',
  tagline: '專注於資料工程、AI應用開發與Python程式設計',
  description:
    '我專注於資料工程、AI應用開發與Python程式設計，致力於打造高效、可靠的數據解決方案，並將人工智慧技術應用於實際場景中，提升業務價值與使用者體驗。',
  status: '目前正在尋找新的工作機會，歡迎與我聯繫！',
  social: [
    { label: 'GitHub', href: 'https://github.com/dumpling871008' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/君璇-林-a2a861335 ' },
    // { label: 'X', href: 'https://x.com/your-username' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
] as const;
