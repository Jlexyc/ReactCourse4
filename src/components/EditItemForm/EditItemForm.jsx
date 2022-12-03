import * as React from 'react';
import { connect } from 'react-redux';
import { TextField, Button, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';

import { addGoodsThunk, putGoodsThunk } from '../../rdx/goods/thunks';
import { selectIsAddGoodsLoading, selectAllGoods, selectIsAllGoodsLoading } from '../../rdx/goods/selectors';

import { withNavigate } from '../withNavigate/withNavigate';

import './EditItemForm.css';

const styles = {
  textfield: {
    pb: '10px',
  },
};

const initialItem = {
  title: '',
  description: '',
  weight: '',
  category: '',
};

class EditItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: initialItem,
    };
  }

  // componentDidUpdate() {
  //   const { isItemsLoading, navigate, items } = this.props;
  //   let itemToEdit;
  //   if (this.id && !isItemsLoading) {
  //     itemToEdit = items.find((i) => i.id === this.id);
  //     if (!itemToEdit) {
  //       navigate('/');
  //     }
  //   } else {
  //     itemToEdit = initialItem;
  //   }
  //   this.setState({ item: itemToEdit });
  // }

  onClose = () => {
    const { navigate } = this.props;
    navigate('/');
  };

  onChangeText = (event) => {
    const { item } = this.state;
    this.setState({
      item: {
        ...item,
        [event.target.name]: event.target.value,
      },
    });
  };

  onSave = () => {
    const { dispatchAddGoodsThunk, dispatchPutGoodsThunk } = this.props;
    const { item } = this.state;
    if (this.id) {
      dispatchPutGoodsThunk(item);
    } else {
      dispatchAddGoodsThunk(item);
      this.setState({ item: initialItem });
    }
  };

  render() {
    const { isLoading } = this.props;
    const { item } = this.state;
    return (
      <div className="FormContainer">
        <TextField
          name="title"
          id="filled-basic"
          label="Title"
          variant="filled"
          sx={styles.textfield}
          onChange={this.onChangeText}
          value={item.title}
        />
        <TextField
          name="description"
          id="filled-basic"
          label="Description"
          variant="filled"
          sx={styles.textfield}
          onChange={this.onChangeText}
          value={item.description}
        />
        <TextField
          name="weight"
          id="filled-basic"
          label="Weight"
          variant="filled"
          sx={styles.textfield}
          onChange={this.onChangeText}
          value={item.weight}
        />
        <TextField
          name="category"
          id="filled-basic"
          label="Category"
          variant="filled"
          sx={styles.textfield}
          onChange={this.onChangeText}
          value={item.category}
        />
        <div className="ButtonsFooter">
          {isLoading
            ? <CircularProgress />
            : <Button size="small" onClick={this.onSave}>{this.id ? 'Save' : 'Add'}</Button>}
          <Button size="small" onClick={this.onClose}>Close</Button>
        </div>
      </div>
    );
  }
}

EditItemForm.propTypes = {
  isLoading: PropTypes.bool,
  isItemsLoading: PropTypes.objectOf(PropTypes.number),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string,
  })),
  dispatchPutGoodsThunk: PropTypes.func,
  dispatchAddGoodsThunk: PropTypes.func,
  navigate: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isLoading: selectIsAddGoodsLoading(state),
  isItemsLoading: selectIsAllGoodsLoading(state),
  items: selectAllGoods(state),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchPutGoodsThunk: (item) => dispatch(putGoodsThunk(item)),
  dispatchAddGoodsThunk: (item) => dispatch(addGoodsThunk(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigate(EditItemForm));

// export const EditItemForm = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const isLoading = useSelector(selectIsAddGoodsLoading);
//   const isItemsLoading = useSelector(selectIsAllGoodsLoading);

//   const { id } = useParams();

//   const items = useSelector(selectAllGoods);
//   const [item, setItem] = React.useState(initialItem);

//   React.useEffect(() => {
//     let itemToEdit;
//     if (id && !isItemsLoading) {
//       itemToEdit = items.find((i) => i.id === id);
//       if (!itemToEdit) {
//         navigate('/');
//       }
//     } else {
//       itemToEdit = initialItem;
//     }
//     setItem(itemToEdit);
//   }, [items, id, isItemsLoading]);

//   const onClose = React.useCallback(() => {
//     navigate('/');
//   }, [navigate]);

//   const onChangeText = React.useCallback((event) => {
//     setItem({
//       ...item,
//       [event.target.name]: event.target.value,
//     });
//   }, [item]);

//   const onSave = React.useCallback(() => {
//     if (id) {
//       dispatch(putGoodsThunk(item));
//     } else {
//       dispatch(addGoodsThunk(item));
//       setItem(initialItem);
//     }
//   }, [item, dispatch]);

//   if (isItemsLoading) {
//     return (
//       <div className="FormContainer Center">
//         <CircularProgress />
//       </div>
//     );
//   }

//   return (
//     <div className="FormContainer">
//       <TextField
//         name="title"
//         id="filled-basic"
//         label="Title"
//         variant="filled"
//         sx={styles.textfield}
//         onChange={onChangeText}
//         value={item.title}
//       />
//       <TextField
//         name="description"
//         id="filled-basic"
//         label="Description"
//         variant="filled"
//         sx={styles.textfield}
//         onChange={onChangeText}
//         value={item.description}
//       />
//       <TextField
//         name="weight"
//         id="filled-basic"
//         label="Weight"
//         variant="filled"
//         sx={styles.textfield}
//         onChange={onChangeText}
//         value={item.weight}
//       />
//       <TextField
//         name="category"
//         id="filled-basic"
//         label="Category"
//         variant="filled"
//         sx={styles.textfield}
//         onChange={onChangeText}
//         value={item.category}
//       />
//       <div className="ButtonsFooter">
//         {isLoading
//           ? <CircularProgress />
//           : <Button size="small" onClick={onSave}>{id ? 'Save' : 'Add'}</Button>}
//         <Button size="small" onClick={onClose}>Close</Button>
//       </div>
//     </div>
//   );
// };
