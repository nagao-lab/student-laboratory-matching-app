import { TextField } from "@mui/material";
type Props = {
  setFilterVal: (val: string) => void;
  toggle: boolean;
  setToggle: (val: boolean) => void;
};

export const StudentForm = ({ setFilterVal }: Props) => {
  return (
    <>
      <TextField
        label="検索ワード"
        sx={{ minWidth: 250, m: 1.25 }}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      {/* <FormGroup>
        <FormControlLabel
          sx={{ m: 1.25 }}
          control={<Checkbox />}
          label="「興味あり」のみ表示"
          onChange={() => toggleComponent()}
        />
      </FormGroup> */}
    </>
  );
};
