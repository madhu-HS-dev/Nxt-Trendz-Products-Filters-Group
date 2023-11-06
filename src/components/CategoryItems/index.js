import './index.css'

const CategoryItems = props => {
  const {categoryDetails, onChangeFilterItem, isCategoryActive} = props
  const {categoryId, name} = categoryDetails

  const activeClassName = isCategoryActive ? 'active-className' : ''

  const onClickCategoryName = () => {
    onChangeFilterItem(categoryId)
  }

  return (
    <li className="category-lists-container" onClick={onClickCategoryName}>
      <p type="button" className={`category-name ${activeClassName}`}>
        {name}
      </p>
    </li>
  )
}

export default CategoryItems
