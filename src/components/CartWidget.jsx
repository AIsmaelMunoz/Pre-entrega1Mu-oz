import cart from "../assets/car.svg";

export const CartWidget = () => {
  return (
    <>
      <img src={cart} alt="carro" width={30} />
      <span>1</span>
    </>
  );
};
