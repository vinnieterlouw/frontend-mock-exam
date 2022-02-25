const initialState = {
  allSpaces: null,
  spaceDetails: null,
  stories: null,
  me: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "spaces/getSpaces": {
      return {
        ...state,
        allSpaces: action.payload,
      };
    }
    case "spaces/getSpacesById": {
      return {
        ...state,
        spaceDetails: { ...action.payload },
      };
    }
    case "spaces/getMe": {
      return {
        ...state,
        me: { ...action.payload },
      };
    }

    case "story/storyDeleted": {
      return {
        ...state,
        me: {
          ...state.me.spaceOfUser,
          stories: state.me.stories.filter(
            (story) => story.id !== action.payload
          ),
        },
      };
    }
    // case "story/add": {
    //   return {
    //     ...state,
    //     payload: {
    //       ...state.payload,
    //       stories: [...state.payload.stories, action.payload],
    //     },
    //   };
    // }

    default: {
      return { ...state };
    }
  }
}
