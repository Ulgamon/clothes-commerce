import { 
    CategoryBodyContainerLink, 
    BackgroundImage, 
    CategoryContainer, 
    CategoryH2, 
    CategoryParagraph
} from "./category-item.styles";

const CategoryItem = ({ category }) => {

    const { imageUrl, title } = category;

    return (
        <CategoryContainer>
            <BackgroundImage style={{
            backgroundImage: `url(${imageUrl})`,
            }} />
            <CategoryBodyContainerLink to={`/shop/${title}`}>
            <CategoryH2>{title}</CategoryH2>
            <CategoryParagraph>Shop Now</CategoryParagraph>
            </CategoryBodyContainerLink>
        </CategoryContainer>
    )
} 

export default CategoryItem;