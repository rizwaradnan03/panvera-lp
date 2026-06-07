'use client'
import React from 'react'
import Link from 'next/link';
import { RiFacebookCircleFill, RiLinkedinFill, RiCircleFill, RiDownloadLine, RiInstagramLine } from '@remixicon/react'
import PartnersMarquee from './partnersMarquee';
import SlideUp from '@/utlits/animations/slideUp';

const Hero = () => {

    const handleDownloadCv = () => {
        const link = document.createElement('a');
        link.href = "/documents/company-profile.pdf";
        link.download = "company-profile.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/profile.png"} alt="About Me" />
                                <h2>{process.env.NEXT_PUBLIC_COMPANY_NAME}</h2>
                                <p>Solusi Kreatif & Pertumbuhan Digital Anda.</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link href={process.env.NEXT_PUBLIC_FACEBOOK_URL}><RiFacebookCircleFill size={20} /></Link></li>
                                        <li><Link href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}><RiInstagramLine size={20} /></Link></li>
                                        <li><Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL}><RiLinkedinFill size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>

                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Halo!</p>
                                <h2>
                                    Transformasi bisnis Anda lewat desain brand dan website yang strategis serta kreatif.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Tersedia untuk berkolaborasi</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <button onClick={() => handleDownloadCv()} className="theme-btn">Download Company Profile <i><RiDownloadLine size={16} /></i> </button>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <PartnersMarquee />
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero