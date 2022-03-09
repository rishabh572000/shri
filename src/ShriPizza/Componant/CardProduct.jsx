import React from 'react'

export default function CardProduct(props) {
 console.log(true);
return (
<>
<div className="card my-3" >
  <img src={props.title.img_url} className="card-img-top" alt="..." style={{height:'270px'}} />
  <div className="card-body">
    <h6 className="card-text ml-auto">
     {props.title.name} Rs. {props.title.price} 
    </h6>
    <p className='card-text'>
     {props.title.description.slice(0, 45)}...
    </p>
    <p className='card-text'>
    🌟{props.title.rating}
    </p>
  </div>
    <div className='d-flex justify-content-between my-2 mx-2'>
    <button disabled={!(props.title.size[0].isRadio && true)} type="button" className="btn btn-dark">Choose Size</button>

    <button disabled={!(props.title.toppings[0].isRadio && true)} type="button" className="btn btn-dark">Toppings</button>
    </div>

</div>
</>
)
}
