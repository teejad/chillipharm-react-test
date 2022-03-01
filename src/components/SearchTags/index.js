import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import './TagFilter.css';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const TagFilter = ({ tags, setTags, suggestions }) => {
  const handleAddition = (tag) => {
    setTags([...tags, tag])
  }

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i))
  }

  const handleDrag = (tag, currPos, newPos) => {
    const oldTags = [...tags];
    const newTags = oldTags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    setTags(newTags)
  }

  return(
    <div className='tag-filter-container'>
      Add tags to filter:
      <ReactTags
        tags={tags}
        suggestions={suggestions}
        handleAddition={handleAddition}
        handleDelete={handleDelete}
        handleDrag={handleDrag}
        delimiters={delimiters}
      />
    </div>
  )
}

export default TagFilter
