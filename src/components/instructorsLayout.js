import React, { Component } from "react";

class InstructorsLayout extends Component {
  render() {
    const { className, title, content, image } = this.props;
    return (
      <div className="instructor-layout-wrapper">
        <div className="instructors-layout__image">
          <img src={image} />
         </div>
         <div>

          <div className="instructors-layout__title">{title}</div>

          <div className="instructors-layout__content">{content}</div>
        </div>
      </div>
    );
  }
}

export default InstructorsLayout;
