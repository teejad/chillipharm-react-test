import React, {useState} from 'react';
import _ from 'lodash';
import isEmpty from 'lodash/isEmpty'

import './App.css';
import './assets/css/react-tags.css';
import data from './assets/data.json'
import Asset from './components/Asset'
import SearchTags from './components/SearchTags'

function App() {

  const [tags, setTags] = useState([])
  const suggestions = _.uniqBy(data.assets.map(asset => asset.suggestions).flat(), 'text')

  const assetFilter = asset => {
    if (tags.length === 0) { return true }

    const globalTagsText = tags.map(tag => tag.text)
    const thisAssetTagsText = asset.tags.map(tag => tag.text)
    const intersection = thisAssetTagsText.filter(string => globalTagsText.includes(string))

    return intersection.length >= tags.length
  }
  const displayedAssets = data.assets.filter(assetFilter)

  return (
     <div className="container">
      <h1>ChilliPharm Asset Tags</h1>
      <span className="title-small">Tag your assets!</span>
      <SearchTags tags={tags} setTags={setTags} suggestions={suggestions} />
      <div className="assets-container">
        { displayedAssets ? displayedAssets.map(asset => <Asset key={asset.key} asset={asset} />) : <span className="title-small">No assets matching current filter tags!</span> }
      </div>
    </div>
  );
}

export default App;
