
export interface Product {
  id: string,
  image: string,
  discount: number,
  name: string,
  label: string,
  height: number,
  color: {
    label: string,
    hex: string,
  },
  price: number,
}