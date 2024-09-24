import React, {useRef} from "react";
import {Controller, useForm} from "react-hook-form";


export default function Contacts({legendAddress, addressInput, button}) {
  const {handleSubmit, control, formState} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const errorName = formState.errors["firstName"]?.message;

  return (
    <div className={"contacts"}>
      <h1 className={"contacts__title"}>Contacts data</h1>
      <form className={"contacts__form"} name={"contacts"} action={"#"} method={"POST"} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={"contacts__group"} name={"user-name"}>
          <legend className={"contacts__legend"}>{legendAddress}</legend>
          <Controller
            control={control}
            name={addressInput.name}
            rules={{...addressInput.validates}}
            render={({field}) => (
              <label className={"contacts__text"}>
                {addressInput.label}
                <input
                  {...field}
                  {...addressInput.attr}
                  value={field.value ?? ""}
                />
              </label>
            )}
          />
          {errorName && <p className={"contacts__error"}>{errorName}</p>}
        </fieldset>
        <button className={"contacts__button"} type={"submit"}>{button}</button>
      </form>
    </div>
  );
}
