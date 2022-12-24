import React from "react";
import ModalProvider from "react-modal";

import {
  Column,
  Row,
  Text,
  Img,
  Input,
  CheckBox,
  Button,
  Line,
} from "components";
import { useGoogleLogin } from "@react-oauth/google";

const TripmaEightModal = (props) => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  function handleNavigate1() {
    window.location.href = "https://accounts.google.com/";
  }
  function handleNavigate2() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[40%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-bluegray_700_33 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col items-center justify-start max-w-[568px] ml-[auto] mr-[auto] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:p-[15px] md:p-[27px] p-[40px] sm:pl-[15px] sm:pr-[15px] rounded-radius12 shadow-bs w-[100%]">
            <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Text
                  className="flex-grow font-bold text-bluegray_500"
                  as="h1"
                  variant="h1"
                >
                  Sign up for Tripma
                </Text>
                <Img
                  src="images/img_close_1.svg"
                  className="common-pointer flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                  onClick={props.onRequestClose}
                  alt="close"
                />
              </Row>
              <Text
                className="font-normal leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[100%]"
                as="h2"
                variant="h2"
              >
                Tripma is totally free to use. Sign up using your email address
                or phone number below to get started.
              </Text>
            </Column>
            <Input
              className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
              wrapClassName="md:mt-[13px] mt-[20px] sm:mt-[10px] w-[100%]"
              type="email"
              name="basetextin"
              placeholder="Email or phone number"
            ></Input>
            <Input
              className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
              wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
              type="password"
              name="basetextin One"
              placeholder="Password"
            ></Input>
            <Column className="flex flex-col items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
              <CheckBox
                className="font-normal not-italic text-[16px] text-bluegray_500 w-[100%]"
                inputClassName="h-[16px] mr-[5px] w-[16px]"
                name="label Two"
                label="I agree to the terms and conditions"
                size="sm"
              ></CheckBox>
              <CheckBox
                className="font-normal not-italic text-[16px] text-bluegray_500 w-[100%]"
                inputClassName="h-[16px] mr-[5px] w-[16px]"
                name="label Three"
                label="Send me the latest deal alerts"
                size="md"
              ></CheckBox>
            </Column>
            <Button
              className="cursor-pointer font-normal min-w-[100%] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-[18px] text-center text-gray_51 w-[max-content]"
              shape="RoundedBorder4"
              variant="FillIndigoA200"
            >
              Create account
            </Button>
            <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] pt-[12px] sm:pt-[6px] md:pt-[8px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                <Line className="bg-bluegray_100 h-[1px] sm:my-[4px] md:my-[5px] my-[8px] sm:w-[100%] w-[47%]" />
                <Text
                  className="font-normal not-italic text-bluegray_400 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  or
                </Text>
                <Line className="bg-bluegray_100 h-[1px] sm:my-[4px] md:my-[5px] my-[8px] sm:w-[100%] w-[47%]" />
              </Row>
              <Row
                className="common-pointer border border-indigo_A200 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[11px] md:mt-[15px] mt-[22px] p-[11px] sm:p-[5px] md:p-[7px] rounded-radius4 w-[100%]"
                onClick={googleSignIn}
              >
                <Img
                  src="images/img_google.svg"
                  className="common-pointer flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] md:w-[12px] w-[18px] sm:w-[9px]"
                  onClick={handleNavigate1}
                  alt="google"
                />
                <Text
                  className="flex-grow font-normal ml-[118px] sm:ml-[62px] md:ml-[81px] not-italic text-indigo_A200"
                  as="h2"
                  variant="h2"
                >
                  Continue with Google
                </Text>
              </Row>
              <Row className="border border-indigo_A200 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[6px] md:mt-[8px] p-[11px] sm:p-[5px] md:p-[7px] rounded-radius4 w-[100%]">
                <Img
                  src="images/img_user_18X18.svg"
                  className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] rounded-radius4 md:w-[12px] w-[18px] sm:w-[9px]"
                  alt="user"
                />
                <Text
                  className="flex-grow font-normal ml-[122px] sm:ml-[64px] md:ml-[83px] not-italic text-indigo_A200"
                  as="h2"
                  variant="h2"
                >
                  Continue with Apple
                </Text>
              </Row>
              <Row className="border border-indigo_A200 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[6px] md:mt-[8px] p-[11px] sm:p-[5px] md:p-[7px] rounded-radius4 w-[100%]">
                <Img
                  src="images/img_facebook_18X18.svg"
                  className="common-pointer flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] md:w-[12px] w-[18px] sm:w-[9px]"
                  onClick={handleNavigate2}
                  alt="facebook"
                />
                <Text
                  className="flex-grow font-normal mb-[4px] ml-[109px] sm:ml-[58px] md:ml-[75px] not-italic text-indigo_A200"
                  as="h2"
                  variant="h2"
                >
                  Continue with Facebook
                </Text>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default TripmaEightModal;
