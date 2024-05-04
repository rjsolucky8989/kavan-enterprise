/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import ImageMagnifier from "../common/ImageMagnifier";

export const DiyaMakingMachine = () => {
  return (
    <section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-12 relative">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-6">
                <ImageMagnifier
                  width={350}
                  src="/diya-making-machine-1.jpeg"
                  height={500}
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div>
                  <h1 className="text-2xl leading-tight font-medium mb-4">
                    Diya Making Machine
                  </h1>
                </div>
                <hr className="dark:border-slate-700 my-6" />
                <div>
                  <h2 className="text-lg leading-tight font-medium mb-4">
                    This Multi Purpose Manual Diya Making Machine is very useful
                    to make Diyas. By using Different Die (Mold) it can Produce
                    : Deepak/Diya, Kullad, Kitkat fuse, Ceramic foundry filters
                    etc.
                  </h2>
                </div>
                <div className="text-lg leading-tight font-medium mb-4">
                  <h1>Specification</h1>
                </div>
                <div className="flex justify-between text-md leading-tight font-medium mb-2">
                  <p>Product Type: </p>
                  <p>Diya Making Machine </p>
                </div>
                <div className="flex justify-between  text-md leading-tight font-medium mb-2">
                  <p>Material: </p>
                  <p>Mild Steel </p>
                </div>
                <div className="flex justify-between  text-md leading-tight font-medium mb-2">
                  <p>Machine Height: </p>
                  <p>4 feet, 5 feet, 6 feet, 7 feet</p>
                </div>
                <div className="flex justify-between  text-md leading-tight font-medium mb-2">
                  <p>Capacity: </p>
                  <p>9000-10000/day</p>
                </div>
                <div className="flex justify-between  text-md leading-tight font-medium mb-2">
                  <p>Max Force or Load : </p>
                  <p>0-30 ton</p>
                </div>
                <div className="flex justify-between  text-md leading-tight font-medium mb-2">
                  <p>Type of Press: </p>
                  <p>Assembly Press</p>
                </div>
                <div className="flex justify-between  text-md leading-tight font-medium mb-2">
                  <p>Usage: </p>
                  <p>Diya Making & Kitkat Fuse Making</p>
                </div>
                <div className="flex justify-between  text-md leading-tight font-medium mb-2">
                  <p>Material: </p>
                  <p>Iron</p>
                </div>
                <div>
                  <p className=" text-md leading-tight font-medium mb-2">
                    We are a reputed entity, engaged in offering a qualitative
                    array of Heavy Duty Toggle Press Machine.Keeping in mind
                    ever-evolving requirements of our respected clients, we are
                    providing a premium quality range of Clay Diya Making
                    Machine.
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
