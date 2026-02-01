import axios from "axios";

export const getContacts = async () => {
  const response = await axios.get(
    "https://65b36193770d43aba479a2f2.mockapi.io/users"
  );
  return response.data;
};

export const getContactDetails = async (contactId) => {
  const response = await axios.get(
    `https://65b36193770d43aba479a2f2.mockapi.io/users/${contactId}`
  );

  return response.data;
};

export const deleteContact = async (contactId) => {
  let data = [];
  await axios
    .delete(`https://65b36193770d43aba479a2f2.mockapi.io/users/${contactId}`)
    .then((response) => {
      data = response.data;
    });
  return data;
};

export const addContact = async (payload) => {
  let data = [];
  await axios
    .post(`https://65b36193770d43aba479a2f2.mockapi.io/users`, payload)
    .then((res) => {
      data = res.data;
    });
  return data;
};
