//rcc
import React, { Component } from "react"
import MainLayout from "../layouts/MainLayout"
import Javascript from "../assets/images/Javascript.jpg"
import ReactImage from "../assets/images/React.png"
import Bootstrap from "../assets/images/Bootstrap.jpg"
import MongoDb from "../assets/images/MongoDb.png"
import { Link } from "react-router-dom"

export default class Detail extends Component {
  state = {
    skills: [
      {
        id: 1,
        name: "Javascript",
        description:
          "Javascript is a programming language that allows you to implement complex things on web pages. Every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, or more — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.",
        image: Javascript,
      },
      {
        id: 2,
        name: "React",
        description:
          "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router are respective examples of such libraries.",
        image: ReactImage,
      },
      {
        id: 3,
        name: "Bootstrap",
        description:
          "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation and other interface components. It also provides optional JavaScript extensions. Unlike many web frameworks, it concerns itself with front-end development only. Bootstrap contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. Unlike many web frameworks, it concerns itself with front-end development only.",
        image: Bootstrap,
      },
      {
        id: 4,
        name: "MogoDb",
        description:
          "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License. MongoDB was first released in the year 2009 by Dwight Merriman, Eliot Horowitz, and Kevin Ryan. MongoDB is written in C++.",
        image: MongoDb,
      },
    ],
    data: {},
  }
  componentDidMount = () => {
    const id = this.props.match.params.id
    const data = this.state.skills.find((item) => item.id === parseInt(id))
    this.setState({ data })
  }
  render() {
    const { data } = this.state
    return (
      <MainLayout>
        <div style={container}>
          <h1>{data.name}</h1>
          <div style={box}>
            <img style={img} src={data.image} alt={data.name} />
          </div>
          <div>
            <p>{data.description}</p>
            <Link style={link} to="/">
              Back Home
            </Link>
          </div>
        </div>
      </MainLayout>
    )
  }
}

const container = {
  padding: "0 6rem",
  position: "relative",
  minHeight: "100vh",
}
const img = {
  width: "15rem",
  height: "20rem",
  marginRight: "2rem",
}

const box = {
  display: "flex",
}

const link = {
  textDecoration: "none",
  color: "#4A3933",
}
