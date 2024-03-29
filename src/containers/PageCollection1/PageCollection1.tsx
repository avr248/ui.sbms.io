import React, { FC } from "react";
import { Helmet } from "react-helmet-async";
import Pagination from "shared/Pagination/Pagination";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ProductCard from "components/ProductCard";
import TabFilters from "components/TabFilters";
import { Toaster } from "react-hot-toast";
import "../../style.css";

export interface PageCollectionProps {
    className?: string;
    products?: any;
    pageTitle?: string;
    pageDescription?: string;
    metaTitle?: string;
    metaDescription?: string;
    sticky?: any;
    onSticky?: any;
    sortItem?: any;
    sortItems?: any;
    setSortItem?: any;
}

const PageCollection1: FC<PageCollectionProps> = ({
    className = "",
    metaTitle = "",
    pageTitle = "",
    metaDescription = "",
    pageDescription = "",
    products = [],
    sortItem,
    sortItems,
    setSortItem,
}) => {
    const showTopPart = pageTitle !== "" || pageDescription !== "";
    return (
        <div
            className={`nc-PageCollection ${className}`}
            data-nc-id="PageCollection"
        >
            <Toaster />
            <title>{metaTitle}</title>
            <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
                <div className="space-y-10 lg:space-y-14">
                    {(pageTitle !== "" || pageDescription !== "") && (
                        <>
                            <div className="max-w-screen-sm">
                                {pageTitle && (
                                    <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
                                        {pageTitle}
                                    </h2>
                                )}
                                {pageDescription && (
                                    <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
                                        {pageDescription}
                                    </span>
                                )}
                            </div>
                            <hr className="border-slate-200 dark:border-slate-700" />
                        </>
                    )}
                </div>
                <main>
                    <TabFilters
                        sortItem={sortItem}
                        sortItems={sortItems}
                        setSortItem={setSortItem}
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
                        {products.map((item, index) => {
                            return <ProductCard data={item} key={index} />;
                        })}
                    </div>
                    {/* <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                            <Pagination />
                            <ButtonPrimary loading>Show me more</ButtonPrimary>
                        </div> */}
                </main>
            </div>
        </div>
    );
};

export default PageCollection1;
