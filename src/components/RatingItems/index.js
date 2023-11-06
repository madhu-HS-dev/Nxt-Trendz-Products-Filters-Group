import './index.css'

const RatingItems = props => {
  const {ratingDetails, onChangeRatingItem, isRatingActive} = props
  const {ratingId, imageUrl} = ratingDetails

  const activeClassName = isRatingActive ? 'active-className' : ''

  const onClickRatingItem = () => {
    onChangeRatingItem(ratingId)
  }

  return (
    <li className="rating-image-container" onClick={onClickRatingItem}>
      <img src={imageUrl} alt={`rating ${ratingId}`} className="rating-image" />
      <p className={`up ${activeClassName}`}>& up</p>
    </li>
  )
}

export default RatingItems
