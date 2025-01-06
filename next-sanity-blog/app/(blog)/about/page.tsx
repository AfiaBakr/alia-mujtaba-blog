"use client";



import { useTransition, useState, SetStateAction } from "react";
import Image from "next/image";
import TabButton from "../Components/TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2 lg:pl-48 text-black bg-gray-100">
                <li>Generative AI</li>
                <li>Novel Writting</li>
                <li>Fostering Inclusivity</li>
                <li>Blogging</li>
                <li>Copy Writting</li>
                <li>SEO Copy Writting</li>
                <li>On | Off page SEO</li>
                <li>Test Design</li>
                <li>TypeScript</li>
                <li>Educatioal Measurment</li>
                <li>Content Editing | Devlopment</li>
                <li>Linguistic</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "educations",
        content: (
            <ul className="list-disc pl-2 lg:pl-48 text-black bg-gray-100">
                <li>MA - English Teaching - ESL Language Instructor</li>
                <li>MA - English Literature - British and CommonWealth</li>
                <li>BSc - Zoology, Botany, Chemistry</li>
                <li>Ietmediate - Biology</li>
                <li>Matric Science - Boilogy</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2 lg:pl-48 text-black bg-gray-100">
                
                <li>
                <b className="text-lg">Visiting Lecturer</b><br/>
                National University of Modern Languages-NUML · Contract<br/>
                Mar 2023 - Present · 1 yr 11 mos<br/>
                Pakistan · On-site<br/>
                <b>Skills: </b>English Teaching · English Grammar · Novels · Content Editing · University Teaching · Test Design · Educational Measurement · Education · Teaching Writing · English · Teaching · Linguistics · Generative AI · Teacher Training · University Lecturing
                </li><br/>
                <li>
                <b className="text-lg">Freelance</b> <br/>Self employed<br/>
                3 yrs 5 mos<br/>
                Remote<br/>
                
                &bull; &nbsp;<b className="text-md">Content writer/blog writer/copy writer/AI Generated content /ED-Tech</b><br/>
                &nbsp; &nbsp;Freelance<br/>
                &nbsp; &nbsp;Sep 2022 - Present · 2 yrs 5 mos<br/>
                &nbsp; &nbsp;Remote<br/>
                &nbsp; &nbsp;<b>Skills: </b>Social Media Marketing · Content Editing · Content Development · Research Skills · Creative Writing <br/>
                &nbsp; &nbsp;English · Blogging · Copywriting · Search Engine Optimization-SEO · SEO Copywriting · Web Content Creation · Generative AI · Editing<br/>
                
                &bull; &nbsp;<b className="text-md">Blogger</b><br/>
                &nbsp; &nbsp;Self-employed<br/>
                &nbsp; &nbsp;Sep 2021 - Present · 3 yrs 5 mos<br/>
                &nbsp; &nbsp;<b>Skills:</b> On-Page SEO · Content Editing · Content Development · Research Skills · Off-Page SEO · Blogging · Search Engine Optimization (SEO) · SEO Copywriting · Generative AI · Editing
                </li><br/>
                <li>
                <b className="text-lg">English Translator</b><br/>
                Non-Profit Organization<br/>
                Mar 2019 - Present · 5 yrs 11 mos<br/>
                Pakistan · Remote<br/>
                <b>Skills: </b>Content Editing · Proofreading · English · Editing<br/>
                </li><br/>
                <li>
                <b className="text-lg">English Language Trainer</b><br/>
                Self-employed<br/>
                Jan 2022 - Jun 2024 · 2 yrs 6 mos<br/>
                Remote<br/>
                <b>Skills: </b>English Teaching · English Grammar · Language Teaching · English as a Second Language-ESL · Test Design · Education · Teaching Writing · TESOL · Translation · English · Generative AI · Teacher Training
                </li><br/>
                <li>
                <b>English Secondary Teacher</b><br/>
                St. George&nbsp;s School<br/>
                Nov 2005 - Dec 2006 · 1 yr 2 mos<br/>
                North Nazimabad<br/>
                <b>Skills: </b>English Teaching · English Grammar · Test Design · Education · Teaching Writing · English
                </li><br/>
                <li>
                <b>Secondary English Teacher</b><br/>
                SM Public Academy<br/>
                Oct 2001 - Oct 2005 - 4 yrs 1 mo<br/>
                North Nazimabad<br/>
                <b>Skills: </b>English Teaching · English Grammar · Test Design · Education · Teaching Writing · English<br/>
                </li>
            </ul>
        ),
    },
];

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id:any) => {
        startTransition(() => setTab(id));
    };

    return (
        <section className="bg-gray-100 border border-t-[#5d5f6b] py-8 px-16 border-l-transparent border-r-transparent border-b-transparent text-white">
            <div className="text-black md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 lg:gap-16 sm:py-16 lg:py-16">
                <Image
                    src="/authorcard/alia.png"
                    alt="Alia"
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                    Hello! I&apos;m a passionate educator and author with a strong academic foundation and a love for storytelling. My journey began with creative and content writing, leading me to author 4-5 books that explore topics close to my heart. Writing has always been my way of connecting with others, sharing knowledge, and inspiring growth.<br/><br/>

                    Academically, I hold a degree in Biochemistry and a Master&apos;s in English Literature. I am currently pursuing an MPhil in English, which deepens my understanding of language and communication. This academic journey has enriched my teaching methodology and writing style, enabling me to engage meaningfully with my audience.<br/><br/>

                    As a qualified English Language Teaching ELT professional, I regularly teach Business Communication and Professional Speech as a visiting lecturer. My goal is to empower students and professionals with the tools they need to express themselves confidently and succeed in their careers.<br/><br/>

                    I also manage HiSkillz, a Facebook page and YouTube channel dedicated to teaching English language skills and personal development. Through this platform, I aim to inspire individuals to achieve their personal and professional goals by enhancing their communication abilities.<br/><br/>

                    With a passion for teaching, writing, and making a positive impact, I look forward to continuing this journey of sharing knowledge and fostering growth.</p>
                    </div>
            </div>
                    <div className="flex flex-row justify-start pl-2 lg:pl-48 lg:gap-[230px] text-2xl mt-8">
                        <TabButton 
                        selectTab={() => 
                        handleTabChange("skills")} 
                        active={tab === "skills"}>
                            {""}
                            Skills{""}
                        </TabButton>
                        <TabButton 
                        selectTab={() => 
                        handleTabChange("educations")} 
                        active={tab === "educations"}>
                            {""}
                            Education{""}
                        </TabButton>
                        <TabButton 
                        selectTab={() => 
                        handleTabChange("experience")} 
                        active={tab === "experience"}>
                            {""}
                            Experience{""}
                        </TabButton>
                    </div>
                    <div className="my-8">
                        { TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                
        </section>
    );
};

export default About;
