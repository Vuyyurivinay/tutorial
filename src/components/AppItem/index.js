// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <>
      <li className="project-item-container">
        <img src={imageUrl} className="project-item-image" alt={appName} />
        <p className="heading">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
