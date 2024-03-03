import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../features/slices/wishListSlice";

const WishList = ({ openModal, setOpen }) => {
  const wishList = useSelector((state) => state.wishList.wishList);
  console.log(wishList)

  const dispatch = useDispatch();
  return (
    <div>
      {wishList.length > 0 ? (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -50 },
            }}
          >
            <DialogHeader>Wishlist</DialogHeader>
            <DialogBody
              divider
              className="flex flex-col justify-center items-start"
            >
              {wishList.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-2 gap-5 py-4 items-start ">
                      <div>
                        <img
                          className="h-[125px] rounded-md"
                          src={item.img}
                          alt={item.name}
                        ></img>
                        <div className="flex flex-col items-start">
                          <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                            {item.name}
                          </h4>
                        </div>
                        <div className="max-w-xs">
                          <p className="text-black text-xs font-inter tracking-normal leading-none pt-2 text-justify">
                            {item.text}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col item-start ml-12 ">
                        <div className="pt-4">
                          <Tooltip
                            content="Remove from the Cart"
                            placement="bottom"
                          >
                            <Button
                              onClick={() => dispatch(removeFromWishlist(item))}
                              size="sm"
                              color="red"
                              ripple={true}
                              variant="filled"
                            >
                              Remove
                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Wish Kit</DialogHeader>
            <DialogBody divider>
              <div>
                <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                  Your list is empty
                </h1>
                <p className="text-black text-base font-inter tracking-normal leading-none ">
                  Add some products
                </p>
              </div>
            </DialogBody>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
};

export default WishList;
