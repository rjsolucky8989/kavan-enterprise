/* eslint-disable @next/next/no-img-element */
'use client';
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ImageMagnifier from "../common/ImageMagnifier";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAlt,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";

const product = {
  rating: 4.5,
  rateCount: 10,
  orders: 19,
  price: 6638.89,
  oldPrice: 24589.27,
  mark: "-73%",
};

const Rating: React.FC<any> = ({ rating }) => (
  <Fragment>
    <span className="text-sm text-red-500">
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content: any = "";
        if (index <= Math.floor(rating))
          content = <FontAwesomeIcon icon={faStar} />;
        else if (rating > i && rating < index + 1)
          content = <FontAwesomeIcon icon={faStarHalfAlt} />;
        else if (index > rating) content = <FontAwesomeIcon icon={farStar} />;

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    <span className="mx-1">{rating.toFixed(1)}</span>
  </Fragment>
);

Rating.propTypes = {
  rating: PropTypes.number,
};

export const DiyaMakingMachine = () => {
  return (
    <section className="body py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
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
                <h1 className="text-2xl leading-none font-bold mb-4">
                Diya Making Machine
                  </h1>
                </div>
                <div className="flex items-center">
                    <div className="flex-grow">
                      <p className="inline font-light mb-4">
                        <Rating rating={product.rating} />
                        <a
                          href="src/components/bootstrap/categories/epOverview/EPOverview9#!"
                          className="text-sm text-[#219EBC] hover:underline font-medium"
                        >
                          {product.rateCount} Reviews
                        </a>
                      </p>
                      <p className="mb-0">
                        Brand:{" "}
                        <a
                          href="src/components/bootstrap/categories/epOverview/EPOverview9#!"
                          className="text-sm text-[#219EBC] hover:underline font-medium"
                        >
                          Kavan Enterprise
                        </a>{" "}
                        <span className="mx-1 opacity-50">|</span>
                        <a
                          href="src/components/bootstrap/categories/epOverview/EPOverview9#!"
                          className="text-sm text-[#219EBC] hover:underline font-medium"
                        >
                          More Mobile Accessories from No Brand
                        </a>
                      </p>
                    </div>
                    <div className="ml-auto">
                      <button className="hover:bg-[#023047] rounded hover:bg-opacity-10 text-[#219EBC] px-3 py-2 text-lg font-bold">
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                      <button className="hover:bg-[#023047] rounded hover:bg-opacity-10 text-[#219EBC] px-3 py-2 text-lg font-bold">
                        <FontAwesomeIcon icon={faShareAlt} />
                      </button>
                    </div>
                  </div>
                <hr className="dark:border-slate-700 my-6" />
                <div>
                  <h2 className="text-start leading-tight font-medium">
                    This Multi Purpose Manual Diya Making Machine is very useful
                    to make Diyas. By using Different Die (Mold) it can Produce
                    : Deepak/Diya, Kullad, Kitkat fuse, Ceramic foundry filters
                    etc.
                  </h2>
                </div>
                <section className="body ezy__epspecification3 light py-4 md:py-14 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
                  <div className="container px-4 mx-auto">
                    <div className="flex flex-col max-w-3xl justify-center mx-auto">
                      <h5 className="text-2xl font-bold leading-none mb-8">
                        Product Specification
                      </h5>

                      <table className="bg-[#ccdbdc]">
                        <tbody>
                          <tr className="border-b dark:border-slate-700 mt-2">
                            <td className="px-6 py-4 text-start w-1/4 opacity-75 bg-gray-100 bg-opacity-80 dark:bg-slate-700 dark:bg-opacity-20">
                            Product Type
                            </td>

                            <th className="py-4 text-start pl-2 md:pl-8">
                            Diya Making Machine
                            </th>
                          </tr>
                          <tr className="border-b dark:border-slate-700 mt-2">
                            <td className="px-6 py-4 text-start w-1/4 opacity-75 bg-gray-100 bg-opacity-80 dark:bg-slate-700 dark:bg-opacity-20">
                            Material
                            </td>

                            <th className="py-4 text-start pl-2 md:pl-8">
                            Mild Steel
                            </th>
                          </tr>
                          <tr className="border-b dark:border-slate-700 mt-2">
                            <td className="px-6 py-4 text-start w-1/4 opacity-75 bg-gray-100 bg-opacity-80 dark:bg-slate-700 dark:bg-opacity-20">
                            Machine Height
                            </td>

                            <th className="py-4 text-start pl-2 md:pl-8">
                            4 feet, 5 feet, 6 feet, 7 feet
                            </th>
                          </tr>
                          <tr className="border-b dark:border-slate-700 mt-2">
                            <td className="px-6 py-4 text-start w-1/4 opacity-75 bg-gray-100 bg-opacity-80 dark:bg-slate-700 dark:bg-opacity-20">
                            Capacity (per Day)
                            </td>

                            <th className="py-4 text-start pl-2 md:pl-8">
                            9000-10000 Pcs.
                            </th>
                          </tr>
                          <tr className="border-b dark:border-slate-700 mt-2">
                            <td className="px-6 py-4 text-start w-1/4 opacity-75 bg-gray-100 bg-opacity-80 dark:bg-slate-700 dark:bg-opacity-20">
                            Max Force / Load
                            </td>

                            <th className="py-4 text-start pl-2 md:pl-8">
                            0-30 ton
                            </th>
                          </tr>
                          <tr className="border-b dark:border-slate-700 mt-2">
                            <td className="px-6 py-4 text-start w-1/4 opacity-75 bg-gray-100 bg-opacity-80 dark:bg-slate-700 dark:bg-opacity-20">
                            Type of Press
                            </td>

                            <th className="py-4 text-start pl-2 md:pl-8">
                            Assembly Press
                            </th>
                          </tr>
                          <tr className="border-b dark:border-slate-700 mt-2">
                            <td className="px-6 py-4 text-start w-1/4 opacity-75 bg-gray-100 bg-opacity-80 dark:bg-slate-700 dark:bg-opacity-20">
                            Usage
                            </td>

                            <th className="py-4 text-start pl-2 md:pl-8">
                            Diya Making & Kitkat Fuse Making
                            </th>
                          </tr>
                          <tr className="border-b dark:border-slate-700 mt-2">
                            <td className="px-6 py-4 text-start w-1/4 opacity-75 bg-gray-100 bg-opacity-80 dark:bg-slate-700 dark:bg-opacity-20">
                            Material
                            </td>
                            <th className="py-4 text-start pl-2 md:pl-8">
                            Iron
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
                <div>
                <h2 className="text-start leading-tight">
                    We are a reputed entity, engaged in offering a qualitative
                    array of Heavy Duty Toggle Press Machine.Keeping in mind
                    ever-evolving requirements of our respected clients, we are
                    providing a premium quality range of Clay Diya Making
                    Machine.
                  </h2>
                </div>
                <div className="flex gap-3 items-center my-7">
                    <button className="border font-extrabold border-[#FB8500] bg-[#FB8500] text-white hover:bg-[#EFF7F6] hover:text-[#FB8500] text-lg rounded uppercase px-6 py-2.5 md:px-12 w-full h-20">
                      Get Best Price <br />
                      <span className="text-sm font-normal">Request a Quote</span>
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
