import { formatPrice } from "@/lib/formatprice";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

interface ProductCard {
  id: string;
  images: string;
  name: string;
  description: string;
  price: number;
  onClick: () => void;
}
const ProductCard = (props: ProductCard) => {
  return (
    <Card key={props.id} className="max-w-[300px]">
      <Image
        src={props.images || "/placeholder-image.jpg"}
        width={400}
        height={300}
        alt={props.name}
        className="w-full h-[200px] object-cover"
      />
      <CardContent className="flex flex-col p-2">
        <h2 className="text-xl font-semibold mb-2">{props.name}</h2>
        <p className="text-gray-600 mb-2">{props.description}</p>
        <p className="text-lg font-bold mb-4">{formatPrice(props.price)}</p>
        <Button onClick={props.onClick}>Add To Cart</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
