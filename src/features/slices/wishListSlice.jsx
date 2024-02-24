import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    wishList: [],
    amount: 0,
    totalAmount: 0,
  },
  reducers: {
    addToWishlist(state, action) {
      const productId = action.payload;
      try {
        const exist = state.wishList.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist) {
          exist.amount++;
          state.totalAmount++;
        } else {
          state.wishList.push({
            id: productId.id,
            size: productId.size,
            amount: 1,
            img: productId.img,
            name: productId.name,
            text: productId.text,
            color: productId.color,
          });
          state.totalAmount++;
        }
      } catch (err) {
        return err;
      }
    },
    removeFromWishlist(state, action) {
      const productId = action.payload;
      try {
        const exist = state.wishList.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist.amount === 1) {
          state.wishList = state.wishList.filter(
            (product) =>
              product.id !== productId.id ||
              product.size !== productId.size ||
              product.color !== productId.color
          );
          state.totalAmount--;
        } else {
          exist.amount--;
          state.totalAmount--;
        }
      } catch (err) {
        return err;
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishListSlice.actions;
export default wishListSlice.reducer;
