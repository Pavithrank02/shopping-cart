import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { addToCart } from "../../features/slices/cartSlice";
import { addToWishlist } from "../../features/slices/wishListSlice";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const wishList = useSelector((state) => state.wishList.wishList);

  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <div>
      <Card className="w-96 relative">
        <Typography
          variant="h4"
          className="mb-2 absolute -rotate-45 top-12 right-8 z-10 text-red-700"
        >
          SALE%
        </Typography>
        <CardHeader floated={false} className="h-96">
          <img src={img} alt={name} />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {text}
          </Typography>
          <div className="flex justify-between items-center pt-4">
            <Typography color="red" className="font-medium" textGradient>
              Size left:{" "}
              <span className="text-gray-400 text-base font-extralight">
                {defaultSize}
              </span>
            </Typography>
            <Typography color="gray" className="font-medium" textGradient>
              Color:{" "}
              <span
                className="px-2 rounded-full ml-2"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Add to Cart" placement="bottom">
            <Button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
                    cartEmpty: false

                  })
                )
              }
              size="lg"
              color="gray"
              variant="outlined"
              ripple={true}
            >

              {cart.length > 0 && cart.filter((item) => item.id === id).length > 0 ? "Added to Cart" : "Add to Cart"}
            </Button>
          </Tooltip>
          <Tooltip content="Wishlist" placement="bottom">
            <Button
              onClick={() => (
                dispatch(
                  addToWishlist({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
                    cartEmpty: false

                  })
                )
              )
              }
              size="lg"
              color="white"
              ripple={true}
            >
              {wishList.length > 0 && wishList.filter((item) => item.id === id).length > 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#000"
                  className="w-6 h-6"

                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#000"
                  className="w-6 h-6"

                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              )}

            </Button>
          </Tooltip>



        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductSectionItem;
