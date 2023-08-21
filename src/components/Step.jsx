import { Stepper } from "@mantine/core";
import { BsArrowRightShort } from "react-icons/bs";

const Step = ({ active, setActive }) => {
  return (
    <div className="flex flex-col">
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        orientation="vertical"
        allowNextStepsSelect={false}
        styles={{
          stepLabel: {
            color: "white",
          },
        }}
      >
        <Stepper.Step label="Step 1" description="Personal"></Stepper.Step>
        <Stepper.Step label="Step 2" description="Login Info"></Stepper.Step>
        <Stepper.Step label="Step 3" description="Photo"></Stepper.Step>
      </Stepper>
      {/* <button
        onClick={nextStep}
        className="self-start bg-[#8ab4f8] flex items-center gap-3 px-5 py-[10px] rounded font-semibold"
      >
        Next
        <BsArrowRightShort className="text-xl" />
      </button> */}
    </div>
  );
};

export default Step;
