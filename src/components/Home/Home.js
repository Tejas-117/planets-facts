import React, { useContext, useEffect, useState } from "react";
import { PlanetContext } from "../../utils/ContextProvider";
import getData from "../../utils/getData";
import "./Home.css";
import source from '../../images/icon-source.svg';
import background from '../../images/background-stars.svg';

function Home() {
  const [planet, setPlanet] = useContext(PlanetContext);
  const [tab, setTab] = useState("overview");

  // data and color associated with planet;
  const planetData = getData(planet);
  updateColor(planet);

  function updateColor(planet) {
    const root = document.querySelector(":root");
    const planetColor = getComputedStyle(root).getPropertyValue(`--${planet}`);
    root.style.setProperty("--tabBG", planetColor);
  }
  
  function updateTab(tab) {
    // changing data according to selected tab;
    const tabType = tab.dataset.tab;
    setTab(tabType);
  
    // add active state to current tab
    const tabs = [...document.querySelectorAll(".tabs li")];
    tabs.forEach((ele) => {
      ele.classList.remove("active");
    });
    tab.classList.add("active");
  }
 
  useEffect(() => {
    // adding eventlisteners to tabs
    let allTabs = [...document.querySelectorAll(".tabs li")];

    allTabs.forEach((btn) => {
      btn.addEventListener("click", (e) => updateTab(e.target));
    });
  }, []);

  useEffect(() => {
    // default active tab for all planets is 'overview' tab;
    updateTab(document.querySelector(".tabs li"));
  }, [planet]);

  
  const imgUrl = (tab !== 'structure') ? planetData.images['overview'] : planetData.images[tab]; 

  
  return (
    <div className="planet" style={{backgroundImage: `url(${background})` }}>
      <div className="image__container">
        <img
          className="planet__image"
          src={imgUrl}
          alt="Planet"
        />
        
        {(tab === 'geology')? <img className="surface__image" src={planetData.images[tab]} alt="planet surface" /> : ''}
      </div>

      <div className="content">
        <h1 className="planet__name">{planetData.name.toUpperCase()}</h1>

        <p className="planet__description">{planetData[tab].content}</p>
        <div className="source">
          <span>Source: </span>
          <a target="_blank" rel="noreferrer" href={planetData[tab].source}>
            Wikipedia
            <img
              className="chevron"
              src={source}
              alt="Go to wikipedia page"
            />
          </a>
        </div>

        <ul className="tabs">
          <li data-tab="overview">
            <span className="tabs__num">01</span>Overview
          </li>
          <li data-tab="structure">
            <span className="tabs__num">02</span>Internal Structure
          </li>
          <li data-tab="geology">
            <span className="tabs__num">03</span>Surface Geology
          </li>
        </ul>
      </div>

      <div className="planet__info">
        <div className="planet__card">
          <span>ROTATION TIME</span>
          {planetData.rotation}
        </div>
        <div className="planet__card">
          <span>REVOLUTION TIME</span>
          {planetData.revolution}
        </div>
        <div className="planet__card">
          <span>RADIUS</span>
          {planetData.radius}
        </div>
        <div className="planet__card">
          <span>AVERAGE TEMP.</span>
          {planetData.temperature}
        </div>
      </div>
    </div>
  );
}

export default Home;
