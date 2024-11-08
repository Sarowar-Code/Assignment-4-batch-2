/* eslint-disable react/prop-types */
import { useState } from "react";
import SortIcon from "../../assets/Icons/SortIcon";

function Sort({ sortOptions }) {
    const [isSort, setIsSort] = useState(false);
    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setIsSort(!isSort)}
                >
                    Sort
                    <SortIcon className="-mr-1 h-5 w-5 text-gray-400" />
                </button>
            </div>
            {isSort && (
                <div
                    className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <div className="py-1" role="none">
                        {sortOptions.map((item) => (
                            <span
                                key={item}
                                className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                                role="menuitem"
                                tabIndex="-1"
                                onClick="toggleDropdown()"
                                id="menu-item-0"
                            >
                                {item}{" "}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sort;
