import React, { useState, useEffect } from "react";
import "./articles.css";
import { countries } from "../../data";
import ArticleCard from "../../components/cards/ArticlesCard";
import Button from "../../components/button/Button";

const Articles = () => {
  const [filteredData, setFilteredData] = useState(countries);

  const [fetchData, setFetchData] = useState([]);

  const handleFilter = (continents) => {
    const dataFiltered = countries.filter((country) => {
      return country.continents[0] === continents;
    });

    setFilteredData(dataFiltered);
  };

  const handleAllData = () => {
    setFilteredData(countries);
  };

  const requestData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();
    console.log(countries);
    setFetchData(countries);
  };

  useEffect(() => {
    requestData();
  }, []);

  return (
    <>
      <Button text="All" handleClick={handleAllData} />
      <Button text="Europe" handleClick={() => handleFilter("Europe")} />
      <Button text="Africa" handleClick={() => handleFilter("Africa")} />
      <Button text="Asia" handleClick={() => handleFilter("Asia")} />
      <section className="articles">
        {filteredData.map((country) => {
          return <ArticleCard {...country} key={country.name.common} />;
        })}
      </section>
    </>
  );
};

export default Articles;
