import Container from "react-bootstrap/Container";

const Layout = (props) => (
  <Container fluid styles={{ height: "100vh;" }}>
    {props.children}
  </Container>
);

export default Layout;
