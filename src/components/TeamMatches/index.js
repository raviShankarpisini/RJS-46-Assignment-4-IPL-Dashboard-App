// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {list: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatchesCardDetails()
  }

  getTeamMatchesCardDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const request = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await request.json()

    const newData = {
      teamBannerUrl: data.team_banner_url,
    }
    const latestMatchDetails = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      competingTeam: data.latest_match_details.competing_team,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }
    console.log(latestMatchDetails)

    const recentMatches = data.recent_matches.map(eachRecentMatch => ({
      umpires: eachRecentMatch.umpires,
      result: eachRecentMatch.result,
      manOfTheMatch: eachRecentMatch.man_of_the_match,
      id: eachRecentMatch.id,
      date: eachRecentMatch.date,
      venue: eachRecentMatch.venue,
      competingTeamLogo: eachRecentMatch.competing_team_logo,
      competingTeam: eachRecentMatch.competing_team,
      firstInnings: eachRecentMatch.first_innings,
      secondInnings: eachRecentMatch.second_innings,
      matchStatus: eachRecentMatch.match_status,
    }))

    console.log(recentMatches)

    const newList = {newData, latestMatchDetails, recentMatches}
    this.setState({list: newList, isLoading: false})
  }

  TeamMatchesJsx = () => {
    const {list} = this.state
    const {newData, latestMatchDetails, recentMatches} = list
    // below 3 lines are for "iam given background image style with id name,so to use id in container,i redefined id "
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`team-matches-container ${id}`}>
        <img
          src={newData.teamBannerUrl}
          alt="team banner"
          className="banner-image"
        />
        <p className="heading-text">Latest Matches</p>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <div>
          <ul className="cards-container">
            {recentMatches.map(eachMatch => (
              <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return isLoading ? (
      <div testid="loader" className={`loader-container ${id}`}>
        <Loader type="Audio" color="white" height={50} width={50} />
      </div>
    ) : (
      this.TeamMatchesJsx()
    )
  }
}

export default TeamMatches
