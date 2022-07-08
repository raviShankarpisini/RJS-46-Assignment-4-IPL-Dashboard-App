// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachCardItem} = props
  const {id, name, teamImageUrl} = eachCardItem
  return (
    <Link to={`/team-matches/${id}`} className="link-style">
      <li className="list-item">
        <img className="team-image" src={teamImageUrl} alt={name} />

        <p className="team-text">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
