import knife2 from "../../assets/knife2.png"
import knife3 from "../../assets/knife3.png"
import knife4 from "../../assets/knife4.png"
import knife5 from "../../assets/knife5.png"
import knife6 from "../../assets/knife6.png"

export type Category = {
    name: string,
    src: string
}

export const categories: Category[] = [
                            {name: "Разделочные ножи", src: knife2}, 
                            {name: "Ножи складные", src: knife3}, 
                            {name: "Кухонные ножи",src: knife4}, 
                            {name: "Мачете и кукри", src: knife5}, 
                            {name: "Тактического назначения", src: knife6}
                        ]