import React, {useState} from "react";
import * as PropTypes from "prop-types";


export default function LoginModal({list, buttonText}) {
  const [formData, setFormData] = useState({});


  return (
    <div className={"login"}>
      <h1 className={"login__title"}>Login</h1>
      <form className={"login__form"} action={"#"} method={"POST"} >
        <fieldset className={"login__box"}>
          {list.map(({input, label}, id) => (
            <div className={`login__item login__item_${id + 1}`} key={id}>
              {label && <label {...label.attr}>{label.text}</label>}
              {input && <input {...input} />}
            </div>
          ))}
        </fieldset>
        <button className={"login__button"} type={"submit"}>{buttonText}</button>
      </form>
    </div>
  );
}

LoginModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

