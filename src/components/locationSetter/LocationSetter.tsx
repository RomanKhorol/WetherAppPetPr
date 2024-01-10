import { FC } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useAppDispatch } from "../../hooks/redux";
import { weatherFetchAction } from "../../store/redusers/actionCreators/WeatherActionCreateo";
interface valueOfSityType {
  city: string;
}

const initialValueOfSity: valueOfSityType = {
  city: "",
};

export const LocationSetter: FC = () => {
  const dispatch = useAppDispatch();
  const hendleSubmitForm = (
    { city }: valueOfSityType,
    { resetForm }: FormikHelpers<valueOfSityType>
  ) => {
    if (city === "") {
      return Notify.failure("Please enter sity-name");
    } else dispatch(weatherFetchAction(city));
    resetForm();
  };
  return (
    <Formik initialValues={initialValueOfSity} onSubmit={hendleSubmitForm}>
      <div>
        <Form autoComplete="off">
          <ul>
            <li>
              <label htmlFor="city">City</label>
              <Field
                type="text"
                name="city"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </li>
          </ul>

          <button type="submit">Check wather for city</button>
        </Form>
      </div>
    </Formik>
  );
};
