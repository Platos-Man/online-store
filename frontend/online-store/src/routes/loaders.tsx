import { ProductsApi } from "../api/client/api";

const testLoader = async () => {
  const api = new ProductsApi();
  const result = await api.productsList();
  console.log(result);
  return result;
};

export { testLoader };
