// import logo from './logo.svg';
import  {Component} from 'react';
import './App.css';

import BlogCard from './blogcard';  

import {isArrayEmpty} from './utils'



class App extends Component {

  state ={
    showBlog : true
  }
  // const blogArr = null

  onLikeBtnclick = (pos) => {
    const updateBlogList = this.state.blogArr;
    const updateBlogObj = updateBlogList[pos];

   

    console.log(updateBlogObj);
  }
   blogArr = [
    {
      title: "Heading 1",
      description: "In React, a div element functions similarly to a standard HTML div,serving as a generic container for other elements."
    },
    {
      title: "Heading 2",
      description: "In React, a div element functions similarly to a standard HTML div,serving as a generic container for other elements."
    },

    {
      title: "Heading 3",
      description: "In React, a div element functions similarly to a standard HTML div,serving as a generic container for other elements."
    }

  ]
 
   

   blogCard = isArrayEmpty(this.blogArr) ?['hello'] : this.blogArr.map((item,pos) => {
    // console.log(item)



    return (
      <BlogCard key={pos} title={item.title} description={item.description} onLikeBtnclick ={() => this.onLikeBtnclick(pos)}/>
      // <div className='divStyle'>

      //   <h1> {item.title}</h1>

      //   <p>{item.description} </p>

      // </div>
    )

  })

  onHideBtnClick=()=>{
    this.setState({showBlog:false})

    console.log(this.showBlog)
  }
  onShowBtnClick=()=>{
    this.setState({showBlog:true})

  }

  // const blogCard1 =  <BlogCard/>
showBlog=true


 render(){  
  console.log('Render Called')
   return (
    <div className="App">
      <h1>Learn React</h1>
      <button onClick= {this.onHideBtnClick}>{this.state.showBlog ? 'Hide List' :'Show List'}</button>
      <button onClick= {this.onShowBtnClick}>Show</button>
      <br></br>
      {
      this.state.showBlog ? this.blogCard :null
      }
      {/* {blogCard1} */}



    </div>


  );
 }
}

export default App;