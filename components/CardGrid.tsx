import React, {Fragment, useState} from "react";
import Card, {CardProps} from "./Card";
import CategoriesList from "./CategoryList";

interface Props {
    cards: CardProps[];
}

const CardGrid: React.FC<Props> = ({cards}) => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <Fragment>
            <div className="p-6 ">
                <CategoriesList onSelectedCategory={handleSelectCategory}/>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center place-items-center">
                    {cards.filter((card) => selectedCategory === "all" || card?.categories?.includes(selectedCategory)).map((card, index) => (
                        <Card {...card} key={index}/>
                    ))}
                    {/*<div style={{"minHeight": "300px"}} className="relative p-6 h-full rounded-2xl shadow-sm bg-white">*/}
                    {/*    <div*/}
                    {/*        className="flex items-center justify-center w-16 h-16 text-2xl rounded-full text-gray-600 mb-6 bg-gray-100/75">*/}
                    {/*        <span><i className="fas fa-clock text-secondary"></i></span>*/}
                    {/*    </div>*/}
                    {/*    <h3 className="mb-2 text-lg font-semibold text-gray-700">More templates coming soon!</h3>*/}
                    {/*    <p className="text-gray-500 flex-1"></p>*/}
                    {/*</div>*/}
                    <div style={{"minHeight": "300px"}} className="relative p-6 h-full rounded-2xl shadow-sm bg-white">
                        <div
                            className="flex items-center justify-center w-16 h-16 text-3xl rounded-full mb-4 bg-white text-indigo-500">
                            <i className="fas fa-robot"></i>
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-primary">Want to integrate AI into your business?</h3>
                        <a href="https://www.linkedin.com/in/yuval-suede/" target="_blank"
                           rel="noopener noreferrer"
                           className="mt-5 inline-block px-6 py-2 text-sm font-medium bg-white text-indigo-500 rounded-full shadow-md hover:bg-opacity-90">Talk
                            to me
                        </a>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default CardGrid;