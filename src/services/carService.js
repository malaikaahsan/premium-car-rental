import api from "./api";

export const getCars = async () => {
  const response = await api.get("/cars");
  return response.data;
};

export async function getCarById(id) {
  const { data } = await api.get(`/cars/${id}`);
  return data;
}