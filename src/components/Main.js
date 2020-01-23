import React from "react"
import main from "../assets/img/main.png"
import bubble from "../assets/img/bubble.png"

const Main = () => (
  <div className="main">

    <div className="flex lg:flex-row flex-col h-full">

      <div className="lg:-mt-40 lg:w-1/2 sm:w-auto text-white text-center self-center ">

        <img src={bubble} alt="bubble-icon" className="bubble-pic mr-auto"/>
        <h1 className="myName mr-auto ml-auto text-4xl font-black ">Ahmat Dani Setiawan</h1>
        <br/>

        <span className="devBig">W</span><span className="lg:text-5xl font-black">eb</span>       
        &nbsp;&nbsp;
        <span className="devBig">D</span><span className="lg:text-4xl font-black">eveloper</span>
       
        
        {/* <h2>Web <br/> & <br/> Mobile </h2>     
        <h2> Developer</h2> */}
      </div>

      <div className="lg:w-1/2 sm:w-auto self-center ">
        <img src={main} alt="Main" className="main-pic object-cover mb-10 " />
      </div>

    </div>


  </div>

)

export default Main;
