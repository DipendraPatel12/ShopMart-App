import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
  getProducts,
  singleProduct,
  getCategoryRelatedData,
  productLiked,
} from '../redux/slices/productSlice';

export const useProducts = () => {
  const dispatch = useDispatch();
  const {
    products,
    product,
    categories,
    categoryProduct,
    loading,
    error,
  } = useSelector(state => state.product);

  const fetchProducts = useCallback(async () => {
    return await dispatch(getProducts()).unwrap();
  }, [dispatch]);

  const selectProduct = useCallback(
    productId => {
      dispatch(singleProduct(productId));
    },
    [dispatch],
  );

  const filterByCategory = useCallback(
    categoryName => {
      dispatch(getCategoryRelatedData(categoryName));
    },
    [dispatch],
  );

  const toggleProductLike = useCallback(
    productId => {
      dispatch(productLiked(productId));
    },
    [dispatch],
  );

  return {
    products,
    currentProduct: product,
    categories,
    categoryProduct,
    loading,
    error,
    fetchProducts,
    selectProduct,
    filterByCategory,
    toggleProductLike,
  };
};

export default useProducts;
