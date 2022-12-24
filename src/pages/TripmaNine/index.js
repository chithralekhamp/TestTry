import React from "react";

import {
  Column,
  Stack,
  Img,
  Text,
  List,
  Row,
  Line,
  RadioGroup,
  Radio,
  Button,
} from "components";

const TripmaNinePage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-nunitosans items-center justify-end mx-[auto] w-[100%]">
        <Stack className="h-[1999px] md:pb-[126px] pb-[184px] sm:pb-[98px] relative w-[100%]">
          <Stack className="absolute h-[1814px] inset-x-[0] mx-[auto] sm:w-[100%] w-[99%]">
            <Img
              src="images/img_rectangle10.svg"
              className="absolute h-[360px] left-[42%] max-w-[100%] top-[12%] w-[11%]"
              alt="RectangleTen"
            />
            <Stack className="absolute h-[1814px] sm:pb-[223px] md:pb-[289px] pb-[420px] w-[100%]">
              <Stack className="absolute h-[1394px] w-[100%]">
                <Img
                  src="images/img_group35.png"
                  className="absolute h-[900px] max-w-[100%] top-[0] w-[100%]"
                  alt="RectangleNine"
                />
                <Stack className="absolute h-[1394px] left-[18%] sm:pb-[45px] md:pb-[59px] pb-[86px] w-[16%]">
                  <Img
                    src="images/img_rectangle15.png"
                    className="absolute h-[900px] max-w-[100%] w-[100%]"
                    alt="RectangleFifteen"
                  />
                  <Column className="absolute bg-white_A700 flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:pb-[4px] md:pb-[5px] pb-[8px] rounded-radius8 sm:w-[100%] w-[92%]">
                    <Text
                      className="bg-white_A700 font-semibold justify-center pb-[1px] md:pl-[17px] pl-[25px] md:pr-[24px] pr-[35px] sm:px-[15px] text-bluegray_400 w-[200px]"
                      as="h5"
                      variant="h5"
                    >
                      Exit row
                    </Text>
                    <List
                      className="md:gap-[2px] sm:gap-[2px] gap-[4px] grid min-h-[auto] mt-[4px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            6
                          </Text>
                        </Column>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            7
                          </Text>
                        </Column>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            8
                          </Text>
                        </Column>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            9
                          </Text>
                        </Column>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Stack className="bg-gradient4  h-[32px] p-[2px] relative rounded-radius4 w-[12%]">
                          <Img
                            src="images/img_checkmark_18X18.svg"
                            className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius225 md:w-[12px] w-[18px] sm:w-[9px]"
                            alt="checkmark"
                          />
                        </Stack>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            10
                          </Text>
                        </Column>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            11
                          </Text>
                        </Column>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            12
                          </Text>
                        </Column>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            13
                          </Text>
                        </Column>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                    </List>
                    <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[4px] px-[4px] w-[100%]">
                      <Img
                        src="images/img_info.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] rounded-radius225 md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="info"
                      />
                      <Text
                        className="flex-grow font-semibold ml-[3px] mt-[1px] text-bluegray_400"
                        as="h5"
                        variant="h5"
                      >
                        Exit row
                      </Text>
                    </Row>
                    <List
                      className="md:gap-[2px] sm:gap-[2px] gap-[4px] grid min-h-[auto] mt-[4px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-end sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            14
                          </Text>
                        </Column>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            15
                          </Text>
                        </Column>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            16
                          </Text>
                        </Column>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            17
                          </Text>
                        </Column>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            18
                          </Text>
                        </Column>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                    </List>
                    <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[4px] px-[4px] w-[100%]">
                      <Img
                        src="images/img_info.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] rounded-radius225 md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="info One"
                      />
                      <Text
                        className="flex-grow font-semibold ml-[3px] mt-[1px] text-bluegray_400"
                        as="h5"
                        variant="h5"
                      >
                        Exit row
                      </Text>
                    </Row>
                    <List
                      className="md:gap-[2px] sm:gap-[2px] gap-[4px] grid min-h-[auto] mt-[4px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            19
                          </Text>
                        </Column>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            20
                          </Text>
                        </Column>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            21
                          </Text>
                        </Column>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            22
                          </Text>
                        </Column>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            23
                          </Text>
                        </Column>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            24
                          </Text>
                        </Column>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Text
                          className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                          as="h4"
                          variant="h4"
                        >
                          25
                        </Text>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Text
                          className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                          as="h4"
                          variant="h4"
                        >
                          26
                        </Text>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Text
                          className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                          as="h4"
                          variant="h4"
                        >
                          27
                        </Text>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Text
                          className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                          as="h4"
                          variant="h4"
                        >
                          28
                        </Text>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                    </List>
                    <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[4px] px-[4px] w-[100%]">
                      <Img
                        src="images/img_info.svg"
                        className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] rounded-radius225 md:w-[12px] w-[18px] sm:w-[9px]"
                        alt="info Two"
                      />
                      <Text
                        className="flex-grow font-semibold ml-[3px] text-bluegray_400"
                        as="h5"
                        variant="h5"
                      >
                        Exit row
                      </Text>
                    </Row>
                    <List
                      className="md:gap-[2px] sm:gap-[2px] gap-[4px] grid min-h-[auto] mt-[4px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Text
                          className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                          as="h4"
                          variant="h4"
                        >
                          29
                        </Text>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Text
                          className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                          as="h4"
                          variant="h4"
                        >
                          30
                        </Text>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Text
                          className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                          as="h4"
                          variant="h4"
                        >
                          31
                        </Text>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Text
                          className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                          as="h4"
                          variant="h4"
                        >
                          32
                        </Text>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <Text
                          className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                          as="h4"
                          variant="h4"
                        >
                          33
                        </Text>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-gradient  sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                        <div className="bg-indigo_50 sm:h-[18px] md:h-[23px] h-[32px] rounded-radius4 w-[12%]"></div>
                      </Row>
                    </List>
                  </Column>
                </Stack>
              </Stack>
              <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[16px] p-[24px] sm:px-[15px] sm:py-[12px] sm:w-[100%] w-[51%]">
                <Img
                  src="images/img_menu.svg"
                  className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:my-[4px] md:my-[5px] my-[8px] rounded-radius4 sm:w-[17px] md:w-[22px] w-[32px]"
                  alt="menu"
                />
                <Img
                  src="images/img_round.svg"
                  className="max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] w-[16%]"
                  alt="round"
                />
              </Row>
            </Stack>
          </Stack>
          <Column className="absolute bg-white_A700_7f flex flex-col items-center justify-start sm:mx-[0] sm:w-[100%] w-[50%]">
            <Row className="bg-white_A700_7f flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
              <Line className="bg-bluegray_100 sm:h-[480px] md:h-[620px] h-[900px] w-[1px]" />
              <Column className="flex flex-col items-center overflow-auto sm:px-[0] w-[100%]">
                <Row className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                    <Column className="bg-bluegray_900 flex flex-col sm:mx-[0] md:p-[13px] sm:p-[15px] p-[19px] sm:w-[100%] w-[45%]">
                      <Text
                        className="font-extrabold sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] text-gray_51 uppercase w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        SFO
                      </Text>
                      <Text
                        className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-indigo_50 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        California, US
                      </Text>
                    </Column>
                    <Img
                      src="images/img_arrowright_white_A700.svg"
                      className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] rounded-radius4 sm:w-[17px] md:w-[22px] w-[32px]"
                      alt="arrowright"
                    />
                    <Column className="bg-bluegray_900 flex flex-col sm:mx-[0] md:p-[13px] sm:p-[15px] p-[19px] sm:w-[100%] w-[45%]">
                      <Text
                        className="font-extrabold sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] text-gray_51 uppercase w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        NRT
                      </Text>
                      <Text
                        className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-indigo_50 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Tokyo, Japan
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:pl-[0] md:pr-[144px] sm:pr-[15px] pr-[210px] sm:w-[100%] w-[60%]">
                    <Line className="bg-bluegray_500 sm:h-[47px] md:h-[61px] h-[88px] w-[1px]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                      <Column className="bg-indigo_A200 flex flex-col md:pt-[15px] sm:pt-[15px] pt-[23px] md:px-[15px] sm:px-[15px] px-[23px] w-[100%]">
                        <Text
                          className="font-normal ml-[1px] not-italic text-white_A700 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          <span className="text-white_A700 text-[16px] font-nunitosans">
                            Feb
                          </span>
                          <span className="text-white_A700 text-[16px] font-nunitosans">
                            {" "}
                          </span>
                          <span className="text-white_A700 text-[16px] font-nunitosans">
                            25
                          </span>
                          <span className="text-bluegray_400 text-[16px] font-nunitosans">
                            {" "}
                            |{" "}
                          </span>
                          <span className="text-white_A700 text-[16px] font-nunitosans">
                            7:00AM
                          </span>
                        </Text>
                        <Text
                          className="font-normal ml-[1px] mt-[4px] not-italic text-indigo_50 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Departing
                        </Text>
                        <Img
                          src="images/img_chevron.svg"
                          className="max-w-[100%] sm:ml-[38px] md:ml-[49px] ml-[72px] sm:mt-[12px] md:mt-[15px] mt-[23px] w-[13%]"
                          alt="chevron"
                        />
                      </Column>
                      <div className="overflow-x-auto w-[100%]">
                        <Column className="bg-bluegray_900 flex flex-col justify-start md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
                          <Text
                            className="font-normal ml-[1px] not-italic text-white_A700 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            <span className="text-white_A700 text-[16px] font-nunitosans">
                              Mar 21
                            </span>
                            <span className="text-bluegray_400 text-[16px] font-nunitosans">
                              {" "}
                              |{" "}
                            </span>
                            <span className="text-white_A700 text-[16px] font-nunitosans">
                              12:15PM
                            </span>
                          </Text>
                          <Text
                            className="font-normal ml-[1px] mt-[4px] not-italic text-indigo_50 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Arriving
                          </Text>
                        </Column>
                      </div>
                    </Row>
                    <Line className="bg-bluegray_500 sm:h-[47px] md:h-[61px] h-[88px] w-[1px]" />
                  </Row>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                  <Column className="flex flex-col items-center justify-center ml-[10px] md:ml-[6px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] rounded-radius8 sm:w-[100%] w-[49%]">
                    <Img
                      src="images/img_economyseats_180X320.svg"
                      className="max-w-[100%] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]"
                      alt="EconomySeats"
                    />
                    <Column className="flex flex-col justify-start sm:mb-[12px] md:mb-[16px] mb-[24px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Economy
                        </Text>
                        <Text
                          className="bg-gradient  font-bold md:ml-[11px] ml-[16px] sm:ml-[8px] sm:px-[3px] md:px-[4px] px-[6px] py-[2px] rounded-radius4 text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Selected
                        </Text>
                      </Row>
                      <Text
                        className="font-normal leading-[normal] mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-bluegray_400 w-[100%]"
                        as="h4"
                        variant="h4"
                      >
                        Rest and recharge during your flight with extended leg
                        room, personalized service, and a multi-course meal
                        service
                      </Text>
                      <div className="bg-indigo_A200_87 md:h-[3px] sm:h-[3px] h-[4px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[12%]"></div>
                      <RadioGroup
                        className="ml-[4px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[100%] w-[98%]"
                        name="radiogroupbulletsofkey"
                      >
                        <Radio
                          value="Builtinentertainmentsystem"
                          className="font-normal sm:mr-[21px] md:mr-[27px] mr-[40px] not-italic text-[14px] text-bluegray_500"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroupbulletsofkey"
                          label="Builtin entertainment system"
                          size="sm"
                        ></Radio>
                        <Radio
                          value="Complimentarysnacksanddrinks"
                          className="font-normal md:mr-[11px] mr-[16px] sm:mr-[8px] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-[14px] text-bluegray_500"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroupbulletsofkey"
                          label="Complimentary snacks and drinks"
                          size="sm"
                        ></Radio>
                        <Radio
                          value="Onefreecarryonandpersonalitem"
                          className="font-normal md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-[14px] text-bluegray_500 w-[100%]"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroupbulletsofkey"
                          label="One free carryon and personal item"
                          size="sm"
                        ></Radio>
                      </RadioGroup>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-center sm:mb-[37px] md:mb-[48px] mb-[70px] ml-[4px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] rounded-radius8 sm:w-[100%] w-[49%]">
                    <Img
                      src="images/img_businessseats_180X320.svg"
                      className="max-w-[100%] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]"
                      alt="BusinessSeats"
                    />
                    <Column className="flex flex-col justify-start sm:mb-[12px] md:mb-[16px] mb-[24px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Business class
                        </Text>
                      </Column>
                      <Text
                        className="font-normal leading-[normal] md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-bluegray_400 w-[100%]"
                        as="h4"
                        variant="h4"
                      >
                        Rest and recharge during your flight with extended leg
                        room, personalized service, and a multi-course meal
                        service
                      </Text>
                      <div className="bg-green_A200_87 md:h-[3px] sm:h-[3px] h-[4px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[12%]"></div>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[4px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="checkmark One"
                        />
                        <Text
                          className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] not-italic text-bluegray_500"
                          as="h4"
                          variant="h4"
                        >
                          Extended leg room
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[4px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="checkmark Two"
                        />
                        <Text
                          className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] not-italic text-bluegray_500"
                          as="h4"
                          variant="h4"
                        >
                          First two checked bags free
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[4px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="checkmark Three"
                        />
                        <Text
                          className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] not-italic text-bluegray_500"
                          as="h4"
                          variant="h4"
                        >
                          Priority boarding
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[4px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="checkmark Four"
                        />
                        <Text
                          className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] not-italic text-bluegray_500"
                          as="h4"
                          variant="h4"
                        >
                          Personalized service
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[4px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="checkmark Five"
                        />
                        <Text
                          className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[2px] not-italic text-bluegray_500"
                          as="h4"
                          variant="h4"
                        >
                          Enhanced food and drink service
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[4px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="checkmark Six"
                        />
                        <Text
                          className="flex-grow font-normal leading-[normal] ml-[12px] md:ml-[8px] sm:mx-[0] not-italic text-bluegray_500"
                          as="h4"
                          variant="h4"
                        >
                          Seats that recline 40% more than economy
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Column className="bg-gray_52 flex flex-col items-center justify-start w-[100%]">
                  <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                      <Column className="flex flex-col sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[49%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Passenger 1
                        </Text>
                        <Text
                          className="font-semibold my-[4px] text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Sofia Knowles
                        </Text>
                      </Column>
                      <Column className="flex flex-col md:ml-[11px] ml-[16px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[48%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Seat number
                        </Text>
                        <Text
                          className="font-semibold sm:my-[2px] md:my-[3px] my-[5px] text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          9F
                        </Text>
                      </Column>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                      <Button
                        className="cursor-pointer font-normal min-w-[53%] not-italic text-[16px] text-center text-indigo_A200 w-[max-content]"
                        shape="RoundedBorder4"
                        variant="OutlineIndigoA200"
                      >
                        Save and close
                      </Button>
                      <Button
                        className="cursor-pointer font-normal min-w-[43%] md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-[16px] text-center text-gray_51 w-[max-content]"
                        shape="RoundedBorder4"
                        variant="FillIndigoA200"
                      >
                        Next Flight
                      </Button>
                    </Row>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
          <Img
            src="images/img_rectangle11.png"
            className="absolute h-[360px] left-[0] max-w-[100%] top-[11%] w-[11%]"
            alt="RectangleEleven"
          />
        </Stack>
      </Column>
    </>
  );
};

export default TripmaNinePage;
