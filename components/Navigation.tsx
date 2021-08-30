import Link from 'next/link';
import ThemeSwitch from './Theme-Switch';

const Navigation = () => (
    <nav className="sticky top-0 z-10 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
        <div className="container px-4 mx-auto lg:max-w-7xl flex items-center justify-between">
            <Link href="/">
                <a className="font-medium tracking-wider transition-colors text-gray-900 hover:text-gray-500 uppercase dark:text-white">
                    Larry Yang
                </a>
            </Link>
            <div className="flex items-center">
                <Link href="/resume">
                    <a className="font-medium tracking-wider transition-colors text-gray-900 hover:text-gray-500 uppercase dark:text-white">
                        個人履歷
                    </a>
                </Link>
                <ThemeSwitch />
            </div>
        </div>
    </nav>
);

export default Navigation;
