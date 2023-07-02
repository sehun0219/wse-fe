import PTagForm from "@/components/features/AddRecipeForm/PTagForm";
import CategoryForm from "@/components/features/AddRecipeForm/CategoryForm";
import TextAreaForm from "@/components/features/AddRecipeForm/TextAreaForm";
import CookingInfo from "@/components/features/AddRecipeForm/CookingInfoForm";
import ImgButton from "@/components/features/AddRecipeForm/ImgButton";
import StepForm from "@/components/features/AddRecipeForm/StepForm";
import IngredientForm from "@/components/features/IngredientForm";
import { uploadRecipe } from "@/apis/recipe";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "@/store/UserContext";
import {
  Container,
  AddRecipeTitle,
  FirstSectionInputWrap,
  FirstSection,
  SecondSection,
  Br,
  Notice,
  ThirdSection,
  StepTitle,
  StepExplanation,
  ForthSection,
  Complete,
  CompleteTitle,
  CompleteImgWrap,
  DummyContainer,
  SaveButton,
  Save,
  Ingredient,
} from "./styled";
import { useState } from "react";

interface Step {
  stepDesc: string;
  imgSrc: File | string;
  id: number;
}

interface CompletedImg {
  file: File;
  preview: string;
}

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState<string>("");
  const [cookingInfo, setCookingInfo] = useState<string[]>([
    "hidden",
    "hidden",
    "hidden",
  ]);

  const [mainImg, setMainImg] = useState<null | {
    file: File;
    preview: string;
  }>(null);

  const [completedImgs, setCompletedImgs] = useState<(CompletedImg | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  const [ingredientList, setIngredientList] = useState([
    {
      ingredient: "",
      quantity: "",
    },
  ]);
  const [stepList, setStepList] = useState<Step[]>([
    {
      stepDesc: "",
      imgSrc: "",
      id: Date.now(),
    },
  ]);

  const addStep = () => {
    setStepList((prevStepList) => [
      ...prevStepList,
      { id: Date.now(), stepDesc: "", imgSrc: "" },
    ]);
  };
  const removeStep = (id: number) => {
    setStepList((prevStepList) =>
      prevStepList.filter((step) => step.id !== id)
    );
  };
  const handleImageUpload = (file: File, index: number) => {
    const newStepList = [...stepList];
    newStepList[index].imgSrc = file;
    setStepList(newStepList);
  };
  const handleCompletedImageUpload = (file: File, index: number) => {
    const newCompletedImgs = [...completedImgs];
    newCompletedImgs[index] = {
      file,
      preview: URL.createObjectURL(file),
    };
    setCompletedImgs(newCompletedImgs);
  };

  const handleStepDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const newStepList = [...stepList];
    newStepList[index].stepDesc = e.target.value;
    setStepList(newStepList);
  };

  const handleSave = async () => {
    const recipeFormData = new FormData();
    const name = userContext?.name; // 사용자의 이름에 접근
    const email = userContext?.email;
    const avatarImg = userContext?.avatarImg; // 사용자의 이메일에 접근
    if (name !== null && name !== undefined) {
      recipeFormData.append("name", name);
    }
    if (email !== null && email !== undefined) {
      recipeFormData.append("email", email);
    }
    if (avatarImg !== null && avatarImg !== undefined) {
      recipeFormData.append("avatarImg", avatarImg);
    }
    recipeFormData.append("title", title);
    recipeFormData.append("desc", desc);
    recipeFormData.append("category", category);

    recipeFormData.append("cookingInfo", cookingInfo.join(","));

    if (mainImg && mainImg.file) {
      const temp = new File([mainImg.file], Date.now() + "mainImg.png");
      recipeFormData.append("mainImg", temp);
    } else {
      alert("Please add images");
    }
    recipeFormData.append("ingredient", JSON.stringify(ingredientList));
    stepList.forEach((step, index) => {
      if (step) {
        const temp = new File([step.imgSrc], index + Date.now() + ".png");
        recipeFormData.append("cookingStep", temp);
        recipeFormData.append("cookingStepDesc", step.stepDesc);
        recipeFormData.append("cookingStepId", step.id.toString());
      }
    });
    completedImgs.forEach((completedImgs, index) => {
      if (completedImgs) {
        const temp = new File(
          [completedImgs.file],
          index + Date.now() + "completedImgs.png"
        );
        recipeFormData.append("completedImgs", temp);
      }
    });
    await uploadRecipe(recipeFormData);
    alert(`Upload the ${title} recipe`);
    navigate("/");
  };

  return (
    <Container>
      <AddRecipeTitle>Recipe Registration</AddRecipeTitle>
      <FirstSection>
        <FirstSectionInputWrap>
          <PTagForm
            title="Title"
            value={title}
            onChange={(value) => {
              setTitle(value);
            }}
            placeholder="eg. Tomato Pasta"
          />
          <TextAreaForm
            value={desc}
            onChange={(value) => {
              setDesc(value);
            }}
            title="Introduction"
            placeholder="Please write down the background of this dish"
          />
          <CategoryForm
            title="Categories"
            onChange={(value) => setCategory(value[0])}
          />
          <CookingInfo
            title="Information"
            onChange={(value) => setCookingInfo(value)}
          />
        </FirstSectionInputWrap>
        <DummyContainer>
          <ImgButton
            imgUrl={mainImg?.preview}
            onImageUpload={(file) => {
              setMainImg({
                file,
                preview: URL.createObjectURL(file),
              });
            }}
          />
        </DummyContainer>
      </FirstSection>
      <Br></Br>
      <SecondSection>
        <Ingredient>Ingredient</Ingredient>
        <Notice>
          Please write down the exact measurement information so that there are
          no leftovers or shortages
        </Notice>
        <IngredientForm
          ingredientList={ingredientList}
          onIngredientList={setIngredientList}
        />
      </SecondSection>
      <Br></Br>

      <ThirdSection>
        <StepTitle>Cooking Step</StepTitle>
        <StepExplanation>
          Please write down every important part of the dish that can affect the
          taste of the dish...
        </StepExplanation>
        <StepForm
          stepList={stepList}
          handleStepDescriptionChange={handleStepDescriptionChange}
          handleImageUpload={handleImageUpload}
          removeStep={removeStep}
          addStep={addStep}
        />
      </ThirdSection>
      <Br></Br>
      <ForthSection>
        <Complete>
          <CompleteTitle>Finished cooking photo</CompleteTitle>
          <CompleteImgWrap>
            {completedImgs.map((img, index) => (
              <ImgButton
                key={index}
                imgUrl={img?.preview}
                onImageUpload={(file) =>
                  handleCompletedImageUpload(file, index)
                }
              />
            ))}
          </CompleteImgWrap>
        </Complete>
      </ForthSection>
      <Br></Br>
      <SaveButton>
        <Save
          onClick={() => {
            const shouldSave = confirm("Should I register the recipe?");
            if (shouldSave) {
              handleSave();
            }
          }}
        >
          UpLoad
        </Save>
      </SaveButton>
    </Container>
  );
};

export default AddRecipeForm;
