import { Field } from "formik";
import { TextField } from "@mui/material";

interface FormikTextFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  variant?: "standard" | "filled" | "outlined";
  fullWidth?: boolean;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
}

const FormikTextField: React.FC<FormikTextFieldProps> = ({
  name,
  label,
  type = "text",
  placeholder = "",
  variant = "standard",
  fullWidth = true,
  validateOnBlur = true,
  validateOnChange = true,
}) => {
  return (
    <Field
      name={name}
      validateOnBlur={validateOnBlur}
      validateOnChange={validateOnChange}
      render={({ field, form }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          placeholder={placeholder}
          variant={variant}
          fullWidth={fullWidth}
          error={Boolean(form.errors[name] && form.touched[name])}
          helperText={
            form.errors[name] && form.touched[name]
              ? String(form.errors[name])
              : ""
          }
          sx={{
            "& .MuiInput-underline:before": {
              borderBottomColor: "#1B1D201A",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#8255E3",
            },
            "& .Mui-error:before": {
              borderBottomColor: "#D14343 !important",
              borderBottomWidth: "2px !important",
            },
            "& .Mui-error:after": {
              borderBottomColor: "#D14343 !important",
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottomColor: "#1B1D201A",
            },
            "& .MuiInputLabel-root": {
              color: "#474D66",
              marginLeft: "16px",
              lineHeight: 'unset',
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#8255E3",
            },
            "& .MuiInputBase-input": {
              paddingBottom: "16px",
              paddingLeft: "16px",
              color: "#101840",
              lineHeight: '24px',
              paddingTop: '1px'
            },
            "& .MuiFormHelperText-root.Mui-error": {
              color: "#D14343",
              fontSize: "14px",
              lineHeight: "22px",
              marginTop: "4px",
              paddingBottom: "8px",
              paddingLeft: "16px",
            },
          }}
        />
      )}
    />
  );
};

export default FormikTextField;
