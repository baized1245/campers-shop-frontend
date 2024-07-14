import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TProduct } from "@/types/products/productsType";
import { useCreateProductMutation } from "@/redux/features/products/productApi";
import { Plus } from "lucide-react";

export function ProductModal({ product }: { product: TProduct }) {
  const { register, handleSubmit } = useForm();
  const [createProduct] = useCreateProductMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const productdata = {
      // ...values,
      name: data.name,
      price: data.price,
      stock: data.stock,
      description: data.description,
      category: data.category,
      ratings: data.ratings,
      images: data.images,
    };
    console.log(data);
    try {
      const res = await createProduct(productdata).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          Add
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-800 text-white border-0">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl font-bold text-yellow-400">
            Add a product
          </DialogTitle>
          <h1 className="text-center text-2xl ">{product?.name}</h1>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4 text-gray-900">
            <Input
              type="name"
              placeholder="Product name"
              className="col-span-3"
              {...register("name")}
            />
            <Input
              type="number"
              placeholder="price"
              className="col-span-3"
              {...register("price")}
            />
            <Input
              type="number"
              placeholder="stock"
              className="col-span-3"
              {...register("stock")}
            />
            <Input
              type="text"
              placeholder="description"
              className="col-span-3"
              {...register("description")}
            />
            <Input
              type="text"
              placeholder="category"
              className="col-span-3"
              {...register("category")}
            />
            <Input
              type="number"
              placeholder="rating"
              className="col-span-3"
              {...register("ratings")}
            />
            <Input
              type="text"
              placeholder="img url"
              className="col-span-3"
              {...register("images")}
            />
          </div>

          <DialogFooter>
            <Button color="yellow" type="submit" className="w-full">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
