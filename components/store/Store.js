import React, {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import {Controller, useForm} from "react-hook-form";


export default function Store({stepOne, stepTwo, legendStepOne, legendStepTwo, button, legendAddress, addressInput}) {
  const {handleSubmit, control, setValue} = useForm();
  const [selectedStepOne, setSelectedStepOne] = useState(stepOne[2].type);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  useEffect(() => {
    setValue("stepOne", stepOne[2].type);
  }, [setValue, stepOne]);

  const onSubmit = (data) => {
    const formData = {
      ...data,
      stepTwo: selectedCheckboxes
    };
    console.log("Выбранные продукты и адрес доставки", formData);
  };

  const handleRadioChange = (value) => {
    setSelectedStepOne(value);
    setSelectedCheckboxes([]);
  };

  const handleCheckboxChange = (value) => {
    setSelectedCheckboxes((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  return (
    <div className={"store"}>
      <h1 className={"store__title"}>Go store</h1>
      <form className={"store__form"} name={"store"} action={"#"} method={"POST"} onSubmit={handleSubmit(onSubmit)}>

        <fieldset className={"store__group store__group_radio"} name={"step-one"}>
          <legend className={"store__legend"}>{legendStepOne}</legend>
          <ul className={"store__list store__list_radio"}>
            <Controller
              control={control}
              name="stepOne"
              render={({field: {onChange, value}}) => (
                stepOne.map(({input, label, type}, id) => (
                  <li className={"store__item store__item_radio"} key={id}>
                    <input
                      {...input.attr}
                      value={type}
                      checked={value === type}
                      onChange={(e) => {
                        handleRadioChange(e.target.value);
                        onChange?.(e.target.value);
                      }}
                    />
                    <label {...label.attr}>{label.text}</label>
                  </li>
                ))
              )}
            />
          </ul>
        </fieldset>

        <fieldset className={"store__group store__group_checkbox"} name={"step-two"}>
          <legend className={"store__legend"}>{legendStepTwo}</legend>
          <ul className={"store__list store__list_checkbox"}>
            <Controller
              control={control}
              name="stepTwo"
              render={({field: {onChange, value}}) => (
                stepTwo[selectedStepOne].map(({input, label}, id) => (
                  <div className={"store__item store__item_checkbox"} key={id}>
                    <input
                      {...input.attr}
                      value={input.attr.id}
                      checked={selectedCheckboxes.includes(input.attr.id)}
                      onChange={(e) => handleCheckboxChange(e.target.value)}
                    />
                    <label {...label.attr}>{label.text}</label>
                  </div>
                ))
              )}
            />
          </ul>
        </fieldset>

        <button type="submit" className="store__button">{button}</button>

        <fieldset className={"store__group"} name={"address"}>
          <legend className={"store__legend"}>{legendAddress}</legend>
          <Controller
            control={control}
            name={addressInput.name}
            rules={{...addressInput.validates}}
            render={({field}) => (
              <label className={"store__text"}>
                {addressInput.label}
                <input
                  {...field}
                  {...addressInput.attr}
                  value ={field.value ?? ""}
                />
              </label>
            )}
          />
        </fieldset>
      </form>
    </div>
  );
}

Store.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
