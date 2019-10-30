import React from 'react';

class Mywork extends React.Component {
    render(){
        return <div className="col-md-6 p-4">
        <div className="image-holder">
          <img alt={this.props.workitem.image.title} src={this.props.workitem.image.src}></img>
        </div>
        <p className="text-left">{this.props.workitem.copy}</p>
      </div>
    }
}

export default Mywork;