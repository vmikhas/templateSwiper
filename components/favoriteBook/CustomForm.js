export default function CustomForm({slots, button, ...rest}) {
  return (
    <form {...rest}>
      <div>
        {slots.first}
      </div>
      <div>
        {slots.second}
      </div>
      {slots.third}
      <button className={"book__button"} type={"submit"}>{button}</button>
    </form>
  );
}
