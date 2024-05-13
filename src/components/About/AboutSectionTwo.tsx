import Image from "next/image";
import logo from "../../../public/images/logo/logo.svg"
import logoDark from "../../../public/images/logo/logo-dark.svg"

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            {/* <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div> */}
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <div className="flex flex-row items-center">
                  <Image 
                    src={logo} 
                    alt="icon" 
                    width={40}
                    height={40} 
                    className="dark:hidden"
                  />
                  <Image 
                    src={logoDark} 
                    alt="icon" 
                    width={40}
                    height={40} 
                    className="hidden dark:block"
                  />
                  <h3 className="ml-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Nos especializamos en
                  </h3>
                </div>
                <div className="pl-12">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Desarrollar soluciones de automatización, orientadas a la industria 4.0, 
                  con el objetivo de aumentar la productividad y obtener datos en tiempo real, facilitando la toma de decisiones.
                  </p>
                </div>
              </div>
              <div className="mb-9">
                <div className="flex flex-row items-center">
                  <Image 
                    src={logo} 
                    alt="icon" 
                    width={40}
                    height={40} 
                    className="dark:hidden"
                  />
                  <Image 
                    src={logoDark} 
                    alt="icon" 
                    width={40}
                    height={40} 
                    className="hidden dark:block"
                  />
                  <h3 className="ml-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  ¿Por qué automatizar?
                  </h3>
                </div>
                <div className="pl-12">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Automatizar nos permite monitorizar, controlar y estandarizar los procesos de producción, mejorando la eficiencia de líneas, máquinas y equipos. 
                  </p>
                </div>
              </div>
              <div className="mb-1">
                <div className="flex flex-row items-center">
                  <Image 
                    src={logo} 
                    alt="icon" 
                    width={40}
                    height={40} 
                    className="dark:hidden"
                  />
                  <Image 
                    src={logoDark} 
                    alt="icon" 
                    width={40}
                    height={40} 
                    className="hidden dark:block"
                  />
                  <h3 className="ml-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  ¿En qué podemos ayudarte?
                  </h3>
                </div>
                <div className="pl-12">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Nuestro campo de acción alcanza la gestión de proyectos de ampliación, actualización e integración de tecnologías.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
