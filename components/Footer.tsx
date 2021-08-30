const Footer = () => {
    return (
        <div className="mt-12 lg:mt-16 sm:pb-36 sm:py-12 py-6">
            <div className="max-w-7xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white"></div>
                <div className="flex flex-col lg:flex-row items-center">
                    <div>使用 Tailwind CSS 搭配 Next.js 建立</div>
                    <div className="ml-auto space-x-2">
                        <a
                            href="https://www.linkedin.com/in/larryyangsen/"
                            className="transition-colors hover:text-yellow-500"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/larryyangsen"
                            className="transition-colors hover:text-yellow-500"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
