import React from 'react';
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import { SurveyCreator, SurveyCreatorComponent } from 'survey-creator-react';

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

const defaultJson = {
    pages: [{
      name: "Name",
      elements: [{
        name: "FirstName",
        title: "Enter your first name:",
        type: "text"
      }, {
        name: "LastName",
        title: "Enter your last name:",
        type: "text"
      }]
    }]
  };

const Survey = () => {
    const creator = new SurveyCreator(creatorOptions);
    // creator.toolbox.forceCompact = true;
    
    creator.text = JSON.stringify(defaultJson);

  return (
    <SurveyCreatorComponent creator={creator}/>
  )
}

export default Survey