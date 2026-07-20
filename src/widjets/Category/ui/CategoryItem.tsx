import type { Category } from "../data"
type CategoryItemProps = {
    
    category: Category,
}

const CategoryItem = ({category}: CategoryItemProps) => {
    return(
        <div className="categories__item">
            <h2 className="categories__item-title">{category.name}</h2>
            <div className="categories__item-info">
                <p>Разделочные</p>
                <p>Туристические</p>
                <p>Охотничьи</p>
            </div>
            <img className="categories__image" src={category.src} alt={category.name} />
        </div>
    )
}

export default CategoryItem