export const AuthContainer = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "#4B5A67"
};

export const AuthBox = {
  minWidth: { xs: 300, sm: 500 },
  p: 2,
  display: "flex",
  flexDirection: "column",
  gap: 5,
  alignItems: "center",
  background: "linear-gradient(to bottom left, #181316 30%, #4B5A67 30%)",
  color: "white",
};

export const inputField = {
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "hsl(37, 90%, 61%)",
    borderWidth: "1.8px",
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "hsl(37, 90%, 41%)",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "hsl(37, 90%, 41%)",
  },
  "& .MuiOutlinedInput-input": {
    color: "hsl(37, 90%, 61%)",
  },
  "&:hover .MuiOutlinedInput-input": {
    color: "hsl(37, 90%, 41%)",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
    color: "hsl(37, 90%, 41%)",
  },
  "& .MuiInputLabel-outlined": {
    color: "hsl(37, 90%, 61%)",
  },
  "&:hover .MuiInputLabel-outlined": {
    color: "hsl(37, 90%, 61%)",
  },
  "& .MuiInputLabel-outlined.Mui-focused": {
    color: "hsl(37, 90%, 61%)",
  },
};
