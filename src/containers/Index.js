import { connect } from 'react-redux';
import Index from './../components/Index';
import { fillJobsList } from './../actions/index';

let mapStateToProps = (state) => ({
    filters: state.filters,
});
const mapDispatchToProps = (dispatch) => ({
    fillJobsList: (list) => dispatch(fillJobsList(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);