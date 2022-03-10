const CardProduct = ({ image, name, price, discount }) => {
  return (
    <div className='col-6 col-lg-3 p-3'>
      <div className='card-product text-center pb-2 position-relative'>
        <div className='image-product mx-auto' style={{ backgroundImage: `url(${image})` }}></div>
        <div className='description px-3'>
          <h3>{name}</h3>
          <p className='price'>IDR {price}</p>
        </div>
        {discount && <span className='badge bg-secondary fs-4 fw-bold discount position-absolute'>{discount}</span>}
      </div>
    </div>
  );
};

export default CardProduct;
