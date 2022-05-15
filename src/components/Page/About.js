import React, { Component } from "react";
import "./About.css";
import Image from "react-bootstrap/esm/Image";
import Container from "react-bootstrap/esm/Container";

// import image1 from "../../assets/pexels-maxime-francis-2246476.jpg";
// import image2 from "../../assets/pexels-piccinng-3075993.jpg";
// import { render } from "react-dom";

// const About = () => {

//   return (

//   )

// };

// export { About };

// export default class About extends Component {
//   render() {
//     return (
//       <div className="gallery">
//         <img src={image1} />
//         <img src={image2} />
//       </div>
//     );
//   }
// }

class About extends Component {
  render() {
    return (
      <Container>
        <div className="gallery">
          <Image src="https://picsum.photos/id/1/200/200" />
          <Image src="https://picsum.photos/id/1/200/200" />
          <Image src="https://picsum.photos/id/1/200/200" />
        </div>
      </Container>
    );
  }
}

export { About };
