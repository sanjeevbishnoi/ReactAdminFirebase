import firebase from 'firebase';

import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL
} from './types';

export const addProduct = (values) => async (dispatch) => {
  // console.log(values);
  // let {productName,prodctPrice,sku,discount,quantity}=values;
  let key=firebase.database().ref('products/').push({}).key;
  console.log(key);
  values.key=key;
  firebase.database().ref('products/'+key).set(values
  ).then(()=>{
      console.log('updated');
  }).catch((err)=>{
      
  });
};

export const updateProduct = (values,productID) => async (dispatch) => { 
  firebase.database().ref('products/'+productID).set(
    values
  ).then(()=>{
      console.log('updated');
  }).catch((err)=>{

  });
};

export const getProducts = () => async (dispatch) => { 
   firebase.database().ref('products/').once("value").then(((snapShot)=>{
     let products=[];
    snapShot.forEach((item=>{
      products.push(item.val());
    }));
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: products});
   }));
   //console.log(products);
};

