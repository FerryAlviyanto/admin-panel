import { IProduct } from "@/app/admin/dashboard/page";
import { setProduct } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

interface PropsType {
  srNo: number;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  product: IProduct;
}

const ProductRow = ({
  srNo,
  setOpenPopup,
  setUpdateTable,
  product,
}: PropsType) => {
  const dispatch = useAppDispatch();

  const oneEdit = () => {
    dispatch(setProduct(product));
    setOpenPopup(true);
  };

  const oneDelete = () => {};

  return (
    <tr>
      <td>
        <div>{product.name}</div>
      </td>
      <td>$ {product.price}</td>
      <td className="py-2">
        <Image src={product.imgSrc} width={40} height={40} alt="product_img" />
      </td>
      <td>
        <div className="text-2x1 flex items-center gap-2 text-gray-600">
          <CiEdit
            className="cursor-pointer hover:text-black"
            onClick={oneEdit}
          />
          <RiDeleteBin5Line
            className="text-[20px] cursor-pointer hover:text-red-600"
            onClick={oneDelete}
          />
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
