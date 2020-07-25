import SideBar from '../components/SideBar'
import { connect } from 'react-redux'

const IndexPage = () => {
  return (
    <SideBar />
  )
}

const mapStateToProps = (state: any) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, undefined)(IndexPage)
