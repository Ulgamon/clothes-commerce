import CategoryItem from '../category-item/category-item.component';
import { CategoriesContainer } from './directory.styles';

const Directory = ({ categories }) => {

    return (
        <CategoriesContainer>
            {categories.map((category) => (
            <CategoryItem category={category} key={category.id} />
            ))}
        </CategoriesContainer>
    )
};


export default Directory; 