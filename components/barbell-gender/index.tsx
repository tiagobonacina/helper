import { RadioGroup, Stack, Radio } from '@chakra-ui/react';

interface BarbellGenderProps {
  setGender: React.Dispatch<React.SetStateAction<string>>;
  gender: string;
}

const BarbellGender: React.FC<BarbellGenderProps> = ({ setGender, gender }) => {
  return (
    <RadioGroup onChange={setGender} value={gender}>
      <Stack direction="row">
        <Radio value="female">Feminina</Radio>
        <Radio value="male">Masculina</Radio>
      </Stack>
    </RadioGroup>
  );
};

export default BarbellGender;
