import React from 'react';

const Frontend = () => (
    <ul className="skill dark:text-white">
        <h2>前端技能</h2>
        <li>React. 相關套件 React-Router, Redux, React-Query 等皆熟悉</li>
        <li>熟悉 Ant Design , Bootstrap 等 UI 套件</li>
        <li>熟悉 SCSS 來開發 CSS , 習慣使用 flex 進行排版 </li>
        <li>有用 Electron 開發過桌面軟體經驗</li>
        <li>使用 Cypress , Jest 撰寫測試</li>
        <li>
            其他 JavaScript 套件使用經驗
            <ul>
                <li>axios</li>
                <li>wavesurfer.js</li>
                <li>vtt.js</li>
                <li>react-wysiwyg</li>
            </ul>
        </li>
    </ul>
);

const BackEnd = () => (
    <ul className="skill dark:text-white">
        <h2>後端技能</h2>
        <li>Node.js/Express 搭配 MongoDB , Elasticsearch 開發 API</li>
        <li>Golang 網站爬蟲, Gin 框架開發 api</li>
        <li>Socket.IO </li>
        <li>Docker , Docker-Compose 架設開發環境與發版</li>
    </ul>
);

const Other = () => (
    <ul className="skill dark:text-white">
        <h2>其他</h2>
        <li>熟悉 Git 版控 , Gitlab , GitHub </li>
        <li>Drone.io CI/CD </li>
        <li>熟悉 Manjaro Linux , Ubuntu , MacOS 系統</li>
    </ul>
);

const Skills = () => {
    return (
        <>
            <h1 className="text-4xl mb-4 px-2">技能</h1>
            <div className="flex md:flex-row flex-col">
                <Frontend />
                <BackEnd />
                <Other />
            </div>
        </>
    );
};

export default Skills;
