import { Title, SelectBox, CookingInfoContainer, Select } from "./styled";

interface CookingInfoProps {
  title: string;
  onChange: (value: string[]) => void;
}
const data = ["hidden", "hidden", "hidden"];
const CookingInfo = ({ title, onChange }: CookingInfoProps) => {
  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    option: string
  ) => {
    if (option === "servingSize") {
      data[0] = event.target.selectedOptions[0].value;
    } else if (option === "cookingTime") {
      data[1] = event.target.selectedOptions[0].value;
    } else if (option === "difficulty") {
      data[2] = event.target.selectedOptions[0].value;
    }
    onChange(data);
  };

  return (
    <CookingInfoContainer>
      <Title>{title}</Title>
      <SelectBox>
        <Select
          id="servingSize"
          onChange={(e) => handleSelectChange(e, "servingSize")}
        >
          <option value="hidden">Serving size</option>
          <option value="For one">For one</option>
          <option value="For Two">For Two</option>
          <option value="For Three">For Three</option>
          <option value="More than Four">More than Four</option>
        </Select>
        <Select
          id="cookingTime"
          onChange={(e) => handleSelectChange(e, "cookingTime")}
        >
          <option value="hidden">Time</option>
          <option value="10 min">10 min</option>
          <option value="15 min">15 min</option>
          <option value="20 min">20 min</option>
          <option value="30 min">30 min</option>
          <option value="More than an hour">More than an hour</option>
        </Select>
        <Select
          id="difficulty"
          onChange={(e) => handleSelectChange(e, "difficulty")}
        >
          <option value="hidden">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Normal">Normal</option>
          <option value="Hard">Hard</option>
        </Select>
      </SelectBox>
    </CookingInfoContainer>
  );
};

export default CookingInfo;
