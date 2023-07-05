import { useSelector } from "react-redux";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DateToStr } from "../../../../utils/dateToStr";

const Posts = ({ posts }) => {
    const categories = useSelector((state) => state.categories);
  
    return (
      <Row>
        {posts?.map((post) => {
          const category = categories.find((cat) => cat.id === post.categoryId);
  
          return (
            <Col key={post.id} xs="12" md="6" lg="4">
              <Card key={post.id} className="mt-4">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>
                    <b>Author: </b>{post.author}<br />
                    <b>Published: </b>{DateToStr(post.publishedDate)}<br />
                    <b>Category: </b>{category.name}<br />
                  </Card.Text>
                  <Card.Text>{post.shortDescription}</Card.Text>
                  <Button variant="primary" as={Link} to={"/post/" + post.id}>
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  };
  
  export default Posts;