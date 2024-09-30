import {required} from "@/constants/form";
import {useState} from "react";
import CustomForm from "./CustomForm.js";
import Form from "../baseComponents/gui/form/Form.js";
import LabelInput from "../baseComponents/gui/form/LabelInput.js";
import Input from "../baseComponents/gui/input/Input.js";


export default function FavoriteBook({title, button}) {
  const [formData, setFormData] = useState({});

  const inputChange = (e) => {
    const {name, value} = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value
    }));
  };

  const slots = {
    first: [
      <Input
        className={"book__input"}
        name="author"
        label="Favorite author"
        autoComplete={"off"}
        rules={required("text")}
        onChange={inputChange}
      />
    ],
    second: [
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
    ],
    third: [
      <Input
        className={"book__input"}
        name={"quote"}
        label={"Favorite quote"}
        autoComplete={"off"}
        rules={required("text")}
        onChange={inputChange}
      />
    ]
  };

  const onSubmit = () => {
    console.log("Отправлено:", formData);
  };

  return (
    <div className={"book"}>
      <h1 className={"book__title"}>{title}</h1>
      <Form
        as={CustomForm}
        className={"book__form"}
        slots={slots}
        button={button}
        onSubmit={onSubmit}
        useFormProps={{
          mode: "onChange",
          defaultValues: {
            first: "Fet",
          }
        }}
      />
    </div>
  );
}
