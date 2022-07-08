// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
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
  } = latestMatchDetails
  console.log(umpires)
  return (
    <div className="latest-match-card">
      <div className="image-lefttext-container">
        <div className="left-text">
          <p className="match-heading">{competingTeam}</p>
          <p className="medium-text">{date}</p>
          <p className="small-size">{venue}</p>
          <p className="small-size">{result}</p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="team-logo"
          />
        </div>
      </div>

      <hr className="hrline" />
      <div className="right-text">
        <p className="small-size">First Innings</p>
        <p className="very-small-size">{firstInnings}</p>
        <p className="small-size">Second innings</p>
        <p className="very-small-size">{secondInnings}</p>
        <p className="small-size">Man of the match</p>
        <p className="very-small-size">{manOfTheMatch}</p>
        <p className="small-size">Umpires</p>
        <p className="very-small-size">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
