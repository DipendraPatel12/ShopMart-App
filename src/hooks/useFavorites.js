import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { addFavorite, resetSuccess } from '../redux/slices/favoriteProduct';
import { productLiked } from '../redux/slices/productSlice';

export const useFavorites = () => {
  const dispatch = useDispatch();
  const { favoriteProducts, success } = useSelector(state => state.favorite);

  const isFavorite = useCallback(
    productId => {
      return favoriteProducts.some(item => item.id === productId);
    },
    [favoriteProducts],
  );

  const toggleFavorite = useCallback(
    product => {
      if (!product) return;

      dispatch(productLiked(product.id));
      dispatch(
        addFavorite({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          rating: product.rating?.rate || product.rating || 5.0,
          liked: true,
        }),
      );

      setTimeout(() => {
        dispatch(resetSuccess());
      }, 1000);
    },
    [dispatch],
  );

  return {
    favoriteProducts,
    favoriteSuccess: success,
    isFavorite,
    toggleFavorite,
  };
};

export default useFavorites;
