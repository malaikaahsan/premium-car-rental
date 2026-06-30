import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBooking } from "../services/bookingService";

export default function useCreateBooking() {

   const queryClient = useQueryClient();

   return useMutation({

      mutationFn: createBooking,

      onSuccess: () => {

         queryClient.invalidateQueries({
            queryKey:["bookings"]
         });

      }

   });

}