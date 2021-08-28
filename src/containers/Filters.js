import { connect } from 'react-redux'
import Filters from './../components/Filters';
import { removeFilter, removeFilters } from './../actions/index';

const mapStateToProps = (state) => ({
    filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
    removeAllFilters: () => dispatch(removeFilters()),
    removeFilter: (filter) => dispatch(removeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);