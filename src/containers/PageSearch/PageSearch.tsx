import React, { FC } from "react";
import { Helmet } from "react-helmet-async";
import Pagination from "shared/Pagination/Pagination";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import SectionSliderCollections from "components/SectionSliderLargeProduct";
import SectionPromo1 from "components/SectionPromo1";
import HeaderFilterSearchPage from "components/HeaderFilterSearchPage";
import Input from "shared/Input/Input";
import ButtonCircle from "shared/Button/ButtonCircle";
import ProductCard from "components/ProductCard";
import HeroSearchFormSmall from "components/HeroSearchFormSmall/HeroSearchFormSmall";
import { PRODUCTS } from "data/data";

export interface PageSearchProps {
    className?: string;
}

const PageSearch: FC<PageSearchProps> = ({ className = "" }) => {
    return (
        <div className={`nc-PageSearch  ${className}`} data-nc-id="PageSearch">
            <Helmet>
                <title>Search || Ciseco Ecommerce Template</title>
            </Helmet>

            <div
                className={`nc-HeadBackgroundCommon h-24 2xl:h-28 top-0 left-0 right-0 w-full bg-primary-50 dark:bg-neutral-800/20 `}
                data-nc-id="HeadBackgroundCommon"
            />
            <div className="container">
                <HeroSearchFormSmall />
            </div>

            <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
                <main>
                    {/* FILTER */}
                    <HeaderFilterSearchPage />

                    {/* LOOP ITEMS */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
                        {PRODUCTS.map((item, index) => (
                            <ProductCard data={item} key={index} />
                        ))}
                    </div>

                    {/* PAGINATION */}
                    <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                        <Pagination />
                        <ButtonPrimary loading>Show me more</ButtonPrimary>
                    </div>
                </main>

                {/* === SECTION 5 === */}
                <hr className="border-slate-200 dark:border-slate-700" />
                <SectionSliderCollections />
                <hr className="border-slate-200 dark:border-slate-700" />

                {/* SUBCRIBES */}
                <SectionPromo1 />
            </div>
        </div>
    );
};

export default PageSearch;
