import { Code, Group, Stepper, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";

const ProductsForm = () => {
  const [active, setActive] = useState(0);

  const form = useForm({
    initialValues: {
      name: "",
      actual_price: "",
      sales_price: "",
      total_stock: "",
      unit: "",
      more_information: "",
      photo: "",
      brand_id: "",
      user_id: "",
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

      //   if (active === 1) {
      //     return {
      //       password:
      //         values.password.length < 8
      //           ? "Password must include at least 8 characters"
      //           : null,
      //       email: /^\S+@\S+$/.test(values.email) ? null : "Invalid email",
      //     };
      //   }

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

  //   const handleSubmit = async () => {
  //     const token = Cookies.get("token");
  //     const data = await register(token, form.values);
  //     console.log(data);
  //   };
  return (
    <div className=" my-8 w-[80%]">
      <Stepper active={active} breakpoint="sm">
        <Stepper.Step label="First step" description="Personal">
          <div className="bg-[#161618] border border-[#3f4245] rounded-md p-10 mt-5">
            <div className="grid grid-cols-12">
              <div className="col-span-2 text-white font-bold flex flex-col gap-10">
                <h1>Name</h1>
                <h1>Brand Id</h1>
                <h1>Stock</h1>
                <h1>Unit</h1>
                <h1>More Info</h1>
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
                  id="brand_id"
                  name="brand_id"
                  {...form.getInputProps("brand_id")}
                />

                <TextInput
                  type="text"
                  name="total_stock"
                  id="total_stock"
                  {...form.getInputProps("total_stock")}
                />

                <TextInput
                  type="text"
                  name="unit"
                  id="unit"
                  {...form.getInputProps("unit")}
                />

                <TextInput
                  type="text"
                  name="more_information"
                  id="more_information"
                  {...form.getInputProps("more_information")}
                />
              </div>
            </div>
          </div>
        </Stepper.Step>

        <Stepper.Step label="Second step" description="Login Info">
          <div className="bg-[#161618] border border-[#3f4245] rounded-md p-10 mt-5">
            <div className="grid grid-cols-12">
              <div className="col-span-2 text-white font-bold flex flex-col gap-10">
                <h1>Actual Price</h1>
                <h1>Sale Price</h1>
              </div>
              <div className="col-span-10 flex flex-col gap-3">
                <TextInput {...form.getInputProps("actual_price")} />
                <TextInput mt="md" {...form.getInputProps("sales_price")} />
              </div>
            </div>
          </div>
        </Stepper.Step>

        <Stepper.Step label="Final step" description="Photo">
          <TextInput label="Photo" {...form.getInputProps("photo")} />
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
        {active === 3 && <button className="customButton">Finish</button>}
      </Group>
    </div>
  );
};

export default ProductsForm;
