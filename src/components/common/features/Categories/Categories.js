import { getAllCategories } from "../../../../redux/categoriesRedux";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categories = () => {

    const categories = useSelector(getAllCategories);

    return (
        <ListGroup>
            {categories.map(cat => (
                <ListGroup.Item>
                    <Link key={cat.id} to={"/categories/" + cat.name}>{cat.name}</Link>
                </ListGroup.Item>
            ))
            }
        </ListGroup>
    );
};

export default Categories;