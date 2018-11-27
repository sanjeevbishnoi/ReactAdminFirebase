import {
  ADD_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  ADD_PRODUCT_FAIL,
  UPDATE_PRODUCT_FAIL
} from '../actions/types';

const initialState = {
  isLoadding: false,
  productList: null,
  error: '',
  msg:''
}
export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_SUCCESS:
      return { msg: action.payload,error:''};
    case ADD_PRODUCT_FAIL:
      return { msg: action.payload,error:''};
    case UPDATE_PRODUCT_SUCCESS:
      return { error: action.payload };
    case UPDATE_PRODUCT_FAIL:
      return { error: action.payload };
    case PRODUCT_LIST_SUCCESS:
      return { productList: action.payload,error:''};
    case PRODUCT_LIST_FAIL:
      return { msg: '',error:action.payload};   
    default: 
      return state;
  }
}