import { removeFromCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { RxCross1 } from "react-icons/rx";

interface PropsType {
  id: string;
  img: string;
  title: string;
  price: number;
  quantity: number;
}

const CartProduct: React.FC<PropsType> = ({
  id,
  img,
  title,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-4">
        <img
          className="h-[80px] w-[80px] object-cover rounded-md shadow-md"
          src={img}
          alt={title}
        />
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-600 text-sm">
            {quantity} x <span className="font-medium">${price}.00</span>
          </p>
        </div>
      </div>

      <button
        className="text-gray-500 hover:text-red-500 transition-colors"
        onClick={handleRemoveFromCart}
        aria-label={`Hapus ${title} dari keranjang`}
      >
        <RxCross1 className="h-6 w-6" />
      </button>
    </div>
  );
};

export default CartProduct;
