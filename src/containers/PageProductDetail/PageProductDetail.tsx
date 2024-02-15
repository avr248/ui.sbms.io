import React, { FC, useState } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import LikeButton from "components/LikeButton";
import AccordionInfo from "./AccordionInfo";
import { StarIcon } from "@heroicons/react/24/solid";
import BagIcon from "components/BagIcon";
import NcInputNumber from "components/NcInputNumber";
import {
    NoSymbolIcon,
    ClockIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";
import IconDiscount from "components/IconDiscount";
import Prices from "components/Prices";
import toast, { Toaster } from "react-hot-toast";
import SectionSliderProductCard from "components/SectionSliderProductCard";
import Policy from "./Policy";
import ReviewItem from "components/ReviewItem";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import SectionPromo2 from "components/SectionPromo2";
import ModalViewAllReviews from "./ModalViewAllReviews";
import NotifyAddTocart from "components/NotifyAddTocart";
const detail1JPG = "images/products/detail1.jpg";
const detail2JPG = "images/products/detail2.jpg";
const detail3JPG = "images/products/detail3.jpg";
export interface ProductDetailPageProps {
    className?: string;
    product?: product;
}

const ProductDetailPage: FC<ProductDetailPageProps> = ({
    className = "",
    product,
}) => {
    const sizes = product?.sizes || ["XL"];
    const status = product?.status || null;
    const variants = product?.variants || null;
    const allOfSizes = product?.allOfSizes || null;
    const image = product?.image?.url || null;
    const gallery = product?.gallery || null;
    const productName = product?.name || "";
    const productPrice = product?.price || 0.0;
    const productDetails = product?.details || "";
    const productReviews = product?.reviews || null;
    const LIST_IMAGES_DEMO = [detail1JPG, detail2JPG, detail3JPG];
    const [variantActive, setVariantActive] = React.useState(0);
    const [sizeSelected, setSizeSelected] = React.useState(
        sizes ? sizes[0] : "XL"
    );
    const [qualitySelected, setQualitySelected] = React.useState(1);
    const [isOpenModalViewAllReviews, setIsOpenModalViewAllReviews] =
        useState(false);
    const notifyAddTocart = () => {
        toast.custom(
            (t) => (
                <NotifyAddTocart
                    productImage={LIST_IMAGES_DEMO[0]}
                    qualitySelected={qualitySelected}
                    show={t.visible}
                    sizeSelected={sizeSelected}
                    variantActive={variantActive}
                />
            ),
            { position: "top-right", id: "nc-product-notify", duration: 3000 }
        );
    };

    const renderVariants = (variants) => {
        if (!variants || !variants.length) {
            return null;
        }

        return (
            <div>
                <label htmlFor="">
                    <span className="text-sm font-medium">
                        Color:
                        <span className="ml-1 font-semibold">
                            {variants[variantActive].name}
                        </span>
                    </span>
                </label>
                <div className="flex mt-3">
                    {variants.map((variant, index) => (
                        <div
                            key={index}
                            onClick={() => setVariantActive(index)}
                            className={`relative flex-1 max-w-[75px] h-10 sm:h-11 rounded-full border-2 cursor-pointer ${
                                variantActive === index
                                    ? "border-secondary-6000 dark:border-secondary-500"
                                    : "border-transparent"
                            }`}
                        >
                            <div className="absolute inset-0.5 rounded-full overflow-hidden z-0">
                                <img
                                    src={variant.thumbnail}
                                    alt=""
                                    className="absolute w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderSizeList = (sizes) => {
        if (!allOfSizes || !sizes || !sizes.length) {
            return null;
        }
        return (
            <div>
                <div className="flex justify-between font-medium text-sm">
                    <label htmlFor="">
                        <span className="">
                            Size:
                            <span className="ml-1 font-semibold">
                                {sizeSelected}
                            </span>
                        </span>
                    </label>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="##"
                        className="text-secondary-6000 hover:text-secondary-500"
                    >
                        See sizing chart
                    </a>
                </div>
                <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 mt-3">
                    {allOfSizes.map((size, index) => {
                        const isActive = size === sizeSelected;
                        const sizeOutStock = !sizes.includes(size);
                        return (
                            <div
                                key={index}
                                className={`relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 ${
                                    sizeOutStock
                                        ? "text-opacity-20 dark:text-opacity-20 cursor-not-allowed"
                                        : "cursor-pointer"
                                } ${
                                    isActive
                                        ? "bg-se-6000 border-secondary-6000 text-white hover:bg-secondary-6000"
                                        : "border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                                }`}
                                onClick={() => {
                                    if (sizeOutStock) {
                                        return;
                                    }
                                    setSizeSelected(size);
                                }}
                            >
                                {size}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    const renderStatus = () => {
        if (!status) {
            return null;
        }
        const CLASSES =
            "absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 nc-shadow-lg rounded-full flex items-center justify-center text-slate-700 text-slate-900 dark:text-slate-300";
        if (status === "New in") {
            return (
                <div className={CLASSES}>
                    <SparklesIcon className="w-3.5 h-3.5" />
                    <span className="ml-1 leading-none">{status}</span>
                </div>
            );
        }
        if (status === "50% Discount") {
            return (
                <div className={CLASSES}>
                    <IconDiscount className="w-3.5 h-3.5" />
                    <span className="ml-1 leading-none">{status}</span>
                </div>
            );
        }
        if (status === "Sold Out") {
            return (
                <div className={CLASSES}>
                    <NoSymbolIcon className="w-3.5 h-3.5" />
                    <span className="ml-1 leading-none">{status}</span>
                </div>
            );
        }
        if (status === "limited edition") {
            return (
                <div className={CLASSES}>
                    <ClockIcon className="w-3.5 h-3.5" />
                    <span className="ml-1 leading-none">{status}</span>
                </div>
            );
        }
        return null;
    };

    const renderSectionContent = (productName, productPrice) => {
        return (
            <div className="space-y-7 2xl:space-y-8">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold">
                        {productName}
                    </h2>
                    <div className="flex items-center mt-5 space-x-4 sm:space-x-5">
                        {/* <div className="flex text-xl font-semibold">$112.00</div> */}
                        <Prices
                            contentClass="py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold"
                            price={productPrice}
                        />
                        <div className="h-7 border-l border-slate-300 dark:border-slate-700"></div>
                        <div className="flex items-center">
                            <a
                                href="#reviews"
                                className="flex items-center text-sm font-medium"
                            >
                                <StarIcon className="w-5 h-5 pb-[1px] text-yellow-400" />
                                <div className="ml-1.5 flex">
                                    <span>4.9</span>
                                    <span className="block mx-2">·</span>
                                    <span className="text-slate-600 dark:text-slate-400 underline">
                                        142 reviews
                                    </span>
                                </div>
                            </a>
                            <span className="hidden sm:block mx-2.5">·</span>
                            <div className="hidden sm:flex items-center text-sm">
                                <SparklesIcon className="w-3.5 h-3.5" />
                                <span className="ml-1 leading-none">
                                    {status}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">{variants && renderVariants(variants)}</div>
                <div className="">{sizes && renderSizeList(sizes)}</div>
                <div className="flex space-x-3.5">
                    <div className="flex items-center justify-center bg-slate-100/70 dark:bg-slate-800/70 px-2 py-3 sm:p-3.5 rounded-full">
                        <NcInputNumber
                            defaultValue={qualitySelected}
                            onChange={setQualitySelected}
                        />
                    </div>
                    <div className="flex space-x-2 sm:space-x-5">
                        <ButtonPrimary
                            className="flex-1 flex-shrink-0"
                            onClick={notifyAddTocart}
                        >
                            <BagIcon className="hidden sm:inline-block w-5 h-5 mb-0.5" />
                            <span className="ml-3">Add to cart</span>
                        </ButtonPrimary>
                    </div>
                </div>
                <hr className=" 2xl:!my-10 border-slate-200 dark:border-slate-700"></hr>
                <AccordionInfo />
                <div className="hidden xl:block">
                    <Policy />
                </div>
            </div>
        );
    };

    const renderDetailSection = (details) => {
        return (
            <div className="">
                <h2 className="text-2xl font-semibold">Product Details</h2>
                <div className="prose prose-sm sm:prose dark:prose-invert sm:max-w-4xl mt-7">
                    {details}
                </div>
            </div>
        );
    };

    const renderReviews = (reviews) => {
        return (
            <div className="">
                <h2 className="text-2xl font-semibold flex items-center">
                    <StarIcon className="w-7 h-7 mb-0.5" />
                    <span className="ml-1.5"> 4,87 · 142 Reviews</span>
                </h2>
                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-11 gap-x-28">
                        {reviews.map((review) => (
                            <ReviewItem data={review} />
                        ))}
                    </div>
                    <ButtonSecondary
                        onClick={() => setIsOpenModalViewAllReviews(true)}
                        className="mt-10 border border-slate-300 dark:border-slate-700 "
                    >
                        Show me all 142 reviews
                    </ButtonSecondary>
                </div>
            </div>
        );
    };
    return (
        <div className={`nc-ProductDetailPage ${className}`}>
            <Toaster />
            <main className="container mt-5 lg:mt-11">
                <div className="lg:flex">
                    <div className="w-full lg:w-[55%] ">
                        <div className="relative">
                            <div className="aspect-w-16 aspect-h-16">
                                {image && (
                                    <img
                                        src={image}
                                        className="w-full rounded-2xl object-cover"
                                        alt="product detail 1"
                                    />
                                )}
                            </div>
                            {renderStatus()}
                            <LikeButton className="absolute right-3 top-3 " />
                        </div>

                        {gallery && gallery.length && (
                            <div className="grid grid-cols-2 gap-3 mt-3 sm:gap-6 sm:mt-6 xl:gap-8 xl:mt-8">
                                {gallery.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="aspect-w-11 xl:aspect-w-10 2xl:aspect-w-11 aspect-h-16"
                                        >
                                            <img
                                                src={item}
                                                className="w-full rounded-2xl object-cover"
                                                alt="product detail 1"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                    <div className="w-full lg:w-[45%] pt-10 lg:pt-0 lg:pl-7 xl:pl-9 2xl:pl-10">
                        {renderSectionContent(productName, productPrice)}
                    </div>
                </div>
                <div className="mt-12 sm:mt-16 space-y-10 sm:space-y-16">
                    <div className="block xl:hidden">
                        <Policy />
                    </div>
                    {productDetails && renderDetailSection(productDetails)}
                    <hr className="border-slate-200 dark:border-slate-700" />
                    {productReviews && renderReviews(productReviews)}
                    <hr className="border-slate-200 dark:border-slate-700" />
                    {/* <SectionSliderProductCard
                        heading="Customers also purchased"
                        subHeading=""
                        headingFontClassName="text-2xl font-semibold"
                        headingClassName="mb-10 text-neutral-900 dark:text-neutral-50"
                    /> */}
                    {/* <div className="pb-20 xl:pb-28 lg:pt-14">
                        <SectionPromo2 />
                    </div> */}
                </div>
            </main>
            <ModalViewAllReviews
                show={isOpenModalViewAllReviews}
                onCloseModalViewAllReviews={() =>
                    setIsOpenModalViewAllReviews(false)
                }
            />
        </div>
    );
};
export default ProductDetailPage;
