import React from 'react';
import Image from 'next/image';
import profile from '../public/profile.jpg';
import Skills from '../components/Skills';

const Resume = () => {
    return (
        <div className="container max-w-7xl  mx-auto">
            <Skills />
        </div>
    );
};

export default Resume;
