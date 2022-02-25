import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaces } from "../../store/space/actions";
import { selectSpaces } from "../../store/space/selectors";

export default function Home() {
  const dispatch = useDispatch();
  const allSpaces = useSelector(selectSpaces);

  // console.log("this is allspaces", allSpaces);

  useEffect(() => {
    dispatch(fetchSpaces());
  }, [dispatch]);

  return (
    <div>
      {allSpaces &&
        allSpaces.map((space) => {
          return (
            <div
              style={{
                backgroundColor: `${space.backgroundColor}`,
                color: `${space.color}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "10px",
              }}
            >
              <h4>{space.title}</h4>
              <p>{space.description}</p>
              <Link to={`/details/${space.userId}`}>
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "8px",
                    textDecoration: "none",
                    border: "none",
                    borderRadius: "15px",
                  }}
                >
                  Visit space
                </button>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
