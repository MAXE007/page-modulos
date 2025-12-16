import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import "./ProductCard3D.css";

export default function ProductCard3D({ product }) {
  const cover = product.images?.[0];

  return (
    <CardContainer>
      <CardBody className="pc">
        <CardItem translateZ={70} className="pc__title">
          {product.name}
        </CardItem>

        <CardItem translateZ={55} as="p" className="pc__subtitle">
          {product.subtitle}
        </CardItem>

        <CardItem translateZ={110} className="pc__media">
          {cover ? (
            <img className="pc__img" src={cover} alt={product.name} />
          ) : (
            <div className="pc__imgFallback" />
          )}
        </CardItem>

        <CardItem translateZ={40} className="pc__meta">
          <span>{product.m2} m²</span>
          <span>Ambientes: {product.rooms}</span>
          <span>{product.bathroom ? "Con baño" : "Sin baño"}</span>
          <span className="pc__badge">{product.delivery}</span>
        </CardItem>

        <div className="pc__actions">
          <CardItem
            translateZ={30}
            as="a"
            className="pc__wa"
            href={`https://wa.me/5492610000000?text=${encodeURIComponent(
              `Hola! Quiero consultar por: ${product.name}`
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </CardItem>

          <CardItem translateZ={30} as={Link} to={`/tipologias/${product.id}`} className="pc__more">
            Ver más
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
