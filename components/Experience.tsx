import React from 'react';

const Experience = () => {
    return (
        <div className="flex items-center justify-center flex-col w-2/3 mx-auto">
            <div className="experience">
                <h1>2014/09 ~ now</h1>
                <h2>全端工程師</h2>
                <h5>德鴻科技</h5>
                <p>
                    主要負責的工作是替錄音系統開發延伸的軟體服務，並參與前後端開發工作與需求分析，開發過的應用有，智能質檢分析系統,
                    音檔標音工具, 文本分析系統,網頁爬蟲，其中使用的技術有 React, NodeJS/Express , TypeScript, MongoDB,
                    Elasticsearch, Docker, Git 等。
                </p>
            </div>
            <div className="experience">
                <h1> 2012/10 ~ 2014/07</h1>
                <h2>資訊工程師</h2>
                <h3>寶碩財務科技</h3>
                <p>
                    客戶端的系統維護及資料庫程式撰寫，經常需要到客戶端進行系統安裝與測試，主要使用 Windows Server 搭配
                    IIS 與 MS SQL，程式開發的部分主要使用 C# 搭配微軟的 SSIS 做 ETL 與 Excel 報表的開發，
                </p>
            </div>
            <div className="experience">
                <h1> 2010/11 ~ 2012/06</h1>
                <h2>維運工程師</h2>
                <h5>多奇數位</h5>
                <p>
                    政府網站的維運，工作責任包含固定與政府機關人員開會報告，進行網站功能需求訪談等溝通性質的工作，還有撰寫需求分析書，結案文件等文書工作，以及使用
                    google analytics 進行流量分析，SEO
                    分析，註冊人數分析，網站報表撰寫，資料庫維護，網站功能測試與偶爾修改網站功能等技術性的工作
                </p>
            </div>
        </div>
    );
};

export default Experience;
