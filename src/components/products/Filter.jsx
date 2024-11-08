/* eslint-disable react/prop-types */
import { useState } from "react";
import FilterIcon from "../../assets/Icons/FilterIcon";
function Filter({ filterCategories, onFilterChange }) {
    const [isFilter, setIsFilter] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCheckboxChange = (category) => {
        const newCategory = selectedCategory === category ? "" : category;
        setSelectedCategory(newCategory);
        onFilterChange(newCategory);
    };
    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                    id="filter-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setIsFilter(!isFilter)}
                >
                    Filter
                    <FilterIcon className="-mr-1 h-5 w-5 text-gray-400" />
                </button>
            </div>
            {isFilter && (
                <div
                    className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="filter-button"
                    tabIndex="-1"
                    id="filter-dropdown"
                >
                    <div className="py-1" role="none">
                        {filterCategories.length === 0 && <p> Loading...</p>}
                        {filterCategories.map((item) => (
                            <label
                                key={item}
                                className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
                            >
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4"
                                    checked={selectedCategory === item}
                                    onChange={() => handleCheckboxChange(item)}
                                />
                                <span className="ml-2">{item}</span>
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Filter;
