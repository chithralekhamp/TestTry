import React from "react";
import ModalProvider from "react-modal";

import { Column, Text, Row, Button } from "components";

const TripmaThreeModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[39%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-bluegray_700_33 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col justify-start max-w-[548px] sm:mb-[38px] md:mb-[50px] mb-[73px] ml-[auto] mr-[auto] sm:p-[15px] md:p-[27px] p-[40px] sm:pl-[15px] sm:pr-[15px] rounded-radius12 shadow-bs w-[100%]">
            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
              <Text
                className="font-bold text-bluegray_500 w-[auto]"
                as="h1"
                variant="h1"
              >
                Upgrade seat
              </Text>
            </Column>
            <Text
              className="font-normal leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[100%]"
              as="h2"
              variant="h2"
            >
              Upgrade your seat for only $199, and enjoy 45 percent more leg
              room, and seats that recline 40 percent more than economy.
            </Text>
            <Column className="flex flex-col items-end justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] md:pl-[118px] sm:pl-[15px] pl-[172px] sm:pr-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:px-[0] w-[100%]">
                <Button
                  className="common-pointer cursor-pointer font-normal min-w-[33%] not-italic text-[18px] text-center text-indigo_A200 w-[max-content]"
                  onClick={props.onRequestClose}
                  shape="RoundedBorder4"
                  variant="OutlineIndigoA200"
                >
                  Cancel
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[63%] md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-[18px] text-center text-gray_51 w-[max-content]"
                  shape="RoundedBorder4"
                  variant="FillIndigoA200"
                >
                  Upgrade for $199
                </Button>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default TripmaThreeModal;
