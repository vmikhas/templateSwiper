import React, {useState} from "react";
import * as PropTypes from "prop-types";


export default function LoginModal({list, buttonText}) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log("e.target-->" + e.target);
    console.log("name  ----->  " + name);
    console.log("value  ----->  " + value);
    debugger
    setFormData((data) => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправлено:", formData);
    // debugger
  };

  return (
    <div className={"login"}>
      <h1 className={"login__title"}>Login</h1>
      <form className={"login__form"}
            action={"#"}
            method={"POST"}
            onSubmit={handleSubmit}
      >
        <fieldset className={"login__box"} name={"login"}>
          {list.map(({input, label}, id) => (
            <div className={`login__item login__item_${id + 1}`} key={id}>
              {label && <label {...label.attr}>{label.text}</label>}
              {input && <input {...input} onChange={handleInputChange}/>}
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
  children: PropTypes.node
};

