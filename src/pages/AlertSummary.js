import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AlertSummary.css";
/*import MultiRangeSlider from "../components/MultiRangeSlider";*/


import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import 'bootstrap/dist/css/bootstrap.min.css';
const animatedComponents = makeAnimated();;

import * as React from 'react';
import RangeSlider from '../components/rangeSlider';
import RangeSliderVertical from '../components/rangeSliderVertical';
import ScatterChartGraph from "../components/ScatterPlot";


import { useState,useEffect } from "react";
import GetAsData from '../components/GetTableData';
import GetData from "../components/GetData";

const AlertSummary = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    // Please sync "05 Payment Sel" to the project
  }, []);

  const onButtonContainer1Click = useCallback(() => {
    // Please sync "04 Exploration" to the project
  }, []);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/02-logging-cost");
  }, [navigate]);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/01-alert-summary");
  }, [navigate]);

  const onButtonContainer4Click = useCallback(() => {
    // Please sync "03 - Cost Analysis" to the project
  }, []);

  const onButtonContainer5Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const Source = [
    { label: "Sentinel One", value: 24 },
    { label: "Sentinel 2", value: 25 },
    { label: "All", value: 26 },
    { label: "Azure", value: 27 },
    { label: "Palo Alto", value: 28 },
  ];



  return (
    <div className="alert-summary" style={{ overflow: 'auto'}}>
      <div className="navbar1">
        <div className="navbar-item" />
        <div className="button5" onClick={onButtonContainerClick}>
          <div className="container45">
            <img className="prefix-icon5" alt="" src="../prefix5.svg" />
            <div className="text14">Payment Sel.</div>
            <img className="prefix-icon5" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="button6" onClick={onButtonContainer1Click}>
          <div className="container45">
            <img className="prefix-icon5" alt="" src="../prefix6.svg" />
            <div className="text14">Exploration</div>
            <img className="prefix-icon5" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="button7" onClick={onButtonContainer2Click}>
          <div className="container45">
            <img className="prefix-icon5" alt="" src="../prefix7.svg" />
            <div className="text14">Ingestion Volume</div>
            <img className="prefix-icon5" alt="" src="../suffix7.svg" />
          </div>
        </div>
        <div className="button8" onClick={onButtonContainer3Click}>
          <div className="container45">
            <img className="prefix-icon5" alt="" src="../prefix8.svg" />
            <div className="text16">Alert Summary</div>
            <img className="prefix-icon5" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button9" onClick={onButtonContainer4Click}>
          <div className="container45">
            <img className="prefix-icon5" alt="" src="../prefix9.svg" />
            <div className="text14">Cost Analysis</div>
            <img className="prefix-icon5" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="iconbutton13" onClick={onButtonContainer5Click}>
         <img className="homefilled-icon1" alt="" src="../homefilled1.svg" />
        </div>
      </div>
       <div className="group-parent2">
        <div className="rectangle-parent6">
          <div className="group-child32" />
          <div className="fidelity3">Fidelity</div>
          <div className="parent2">
            <div className="div18">0</div>
            <div className="div19">0.5</div>
            <div className="div20">1</div>
          </div>
        
          <div className="frequency3">Frequency</div>
          <div className="k9">10K</div>
          <div className="k10">5K</div>
          <div className="div21">0</div>
          <div className="group-child33" alt="" style={{ height: '100px'}}>
            <ScatterChartGraph/>
          </div>
          <div className="group-parent3">
            <div className="rectangle-parent7">
              <div className="group-child34" />
              <div className="high3">High</div>
            </div>
            <div className="rectangle-parent8">
              <div className="group-child35" />
              <div className="informational">Medium</div>
            </div>
            <div className="rectangle-parent9">
              <div className="group-child36" />
              <div className="informational">Low</div>
            </div>
            <div className="rectangle-parent10">
              <div className="group-child37" />
              <div className="informational">Informational</div>
            </div>
          </div>
          <div className="group-child38" alt="">
          <RangeSlider/>
          </div>
          <div id="root"></div>
          <div className="group-child39" alt="">
          <RangeSliderVertical/>
          </div>
          <div className="criticality2">{`Criticality `}</div>
        </div>
        <img
          className="playarrowfilled-icon"
          alt=""
          src="../playarrowfilled.svg"
        />
        <img
          className="skipnextfilled-icon"
          alt=""
          src="../skipnextfilled.svg"
        />
        <img
          className="skippreviousfilled-icon"
          alt=""
          src="../skippreviousfilled.svg"
        />
      </div>
      <div className="group-parent4">
        <div className="group-child40" alt="" style={{ top:'-1px' }}>
          <RangeSlider/>
          </div>
        <div className="impact-cost2">Impact Cost</div>
      </div>
      
      <div className="siem-alert-rule1">SIEM Alert Rule Summary</div>
      <div className="autocomplete5">
        <div className="wrapper5">
          <div>
            
              <div className="value22"><Select defaultValue="" options={Source} isMulti /></div>
            
            <div className="suffix7">
              </div>
          </div>
          <div className="alignment5">
            <div className="basicmenu5">
              <div className="menuitem15">
                <div className="container53">
                  <div className="menuitembasicslot15">
                    <div className="icon38">
                      <div className="navigation">
                        <img className="chevronleftfilled-icon" alt="" />
                      </div>
                    </div>
                    <div className="container54">
                      <div className="value23">Azure</div>
                      <div className="right-content15">
                        <div className="typography47">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider21">
                  <div className="rectangle15" />
                </div>
              </div>
              <div className="menuitem15">
                <div className="container53">
                  <div className="menuitembasicslot15">
                    <div className="icon38">
                      <div className="navigation">
                        <img className="chevronleftfilled-icon" alt="" />
                      </div>
                    </div>
                    <div className="container54">
                      <div className="value23">Palo Alto</div>
                      <div className="right-content15">
                        <div className="typography47">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider21">
                  <div className="rectangle15" />
                </div>
              </div>
              <div className="menuitem15">
                <div className="container53">
                  <div className="menuitembasicslot15">
                    <div className="icon38">
                      <div className="navigation">
                        <img className="chevronleftfilled-icon" alt="" />
                      </div>
                    </div>
                    <div className="container54">
                      <div className="value23">Sentinel One</div>
                      <div className="right-content15">
                        <div className="typography47">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider21">
                  <div className="rectangle15" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="helper7">
          <div className="text24">Descriptive text</div>
        </div>
        <div className="label8">
          <div className="label-background7">
            <div className="text25" style={{ top:'-15px', right:'15px' }}>Source</div>
          </div>
        </div>
      </div>
      <div className="annualized-recovery-value-container1">
        
        <div className="getdata">
          <GetData/>
          <GetAsData/>
        </div>
      </div>
      <div className="k11">$4K</div>
      <div className="div23">$0</div>
      <img
        className="downloadfilled-icon1"
        alt=""
        src="../downloadfilled1.svg"
      />
    </div>
  );
};



/*export function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

}*/

export default AlertSummary;
