import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';

const Home: NextPage = () => {
    return (
        <div className="container mx-auto">
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="max-w-7xl mx-auto mt-16 antialiased">
                <About />
            </main>
        </div>
    );
};

export default Home;
