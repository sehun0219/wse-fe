import AddButton from "@/components/common/AddButton";
import {
  IngredientWarp,
  IngredientInput,
  IngredientXButton,
  IngredientContentBox,
  ButtonWrap,
  CoreCheck,
} from "./styled";
interface Ingredient {
  ingredient: string;
  quantity: string;
}

interface IngredientFormProps {
  ingredientList: Ingredient[];
  onIngredientList: (newIngredientList: Ingredient[]) => void;
}

const IngredientForm = ({
  ingredientList,
  onIngredientList,
}: IngredientFormProps) => {
  return (
    <IngredientWarp>
      {/* <CoreCheck>중요한 아이템 3개에 체크해주세요!</CoreCheck> */}
      {ingredientList.map((ingredient, index) => {
        return (
          <IngredientContentBox key={index}>
            {/* <input type="checkbox" name="coreItem" value="true"></input> */}
            <IngredientInput
              placeholder="eg. Tomato"
              value={ingredient.ingredient}
              onChange={(e) => {
                const newIngredientList = [...ingredientList];
                newIngredientList[index].ingredient = e.target.value;
                onIngredientList(newIngredientList);
              }}
            />

            <IngredientInput
              placeholder="eg. 2 EA"
              value={ingredient.quantity}
              onChange={(e) => {
                const newIngredientList = [...ingredientList];
                newIngredientList[index].quantity = e.target.value;
                onIngredientList(newIngredientList);
              }}
            />

            {ingredientList.length > 1 && (
              <IngredientXButton
                onClick={() => {
                  onIngredientList(
                    ingredientList.filter((_, i) => i !== index)
                  );
                }}
              >
                x
              </IngredientXButton>
            )}
          </IngredientContentBox>
        );
      })}
      <ButtonWrap>
        <AddButton
          onClick={() => {
            onIngredientList([
              ...ingredientList,
              {
                ingredient: "",
                quantity: "",
              },
            ]);
          }}
        >
          + Ingredient
        </AddButton>
      </ButtonWrap>
    </IngredientWarp>
  );
};

export default IngredientForm;
