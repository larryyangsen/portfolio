import Link from 'next/link';
import ThemeSwitch from './Theme-Switch';

const Navigation = () => (
  <nav className="sticky top-0 z-10 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
    <div className="container px-4 mx-auto lg:max-w-7xl flex items-center justify-between">
      <Link href="/">
        <a>Larry Yang</a>
      </Link>
      <div className="flex items-center ml-16 mr-auto space-x-4 md:space-x-8">
        <Link href="/skill">
          <a>技能</a>
        </Link>
        <Link href="/experience">
          <a>經歷</a>
        </Link>
        <Link href="/resume.pdf">
          <a>個人履歷</a>
        </Link>
      </div>
      <ThemeSwitch />
    </div>
  </nav>
);

export default Navigation;
