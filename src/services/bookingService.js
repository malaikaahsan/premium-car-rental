import api from "./api";

export const getBookings = async () => {
  const { data } = await api.get("/bookings");
  return data;
};

export const getBookingById = async (id) => {
  const { data } = await api.get(`/bookings/${id}`);
  return data;
};

export const createBooking = async (booking) => {
  const { data } = await api.post("/bookings", booking);
  return data;
};

export const updateBooking = async (id, booking) => {
  const { data } = await api.put(`/bookings/${id}`, booking);
  return data;
};

export const deleteBooking = async (id) => {
  await api.delete(`/bookings/${id}`);
};