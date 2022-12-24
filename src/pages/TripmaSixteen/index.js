import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Input,
  Line,
  CheckBox,
  Stack,
} from "components";

const TripmaSixteenPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1380px] md:ml-[19px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Img
                  src="images/img_round.svg"
                  className="max-w-[100%] w-[8%]"
                  alt="round"
                />
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[36%] common-row-list">
                  <ul className="flex flex-row items-center justify-between">
                    <li className="w-[16%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-col flex my-[3px]">
                      <Column className="flex flex-col items-center justify-start p-[10px] sm:p-[5px] md:p-[6px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-indigo_A200 w-[auto]"
                          as="h3"
                          variant="h3"
                          rel="noreferrer"
                        >
                          Flights
                        </a>
                      </Column>
                    </li>
                    <li className="w-[16%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-col flex my-[3px]">
                      <Column className="flex flex-col items-center justify-start p-[10px] sm:p-[5px] md:p-[6px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal mb-[3px] not-italic text-bluegray_400 hover:text-indigo_A200 w-[auto]"
                          as="h3"
                          variant="h3"
                          rel="noreferrer"
                        >
                          Hotels
                        </a>
                      </Column>
                    </li>
                    <li className="w-[20%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-col flex my-[3px]">
                      <Column className="flex flex-col items-center justify-start p-[10px] sm:p-[5px] md:p-[6px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-bluegray_400 hover:text-indigo_A200 w-[auto]"
                          as="h3"
                          variant="h3"
                          rel="noreferrer"
                        >
                          Packages
                        </a>
                      </Column>
                    </li>
                    <li className="w-[16%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-col flex my-[3px]">
                      <Column className="flex flex-col items-center justify-start p-[10px] sm:p-[5px] md:p-[6px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-bluegray_400 hover:text-indigo_A200 w-[auto]"
                          as="h3"
                          variant="h3"
                          rel="noreferrer"
                        >
                          Sign in
                        </a>
                      </Column>
                    </li>
                    <li className="w-[max-content] sm:w-[100%] sm:my-[10px] min-w-[21%] text-center">
                      <Button
                        className="cursor-pointer font-normal not-italic text-[16px] text-center text-gray_51"
                        shape="RoundedBorder4"
                        variant="FillIndigoA200"
                      >
                        Sign up
                      </Button>
                    </li>
                  </ul>
                </Row>
              </Row>
            </Row>
          </header>
          <Column className="flex flex-col justify-start sm:mt-[29px] md:mt-[38px] mt-[56px] w-[100%]">
            <Text
              className="font-bold sm:ml-[51px] md:ml-[66px] ml-[96px] text-indigo_A200 w-[auto]"
              as="h1"
              variant="h1"
            >
              Passenger information
            </Text>
            <Text
              className="font-normal leading-[normal] md:ml-[66px] ml-[96px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[48%]"
              as="h2"
              variant="h2"
            >
              Enter the required information for each traveler and be sure that
              it exactly matches the government-issued ID presented at the
              airport.
            </Text>
            <Text
              className="font-semibold sm:ml-[51px] md:ml-[66px] ml-[96px] sm:mt-[19px] md:mt-[24px] mt-[36px] text-bluegray_500 w-[auto]"
              as="h2"
              variant="h2"
            >
              Passenger 1 (Adult)
            </Text>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1248px] md:ml-[66px] ml-[auto] mr-[auto] sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="sm:mx-[0] sm:w-[100%] w-[31%]"
                    type="text"
                    name="basetextin"
                    placeholder="First name*"
                  ></Input>
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="sm:mx-[0] sm:w-[100%] w-[31%]"
                    name="basetextin One"
                    placeholder="Middle"
                  ></Input>
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="sm:mx-[0] sm:w-[100%] w-[31%]"
                    type="text"
                    name="basetextin Two"
                    placeholder="Last name*"
                  ></Input>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="mb-[24px] md:mb-[16px] sm:mb-[12px] sm:mx-[0] sm:w-[100%] w-[43%]"
                    name="basetextin Three"
                    placeholder="Suffix"
                  ></Input>
                  <Column className="flex flex-col items-center justify-start md:ml-[16px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                    <Input
                      className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      wrapClassName="w-[100%]"
                      name="basetextin Four"
                      placeholder="Date of birth*"
                    ></Input>
                    <Column className="flex flex-col justify-start mt-[4px] p-[2px] rounded-radius4 w-[100%]">
                      <Text
                        className="font-normal ml-[2px] not-italic text-bluegray_400 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MM/DD/YY
                      </Text>
                    </Column>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="sm:mx-[0] sm:w-[100%] w-[49%]"
                    type="email"
                    name="basetextin Five"
                    placeholder="Email address*"
                  ></Input>
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="sm:mx-[0] sm:w-[100%] w-[49%]"
                    type="number"
                    name="basetextin Six"
                    placeholder="Phone number*"
                  ></Input>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="sm:mx-[0] sm:w-[100%] w-[49%]"
                    type="number"
                    name="basetextin Seven"
                    placeholder="Redress number"
                  ></Input>
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="sm:mx-[0] sm:w-[100%] w-[49%]"
                    type="number"
                    name="basetextin Eight"
                    placeholder="Known traveller number*"
                  ></Input>
                </Row>
                <Text
                  className="font-semibold sm:mt-[25px] md:mt-[33px] mt-[48px] text-bluegray_500 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Emergency contact information
                </Text>
              </Column>
              <Column className="flex flex-col items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                <Column className="bg-white_A700 border border-indigo_50 border-solid flex flex-col items-center justify-start md:p-[11px] sm:p-[15px] p-[16px] rounded-radius12 w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] w-[100%]">
                    <Img
                      src="images/img_image25.png"
                      className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:w-[21px] md:w-[27px] w-[40px]"
                      alt="imageTwentyFive"
                    />
                    <Column className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] pb-[3px] pr-[3px] sm:px-[0] sm:w-[100%] w-[43%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Hawaiian Airlines
                      </Text>
                      <Text
                        className="font-normal sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        FIG4312
                      </Text>
                    </Column>
                    <Column className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] pb-[3px] pl-[3px] sm:px-[0] sm:w-[100%] w-[43%]">
                      <Text
                        className="font-normal sm:ml-[19px] md:ml-[25px] ml-[37px] not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        16h 45m (+1d)
                      </Text>
                      <Text
                        className="font-normal sm:ml-[3px] md:ml-[4px] ml-[7px] mt-[4px] not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        7:00 AM - 4:15 PM
                      </Text>
                      <Text
                        className="font-normal sm:ml-[18px] md:ml-[23px] ml-[34px] sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        2h 45m in HNL
                      </Text>
                    </Column>
                  </Row>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] py-[4px] w-[100%]">
                    <Line className="bg-indigo_50 h-[1px] w-[100%]" />
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[4px] md:mt-[5px] mt-[8px] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] w-[100%]">
                    <Img
                      src="images/img_image25.png"
                      className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:w-[21px] md:w-[27px] w-[40px]"
                      alt="imageTwentyFive One"
                    />
                    <Column className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] pb-[3px] pr-[3px] sm:px-[0] sm:w-[100%] w-[43%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Hawaiian Airlines
                      </Text>
                      <Text
                        className="font-normal sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        FIG4312
                      </Text>
                    </Column>
                    <Column className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] pb-[3px] pl-[3px] sm:px-[0] sm:w-[100%] w-[43%]">
                      <Text
                        className="font-normal sm:ml-[19px] md:ml-[25px] ml-[37px] not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        16h 45m (+1d)
                      </Text>
                      <Text
                        className="font-normal sm:ml-[3px] md:ml-[4px] ml-[7px] mt-[4px] not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        7:00 AM - 4:15 PM
                      </Text>
                      <Text
                        className="font-normal sm:ml-[18px] md:ml-[23px] ml-[34px] sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        2h 45m in HNL
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[auto] sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[58%]">
                  <Column className="flex flex-col items-end sm:mx-[0] pb-[3px] pl-[3px] sm:px-[0] sm:w-[100%] w-[61%]">
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Subtotal
                    </Text>
                    <Text
                      className="font-semibold mt-[11px] sm:mt-[5px] md:mt-[7px] text-bluegray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Taxes and Fees
                    </Text>
                    <Text
                      className="font-semibold mt-[11px] sm:mt-[5px] md:mt-[7px] text-bluegray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Total
                    </Text>
                  </Column>
                  <Column className="flex flex-col items-center md:ml-[27px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      $503
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      $121
                    </Text>
                    <Text
                      className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      $624
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[1248px] md:ml-[66px] ml-[auto] mr-[auto] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <CheckBox
                className="font-normal sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic sm:pl-[4px] md:pl-[5px] pl-[8px] text-[16px] text-bluegray_500"
                inputClassName="h-[16px] mr-[5px] w-[16px]"
                name="label Thirteen"
                label="Same as Passenger 1"
              ></CheckBox>
              <Button
                className="cursor-pointer font-normal min-w-[12%] not-italic text-[18px] text-bluegray_400 text-center w-[max-content]"
                shape="RoundedBorder4"
                variant="OutlineBluegray400"
              >
                Select seats
              </Button>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[624px] md:ml-[66px] ml-[auto] mr-[auto] sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="sm:mx-[0] sm:w-[100%] w-[49%]"
                type="text"
                name="basetextin Nine"
                placeholder="First name*"
              ></Input>
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="md:ml-[16px] ml-[24px] sm:mx-[0] sm:w-[100%] w-[49%]"
                type="text"
                name="basetextin Ten"
                placeholder="Last name*"
              ></Input>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[1248px] md:ml-[66px] ml-[auto] mr-[auto] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="sm:mx-[0] sm:w-[100%] w-[49%]"
                    type="email"
                    name="basetextin Eleven"
                    placeholder="Email address*"
                  ></Input>
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="md:ml-[16px] ml-[24px] sm:mx-[0] sm:w-[100%] w-[49%]"
                    type="number"
                    name="basetextin Twelve"
                    placeholder="Phone number*"
                  ></Input>
                </Row>
                <Text
                  className="font-semibold sm:mt-[25px] md:mt-[33px] mt-[48px] text-bluegray_500 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Bag information
                </Text>
                <Text
                  className="font-normal leading-[normal] mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-bluegray_400 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  <span className="text-bluegray_400 text-[18px] font-nunitosans">
                    Each passenger is allowed one free carry-on bag and one
                    personal item. First checked bag for each passenger is also
                    free. Second bag check fees are waived for loyalty program
                    members. See the
                  </span>
                  <span className="text-indigo_A200 text-[18px] font-nunitosans">
                    {" "}
                    full bag policy
                  </span>
                  <span className="text-bluegray_400 text-[18px] font-nunitosans">
                    .
                  </span>
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                  <Text
                    className="font-semibold text-bluegray_400 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Passenger 1
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[128px] md:ml-[166px] ml-[242px] text-bluegray_400 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Checked bags
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                  <Text
                    className="font-semibold text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    First Last
                  </Text>
                  <Stack className="bg-gray_51 h-[32px] sm:ml-[142px] md:ml-[183px] ml-[267px] relative rounded-radius4 sm:w-[17px] md:w-[22px] w-[32px]">
                    <Img
                      src="images/img_32plus.svg"
                      className="absolute h-[32px] max-w-[100%] rounded-radius4 sm:w-[17px] md:w-[22px] w-[32px]"
                      alt="32plus"
                    />
                  </Stack>
                  <Text
                    className="font-normal sm:ml-[12px] md:ml-[16px] ml-[24px] not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    1
                  </Text>
                  <Stack className="bg-gray_51 h-[32px] sm:ml-[12px] md:ml-[15px] ml-[23px] relative rounded-radius4 sm:w-[17px] md:w-[22px] w-[32px]">
                    <Img
                      src="images/img_plus.svg"
                      className="absolute h-[32px] max-w-[100%] rounded-radius4 sm:w-[17px] md:w-[22px] w-[32px]"
                      alt="plus"
                    />
                  </Stack>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[39px] md:mt-[50px] mt-[74px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                  <Button
                    className="cursor-pointer font-normal min-w-[50%] not-italic text-[18px] text-center text-indigo_A200 w-[max-content]"
                    shape="RoundedBorder4"
                    variant="OutlineIndigoA200"
                  >
                    Save and close
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[43%] sm:ml-[12px] md:ml-[16px] ml-[24px] not-italic text-[18px] text-bluegray_400 text-center w-[max-content]"
                    shape="RoundedBorder4"
                    variant="OutlineBluegray400"
                  >
                    Select seats
                  </Button>
                </Row>
              </Column>
              <Column className="flex flex-col font-roboto justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                <Stack className="h-[482px] relative w-[100%]">
                  <Img
                    src="images/img_luggage.svg"
                    className="absolute h-[448px] inset-x-[0] max-w-[100%] mx-[auto] top-[0] sm:w-[100%] w-[98%]"
                    alt="Luggage"
                  />
                  <Stack className="absolute bottom-[0] h-[34px] right-[6%] w-[20%]">
                    <Img
                      src="images/img_vector20.svg"
                      className="absolute h-[12px] inset-y-[32%] max-w-[100%] w-[100%]"
                      alt="VectorTwenty"
                    />
                    <Column className="absolute bg-white_A700 flex flex-col inset-x-[25%] items-center justify-start sm:mx-[0] px-[2px] sm:w-[100%] w-[47%]">
                      <Text
                        className="font-bold leading-[16.00px] md:leading-[normal] sm:leading-[normal] text-bluegray_200 text-center w-[100%]"
                        as="h1"
                        variant="h1"
                      >
                        <span className="text-bluegray_200 text-[18px] font-roboto font-medium">
                          9”
                          <br />
                        </span>
                        <span className="text-bluegray_200 text-[12px] font-roboto font-medium">
                          23cm
                        </span>
                      </Text>
                    </Column>
                  </Stack>
                  <Stack className="absolute bottom-[0] h-[34px] right-[27%] w-[35%]">
                    <Img
                      src="images/img_vector20_bluegray_200.svg"
                      className="absolute h-[12px] inset-y-[32%] max-w-[100%] w-[100%]"
                      alt="VectorTwenty One"
                    />
                    <Column className="absolute bg-white_A700 flex flex-col inset-x-[35%] items-center justify-start sm:mx-[0] px-[4px] sm:w-[100%] w-[30%]">
                      <Text
                        className="font-medium leading-[normal] text-bluegray_200 text-center w-[100%]"
                        as="h1"
                        variant="h1"
                      >
                        <span className="text-bluegray_200 text-[18px] font-roboto">
                          14”
                          <br />
                        </span>
                        <span className="text-bluegray_200 text-[12px] font-roboto">
                          36cm
                        </span>
                      </Text>
                    </Column>
                  </Stack>
                  <Stack className="absolute bottom-[16%] h-[237px] right-[0] rotate-[90deg] w-[8%]">
                    <Img
                      src="images/img_vector20_bluegray_200.svg"
                      className="absolute h-[237px] max-w-[100%] right-[21%] sm:w-[100%] w-[42%]"
                      alt="VectorTwenty Two"
                    />
                    <Column className="absolute bg-white_A700 flex flex-col inset-y-[41%] items-center justify-start py-[4px] w-[100%]">
                      <Text
                        className="font-bold leading-[16.00px] md:leading-[normal] sm:leading-[normal] text-bluegray_200 text-center w-[100%]"
                        as="h1"
                        variant="h1"
                      >
                        <span className="text-bluegray_200 text-[18px] font-roboto font-medium">
                          22”
                          <br />
                        </span>
                        <span className="text-bluegray_200 text-[12px] font-roboto font-medium">
                          56cm
                        </span>
                      </Text>
                    </Column>
                  </Stack>
                </Stack>
                <Text
                  className="font-normal md:ml-[106px] ml-[155px] sm:ml-[82px] sm:mt-[15px] md:mt-[19px] mt-[29px] not-italic text-bluegray_200 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  *Dimensions include handles and wheels
                </Text>
              </Column>
            </Row>
            <footer className="bg-white_A700 sm:mt-[29px] md:mt-[38px] mt-[56px] w-[100%]">
              <Column className="flex flex-col items-center justify-start max-w-[1440px] ml-[auto] mr-[auto] md:my-[11px] my-[16px] sm:my-[8px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end md:p-[16px] p-[24px] sm:px-[15px] sm:py-[12px] w-[100%]">
                  <Img
                    src="images/img_round.svg"
                    className="max-w-[100%] sm:mt-[25px] md:mt-[33px] mt-[48px] w-[8%]"
                    alt="round One"
                  />
                  <Column className="flex flex-col justify-start md:ml-[50px] ml-[74px] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:pl-[0] md:pr-[11px] sm:pr-[15px] pr-[16px] md:py-[11px] py-[16px] sm:py-[8px] sm:w-[100%] w-[15%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[100%] sm:px-[0] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-bold mb-[4px] text-bluegray_500 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            About
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            About Tripma
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            How it works
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Careers
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Press
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Blog
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Forum
                          </Text>
                        </Column>
                      </li>
                    </ul>
                  </Column>
                  <Column className="flex flex-col justify-start md:ml-[42px] ml-[62px] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:pl-[0] md:pr-[11px] sm:pr-[15px] pr-[16px] md:py-[11px] py-[16px] sm:py-[8px] sm:w-[100%] w-[16%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[100%] sm:px-[0] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-bold mb-[4px] text-bluegray_500 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Partner with us
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Partnership programs
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Affiliate program
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Connectivity partners
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Promotions and events
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Integrations
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Community
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Loyalty program
                          </Text>
                        </Column>
                      </li>
                    </ul>
                  </Column>
                  <Column className="flex flex-col justify-start md:ml-[42px] ml-[62px] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:pl-[0] md:pr-[11px] sm:pr-[15px] pr-[16px] md:py-[11px] py-[16px] sm:py-[8px] sm:w-[100%] w-[15%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[100%] sm:px-[0] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-bold text-bluegray_500 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Support
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Help Center
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Contact us
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Privacy policy
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Terms of service
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Trust and safety
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Accessibility
                          </Text>
                        </Column>
                      </li>
                    </ul>
                  </Column>
                  <Column className="flex flex-col justify-start md:ml-[42px] ml-[62px] md:mr-[31px] mr-[46px] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
                    <Column className="flex flex-col justify-start md:pr-[11px] sm:pr-[15px] pr-[16px] md:py-[11px] py-[16px] sm:py-[8px] w-[100%] common-column-list">
                      <ul className="flex flex-col">
                        <li className="w-[100%] sm:px-[0] flex-col flex">
                          <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                            <Text
                              className="font-bold text-bluegray_500 w-[auto]"
                              as="h2"
                              variant="h2"
                            >
                              Get the app
                            </Text>
                          </Column>
                        </li>
                        <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                          <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Tripma for Android
                            </Text>
                          </Column>
                        </li>
                        <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                          <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Tripma for iOS
                            </Text>
                          </Column>
                        </li>
                        <li className="w-[100%] mt-[8px] sm:mt-[4px] sm:px-[0] md:mt-[5px] flex-col flex">
                          <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                            <Text
                              className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Mobile site
                            </Text>
                          </Column>
                        </li>
                      </ul>
                    </Column>
                    <Column className="bg-black_900 border border-gray_500 border-solid flex flex-col items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] p-[4px] rounded-radius4 sm:w-[100%] w-[54%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                        <Img
                          src="images/img_eye.svg"
                          className="sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] mb-[1px] rounded-radius4 sm:w-[15px] md:w-[20px] w-[30px]"
                          alt="eye"
                        />
                        <Column className="flex flex-col justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                          <Img
                            src="images/img_car.svg"
                            className="max-w-[100%] ml-[1px] sm:w-[100%] w-[95%]"
                            alt="car"
                          />
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] mt-[3px] w-[100%]"
                            alt="signal"
                          />
                        </Column>
                      </Row>
                    </Column>
                    <Img
                      src="images/img_linkgooglep.png"
                      className="max-w-[100%] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[54%]"
                      alt="linkgooglep"
                    />
                  </Column>
                </Row>
                <Column className="bg-white_A700 flex flex-col items-center justify-start md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[17px] sm:mt-[9px] p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[108px] md:ml-[74px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] w-[10%] sm:w-[100%]">
                    <Img
                      src="images/img_twitter.svg"
                      className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="twitter"
                    />
                    <Img
                      src="images/img_instagram.svg"
                      className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="instagram"
                    />
                    <Img
                      src="images/img_facebook.svg"
                      className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="facebook"
                    />
                  </Row>
                  <Text
                    className="font-normal mr-[108px] sm:mr-[57px] md:mr-[74px] not-italic text-bluegray_400 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    © 2020 Tripma incorporated
                  </Text>
                </Row>
              </Column>
            </footer>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default TripmaSixteenPage;
