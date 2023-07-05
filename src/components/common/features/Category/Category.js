import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { getCategoryByName } from "../../../../redux/categoriesRedux";
import { getPostsByCategoryId } from "../../../../redux/postsRedux";
import Posts from "../../features/Posts/Posts";

const Category = () => {

  const { name } = useParams();
  const catData = useSelector(categories => getCategoryByName(categories, name));
  const catId = catData ? catData.id : '';
  const catName = catData ? catData.name : '';
  const postsData = useSelector(posts => getPostsByCategoryId(posts, catId));

  if (!postsData || postsData.length === 0) return <Navigate to="/" />

  return (
    <div>
      <h2>{catName}</h2>
      <Posts posts={postsData} />
    </div>
  );
};

export default Category;