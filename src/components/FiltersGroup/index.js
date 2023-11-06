import {BsSearch} from 'react-icons/bs'

import CategoryItems from '../CategoryItems'
import RatingItems from '../RatingItems'

import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptionsDetails,
    ratingsListDetails,
    onChangeFilterItem,
    activeCategoryId,
    activeRatingId,
    onChangeRatingItem,
    changeSearchInput,
    searchInput,
    onEnterSearch,
    clearFilter,
  } = props

  const onClickClearFilter = () => {
    clearFilter()
  }

  const onKeyDownEnter = event => {
    if (event.key === 'Enter') {
      onEnterSearch()
    }
  }

  const onChangeSearchInput = event => {
    changeSearchInput(event.target.value)
  }

  return (
    <div className="filters-group-container">
      <div className="search-bar-container">
        <input
          type="search"
          value={searchInput}
          placeholder="Search"
          className="search-bar"
          onChange={onChangeSearchInput}
          onKeyDown={onKeyDownEnter}
        />
        <BsSearch />
      </div>
      <div className="category-container">
        <h1 className="category-heading">Category</h1>
        <ul className="category-list-container">
          {categoryOptionsDetails.map(eachCategory => (
            <CategoryItems
              categoryDetails={eachCategory}
              key={eachCategory.categoryId}
              onChangeFilterItem={onChangeFilterItem}
              isCategoryActive={eachCategory.categoryId === activeCategoryId}
            />
          ))}
        </ul>
      </div>
      <div>
        <h1 className="category-heading">Rating</h1>
        <ul className="category-list-container">
          {ratingsListDetails.map(eachRating => (
            <RatingItems
              ratingDetails={eachRating}
              key={eachRating.ratingId}
              onChangeRatingItem={onChangeRatingItem}
              isRatingActive={eachRating.ratingId === activeRatingId}
            />
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="clear-filter-button"
        onClick={onClickClearFilter}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
