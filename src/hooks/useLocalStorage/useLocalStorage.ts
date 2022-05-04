type Method = "set" | "get" | "remove";

export const useLocalStorage = (
  method: Method,
  key: string,
  value?: string
) => {
  if (method === "set" && value) {
    return localStorage.setItem(key, value);
  }
  if (method === "get") {
    return localStorage.getItem(key);
  }
  return localStorage.removeItem(key);
};
