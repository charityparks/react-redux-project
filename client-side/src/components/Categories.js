import React from 'react';

const Categories = props => {
    const categories = props.categories.map((category, index) => {
        return <div key={index}>
            <h2>{category.name}</h2>
            <h4>{category.description}</h4>
        </div>
        // render each item
    })

    return (
        <div>
            {categories}
        </div>
    );
};

export default Categories;