import { useState } from "react";

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch Man"]);

    const onAddCategory = (value) => {
        // setCategories([...categories, 'HunterXHunter']);

        if (categories.includes(value)) return;

        setCategories((myArray) => [value, ...myArray]);
    };

    return (
        <>
            <h1>GiftExpertApp</h1>

            {/* <AddCategory setCategories={setCategories} /> */}
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
