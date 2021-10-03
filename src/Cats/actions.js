import { CAT_API_URL, setData, setError, setLoading } from "./catSlice";

export const getCatPhoto = () => async (dispatch, getState) => {
  const {
    cats: { data, loading, error },
  } = getState();

  if (!loading) {
    try {
      dispatch(setError(false));
      dispatch(setLoading(true));
      const response = await fetch(CAT_API_URL);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const result = await response.json();

      dispatch(setData(result));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setLoading(false));
    }
  }
};
