import React, { useState } from "react";

import "./TestFields.scss";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

const testFields = [
  "Market",
  "Segment Group",
  "Rate Plan",
  "Impacted Usercase",
  "Payment Plan",
  "Initiation Channel",
  "Function Area",
  "Impacted Application",
];

function TestFields() {
  const [testList, setTestList] = useState({
    market: "",
    segmentGroup: "",
    ratePlan: "",
    impactedUsercase: "",
    paymentPlan: "",
    initiationChannel: "",
    functionArea: "",
    impactedApplication: "",
  });

  function handleChange(e) {
    let { name, value } = e.target;
    name = name.split(" ");
    const firstWord = name[0].toLocaleLowerCase();
    const secondWord = name[1];
    name = firstWord;
    if (secondWord !== undefined) name = firstWord + secondWord;
    setTestList((pstate) => {
      return {
        ...pstate,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(testList);
  }

  return (
    <form className="testForm" onSubmit={handleSubmit}>
      <div className="summary">
        <InputField
          style={{ width: "88%" }}
          type="text"
          label="SUMMARY"
          placeholder="summary..."
          change={handleChange}
        />
      </div>
      <div className="testFields">
        {testFields.map((field, idx) => (
          <InputField
            key={idx}
            label={field}
            name={field}
            change={handleChange}
          />
        ))}
      </div>
      <Button type="submit">submit</Button>
    </form>
  );
}

export default TestFields;
