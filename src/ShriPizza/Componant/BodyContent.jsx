import React, {Component} from 'react';
import CardProduct from './CardProduct';

export default class BodyContent extends Component {

  constructor(){
    super();
    this.state={
      food:[],
      loading:false,
      page:1,
      condition:true,
    }
  }

  async componentDidMount(){
    let url ='https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68';
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({food:parsedData})

  }

//    handlePrev = async () =>{
//     let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9fee6713989e4a309cd0f70bd659d647&page=${this.state.page -1}&pageSize=10`;
//     let data = await fetch(url);
//     let parsedData = await data.json();


//    this.setState({
//     page:this.state.page-1,
//     articles:parsedData.articles,
//    })

//  }
//   handleNext = async () =>{
//     if(this.state.page+1 > Math.ceil(this.state.totalResult/10)){

//     }
//     else{
      
//     let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9fee6713989e4a309cd0f70bd659d647&page=${this.state.page +1}&pageSize=10`;
//     let data = await fetch(url);
//     let parsedData = await data.json();


//    this.setState({
//     page:this.state.page+1,
//     articles:parsedData.articles,
//    })
//   }
//  }
render(){
return (
<>
<div className='container my-3'>
<h2 className='text-center'>Food</h2>
<div className='row'>
{this.state.food.map((element)=>{
  return(
  <div className='col-md-4' key={element.id}>
    <CardProduct title={element} true={this.props.true} type={this.props.type} />
    

  </div>
  )
})}

</div>
{/* <div className='d-flex justify-content-between'>
<button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrev}>Prev</button>
<button disabled={this.state.page+1 > Math.ceil(this.state.totalResult/10)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next</button>
</div> */}
</div>
</>
  )
}

}

