"use client";
import { useState } from "react";
import Image from "next/image";
import { TextField, Divider, Checkbox } from "@mui/material";
import { useRouter } from "next/navigation";

import uploadIcon from "../../../../../assets/images/upload.svg";
import imageUpRight from "../../../../../assets/images/arrow_up_right.svg";

import grayClock from "../../../../../assets/images/gray_clock.svg";
import grayLocation from "../../../../../assets/images/gray_location.svg";
import grayCalendar from "../../../../../assets/images/home.svg";
import infoIcon from "../../../../../assets/images/info.svg";
import rightIcon from "../../../../../assets/images/right-purple-icon.svg";
import checkMark from "../../../../../assets/images/check-mark.svg";
import rightArrow from "../../../../../assets/images/right-purple-arrow.svg";

import PhoneNumberInput from "@/src/components/PhoneInput";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikTextField from "@/src/components/FormikTextField";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  accept: boolean;
  cv: File | null;
}

const validationSchema = Yup.object({
  accept: Yup.bool().isTrue("დაეთანხმეთ წესებს"),
  firstName: Yup.string()
    .matches(/^[ა-ჰ]+$/, "ტექსტი შეავსეთ ქართულად")
    .required("სახელი აუცილებელია"),
  lastName: Yup.string()
    .matches(/^[ა-ჰ]+$/, "ტექსტი შეავსეთ ქართულად")
    .required("გვარი აუცილებელია"),
  email: Yup.string()
    .email("არასწორი ელ.ფოსტა")
    .required("ელ.ფოსტა აუცილებელია"),
  cv: Yup.mixed()
    .test("fileSize", "ფაილის ზომა არ უნდა აღემატებოდეს 5 MB-ს", (value) => {
      const file = value as File;
      return file && file.size <= 5 * 1024 * 1024;
    })
    .required("ფაილის მიმაგრება სავალდებულოა"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{9}$/, "არასოწორი მობ.ნომერი")
    .required("მობილური ნომერი აუცილებელია"),
});

const CareersList = () => {
  const [sent, setSent] = useState(false);
  const route = useRouter();

  return (
    <div>
      <div className="xl:mx-[168px] web-xl:mx-[80px]">
        {!sent ? (
          <div>
            <div className="pt-[80px] pb-[96px] flex flex-row gap-[48px]">
              <div className="flex w-full flex-col">
                <div className="flex items-center gap-[4px]">
                  <div className="bg-[#17875D] w-[9.75px] h-[9.75px] rounded-full" />
                  <div className="text-[#696F8C]">
                    29 ოქტომბერი - 29 ნოემბერი
                  </div>
                </div>
                <h1 className="text-[40px] mt-[8px] font-bold leading-[48px] text-[#101840]">
                  გაყიდვების მენეჯერი
                </h1>
                <div className="flex gap-[8px] flex-col pt-[24px]">
                  <div className="flex items-center gap-[4px]">
                    <Image
                      src={grayLocation}
                      alt={"gray location"}
                      width={20}
                      height={20}
                    />
                    <div className="text-[#696F8C] text-[16px]">
                      თბილისი, გიორგი სააკაძის ქუჩა 
                    </div>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <Image
                      src={grayCalendar}
                      alt={"gray calendar"}
                      width={20}
                      height={20}
                    />
                    <div className="text-[#696F8C] text-[16px]">ადგილზე</div>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <Image
                      src={grayClock}
                      alt={"gray clock"}
                      width={20}
                      height={20}
                    />
                    <div className="text-[#696F8C] text-[16px]">
                      10:00-19:00
                    </div>
                  </div>
                </div>

                <div className="mt-[40px]">
                  <div className="flex flex-col">
                    <h3 className="font-medium text-[#101840]">
                      ფუნქცია-მოვალეობები:
                    </h3>
                    <div className="mt-[8px]">
                      <div className="flex items-center">
                        <span className="text-[#474D66] px-[10px]">•</span>
                        <h2 className="text-[#474D66]">
                          გეგმური ვიზიტების დაგეგმვა/განხორციელება და პროდუქციის
                          პრეზენტაცია სამედიცინო დაწესებულებებში;
                        </h2>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[#474D66] px-[10px]">•</span>
                        <h2 className="text-[#474D66]">
                          მიმდინარე ანგარიშების წარმოება
                          ყოველდღიურად/ყოველკვირეულად;
                        </h2>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[#474D66] px-[10px]">•</span>
                        <h2 className="text-[#474D66]">
                          გაყიდვების გეგმების შესასრულებლად აქტიური
                          ღონისძიებების დაგეგმვა;
                        </h2>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[#474D66] px-[10px]">•</span>
                        <h2 className="text-[#474D66]">
                          სხვადასხვა მარკეტინგულ ღონისძიებებში აქტიური
                          მონაწილეობა (შეხვედრები, კონფერენციები);
                        </h2>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-medium text-[#101840] mt-[24px]">
                    საკვალიფიკაციო მოთხოვნები:
                  </h3>
                  <div className="flex flex-col mt-[16px]">
                    <h1 className="text-[#101840]">ცოდნა და გამოცდილება:</h1>
                    <div className="mt-[4px]">
                      <div className="flex items-center">
                        <span className="text-[#474D66] px-[10px]">•</span>
                        <h2 className="text-[#474D66]">
                          უმაღლესი განათლება, ფარმაციის ან მედიცინის
                          მიმართულებით;
                        </h2>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[#474D66] px-[10px]">•</span>
                        <h2 className="text-[#474D66]">
                          მინიმუმ 1 წლიანი სამუშაო გამოცდილება გაყიდვების
                          სფეროში
                        </h2>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[#474D66] px-[10px]">•</span>
                        <h2 className="text-[#474D66]">
                          რუსული ან ინგლისური ენების ცოდნა ჩაითვლება
                          უპირატესობად
                        </h2>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[#474D66] px-[10px]">•</span>
                        <h2 className="text-[#474D66]">
                          საოფისე კომპიუტერული პროგრამების ცოდნა მომხმარებლის
                          დონეზე
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-[8px]">
                    <h1 className="text-[#101840]">პიროვნული თვისებები:</h1>
                    <div className="mt-[4px]">
                      <div className="flex items-center">
                        <span className="text-[#474D66] px-[10px]">•</span>
                        <h2 className="text-[#474D66]">
                          პრეზენტაციისა და გაყიდვების უნარები
                        </h2>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[#474D66] px-[10px]">•</span>
                        <h2 className="text-[#474D66]">
                          ეფექტური კომუნიკაციის უნარი
                        </h2>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[#474D66] px-[10px]">•</span>
                        <h2 className="text-[#474D66]">თავდაჯერებულობა</h2>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[#474D66] px-[10px]">•</span>
                        <h2 className="text-[#474D66]">
                          სტრესულ სიტუაციებში მუშაობის უნარი
                        </h2>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[#474D66] px-[10px]">•</span>
                        <h2 className="text-[#474D66]">ორგანიზებულობა.</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-[40px] gap-[4px]">
                  <Image
                    alt="info icon"
                    src={infoIcon}
                    width={20}
                    height={20}
                  />
                  <h2 className="text-[#101840]">
                    განაცხადების მიღების ბოლო ვადაა 29 ნოემბერი, 2024 წელი.
                  </h2>
                </div>
              </div>

              <Formik<FormValues>
                initialValues={{
                  firstName: "",
                  accept: false,
                  lastName: "",
                  email: "",
                  cv: null,
                  phoneNumber: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  setSent(true);
                }}
              >
                {({ errors, touched, setFieldValue, values }) => {
                  return (
                    <Form className="border-[#1B1D201A] w-full max-w-[528px] border-[1px] border-solid rounded-[8px] p-[39px]">
                      <div className="flex flex-col">
                        <h1 className="text-[32px] leading-[40px] font-bold mb-[24px]">
                          განაცხადის გაგზავნა
                        </h1>

                        <div className="mb-[24px]">
                          <FormikTextField
                            name="firstName"
                            label="სახელი ქართულად"
                          />
                        </div>

                        <div className="mb-[24px]">
                          <FormikTextField
                            name="lastName"
                            label="გვარი ქართულად"
                          />
                        </div>

                        <div className="mb-[24px]">
                          <FormikTextField
                            name="email"
                            label="ელ.ფოსტა"
                            type="email"
                          />
                        </div>

                        <div className="mb-[24px] flex items-center flex-col">
                          <PhoneNumberInput name="phoneNumber" />
                          {errors.phoneNumber && touched.phoneNumber && (
                            <div
                              style={{
                                color: "#D14343",
                                fontSize: "14px",
                                lineHeight: "22px",
                                marginTop: "4px",
                                paddingBottom: "8px",
                                width: "100%",
                                paddingLeft: "16px",
                              }}
                            >
                              {errors.phoneNumber}
                            </div>
                          )}
                        </div>
                        <div className="relative mb-[24px]">
                          <div>
                            <input
                              type="file"
                              accept=".csv,.doc,.docx,.xlsx"
                              id="upload-resume"
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              onChange={(e) =>
                                setFieldValue("cv", e.target.files?.[0])
                              } // Add your file handling function here
                            />
                            <label
                              htmlFor="upload-resume"
                              className={`rounded-[8px] w-full flex items-center py-[11px] justify-center text-[#172B4D] cursor-pointer ${values.cv ? "bg-[#F8F4FF] text-[#8255E3]" : "bg-transparent text-[#172B4D] border-[1px] border-solid border-[#1B1D201A]"}`}
                            >
                              {values.cv ? (
                                // Safe check: only access `name` if `cv` is not null
                                <span className="truncate px-[50px]">
                                  {(values.cv as File).name}
                                </span>
                              ) : (
                                <>
                                  <Image
                                    alt="upload icon"
                                    height={20}
                                    src={uploadIcon}
                                    className="mr-[8px]"
                                    width={20}
                                  />
                                  <span>ატვირთეთ თქვენი რეზიუმე/CV</span>
                                </>
                              )}
                            </label>
                          </div>
                          {errors.cv && touched.cv && (
                            <div
                              style={{
                                color: "#D14343",
                                fontSize: "14px",
                                lineHeight: "22px",
                                marginTop: "4px",
                                paddingBottom: "8px",
                                width: "100%",
                                paddingLeft: "16px",
                              }}
                            >
                              {errors.cv}
                            </div>
                          )}
                        </div>

                        <Divider
                          className="w-full"
                          sx={{ backgroundColor: "##1B1D200F" }}
                        />
                      </div>
                      <div className="flex flex-col pt-[23px]">
                        <h3 className="text-[#474D66] font-medium mb-[4px]">
                          განაცხადი მონაცემთა კონფიდენციალურობის შესახებ
                        </h3>
                        <h3 className="text-[#474D66] mb-[4px]">
                          გავეცანი და ვეთანხმები. იხილეთ:
                        </h3>
                        <div className="flex items-center gap-[4px] mb-[24px]">
                          <h4 className="cursor-pointer text-[#8255E3]">
                            კონფიდენციალურობის პოლიტიკა
                          </h4>
                          <Image
                            src={imageUpRight}
                            alt="image up right"
                            width={18}
                            height={18}
                          />
                        </div>
                        <div className="flex mb-[24px] flex-col">
                          <div className="flex flex-row gap-[8px]">
                            <Checkbox
                              checked={values.accept}
                              onChange={() =>
                                setFieldValue("accept", !values.accept)
                              }
                              sx={{
                                color:
                                  errors.accept && touched.accept
                                    ? "#D14343"
                                    : "#1B1D201A",
                                height: "20px",
                                width: "20px",
                                marginTop: "5px",
                                "&.Mui-checked": {
                                  color: "#8255E3",
                                },
                              }}
                            />
                            <span className="text-[#474D66]">
                              ვეთანხმები ამ განაცხადის მიზნებისთვის ჩემი
                              მონაცემების დამუშავებას
                            </span>
                          </div>
                          {errors.accept && touched.accept && (
                            <div
                              style={{
                                color: "#D14343",
                                fontSize: "14px",
                                lineHeight: "22px",
                                marginTop: "4px",
                                paddingBottom: "8px",
                                width: "100%",
                                paddingLeft: "16px",
                              }}
                            >
                              {errors.accept}
                            </div>
                          )}
                        </div>

                        <button
                          type="submit"
                          // onClick={() => setSent(true)}
                          className="flex justify-center items-center p-[12px] flex-1 text-[16px] bg-[#8255E3] hover:bg-[#7143D1] text-white rounded-lg"
                        >
                          განაცხადის გაგზავნა
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>

            <div className="my-[80px] rounded-[16px] py-[40px] flex flex-col items-center justify-center bg-[#FAFBFF]">
              <h1 className="text-[32px] leading-[40px] text-[#101840] font-bold">
                რატომ უნდა იმუშაო იმპექსში?
              </h1>
              <h3 className="text-[#474D66] text-center py-[16px] px-[196px]">
                ჩვენ ვთვლით, რომ თანამშრომლები ყველაზე მნიშვნელოვანი აქტივია.
                ვქმნით თანაბარ შესაძლებლობებს, სადაც სხვადასხვა კულტურისა და
                ღირებულებების მქონე ადამიანებისთვის მუშაობა საინტერესო და
                გამოწვევებით სავსეა.
              </h3>
              <button
                onClick={() => route.push("/careers")}
                className="text-[#8255E3] rounded-[4px] hover:bg-[#F8F4FF] px-[12px] flex items-center text-[20px] gap-[8px] leading-[28px] border-none py-[14px]"
              >
                <span>კარიერა იმპექსში</span>
                <Image
                  alt="career icon"
                  src={rightIcon}
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        ) : (
          <div className="py-[153.5px] flex flex-col justify-center items-center">
            <Image alt="check icon" src={checkMark} height={80} width={80} />
            <h1 className="text-[32px] leading-[40px] text-[#101840] font-bold mt-[24px]">
              თქვენი განაცხადი წარმატებით გაიგზავნა
            </h1>
            <h3 className="text-[#474D66] mt-[16px] text-center">
              განვიხილავთ თქვენს გამოცდილებას და დაინტერესების შემთხვევაში
              დაგიკავშირდებით. <br />
              იმპექსის გუნდი გისურვებთ წარმატებას!
            </h3>
            <button
              onClick={() => route.push("/careers/list")}
              className="mt-[24px] flex text-[#8255E3] items-center gap-[4px]"
            >
              ვაკანსიების გვერდზე დაბრუნება
              <Image alt="rightArrow" src={rightArrow} height={18} width={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareersList;
