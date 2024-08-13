'use client'


import { Product } from "@prisma/client";
import { Button } from "@/components/ui/button"
import { useCart } from "@/features/cart/hooks/use-cart";
import toast from "react-hot-toast";
interface buttonProps {
    data: Product
}

const ButtonCart = ({ data}: buttonProps) => {
    const cart = useCart();
    const handleCart = (data: Product) => {
        try {
          cart.addToCart(data)
        } catch (err) {
          console.log(err)
        }
      }
    return <Button onClick={() => handleCart(data)}>Add to Cart</Button>
}

export default ButtonCart