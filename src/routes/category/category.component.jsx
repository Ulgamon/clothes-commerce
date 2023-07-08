import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import CategoriesContext from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

import { CategoryTitle, CategortContainer } from "./category.styles";

const Category = () => {

    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const newProducts = categoriesMap[category];
        setProducts(newProducts);
    }, [category, categoriesMap]);

    return (
        <>
            <CategoryTitle>{category}</CategoryTitle>
            <CategortContainer>
                {products && products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </CategortContainer>
        </>   
    )
}
 
export default Category;