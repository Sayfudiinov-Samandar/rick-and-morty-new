import React, { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { Filter } from "../../components/Filter/Filter";
import { Pagination } from "../../components/Pagination/Pagination";
import { Seatch } from "../../components/Search/Seatch";

export const Characte = () => {
  let [atPage, setActPage] = useState(1);
  let [inpValue, setInpValue] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [data, setData] = useState([]);
  const { info, results } = data;

  let rickapi = `https://rickandmortyapi.com/api/character/?page=${atPage}&name=${inpValue}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async () => {
      const data = await fetch(rickapi).then((res) => res.json());
      console.log(data);
      setData(data);
    })();
  }, [rickapi]);

  return (
    <>
      <h2 className="text-center pt-5 h1">Choracter</h2>
      <Seatch setInpValue={setInpValue} setActPage={setActPage} />
      <div className="row">
        <div className="col-3">
          <Filter
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
          />
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

      <Pagination
        setActPage={setActPage}
        atPage={atPage}
        totalPage={info?.pages}
      />
    </>
  );
};
