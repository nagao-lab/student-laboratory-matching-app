import { Box, Skeleton, TextField } from "@mui/material";
import { useLaboratories } from "../hooks/laboratories";

type Props = {
  setFilterVal: (val: string) => void;
  toggle: boolean;
  setToggle: (val: boolean) => void;
};

export const LaboratoryFormSkeleton = () => {
  return (
    <Box
      sx={{ margin: 1.25, minWidth: 250}}
    >
    <Skeleton variant="rounded" height={56}/>
    </Box>
  )
}

export const LaboratoryForm = ({ setFilterVal }: Props) => {
  const { loading } = useLaboratories();
  if (loading) {
    return <LaboratoryFormSkeleton />
  }

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
