// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeamLogo,
    competingTeam,
    firstInnings,
    secondInnings,
    matchStatus,
  } = eachMatch

  const statusColor = matchStatus === 'Won' ? 'won' : 'loss'
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="card-image"
      />
      <p className="heading">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={statusColor}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
