"use client";
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faGlobeAsia,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faSearchDollar,
  faShareAlt,
  faStar,
  faStarHalfAlt,
  faTimesCircle,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { Table } from "@mui/material";

const coupons = [{ label: "Min. spend ৳ 5,000. Capped at ৳ 1,250." }];

const product = {
  title:
    "Christmas Decor Floating Diya For Birthday Party Wedding Diwali New Year",
  previews: [
    {
      previewUrl: "https://cdn.easyfrontend.com/pictures/products/aroma1.jpg",
      thumbUrl: "https://cdn.easyfrontend.com/pictures/products/aroma1.jpg",
    },
    {
      previewUrl: "https://cdn.easyfrontend.com/pictures/products/aroma2.jpg",
      thumbUrl: "https://cdn.easyfrontend.com/pictures/products/aroma2.jpg",
    },
    {
      previewUrl: "https://cdn.easyfrontend.com/pictures/products/aroma3.jpg",
      thumbUrl: "https://cdn.easyfrontend.com/pictures/products/aroma3.jpg",
    },
  ],
  rating: 4.5,
  rateCount: 10,
  orders: 19,
  price: 6638.89,
  oldPrice: 24589.27,
  mark: "-73%",
  colorVariants: [
    {
      color: "yellow-400",
      value: "Multi",
      title: "Multi",
      thumbUrl: "https://cdn.easyfrontend.com/pictures/products/aroma4.jpg",
    },
    {
      color: "green-500",
      value: "Green",
      title: "Green",
      thumbUrl: "https://cdn.easyfrontend.com/pictures/products/aroma3.jpg",
    },
    {
      color: "red-500",
      value: "Red",
      title: "Red",
      thumbUrl: "https://cdn.easyfrontend.com/pictures/products/aroma2.jpg",
    },
    {
      color: "blue-600",
      value: "Blue",
      title: "Blue",
      thumbUrl: "https://cdn.easyfrontend.com/pictures/products/aroma1.jpg",
    },
    {
      color: "black",
      value: "Black",
      title: "Black",
      thumbUrl: "https://cdn.easyfrontend.com/pictures/products/aroma5.jpg",
    },
  ],
};

const ProductPreviews: React.FC<any> = ({ previews }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="xl:mr-6">
      <div className="text-center p-1 mb-2">
        <img
          src={previews[index].previewUrl}
          alt=""
          className="max-w-full h-auto rounded-xl w-full"
        />
      </div>
      <hr className="dark:border-slate-700 my-4 mx-1" />
      <ul className="flex gap-3">
        {previews.map((preview: any, i: any) => (
          <li
            className="w-24 h-24 rounded-md cursor-pointer"
            key={i}
            onClick={() => setIndex(i)}
          >
            <img
              src={preview.thumbUrl}
              alt=""
              className="max-w-full h-auto rounded-md"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductPreviews.propTypes = {
  previews: PropTypes.array.isRequired,
};

const ColorVariant: React.FC<any> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(
    product.colorVariants[0].value
  );

  const handleColorChange = (value: any) => {
    setSelectedColor(value);
  };

  return (
    <div className="mb-6">
      <h5 className="text-sm font-medium">
        <span className="opacity-50">
          {selectedColor &&
            product.colorVariants.find(
              (color: any) => color.value === selectedColor
            )?.title}
        </span>
      </h5>
      <div className="flex flex-wrap gap-2 mb-2">
        {product.colorVariants.map((item: any, i: any) => (
          <Fragment key={i}>
            <input
              type="radio"
              className="hidden"
              autoComplete="off"
              checked={selectedColor === item.value}
              onChange={() => handleColorChange(item.value)}
            />
            <label
              className={`cursor-pointer rounded-xl overflow-hidden border-2 border-white dark:border-[#0b1727] mt-1 hover:outline hover:outline-1 hover:outline-${
                item.color
              } ${
                selectedColor === item.value &&
                `outline outline-1 outline-${item.color}`
              }`}
              onClick={() => handleColorChange(item.value)}
            >
              <img
                src={item.thumbUrl}
                alt={item.title}
                className="max-w-[50px] object-cover h-auto"
              />
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

ColorVariant.propTypes = {
  product: PropTypes.shape({
    colorVariants: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        thumbUrl: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const QtyField: React.FC<any> = ({ name, value, onChange }) => {
  const qtyControl = (qty: any) =>
    onChange({
      target: {
        name,
        type: "radio",
        value: qty < 1 ? 1 : qty,
      },
    });

  return (
    <div className="flex items-center">
      <button
        className="w-8 h-8 bg-gray-100 dark:bg-slate-800 bg-opacity-50 hover:bg-opacity-100 dark:bg-opacity-50 dark:hover:bg-opacity-100 text-blue-600 leading-none flex justify-center items-center rounded-lg font-bold"
        type="button"
        onClick={() => qtyControl(parseInt(value) - 1)}
      >
        -
      </button>
      <input
        type="number"
        className="bg-transparent text-center pl-3 font-bold w-12"
        placeholder=""
        value={value}
        onChange={(e) => qtyControl(e.target.value)}
      />
      <button
        className="w-8 h-8 bg-gray-100 dark:bg-slate-800 bg-opacity-50 hover:bg-opacity-100 dark:bg-opacity-50 dark:hover:bg-opacity-100 text-blue-600 leading-none flex justify-center items-center rounded-lg font-bold"
        type="button"
        onClick={() => qtyControl(parseInt(value) + 1)}
      >
        +
      </button>
    </div>
  );
};

QtyField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
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

const Coupons: React.FC<any> = ({ coupons }) => (
  <div>
    <p className="text-sm mb-1">
      Instant discount: INR 1,723.92 off per INR 86,196.20
    </p>
    {coupons.map((coupon: any, i: any) => (
      <a
        href="src/components/bootstrap/categories/epOverview/EPOverview8#!"
        className="text-white text-[12px] bg-red-600 h-6 px-2.5 py-0.5 border-x-2 border-dashed border-white dark:border-[#0b1727] font-medium inline-block mr-1 mt-1"
        key={i}
      >
        {coupon.label}
      </a>
    ))}
    <a
      href="src/components/bootstrap/categories/epOverview/EPOverview8#!"
      className="text-blue-600 hover:underline text-sm font-medium inline-block mr-1 mt-1"
    >
      Get coupons
    </a>
  </div>
);

Coupons.propTypes = {
  coupons: PropTypes.array.isRequired,
};

const Sidebar = () => (
  <div className="bg-gray-100 dark:bg-slate-800">
    <div className="p-4">
      <p className="text-sm opacity-50 flex justify-between mb-4">
        <b>Delivery</b>{" "}
        <span>
          <FontAwesomeIcon icon={faExclamationCircle} />
        </span>
      </p>
      <div className="text-sm flex items-center mb-6">
        <span className="min-w-[30px] w-8 mt-1 mr-2 opacity-50">
          <FontAwesomeIcon icon={faMapMarkedAlt} className="text-2xl" />
        </span>
        <div className="flex-grow">
          Dhaka, Dhaka North, Banani Road No. 12 - 19
        </div>
      </div>
      <div className="text-sm flex items-center">
        <span className="min-w-[30px] text-2xl w-8 mr-2 opacity-50">
          <FontAwesomeIcon icon={faGlobeAsia} />
        </span>
        <div className="flex-grow text-start">Ships from Overseas</div>
      </div>
    </div>
    <hr className="dark:border-slate-700 my-2" />
    <div className="p-4">
      <div className="text-sm flex mb-6">
        <span className="w-8 text-2xl mt-1 mr-3 opacity-50">
          <FontAwesomeIcon icon={faTruck} />
        </span>
        <div className="flex-grow text-start">
          <span>Home Delivery</span>
          <br />
          <div className="flex justify-between">
            <span className="opacity-50">22 - 30 day(s)</span>
            <b>Free</b>
          </div>
          <div className="mt-2 opacity-75">
            Enjoy free shipping promotion with minimum 1 items.
          </div>
        </div>
      </div>
      <div className="text-sm flex">
        <span className="w-8 text-2xl mr-2 opacity-50">
          <FontAwesomeIcon icon={faSearchDollar} />
        </span>
        <div className="flex-grow text-start">Cash on Delivery Available</div>
      </div>
    </div>
    <hr className="dark:border-slate-700 my-2" />
    <div className="p-4">
      <p className="text-sm opacity-50 flex justify-between mb-4">
        <b>Service</b>{" "}
        <span>
          <FontAwesomeIcon icon={faExclamationCircle} />
        </span>
      </p>
      <div className="text-sm flex mb-6">
        <span className="w-8 text-2xl mr-2 mt-1 opacity-50">
          <FontAwesomeIcon icon={faTruck} />
        </span>
        <div className="flex-grow text-start">
          <span>7 Days Returns</span>
          <div className="opacity-50">Change of mind is not applicable</div>
        </div>
      </div>
      <div className="text-sm flex items-center">
        <span className="w-8 text-2xl mr-2 opacity-50">
          <FontAwesomeIcon icon={faTimesCircle} />
        </span>
        <div className="flex-grow text-start">Warranty not available</div>
      </div>
    </div>
  </div>
);

const Diya = () => {
  const [formData, setFormData] = useState({
    color: "Multi",
    size: "XL",
    qty: 1,
  });

  const setField = (e: any) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-9 relative">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-5">
                <ProductPreviews previews={product.previews} />
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div>
                  <h1 className="text-2xl leading-tight font-medium mb-4">
                    {product.title}
                  </h1>

                  <div className="flex items-center">
                    <div className="flex-grow">
                      <p className="inline font-light mb-4">
                        <Rating rating={product.rating} />
                        <a
                          href="src/components/bootstrap/categories/epOverview/EPOverview9#!"
                          className="text-sm text-blue-600 hover:underline font-medium"
                        >
                          {product.rateCount} Reviews
                        </a>
                      </p>
                      <p className="mb-0">
                        Brand:{" "}
                        <a
                          href="src/components/bootstrap/categories/epOverview/EPOverview9#!"
                          className="text-sm text-blue-600 hover:underline font-medium"
                        >
                          No Brand
                        </a>{" "}
                        <span className="mx-1 opacity-50">|</span>
                        <a
                          href="src/components/bootstrap/categories/epOverview/EPOverview9#!"
                          className="text-sm text-blue-600 hover:underline font-medium"
                        >
                          More Mobile Accessories from No Brand
                        </a>
                      </p>
                    </div>
                    <div className="ml-auto">
                      <button className="hover:bg-blue-600 rounded hover:bg-opacity-10 text-blue-600 px-3 py-2 text-lg font-bold">
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                      <button className="hover:bg-blue-600 rounded hover:bg-opacity-10 text-blue-600 px-3 py-2 text-lg font-bold">
                        <FontAwesomeIcon icon={faShareAlt} />
                      </button>
                    </div>
                  </div>
                  <div className="mb-0 mt-6">
                    <span className="text-blue-600 text-2xl font-bold mr-2">
                      {product.price.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </span>
                    <div className="flex flex-wrap items-center">
                      <span className="text-sm opacity-50 line-through mr-2">
                        {product.oldPrice.toLocaleString("en-IN", {
                          style: "currency",
                          currency: "INR",
                        })}
                      </span>
                      <span className="text-sm text-red-500 font-medium bg-red-600 bg-opacity-10 px-2 py-1 rounded">
                        {product.mark}
                      </span>
                    </div>
                  </div>
                </div>
                <hr className="dark:border-slate-700 my-6" />
                <form action="#!">
                  <Table>
                    <tbody>
                      <tr className="flex items-start">
                        <td width="100" className="sm:py-4 text-sm">
                          Promotions
                        </td>
                        <td className="sm:py-4 pl-4">
                          <Coupons coupons={coupons} />
                        </td>
                      </tr>
                      <tr className="flex items-start">
                        <td width="100" className="sm:py-4 text-sm">
                          Color
                        </td>
                        <td className="sm:py-4 pl-4">
                          <ColorVariant product={product} />
                        </td>
                      </tr>
                      <tr className="flex items-start mb-6">
                        <td
                          width="100"
                          className="sm:py-4 text-sm align-middle"
                        >
                          Quantity
                        </td>
                        <td className="sm:py-4 pl-4">
                          <QtyField
                            onChange={setField}
                            name="qty"
                            value={formData.qty}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <p className="text-sm mb-3">
                    <span className="opacity-75">Ships to</span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mx-1" />
                    <a href="#!" className="text-blue-600 hover:underline">
                      Bangladesh
                    </a>
                  </p>
                  <p className="text-sm">
                    <b>Shipping: ₹ 5,159.65</b> <br />
                    <span className="opacity-75">
                      From China to Bangladesh via EMS
                    </span>
                    <br />
                    <span className="opacity-75">
                      Estimated delivery: 7-15 days
                    </span>
                  </p>
                  <div className="flex gap-3 items-center my-7">
                    <button className="bg-blue-600 border border-blue-600 text-white text-sm rounded uppercase hover:bg-opacity-90 px-10 py-2.5 h-10 md:px-12 w-full sm:w-1/2">
                      Buy Now
                    </button>
                    <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm rounded uppercase px-6 py-2.5 h-10 md:px-12 w-full sm:w-1/2">
                      Add To Cart
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 text-center">
            <div className="flex flex-col gap-4">
              {" "}
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diya;
