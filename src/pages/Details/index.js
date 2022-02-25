import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpacesById } from "../../store/space/actions";
import { selectSpaceDetails } from "../../store/space/selectors";

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const SpaceById = useSelector(selectSpaceDetails);

  // console.log("this is SpaceById", SpaceById);

  useEffect(() => {
    dispatch(fetchSpacesById(id));
  }, [id, dispatch]);

  return (
    <div
      style={{
        backgroundColor: `${SpaceById?.backgroundColor}`,
        color: `${SpaceById?.color}`,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        {SpaceById?.stories &&
          SpaceById?.stories.map((space) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4>{space.name}</h4>
                <p>{space.content}</p>
                <img src={space.imageUrl} alt={space.name} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
