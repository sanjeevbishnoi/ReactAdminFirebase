import React from 'react';
class HeaderProducts extends React.Component {
  render() {
    return (
      <div className='header'>
        <h1>{this.props.pageTitle}</h1>
        <nav className='headerNav pullRight'>
          <div className='accountMenu'>
            <button className='btnCommon' onClick={this.props.onAddClick}>Add New Proudct</button>
          </div>
        </nav>
      </div>

    );
  }
}

export default HeaderProducts;