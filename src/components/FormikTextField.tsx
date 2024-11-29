import { Field } from "formik";
import { TextField, InputAdornment } from "@mui/material";
import errorIcon from "@/src/assets/images/error-icon.svg";
import xIcon from "@/src/assets/images/x_square.svg";
import Image from "next/image";

interface FormikTextFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  variant?: "standard" | "filled" | "outlined";
  fullWidth?: boolean;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  value: any;
  onClear: () => void;
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
  value,
  onClear,
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
          InputProps={{
            endAdornment:
              form.errors[name] && form.touched[name] ? (
                <InputAdornment className="relative top-[-18px]" position="end">
                  <Image
                    alt="error icon"
                    src={errorIcon}
                    width={18}
                    height={18}
                    className="mr-[12px] w-[18px] h-[18px]"
                  />
                </InputAdornment>
              ) : value ? (
                <InputAdornment className="relative top-[-18px]" position="end">
                  <Image
                    onClick={() => {
                      form.setFieldValue(name, ""); // Clear the field value
                      form.setFieldTouched(name, false); // Reset touched state
                      // onClear();
                    }}
                    alt="clear icon"
                    src={xIcon}
                    width={20}
                    height={20}
                    className="cursor-pointer mr-[11px] w-[20px] h-[20px]"
                  />
                </InputAdornment>
              ) : null,
          }}
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
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottomColor: "#1B1D201A",
            },
            "& .MuiInputLabel-root": {
              color: "#474D66 !important",
              marginLeft: "16px",
              lineHeight: "unset",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#8255E3",
            },
            "& .MuiInputBase-input": {
              paddingBottom: "16px",
              paddingLeft: "16px",
              color: "#101840 !important",
              lineHeight: "24px",
              paddingTop: "1px",
            },
            "& .MuiInputBase-input:not(:placeholder-shown)": {
              paddingBottom: "8px",
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
