import { connect } from 'react-redux'
import Search from '../../components/dashboard/pages/search/search'
import { change } from '../actions/app'
import { searchQuestions } from '../actions/questions'

const mapStateToProps = (state, ownProps) => {
  return {
    appData: state.appData
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _appActions: {
      change: (value, fieldId, objectPropName) => {
        dispatch(change(value, fieldId, objectPropName))
      }
    },
    _questionActions: {
      searchQuestions: (filters) => {
        dispatch(searchQuestions(filters))
      }
    }
  }
}

const VisibleSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default VisibleSearch
