"use client";
import { portfolioData } from "../data/portfolioData";
import {TypeAnimation} from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";


export default function Hero() {
    return (
        /* 1. CONTAINER UTAMA: Mengunci ruang dan breakout lebar layar */
        <section id="home" className="
                relative 
                w-full 
                min-h-[100svh]">
        <div className="
                relative 
                left-1/2 
                right-1/2 
                -translate-x-1/2 
                w-[100vw] 
                [margin-left:calc(-50vw+50%)] 
                [margin-right:calc(-50vw+50%)] 
                overflow-hidden">
            
            {/* 2. TAG GAMBAR: Fokus posisi atas agar wajah aman */}
            <div 
                className="                    
                    absolute 
                    inset-0 
                    bg-gradient-to-b 
                    from-black/20 
                    via-black/40 
                    to-black/85 
                    md:hidden
                    bg-cover
                    bg-[center_20%]"
                style={{ backgroundImage: "url('/images/bgmobile.webp')" }}
            />
            <div 
                className="
                    hidden 
                    md:block
                    absolute 
                    inset-0 
                    bg-gradient-to-b 
                    from-black/20 
                    via-black/40 
                    to-black/85 
                    bg-cover
                    bg-center"
                style={{ backgroundImage: "url('/images/bgmenghadap.png')" }}
            />

            {/* 3. LAPISAN GRADASI (OVERLAY): Mengubah dari putih transparan di atas (from-white/0) menjadi sangat gelap ke bawah */}
            <div className="relative w-full bg-gradient-to-b from-white/10 via-black/60 to-luxury-dark px-6 pt-28 pb-12 md:pt-36 md:pb-16 z-10">
                
                {/* 4. KONTEN TEKS: Diatur agar merapat ke KIRI (`items-start text-left`) dan otomatis berada di BAWAH karena dorongan padding atas */}
                <section className="
                        w-full 
                        flex 
                        flex-col 
                        items-start 
                        text-left 
                        space-y-3 
                        pl-0 
                        pt-90 
                        md:pt-40
                        md:pl-16 
                        lg:pl-10"> 
                    
                    
                    

                    {/* Badge Role */}
                    <span className="
                            text-xs
                            sm:text-sm
                            md:text-[20px] 
                            uppercase 
                            font-black 
                            tracking-[0.15em]
                            md:tracking-[0.3em] 
                            text-luxury-gold 
                            bg-luxury-gold/10 
                            px-3 
                            py-1 
                            rounded-full 
                            animate-pulse">
                        <TypeAnimation
                            sequence={[
                                portfolioData.roles[0],
                                2000,
                                portfolioData.roles[1],
                                2000,
                                portfolioData.roles[2],
                                2000,
                            ]}
                            wrapper="span"
                            speed={30}
                            repeat={Infinity}
                            cursor={true}
                            className="tracking-[0.3em] gold-text"
                            />
                    </span>
                    
                    {/* Judul Nama - Menggunakan leading-tight agar saat teksnya panjang tidak berjarak terlalu renggang */}
                    <h1 className="
                            text-3xl
                            sm:text-4xl 
                            md:text-5xl
                            lg:text-6xl 
                            font-black 
                            text-white 
                            tracking-tight 
                            leading-tight 
                            max-w-4xl">
                        Hi, I'm <span className="text-luxury-gold gold-text">{portfolioData.name}</span>
                    </h1>
                    
                    {/* Deskripsi Bio */}
                    <p className="
                            text-sm 
                            md:text-base 
                            text-luxury-light 
                            font-medium 
                            tracking-wide 
                            max-w-2xl 
                            leading-relaxed">
                        {portfolioData.bio}
                    </p>

                    <div className="mt-1 flex gap-4">
                        <button 
                          onClick={() => {
                            const section = document.getElementById("projects");
                            if (section) {
                                window.scrollTo({ 
                                    top: section.offsetTop - 0, 
                                    behavior: "smooth",
                                 });
                            }
                          }}
                          className="
                            px-5 
                            py-1 
                            text-sm 
                            rounded-xl 
                            bg-luxury-gold 
                            text-black 
                            font-semibold 
                            hover:bg-luxury-goldHover 
                            transition-all 
                            duration-300">
                            View Projects
                        </button>

                        <a 
                         
                            href="CV/mycv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                px-4 
                                py-2 
                                text-sm 
                                rounded-xl 
                                border 
                                border-white/20 
                                text-white 
                                hover:border-luxury-gold 
                                hover:text-luxury-gold 
                                transition-all 
                                duration-300">
                            Resume
                         
                        </a>
                    </div>
                    
                    {/* Social Media Icons */}
                    <div className="
                        md:absolute 
                        md:bottom-22 
                        md:right-10
                        
                        
                        flex 
                        gap-4">
                    <div className="flex items-center gap-4 mt-2 md:mt-6">
  
                        <a
                            href={portfolioData.socials.github}
                            target="_blank"
                            className="text-white/70 hover:text-luxury-gold hover:scale-110 transition-all duration-300 text-3xl"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href={portfolioData.socials.instagram}
                            target="_blank"
                            className="text-white/70 hover:text-luxury-gold hover:scale-110 transition-all duration-300 text-3xl"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href={portfolioData.socials.linkedin}
                            target="_blank"
                            className="text-white/70 hover:text-luxury-gold hover:scale-110 transition-all duration-300 text-3xl"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href={portfolioData.socials.Whatsapp}
                            target="_blank"
                            className="text-white/70 hover:text-luxury-gold hover:scale-110 transition-all duration-300 text-3xl"
                        >
                            <FaWhatsapp />
                        </a>

                        </div>
                        </div>
                </section>

            </div> 
        </div>
        </section>
    );
}