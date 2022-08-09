import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';

const Home: NextPage = () => {
    return (
        <div className="container mx-auto">
            <Head>
                <title>Larry Yang</title>
                <link rel="shortcut icon" href="/resume.png" />
            </Head>
            <main className="max-w-7xl mx-auto mt-16 antialiased">
                <About />
            </main>
        </div>
    );
};

export default Home;
