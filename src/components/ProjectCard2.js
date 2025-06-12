import {Col} from "react-bootstrap";

export const ProjectCard2 = ({title, description, imgUrl, url}) => {
  return (
    <Col size={12} sm={6} md={3}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          {/* <h4>{title}</h4>
          <div>{description}</div> */}
          {/* <button>View</button> */}
        </div>
      </div>
    </Col>
  )
}