import { useState } from "react";
import {
  Stepper,
  Button,
  Group,
  TextInput,
  PasswordInput,
  Code,
  Select,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import "../MultiStepForms/customStyle.css";
import { useRegisterMutation } from "../../redux/services/authApi";
import Cookies from "js-cookie";

export default function UserCreateForm() {
  const [active, setActive] = useState(0);
  const [gender, setGender] = useState("male");
  const [register] = useRegisterMutation();

  const form = useForm({
    initialValues: {
      name: "",
      phone_number: "",
      date_birth: "",
      gender: gender,
      address: "",
      email: "",
      password: "",
      role: "",
      user_photo: "",
    },

    validate: (values) => {
      if (active === 0) {
        return {
          name:
            values.name.trim().length < 6
              ? "Username must include at least 6 characters"
              : null,
        };
      }

      if (active === 1) {
        return {
          password:
            values.password.length < 8
              ? "Password must include at least 8 characters"
              : null,
          email: /^\S+@\S+$/.test(values.email) ? null : "Invalid email",
        };
      }

      return {};
    },
  });

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 3 ? current + 1 : current;
    });

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const handleSubmit = async () => {
    const token = Cookies.get("token");
    const user = form.values;
    const data = await register({ token, user });
    console.log(data);
  };
  return (
    <div className=" my-8 w-[80%]">
      <Stepper active={active} breakpoint="sm">
        <Stepper.Step label="First step" description="Personal">
          <div className="bg-[#161618] border border-[#3f4245] rounded-md p-10 mt-5">
            <div className="grid grid-cols-12">
              <div className="col-span-2 text-white font-bold flex flex-col gap-10">
                <h1>Name</h1>
                <h1>Phone</h1>
                <h1>Date of Birth</h1>
                <h1>Gender</h1>
                <h1>Address</h1>
              </div>
              <div className="col-span-10 flex flex-col gap-[27px] text-white">
                <TextInput
                  type="text"
                  id="name"
                  name="name"
                  {...form.getInputProps("name")}
                />

                <TextInput
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  {...form.getInputProps("phone_number")}
                />

                <TextInput
                  type="text"
                  id="date_birth"
                  name="date_birth"
                  {...form.getInputProps("date_birth")}
                />

                <Select
                  placeholder="Select your gender"
                  searchable
                  {...form.getInputProps("gender")}
                  nothingFound="No options"
                  onSearchChange={setGender}
                  searchValue={gender}
                  data={["Male", "Female"]}
                  styles={{
                    root: {
                      backgroundColor: "#202124",
                    },
                    input: {
                      backgroundColor: "#202124",
                      borderColor: "#3f4245",
                      color: "white",
                    },
                    dropdown: {
                      backgroundColor: "#202124",
                      borderColor: "#3f4245",
                    },
                    item: {
                      color: "white",
                      marginBottom: "5px",

                      "&[data-selected]": {
                        "&, &:hover": {
                          backgroundColor: "#3f4245",
                          color: "#fff",
                        },
                      },
                      "&:hover": {
                        backgroundColor: "#3f4245",
                      },
                    },
                  }}
                />
                <TextInput
                  type="text"
                  name="address"
                  id="address"
                  {...form.getInputProps("address")}
                />
              </div>
            </div>
          </div>
        </Stepper.Step>

        <Stepper.Step label="Second step" description="Login Info">
          <div className="bg-[#161618] border border-[#3f4245] rounded-md p-10 mt-5">
            <div className="grid grid-cols-12">
              <div className="col-span-2 text-white font-bold flex flex-col gap-10">
                <h1>Position</h1>
                <h1>Email</h1>
                <h1>Password</h1>
              </div>
              <div className="col-span-10 flex flex-col gap-3">
                <TextInput {...form.getInputProps("role")} />
                <TextInput mt="md" {...form.getInputProps("email")} />
                <PasswordInput mt="md" {...form.getInputProps("password")} />
              </div>
            </div>
          </div>
        </Stepper.Step>

        <Stepper.Step label="Final step" description="Photo">
          <TextInput label="Photo" {...form.getInputProps("user_photo")} />
        </Stepper.Step>
        <Stepper.Completed>
          Completed! Form values:
          <Code block mt="xl">
            {JSON.stringify(form.values, null, 2)}
          </Code>
        </Stepper.Completed>
      </Stepper>

      <Group position="right" mt="xl">
        {active !== 0 && (
          <button
            onClick={prevStep}
            className="px-[16px] py-[7px] cursor-pointer flex items-center gap-2 text-white font-[600] border border-slate-200 rounded-[5px] transition-all hover:bg-slate-50 hover:text-black"
          >
            Back
          </button>
        )}
        {active !== 3 && (
          <button onClick={nextStep} className="customButton">
            Next step
          </button>
        )}
        {active === 3 && (
          <button className="customButton" onClick={handleSubmit}>
            Finish
          </button>
        )}
      </Group>
    </div>
  );
}
