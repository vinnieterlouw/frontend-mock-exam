import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStory, fetchMe } from "../../store/space/actions";
import { selectMe } from "../../store/space/selectors";
import { createStory } from "../../store/space/actions";

export default function MySpace() {
  const dispatch = useDispatch();
  const mySpace = useSelector(selectMe);
  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);

  function submitForm(event) {
    // console.log("input", name, content, imageUrl);
    event.preventDefault();
    dispatch(createStory(name, content, imageUrl));
  }

  return (
    <div
      style={{
        backgroundColor: `${mySpace?.backgroundColor}`,
        color: `${mySpace?.color}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <button
          value={form}
          onClick={() => setForm(!form)}
          style={{
            backgroundColor: "Green",
            color: "white",

            padding: "8px",
            textDecoration: "none",
            border: "none",
            borderRadius: "15px",
          }}
        >
          Post a cool story BRO
        </button>
        {form ? (
          <form
            style={{ display: "flex", margin: "20px", flexDirection: "column" }}
          >
            <label>Name </label>
            <input
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="name me!"
            ></input>
            <label>Content </label>
            <input
              onChange={(event) => setContent(event.target.value)}
              type="text"
              placeholder="describe me!"
            ></input>
            <label>Image Url </label>
            <input
              onChange={(event) => setImageUrl(event.target.value)}
              type="text"
              placeholder="give me an imgUrl!"
            ></input>
            <button style={{ margin: "10px" }} onClick={submitForm}>
              Submit
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
      <div style={{ marginTop: "30px" }}>
        {mySpace?.stories &&
          mySpace?.stories.map((story) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4>{story.name}</h4>
                <p>{story.content}</p>
                <button
                  onClick={() => dispatch(deleteStory(story.id))}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "8px",
                    textDecoration: "none",
                    border: "none",
                    borderRadius: "15px",
                  }}
                >
                  Delete this Story
                </button>
                <img
                  src={story.imageUrl}
                  alt={story.name}
                  style={{ margin: "10px" }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
