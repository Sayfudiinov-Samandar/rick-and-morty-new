import React, { useState } from "react";
import { useEffect } from "react";
import { Characte } from "../../pages/Characte/Characte";
import { Card } from "../../components/Card/Card";
import { FilterEpisode } from "../../components/Filter/Filter";
export const Episode = () => {
  let [data, setData] = useState([]);
  let [atPage, setAtPage] = useState([]);

  const { info, results } = data;

  let rickapi = `https://rickandmortyapi.com/api/character/?page=${atPage}`;

  useEffect(() => {
    (async () => {
      const data = await fetch(rickapi).then((res) => res.json());
      console.log(data);
      setData(data);
    })();
  }, [rickapi]);

  return (
    <div>
      <h2 className="text-center pt-5 mb-5 h1">Episode</h2>
      <div className="row">
        <div className="col-3">
          <FilterEpisode />
        </div>
        <div className="col-9">
          {results?.length ? (
            <div className="d-flex flex-wrap gap-5">
              {results.map((item) => (
                <Card
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  location={item.location.name}
                  status={item.status}
                />
              ))}
            </div>
          ) : (
            <h2>Choracters no tfound</h2>
          )}
        </div>
      </div>
    </div>
  );
};
