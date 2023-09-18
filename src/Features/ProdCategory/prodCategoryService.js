import axios from "axios";
import { base_url } from "../../Utils/base_url";
import { config } from "../../Utils/axiosConfig";

const getProdCategories = async () => {
  const response = await axios.get(`${base_url}category/`);

  return response.data;

};
const createProdCategory = async (category) => {
  const response = await axios.post(`${base_url}category/`, category, config);

  return response.data;
};

const getProdCategory = async (id) => {
  const response = await axios.get(`${base_url}category/${id}`, config);

  return response.data;
};

const deleteProdCategory = async (id) => {
  const response = await axios.delete(`${base_url}category/${id}`, config);

  return response.data;
};
const updateProdCategory = async (category) => {
  console.log(category);
  const response = await axios.put(
    `${base_url}category/${category.id}`,
    { title: category.pCatData.title },
    config
  );

  return response.data;
};
const prodCategoryService = {
  getProdCategories,
  createProdCategory,
  getProdCategory,
  deleteProdCategory,
  updateProdCategory,
};

export default prodCategoryService;