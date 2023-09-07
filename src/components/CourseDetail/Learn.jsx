import React from "react";
import icons from "../../assets/icons/icons.png";

const Learn = () => {
  return (
    <div className="w-full mx-auto custom-gradient">
      <div className="max-w-5xl mx-auto  ">
        <h1 className="py-8 text-3xl ">What Will You Learn</h1>
        <div className="lg:flex md:flex-row ">
          <div className="lg:w-1/2 w-full py-6">
            <div className="mb-4 flex gap-8 px-4 ">
              <img src={icons} alt="icons" className="h-[150px]" />
              <div className="bg-white px-4 space-y-3 py-4">
                <p>Data Fundemental</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione repellendus reprehenderit, dicta magnam id
                  perspiciatis tempora tempore asperiores dolorem nemo excepturi
                  doloremque iure natus illum, pariatur corporis, necessitatibus
                  quibusdam. Nulla?
                </p>
              </div>
            </div>
            <div className="mb-4 flex gap-8 px-4 ">
              <img src={icons} alt="icons" className="h-[150px]" />
              <div className="bg-white px-4 space-y-3 py-4">
                <p>Data Fundemental</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione repellendus reprehenderit, dicta magnam id
                  perspiciatis tempora tempore asperiores dolorem nemo excepturi
                  doloremque iure natus illum, pariatur corporis, necessitatibus
                  quibusdam. Nulla?
                </p>
              </div>
            </div>
            <div className="mb-4 flex gap-8 px-4">
              <img src={icons} alt="icons" className="h-[150px]" />
              <div className="bg-white px-4 space-y-3 py-4">
                <p>Data Fundemental</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione repellendus reprehenderit, dicta magnam id
                  perspiciatis tempora tempore asperiores dolorem nemo excepturi
                  doloremque iure natus illum, pariatur corporis, necessitatibus
                  quibusdam. Nulla?
                </p>
              </div>
            </div>
            <div className="mb-4 flex gap-8 px-4 py-5">
              <img src={icons} alt="icons" className="h-[150px]" />
              <div className="bg-white px-4 space-y-3 py-4">
                <p>Data Fundemental</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione repellendus reprehenderit, dicta magnam id
                  perspiciatis tempora tempore asperiores dolorem nemo excepturi
                  doloremque iure natus illum, pariatur corporis, necessitatibus
                  quibusdam. Nulla?
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="mb">hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
