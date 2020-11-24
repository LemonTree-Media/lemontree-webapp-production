import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const IdeaNetworkContext = createContext();

const IdeaNetworkProvider = ({ children }) => {
  let [state, setState] = useState({
    name: ""
  });

  const setName = (name) => {
    setState((prevState) => ({
      ...prevState,
      name
    }));
  };

  // Create a function here that can be used by Filter.js, and the values
  // that the functions return can be used by IdeaNetworkVideoList
  const [videoType, setVideoType] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [videoStyle, setVideoStyle] = useState([]);
  const [budget, setBudget] = useState([]);
  const [ideas, setIdeas] = useState([]);

  // fetching ideas in the context directly so that it can be controlled
  // in a centralize location

  useEffect(() => {
    axios.get("http://localhost:3000/ideas").then((res) => {
      console.log(res);
      setIdeas(res.data);
    });
  }, []);

  const queryFilter = () => {
    const videoParams = videoType.map((vd) => vd.value).toString();
    const industryParams = industry.map((vd) => vd.value).toString();
    const videoStyleParams = videoStyle.map((vd) => vd.value).toString();
    const budgetParams = budget.map((vd) => vd.value).toString();
    console.log({
      videoParams,
      industryParams,
      videoStyleParams,
      budgetParams
    });
    axios
      .get(
        `http://localhost:3000/ideas?video=${videoParams}&industry=${industryParams}`
      )
      .then((res) => {
        console.log(res);
        setIdeas(res.data);
      });
  };

  //those needed to subscribe to context is: VideoContainer, IdeaNetworkVideoList
  //declaring the data in Filter.js

  return (
    <IdeaNetworkContext.Provider
      value={{
        state,
        setName,
        videoType,
        setVideoType,
        industry,
        setIndustry,
        videoStyle,
        setVideoStyle,
        budget,
        setBudget,
        ideas,
        queryFilter
      }}
    >
      {children}
    </IdeaNetworkContext.Provider>
  );
};

export { IdeaNetworkContext, IdeaNetworkProvider };