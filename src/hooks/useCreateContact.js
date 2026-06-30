import { useMutation } from "@tanstack/react-query";
import { createContact } from "../services/contactService";

export default function useCreateContact() {
  return useMutation({
    mutationFn: createContact,
  });
}