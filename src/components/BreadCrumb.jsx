import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

function BreadCrumb() {
  const location = useLocation();
  console.log(location.pathname);
  const Styles = styled.div`
    .breadcrumb {
      margin: 0.55em 0.5em;
      padding: 0.35em 0.5em;
      width: fit-content;
    }
    a {
      color: black;
      font-weight: 600;
      &:hover {
        color: palevioletred;
      }
    }
  `;

  const items = [
    { href: "/", name: "Shows" },
    { href: "/myshows", name: "My Shows" },
  ];

  return (
    <Styles>
      <Breadcrumb>
        {items.map((item) =>
          item.href === location.pathname ? (
            <Breadcrumb.Item active>{item.name}</Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item linkProps={{ to: item.href }} linkAs={Link}>
              {item.name}
            </Breadcrumb.Item>
          )
        )}
      </Breadcrumb>
    </Styles>
  );
}

export default BreadCrumb;
