import {Col} from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl, url}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div>{description}</div>
          <button onClick={() => window.open(url, '_blank')}> 
            View
          </button>
        </div>
      </div>
    </Col>
  )
}