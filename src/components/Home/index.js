// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {list: [], isLoading: true}

  componentDidMount() {
    this.getHomeItemsList()
  }

  getHomeItemsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const dataAfterConversion = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    console.log(dataAfterConversion)

    this.setState({list: dataAfterConversion, isLoading: false})
  }

  homeJsx = () => {
    const {list} = this.state
    return (
      <div className="home-container">
        <div className="home-card">
          <div className="logo-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo-image"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          <div>
            <ul className="unorder-list">
              {list.map(eachCardItem => (
                <TeamCard key={eachCardItem.id} eachCardItem={eachCardItem} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? (
      <div testid="loader" className="home-loader-container">
        <Loader type="Oval" color="black" height={50} width={50} />
      </div>
    ) : (
      this.homeJsx()
    )
  }
}

export default Home
