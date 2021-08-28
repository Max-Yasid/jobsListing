import { connect } from 'react-redux';
import JobsList from './../components/jobsList';

const mapStateToProps = (state) => ({
    jobsList: state.jobList,
    filters: state.filters,
});

export default connect(mapStateToProps)(JobsList);