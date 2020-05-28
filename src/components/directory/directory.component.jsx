import React from 'react';

import MenuItem from '../menu-item/menu-item.component.jsx';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super ();

    this.state = {
      sections: [{
        title: 'HATS',
        imageUrl: 'https://i.ibb.co/tZqCBRZ/hats.jpg',
        id: 1
      }, {
        title: 'JACKETS',
        imageUrl: 'https://i.ibb.co/k96vGpV/jackets.jpg',
        id: 2
      }, {
        title: 'SNEAKERS',
        imageUrl: 'https://i.ibb.co/qYfZCqm/sneakers.jpg',
        id: 3
      }, {
        title: 'WOMEN',
        imageUrl: 'https://i.ibb.co/gy2CHcF/women.jpg',
        size: 'large',
        id: 4
      }, {
        title: 'MEN',
        imageUrl: 'https://i.ibb.co/1R5D92Z/men.jpg',
        size: 'large',
        id: 5
      }]
    }
  }

  render() {
    return (
      <div className = 'directory-menu'>
        {
          this.state.sections.map(({title, imageUrl, id, size}) => (
            <MenuItem key = {id} title = {title} imageUrl = {imageUrl} size = {size} />
          ))
        }
      </div>
    );
  }
}

export default Directory;
