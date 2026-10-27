import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
  addProduct,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  cartSuccessReset,
} from '../redux/slices/cartSlice';

export const useCart = () => {
  const dispatch = useDispatch();
  const { cart, totalItems, totalPrice, cart_success } = useSelector(
    state => state.cart,
  );

  const addToCart = useCallback(
    (product, quantity = 1) => {
      const payload = {
        id: product?.id,
        title: product?.title,
        image: product?.image,
        price: product?.price,
        quantity,
      };
      dispatch(addProduct(payload));

      // Auto-reset popup indicator
      setTimeout(() => {
        dispatch(cartSuccessReset());
      }, 1500);
    },
    [dispatch],
  );

  const increaseQty = useCallback(
    productId => {
      dispatch(increaseQuantity(productId));
    },
    [dispatch],
  );

  const decreaseQty = useCallback(
    productId => {
      dispatch(decreaseQuantity(productId));
    },
    [dispatch],
  );

  const clearCartItems = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  const resetSuccess = useCallback(() => {
    dispatch(cartSuccessReset());
  }, [dispatch]);

  return {
    cart,
    totalItems,
    totalPrice,
    cartSuccess: cart_success,
    addToCart,
    increaseQty,
    decreaseQty,
    clearCartItems,
    resetSuccess,
  };
};

export default useCart;
