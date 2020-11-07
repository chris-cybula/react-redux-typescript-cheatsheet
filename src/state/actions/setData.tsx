export type Action = { type: "SET_DATA"; payload: string };

export const setData = (data: string): Action => {
  return {
    type: "SET_DATA",
    payload: data,
  };
};
