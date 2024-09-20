import * as PropTypes from "prop-types";
import {useForm} from "react-hook-form";


export default function UserName({list, buttonText}) {
  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: "onChange"
  });

  // const emailError = formState.errors["name"]?.message;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={"user"}>
      <h1 className={"user__title"}>User Name</h1>
      <form className={"user__form"}
            action={"#"}
            method={"POST"}
            onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className={"user__box"} name={"login"}>
          {list.map(({input, label}, id) => (
            <div className={`user__item user__item_${id + 1}`} key={id}>
              {label && <label {...label.attr}>{label.text}</label>}
              {input && <input
                {...input.attr}
                {...register(
                  ...input.validates
                )}
              />}
              {/*{emailError && <p className={"user__error"}>{emailError}</p>}*/}
              {errors.name && <p className={"user__error"}>{errors.name.message}</p>}
              {errors.surname && <p className={"user__error"}>{errors.surname.message}</p>}
            </div>
          ))}
        </fieldset>
        <button className={"user__button"} type={"submit"}>{buttonText}</button>
      </form>
    </div>
  );
}
UserName.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

