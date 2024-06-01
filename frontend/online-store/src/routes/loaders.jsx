import { productsApi } from "../api";

const testLoader = async () => {
  const data = await productsApi.productsList();
  console.log(data);
};

export { testLoader };
