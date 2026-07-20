import { categories } from "../data"
import CategoryItem from "./CategoryItem"
import "./Categories.scss"
import knife1 from "../../../assets/knife1.png" 


const Category = () => {
    return(
        <section className="categories wrapper">
            
            <CategoryItem category={{name:"Каталог ножей",src: knife1}} />
            {
                categories.map(item=>(
                    <CategoryItem category={item}/>
                ))
            }
            
            
            
        </section>
    )
}

export default Category