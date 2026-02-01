import {
  getContacts,
  getContactDetails,
  deleteContact,
  addContact,
} from "./api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Tüm kişileri listeleme
export const useContacts = () => {
  return useQuery({
    queryKey: ["contacts", "list"],
    queryFn: getContacts,
  });
};

// Tek bir kişinin detayları
export const useContactDetails = (contactId) => {
  return useQuery({
    queryKey: ["contacts", "details", contactId],
    queryFn: () => getContactDetails(contactId),
  });
};

// Kişi silme
export function useDeleteContact(contactId) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["contacts", "delete", contactId],
    mutationFn: () => deleteContact(contactId),

    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["contacts", "list"] });
      await queryClient.invalidateQueries({
        queryKey: ["contacts", "details", contactId],
      });
    },
  });
}

// Kişi ekleme
export function useAddContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["contacts", "add"],
    mutationFn: (data) => addContact(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["contacts", "list"] });
    },
  });
}
