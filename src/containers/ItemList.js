import { connect } from 'react-redux';
import { addFilter } from './../actions/index';
import ItemList from './../components/ItemList';

const mapDispatchToProps = (dispatch) => ({
    addFilter: (filter) => dispatch(addFilter(filter)),
});

export default connect(null, mapDispatchToProps)(ItemList);