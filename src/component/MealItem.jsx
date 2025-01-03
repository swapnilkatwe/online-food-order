import demoImg from "../assets/logo.jpg";
export default function MealItem() {
    return (
            <article className="meal-item ">
                <img src={demoImg} alt="" />
                <h3>Chicken curry</h3>
                <label className="meal-item-price">9.99$</label>
                <p className="meal-item-description">Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.</p>
                <button className="button">Add to Cart</button>
            </article>
    );
}
