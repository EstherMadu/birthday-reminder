import React from "react";

export const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article div key={id} className="person">
            <img src={image} alt="birthday pics" />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
