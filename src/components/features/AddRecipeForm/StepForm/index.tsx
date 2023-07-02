import ImgButton from "@/components/features/AddRecipeForm/ImgButton";
import {
  Step,
  StepNum,
  StepText,
  StepItem,
  StepAddButton,
  XBtn,
} from "./styled";
interface Step {
  id: number;
  stepDesc: string;
  imgSrc: string | File;
}

interface StepFormProps {
  stepList: Step[];
  handleStepDescriptionChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => void;
  handleImageUpload: (file: File, index: number) => void;
  removeStep: (id: number) => void;
  addStep: () => void;
}

const StepForm = ({
  stepList,
  handleStepDescriptionChange,
  handleImageUpload,
  removeStep,
  addStep,
}: StepFormProps) => {
  return (
    <Step>
      {stepList.map((step, index) => (
        <StepItem key={step.id}>
          <StepNum>Step{index + 1}</StepNum>
          <StepText
            placeholder="Detailed description of the cooking steps"
            value={step.stepDesc}
            onChange={(e) => handleStepDescriptionChange(e, index)}
          />
          <ImgButton
            onImageUpload={(file) => handleImageUpload(file, index)}
            imgUrl={
              typeof step.imgSrc === "string"
                ? step.imgSrc
                : URL.createObjectURL(step.imgSrc)
            }
          />
          {stepList.length > 1 && (
            <XBtn onClick={() => removeStep(step.id)}>X</XBtn>
          )}
        </StepItem>
      ))}

      <StepAddButton onClick={addStep}>+ step</StepAddButton>
    </Step>
  );
};

export default StepForm;
