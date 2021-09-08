import Image from 'next/image';
import profile from '../public/profile.png';

const About = () => {
    return (
        <section className="container px-4 mx-auto">
            <div className="lg:space-x-5 p-4 grid grid-cols-3 gap-4">
                <div className="p-4 col-span-2 text-gray-900 dark:text-white">
                    <div className="text-lg">雲林,台灣</div>
                    <div className="text-lg">楊森豪</div>
                    <div className="text-lg">全端工程師 React/NodeJS</div>
                    <a
                        className="text-blue-400  dark:text-white hover:text-blue-800 dark:hover:opacity-60"
                        href="mailto:larryyangsen@gmail.com"
                    >
                        larryyangsen@gmail.com
                    </a>
                </div>
                <div className="row-span-3">
                    <Image src={profile} alt="profile" width={200} height={200} className="rounded-lg" />
                </div>
                <div className="col-span-3">
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            Hi，我是 Larry ，擁有多年前後端經驗，熟悉 Javascript/TypeScript 及 ES6
                            以上語法，前端專注於使用 React 及其生態系包含 React Router、React-Query 、Hooks、Redux
                            等，對前端技術有一定的熟悉與了解。 除了前端技術外，對 Node.JS 使用 Express.JS 搭配 MongoDB
                            撰寫後端也有一定的經驗，除了前後端外，在 CI/CD 上也有使用過 Drone.IO 工具搭配 Docker
                            容器化的來進行自動化部屬的經驗。平常熱衷吸收新的知識，時常看看 Github
                            上面有什麼新的技術，並喜歡自學新的技術。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
