import React from 'react'
import Globe from 'react-globe.gl'
import { useState } from 'react'

import Button from '../components/Button.jsx';


const About = () => {

    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('ketepask@mail.uc.edu');
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 3000);
    }
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div className='text-white'>
                            <p className="grid-headtext">Hi, I'm Sai Abhishek Ketepally alias Abhi.</p><br></br>
                            <p className="grid-subtext">As a Junior in Computer Science at the University of Cincinnati, I have honed my skills in web development, machine learning, and data science. I am passionate about creating impactful solutions that make a difference. My strengths are Machine Learning, GenAI applications, and web development with a focus on 3D websites.</p> <br></br>
                            <p className="grid-subtext">I believe in constant learning and continuous improvement. I am looking for opportunites that will challenge me in every aspect and help me grow. I believe in collaborative work and can't wait to work with a team with the same passion. </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                <ul>
                                    <li className='flex gap-2'>JavaScript <img src="/assets/javascript.png" alt="js_logo" className="w-5" /></li>
                                    <li className='flex gap-2'>Python <img src="/assets/python.png" alt="js_logo" className="w-5" /></li>
                                    <li className='flex gap-2'>TensorFlow <img src="/assets/tensorflow.png" alt="js_logo" className="w-5" /></li>
                                    <li className='flex gap-2'>Scikit Learn <img src="/assets/scikitlearn_logo.png" alt="js_logo" className="w-5 m-2" /></li>
                                    <li className='flex gap-2'>Tailwind CSS <img src="/assets/tailwindcss.png" alt="js_logo" className="w-5" /></li>
                                    <li className='flex gap-2'>PHP <img src="/assets/php_logo.png" alt="js_logo" className="w-5" /></li>
                                    <li className='flex gap-2'>TypeScript <img src="/assets/typescript.png" alt="js_logo" className="w-5" /></li>
                                    <li className='flex gap-2'>SQL <img src="/assets/sql_logo.png" alt="js_logo" className="w-5 m-1" /></li>
                                    <li className='flex gap-2'>C++ <img src="/assets/cpp_logo.png" alt="js_logo" className="w-5 m-1" /></li>
                                    <li className='flex gap-2'>Express.js <img src="/assets/express_logo.png" alt="js_logo" className="w-5" /></li>
                                    <li className='flex gap-2'>React.js <img src="/assets/react.svg" alt="js_logo" className="w-5" /></li>
                                    <li className='flex gap-2'>Figma <img src="/assets/figma.svg" alt="js_logo" className="w-5" /></li>
                                    <li className='flex gap-2'>Django <img src="/assets/django_logo.svg" alt="js_logo" className="w-5" /></li>
                                    <li className='flex gap-2'>NumPy <img src="/assets/numpy_logo.svg" alt="js_logo" className="w-5" /></li>
                                    <li className='flex gap-2'>Pandas<img src="/assets/pandas_logo.png" alt="js_logo" className="w-5" /></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 39.1, lng: -84.5, text: 'I am currently here', color: 'white', size: 20 }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                            <p className="grid-subtext">I&apos;m based in Cincinnati (can be viewed on the globe if zoomed in), Ohio and open to work anywhere in the United States, India and remote work worldwide .</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">
                                My passion for coding
                            </p>
                            <p className="grid-subtext">
                                Programming allows me to reach out to people who I don't even know, it helps me automate tasks, it challenges me with various problems and forces me to upskill myself. Programming is just not a skill of mine but a passion of mine.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full lg:h-[276px] md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">ketepask@mail.uc.edu</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;