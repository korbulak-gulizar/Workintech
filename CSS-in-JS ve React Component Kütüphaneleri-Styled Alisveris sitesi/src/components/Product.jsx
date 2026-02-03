import styled from 'styled-components';

/*
 Product.css içindeki stik kurallarını styled componentler için kullanabilirsin.
 styled-component projeye yüklünmiş durumda. 
 Bu sayfada kullanmaya başlayabilirsin.
 Temiz kod için işi biten kod satırlarını, fonksiyonları silmeyi unutma!
*/

const ProductCard = styled.div`
  width: 180px;
  border-radius: 1rem;
  border: 1px solid black;
  margin-bottom: 2rem;
  font-size: 10px;

`;
const Category = styled.h2`
font-size: 1.2rem;
  padding: 0.5rem;
  background-color: rgb(185, 208, 250);
  margin: 0;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

const Image = styled.img`
width: 80%;
  aspect-ratio: 1/1;
  object-fit: contain;
  margin: 1rem auto;
`;
const PriceTag = styled.p`
 background-color: ${(props) =>
   props.category == 'electronics' ? 'red' : 'green'};
  border-radius: 2rem;
  color: white;
  font-weight: bold;
  padding: 0.5rem;
  text-align: center;
  width: 100px;
  margin: 1rem auto;
  cursor: pointer;
  border: 1px solid white;

  &:hover {
    border: 1px solid black;
    color: black;
    font-size: 0.75rem;
    padding: 0.4rem;
  }
 `;

const Title = styled.h3`
padding: 1rem;
`;

const Description = styled.p`
padding: 0 1rem;
`;

export default function Product(props) {
  const { product } = props;

  return (
    <ProductCard>
      <Category>{product.category}</Category>
      <Image src={product.image} />
      <PriceTag category={product.category}>{product.price}$</PriceTag>
      <Title>{product.title}</Title>
      <Description>{product.description}</Description>
    </ProductCard>
  );
}
