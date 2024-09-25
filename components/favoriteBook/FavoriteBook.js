import Form from "@/components/baseComponents/gui/form/Form";
import Input from "@/components/baseComponents/gui/input/Input";
import {useForm} from "react-hook-form";
import {required} from "@/constants/form";
import LabelInput from "@/components/baseComponents/gui/form/LabelInput";
import {useState} from "react";


export default function FavoriteBook({title, button}) {
  const [formData, setFormData] = useState({});

  const inputChange = (e) => {
    const {name, value} = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value
    }));
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    console.log("Отправлено:", formData);
  };

  return (
    <div className={"book"}>
      <h1 className={"book__title"}>{title}</h1>
      <Form className={"book__form"} onSubmit={onSubmit}>
        <Input
          className={"book__input"}
          name="author"
          label="Favorite author"
          autoComplete={"off"}
          defaultValue="Andersen"
          rules={required("text")}
          onChange={inputChange}
        />

        <LabelInput
          label={<p className={"book__label-text"}>Favorite book</p>}
          labelProps={{
            className: "book__label"
          }}
          className={"book__input"}
          type={"text"}
          name={"book"}
          autoComplete={"off"}
          onChange={inputChange}
        />
        <button className={"book__button"} type={"submit"}>{button}</button>
      </Form>
    </div>
  );
}
