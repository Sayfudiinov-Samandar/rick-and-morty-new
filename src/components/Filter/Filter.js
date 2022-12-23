import React from "react";
import { FltBtn } from "../FltBtn/FltBtn";

export const Filter = ({setStatus, setGender , setSpecies}) => {

  let stastusCharacters = ["Alive", "dead", "unknow"];
  let stastusGenders = ["female", "male", "genderless", "unknown"];
  let speciesData = ["human", "humanoid", "unknown", "disease", "animal", 'planet', "alien", "robot", "cronenberg", "mythological"]

  return (
    <div>
      <h2 className="text-center">Filter</h2>
      <p
        onClick={(()=>{})}
        className="text-primary text-decoration-underline text-center"
        style={{ cursor: "pointer" }}>
        Clear all
      </p>

      <div className="accordion accordion-flush border rounded" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne">
              filter by status
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              {
                stastusCharacters.map((item,index) =><FltBtn key={index} name={"status"} text={item} index={index} setStet={setStatus} />)
              }
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo">
               Filter by species
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            {
                speciesData.map((item,index) =><FltBtn key={index} name={"species"} text={item} index={index} setStet={setSpecies} />)
              }
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree">
             Filter by gender
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            {
                stastusGenders.map((item,index) =><FltBtn key={index} name={"gender"} text={item} index={index} setStet={setGender}/>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const FilterEpisode = () => {

  return (
    <div>
      <h2 className="text-center">Filter</h2>
      <p
        onClick={(()=>{})}
        className="text-primary text-decoration-underline text-center"
        style={{ cursor: "pointer" }}>
        Clear all
      </p>

      <div className="accordion accordion-flush border rounded" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne">
              filter by episode
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};
