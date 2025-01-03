import { string } from 'prop-types'

function MealItem({ id, image, name, price, description, onSelect }) {
    return (
            <article className="meal-item ">
                <img src={`http://localhost:3000/${image}`} alt="" />
                <h3>{name}</h3>
                <label className="meal-item-price">{price}</label>
                <p className="meal-item-description">{description}</p>
                <button className="button meal-item-actions" onClick={()=> onSelect(id)}>Add to Cart</button>
            </article>
    );
}
export default MealItem;

MealItem.propTypes = {
    id: string,
    image: string,
    name: string,
    price: string,
    description: string,
    onSelect: () => {}
}



