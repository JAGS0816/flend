"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Card from "@/components/Card";
import CardHow from "@/components/CardHow";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import CardBenefits from "@/components/CardBenefits";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisibleWhy, setIsVisibleWhy] = useState(false);
  const [isVisibleHow, setIsVisibleHow] = useState(false);
  const [isVisibleBenefits, setIsVisibleBenefits] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY;

      // Verificamos si los divs están en la pantalla y actualizamos el estado correspondiente
      const whyElement = document.querySelector('.why') as HTMLElement;
      const whyOffset = whyElement ? whyElement.offsetTop : 0;
      if (bottom > whyOffset) setIsVisibleWhy(bottom > whyOffset);

      const howElement = document.querySelector('.how') as HTMLElement;
      const howOffset = howElement ? howElement.offsetTop : 0;
      if (bottom > howOffset) setIsVisibleHow(true);

      const benefitsElement = document.querySelector('.benefits') as HTMLElement;
      const benefitsOffset = benefitsElement ? benefitsElement.offsetTop : 0;
      if (bottom > benefitsOffset) setIsVisibleBenefits(true);

      console.log(whyOffset, howOffset, benefitsOffset)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <MaxWidthWrapper className='mb-12 mt-12 flex flex-col items-center justify-center text-center overflow-x-hidden min-h-[calc(100vh-3.5rem-6rem)]'>
        <div className="flex space-x-10 items-center">
          <div className="flex flex-col justify-start items-center max-w-[calc(50%)]">
            <div className="text-4xl sm:text-6xl xl:text-7xl font-bold font-mono w-full flex flex-col md:flex md:flex-row justify-start items-start ">
              <div className="w-max"><span className=" text-left">Somos</span></div>
              <div className="w-max">
                <div className="text-[#81F0E8] animate-typing overflow-hidden text-left border-r-4 border-r-white dark:border-r-black w-fit pr-5 sm:pl-4">Flend.</div>
              </div>
            </div>
            
            <div className="pt-16 text-sm sm:text-xl z-0 text-left flex flex-col justify-start">
              <span>Una fintech dedicada a apoyar a estudiantes en la gestión de sus finanzas, ofreciendo soluciones accesibles y personalizadas para un futuro financiero sólido.</span>
            </div>
            <div className=" flex justify-start w-full">
              <RegisterLink>
                <Button className="mt-8 bg-[#81F0E8] text-neutral-700" variant={"default"}><span className=" text-xl p-8">Regístrate</span></Button>
              </RegisterLink>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              src="/flend.png"
              alt="Finance"
              width={2000}
              height={2000}
              className="rounded-2xl shadow-2xl shadow-gray-700"
            />
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className='mb-12 pt-20 flex flex-col items-center justify-center text-center bg-secondary text-neutral-800 overflow-x-hidden'>
        {/* Why This Product Section */}
        
        <div className={`mb-8 why ${isVisibleWhy ? 'animate-showIn' : ''}`}>
          <h2 className="text-lg font-bold mb-4 text-gray-400">¿POR QUÉ FLEND?</h2>
          <h3 className=" text-4xl sm:text-5xl font-semibold mb-2 text-background py-8">¡Potencia tu Futuro Financiero!</h3>
          <div className=" flex space-y-4 sm:space-y-0 sm:space-x-8 flex-col sm:flex-row">
            {
              [
                ["Libérate", "Con Flend, accede a nuestro innovador programa de refinanciamiento diseñado específicamente para estudiantes."],
                ["Construye", "Nuestro enfoque en la educación financiera personalizada te empodera para tomar decisiones financieras inteligentes y construir un futuro sólido."],
                ["Accede", "Te brindamos una comunidad de apoyo donde puedes aprender, crecer y prosperar. Desde préstamos personales hasta asesoramiento financiero, estamos aquí para ayudarte en cada paso del camino."]
              ].map((value, index) => (
                <Card key={index} title={value[0]} description={value[1]}/>
              ))
            }
          </div>
        </div>
        
        {/* How it works */}
        <div className={`mb-8 how ${isVisibleHow ? 'animate-showIn' : ''}`}>
          <h2 className="text-lg font-bold mb-4 text-gray-400 pt-12">¿CÓMO FUNCIONA?</h2>
          <h3 className=" text-4xl sm:text-5xl font-semibold mb-2 text-background py-8">¡Infórmate!</h3>
          <div className=" flex flex-col space-y-16 px-20">
          {
            [
              ["Refinanciamiento de Deudas Estudiantiles", "Simplificamos el proceso de refinanciamiento de tus deudas estudiantiles. Regístrate y proporciona información sobre tus préstamos actuales. Nuestro equipo experto encontrará opciones con tasas de interés más bajas y plazos flexibles.", "/deudas.png"],
              ["Acceso a Microcréditos Rápidos y Accesibles", "Obtén ayuda financiera para gastos inesperados de manera rápida y accesible. Completa nuestra solicitud en línea y selecciona la cantidad que necesitas. Aprobaciones rápidas y sin complicados requisitos.", "/credito.png"],
              ["Educación Financiera Personalizada", "Empoderamos a nuestros usuarios con conocimientos financieros sólidos. Ofrecemos recursos educativos personalizados y sesiones de asesoramiento financiero uno a uno. Aprende a administrar tu dinero, planificar para el futuro y tomar decisiones financieras inteligentes.", "/educ.png"]
            ].map((value, index) => (
              <CardHow key={index} title={value[0]} description={value[1]} image={value[2]} ind={index}/>
            ))
          }

          </div>
        </div>
        {/*Benefits*/}
        <div className={`mb-8 benefits ${isVisibleBenefits ? 'animate-showIn' : ''}`}>
          <h2 className="text-lg font-bold mb-4 text-gray-400 pt-12">BENEFICIOS</h2>
          <h3 className=" text-4xl sm:text-5xl font-semibold mb-2 text-background py-8">¡Construye tu futuro!</h3>
          <div className="flex flex-col sm:flex-row space-y-12 px-9 sm:space-y-0 sm:space-x-10 text-[#81F0E8] ">
          {
            [
              ["Refinanciamiento de Deudas Estudiantiles"],
              ["Acceso a Microcréditos Rápidos y Accesibles"],
              ["Educación Financiera Personalizada"]
            ].map((value, index) => (
              <CardBenefits key={index} title={value[0]}  />
            ))
          }

          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
