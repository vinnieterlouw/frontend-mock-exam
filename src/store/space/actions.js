import axios from "axios";

export const getSpaces = (spacedata) => ({
  type: "spaces/getSpaces",
  payload: spacedata,
});

export const getSpacesById = (spacedataId) => ({
  type: "spaces/getSpacesById",
  payload: spacedataId,
});

export const getMe = (spaceDataMe) => ({
  type: "spaces/getMe",
  payload: spaceDataMe,
});

export const storyDeleted = (id) => ({
  type: "story/storyDeleted",
  payload: id,
});

export const fetchSpaces = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get("http://localhost:4000/");
      console.log(response);
      dispatch(getSpaces(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchSpacesById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`http://localhost:4000/details/${id}`);
      console.log("fetch data by id", response);
      dispatch(getSpacesById(response.data.space));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchMe = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`http://localhost:4000/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("fetch data by id", response);
      dispatch(getMe(response.data.spaceOfUser));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteStory = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/story/delete/${id}`
      );
      console.log("fetch data by id", response);
      dispatch(storyDeleted(id));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addStory = (data) => ({
  type: "story/add",
  payload: data,
});

export const createStory = (name, content, imageUrl) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`http://localhost:4000/auth/post`, {
        name,
        content,
        imageUrl,
      });
      console.log("response create story", response.data);
      dispatch(addStory(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
