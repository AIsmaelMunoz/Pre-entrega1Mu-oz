import Container from "react-bootstrap/Container";

export const ItemListContainer = (props) => {
  return <Container className="mt-3">{props.greeting}</Container>;
};
