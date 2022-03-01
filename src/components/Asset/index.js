import React, {useState} from "react";
import {WithContext as ReactTags} from "react-tag-input";
import isEmpty from 'lodash/isEmpty'


//Key codes for terminating tag input
const KeyCodes = {
    comma: 188,
    enter: 13,
  };
  //define delimiters for the tags
  const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Asset = ({ asset }) => {
    const [tags, setTags] = useState(asset.tags)
  
    //Add a new tag to the tags array
    const handleAddition = (tag) => {
      setTags([...tags, tag])
    }
  
    //Remove a tag from the tags array
    const handleDelete = (i) => {
        //Check for match and remove
        if(!isEmpty(tags)) {
            setTags(tags.filter((tag, index) => index !== i))
              }
    }


  //Update position of tag in the array
    const handleDrag = (tag, currPos, newPos) => {
      const oldTags = [...tags];
      const newTags = oldTags.slice();
  
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);
  
      setTags(newTags)
    }
  
    return(
      <div className="asset-card">
        <div className="asset-wrapper">
          <img src={asset.url} className='asset-image' alt='ChilliPharm asset' />
          <p className='asset-title'>{asset.title}</p>
          <ReactTags
            tags={tags}
            suggestions={asset.suggestions}
            handleAddition={handleAddition}
            handleDelete={handleDelete}
            handleDrag={handleDrag}
            delimiters={delimiters}
            autofocus={false}
          />
        </div>
      </div>
    )
  }
  
  export default Asset