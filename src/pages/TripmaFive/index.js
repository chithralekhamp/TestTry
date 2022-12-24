import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  List,
  Line,
  SelectBox,
  Stack,
} from "components";

const TripmaFivePage = () => {
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
          <Column className="flex flex-col justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
            <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[872px] md:ml-[44px] ml-[auto] mr-[auto] sm:mx-[0] outline outline-[1px] outline-bluegray_100 sm:pl-[15px] sm:pr-[15px] rounded-radius4 shadow-bs2 w-[100%]">
              <List
                className="gap-[0.50px] md:gap-[1px] sm:gap-[1px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-[repeat(1,_1fr_1px)_1fr] min-h-[auto] sm:w-[100%] w-[40%]"
                orientation="horizontal"
              >
                <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[4px] md:p-[5px] p-[8px] rounded-radius4 w-[100%]">
                  <Img
                    src="images/img_airplane.svg"
                    className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] ml-[4px] rounded-radius4 sm:w-[17px] md:w-[22px] w-[32px]"
                    alt="airplane"
                  />
                  <Text
                    className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_400"
                    as="h2"
                    variant="h2"
                  >
                    SFO
                  </Text>
                </Row>
                <Line className="self-center w-[1px] h-[48px] sm:h-[26px] md:h-[34px] bg-bluegray_100" />
                <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:p-[4px] md:p-[5px] p-[8px] rounded-radius4 w-[100%]">
                  <Img
                    src="images/img_airplane.svg"
                    className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] ml-[4px] rounded-radius4 sm:w-[17px] md:w-[22px] w-[32px]"
                    alt="airplane One"
                  />
                  <Text
                    className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] sm:mr-[40px] md:mr-[52px] mr-[76px] not-italic text-bluegray_400"
                    as="h2"
                    variant="h2"
                  >
                    NRT
                  </Text>
                </Row>
              </List>
              <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center ml-[1px] sm:mx-[0] sm:p-[4px] md:p-[5px] p-[8px] rounded-radius4 sm:w-[100%] w-[29%]">
                <Img
                  src="images/img_trash.svg"
                  className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] ml-[4px] rounded-radius4 sm:w-[17px] md:w-[22px] w-[32px]"
                  alt="trash"
                />
                <Text
                  className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] sm:mr-[34px] md:mr-[44px] mr-[64px] not-italic text-bluegray_400"
                  as="h2"
                  variant="h2"
                >
                  Depart - Return
                </Text>
              </Row>
              <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center ml-[1px] sm:mx-[0] sm:p-[4px] md:p-[5px] p-[8px] rounded-radius4 sm:w-[100%] w-[20%]">
                <Img
                  src="images/img_user.svg"
                  className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] ml-[4px] rounded-radius4 sm:w-[17px] md:w-[22px] w-[32px]"
                  alt="user"
                />
                <Text
                  className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] sm:mr-[29px] md:mr-[37px] mr-[55px] not-italic text-bluegray_400"
                  as="h2"
                  variant="h2"
                >
                  1 adult
                </Text>
              </Row>
              <Button
                className="cursor-pointer font-normal min-w-[12%] not-italic text-[18px] text-center text-gray_51 w-[max-content]"
                shape="RoundedBorder4"
                variant="FillIndigoA200"
              >
                Search
              </Button>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[704px] md:ml-[44px] ml-[auto] mr-[auto] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <SelectBox
                className="font-normal sm:mx-[0] not-italic text-[16px] text-bluegray_900 sm:w-[100%] w-[18%]"
                placeholderClassName="text-bluegray_900"
                name="basepillch"
                placeholder="Max price"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_18_chevron_down.svg"
                    className="w-[18px] h-[18px] mr-[12px] sm:mr-[6px] sm:h-[10px] sm:w-[9px] md:mr-[8px] md:h-[13px] md:w-[12px] max-w-[100%] rounded-radius4"
                    alt="18 / chevron down"
                  />
                }
                size="sm"
              ></SelectBox>
              <SelectBox
                className="font-normal md:ml-[11px] ml-[16px] sm:mx-[0] not-italic text-[16px] text-bluegray_900 sm:w-[100%] w-[14%]"
                placeholderClassName="text-bluegray_900"
                name="basepillch One"
                placeholder="Shops"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_18_chevron_down.svg"
                    className="w-[18px] h-[18px] mr-[12px] sm:mr-[6px] sm:h-[10px] sm:w-[9px] md:mr-[8px] md:h-[13px] md:w-[12px] max-w-[100%] rounded-radius4"
                    alt="18 / chevron down"
                  />
                }
                size="sm"
              ></SelectBox>
              <SelectBox
                className="font-normal md:ml-[11px] ml-[16px] sm:mx-[0] not-italic text-[16px] text-bluegray_900 sm:w-[100%] w-[14%]"
                placeholderClassName="text-bluegray_900"
                name="basepillch Two"
                placeholder="Times"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_18_chevron_down.svg"
                    className="w-[18px] h-[18px] mr-[12px] sm:mr-[6px] sm:h-[10px] sm:w-[9px] md:mr-[8px] md:h-[13px] md:w-[12px] max-w-[100%] rounded-radius4"
                    alt="18 / chevron down"
                  />
                }
              ></SelectBox>
              <SelectBox
                className="font-normal md:ml-[11px] ml-[16px] sm:mx-[0] not-italic text-[16px] text-bluegray_900 sm:w-[100%] w-[15%]"
                placeholderClassName="text-bluegray_900"
                name="basepillch Three"
                placeholder="Airlines"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_18_chevron_down.svg"
                    className="w-[18px] h-[18px] mr-[12px] sm:mr-[6px] sm:h-[10px] sm:w-[9px] md:mr-[8px] md:h-[13px] md:w-[12px] max-w-[100%] rounded-radius4"
                    alt="18 / chevron down"
                  />
                }
              ></SelectBox>
              <SelectBox
                className="font-normal md:ml-[11px] ml-[16px] sm:mx-[0] not-italic text-[16px] text-bluegray_900 sm:w-[100%] w-[18%]"
                placeholderClassName="text-bluegray_900"
                name="basepillch Four"
                placeholder="Seat class"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_18_chevron_down.svg"
                    className="w-[18px] h-[18px] mr-[12px] sm:mr-[6px] sm:h-[10px] sm:w-[9px] md:mr-[8px] md:h-[13px] md:w-[12px] max-w-[100%] rounded-radius4"
                    alt="18 / chevron down"
                  />
                }
              ></SelectBox>
              <SelectBox
                className="font-normal md:ml-[11px] ml-[16px] sm:mx-[0] not-italic text-[16px] text-bluegray_900 sm:w-[100%] w-[13%]"
                placeholderClassName="text-bluegray_900"
                name="basepillch Five"
                placeholder="More"
                isSearchable={false}
                isMulti={false}
              ></SelectBox>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1105px] md:ml-[52px] ml-[auto] mr-[auto] sm:mt-[25px] md:mt-[33px] mt-[48px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="font-semibold text-bluegray_500 w-[auto]"
                as="h2"
                variant="h2"
              >
                <span className="text-bluegray_500 text-[18px] font-nunitosans">
                  Choose a{" "}
                </span>
                <span className="text-indigo_A200 text-[18px] font-nunitosans">
                  departing
                </span>
                <span className="text-bluegray_500 text-[18px] font-nunitosans">
                  {" "}
                  flight
                </span>
              </Text>
              <Text
                className="font-semibold sm:ml-[368px] md:ml-[476px] ml-[692px] text-bluegray_500 w-[auto]"
                as="h2"
                variant="h2"
              >
                <span className="text-bluegray_500 text-[18px] font-nunitosans">
                  Price grid
                </span>
                <span className="text-bluegray_400 text-[18px] font-nunitosans">
                  {" "}
                  (flexible dates)
                </span>
              </Text>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1312px] md:ml-[44px] ml-[auto] mr-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                <Column className="border border-indigo_50 border-solid flex flex-col items-center justify-start md:pt-[11px] pt-[16px] sm:pt-[8px] md:px-[11px] sm:px-[15px] px-[16px] rounded-radius12 w-[100%]">
                  <Column className="bg-white_A700 border border-gray_50 border-solid flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                    <div className="overflow-x-auto w-[100%]">
                      <Stack className="h-[440px] relative rounded-radius8 w-[100%]">
                        <div className="absolute bg-white_A700 border border-gray_50 border-solid sm:h-[243px] md:h-[314px] h-[456px] inset-[0] justify-center m-[auto] rounded-radius8 w-[100%]"></div>
                        <Column className="absolute flex flex-col items-center justify-start top-[0] w-[100%]">
                          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[4px] rounded-radius4 w-[100%]">
                            <Img
                              src="images/img_image25.png"
                              className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:w-[21px] md:w-[27px] w-[40px]"
                              alt="imageTwentyFive"
                            />
                            <Column className="flex flex-col items-center md:ml-[5px] ml-[8px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[92%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  16h 45m
                                </Text>
                                <Text
                                  className="font-normal ml-[125px] sm:ml-[66px] md:ml-[86px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  7:00AM - 4:15PM
                                </Text>
                                <Text
                                  className="font-normal md:ml-[119px] ml-[174px] sm:ml-[92px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  1 stop
                                </Text>
                                <Text
                                  className="font-normal md:ml-[103px] ml-[151px] sm:ml-[80px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  $624
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  Hawaiian Airlines
                                </Text>
                                <Text
                                  className="font-normal sm:ml-[160px] md:ml-[207px] ml-[301px] not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  2h 45m in HNL
                                </Text>
                                <Text
                                  className="font-normal ml-[120px] sm:ml-[63px] md:ml-[82px] not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  round trip
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start py-[4px] w-[100%]">
                            <Line className="bg-indigo_50 h-[1px] w-[100%]" />
                          </Column>
                          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[4px] rounded-radius4 w-[100%]">
                            <Stack className="h-[32px] ml-[12px] sm:ml-[6px] md:ml-[8px] relative w-[5%]">
                              <Img
                                src="images/img_image27.png"
                                className="absolute h-[32px] max-w-[100%] w-[100%]"
                                alt="imageTwentySeven"
                              />
                            </Stack>
                            <Column className="flex flex-col items-center md:ml-[5px] ml-[8px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[92%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  18h 22m
                                </Text>
                                <Text
                                  className="font-normal ml-[125px] sm:ml-[66px] md:ml-[86px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  7:35 AM - 12:15 PM
                                </Text>
                                <Text
                                  className="font-normal md:ml-[107px] ml-[156px] sm:ml-[83px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  1 stop
                                </Text>
                                <Text
                                  className="font-normal md:ml-[103px] ml-[151px] sm:ml-[80px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  $663
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  Japan Airlines
                                </Text>
                                <Text
                                  className="font-normal sm:ml-[186px] md:ml-[240px] ml-[350px] not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  50m in HKG
                                </Text>
                                <Text
                                  className="font-normal ml-[120px] sm:ml-[63px] md:ml-[82px] not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  round trip
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start py-[4px] w-[100%]">
                            <Line className="bg-indigo_50 h-[1px] w-[100%]" />
                          </Column>
                          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[4px] rounded-radius4 w-[100%]">
                            <Img
                              src="images/img_image25.png"
                              className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:w-[21px] md:w-[27px] w-[40px]"
                              alt="imageTwentyFive One"
                            />
                            <Column className="flex flex-col items-center md:ml-[5px] ml-[8px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[92%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  18h 04m
                                </Text>
                                <Text
                                  className="font-normal ml-[125px] sm:ml-[66px] md:ml-[86px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  8:20 AM - 2:15 PM
                                </Text>
                                <Text
                                  className="font-normal md:ml-[114px] ml-[166px] sm:ml-[88px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  1 stop
                                </Text>
                                <Text
                                  className="font-normal md:ml-[103px] ml-[151px] sm:ml-[80px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  $690
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  Hawaiian Airlines
                                </Text>
                                <Text
                                  className="font-normal sm:ml-[160px] md:ml-[207px] ml-[302px] not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  1h 50m in PVG
                                </Text>
                                <Text
                                  className="font-normal ml-[120px] sm:ml-[63px] md:ml-[82px] not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  round trip
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start py-[4px] w-[100%]">
                            <Line className="bg-indigo_50 h-[1px] w-[100%]" />
                          </Column>
                          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[4px] rounded-radius4 w-[100%]">
                            <Img
                              src="images/img_download.svg"
                              className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:w-[21px] md:w-[27px] w-[40px]"
                              alt="download"
                            />
                            <Column className="flex flex-col items-center md:ml-[5px] ml-[8px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[92%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  18h 52m
                                </Text>
                                <Text
                                  className="font-normal ml-[125px] sm:ml-[66px] md:ml-[86px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  9:47 AM - 4:15 PM
                                </Text>
                                <Text
                                  className="font-normal md:ml-[114px] ml-[166px] sm:ml-[88px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  1 stop
                                </Text>
                                <Text
                                  className="font-normal md:ml-[103px] ml-[151px] sm:ml-[80px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  $756
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  Delta
                                </Text>
                                <Text
                                  className="font-normal sm:ml-[209px] md:ml-[271px] ml-[394px] not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  4h 05m in ICN
                                </Text>
                                <Text
                                  className="font-normal ml-[120px] sm:ml-[63px] md:ml-[82px] not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  round trip
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start py-[4px] w-[100%]">
                            <Line className="bg-indigo_50 h-[1px] w-[100%]" />
                          </Column>
                          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[4px] rounded-radius4 w-[100%]">
                            <Stack className="h-[40px] ml-[12px] sm:ml-[6px] md:ml-[8px] p-[4px] relative sm:w-[21px] md:w-[27px] w-[40px]">
                              <Img
                                src="images/img_image29.png"
                                className="absolute h-[32px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                                alt="imageTwentyNine"
                              />
                            </Stack>
                            <Column className="flex flex-col items-center md:ml-[5px] ml-[8px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[92%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  16h 05m
                                </Text>
                                <Text
                                  className="font-normal ml-[125px] sm:ml-[66px] md:ml-[86px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  11:15 AM - 7:45 PM
                                </Text>
                                <Text
                                  className="font-normal ml-[139px] sm:ml-[74px] md:ml-[95px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  Nonstop
                                </Text>
                                <Text
                                  className="font-normal md:ml-[103px] ml-[151px] sm:ml-[80px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  $837
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  Hawaiian Airlines
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  round trip
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start py-[4px] w-[100%]">
                            <Line className="bg-indigo_50 h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                        <Row className="absolute bg-white_A700 bottom-[0] flex flex-row md:flex-wrap sm:flex-wrap items-end pt-[4px] px-[4px] rounded-radius4 w-[100%]">
                          <Stack className="h-[14px] ml-[13px] sm:ml-[6px] md:ml-[8px] md:mt-[11px] mt-[17px] sm:mt-[9px] relative w-[5%]">
                            <Img
                              src="images/img_image28.png"
                              className="absolute h-[14px] max-w-[100%] w-[100%]"
                              alt="imageTwentyEight"
                            />
                          </Stack>
                          <Column className="flex flex-col items-center justify-end md:ml-[4px] ml-[7px] sm:mx-[0] p-[1px] sm:px-[0] sm:w-[100%] w-[92%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                15h 45m
                              </Text>
                              <Text
                                className="font-normal ml-[125px] sm:ml-[66px] md:ml-[86px] not-italic text-bluegray_900 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                10:55 AM - 8:15 PM
                              </Text>
                              <Text
                                className="font-normal ml-[139px] sm:ml-[74px] md:ml-[95px] not-italic text-bluegray_900 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Nonstop
                              </Text>
                              <Text
                                className="font-normal md:ml-[103px] ml-[151px] sm:ml-[80px] not-italic text-bluegray_900 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                $839
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Stack>
                    </div>
                  </Column>
                </Column>
                <Button
                  className="cursor-pointer font-normal min-w-[20%] sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-[18px] text-center text-indigo_A200 w-[max-content]"
                  shape="RoundedBorder4"
                  variant="OutlineIndigoA200"
                >
                  Show all flights
                </Button>
              </Column>
              <Column className="flex flex-col items-center md:ml-[27px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                  <List
                    className="bg-indigo_50 border border-indigo_50 border-solid gap-[1px] grid min-h-[auto] p-[1px] rounded-radius12 w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] sm:px-[0] w-[100%]">
                      <div className="bg-white_A700 sm:h-[22px] md:h-[28px] h-[40px] w-[17%]"></div>
                      <Button className="cursor-pointer font-bold min-w-[17%] text-[12px] text-bluegray_700 text-center w-[max-content]">
                        2/12
                      </Button>
                      <Button className="cursor-pointer font-bold min-w-[17%] text-[12px] text-bluegray_700 text-center w-[max-content]">
                        2/13
                      </Button>
                      <Button className="cursor-pointer font-bold min-w-[17%] text-[12px] text-bluegray_700 text-center w-[max-content]">
                        2/14
                      </Button>
                      <Button className="cursor-pointer font-bold min-w-[17%] text-[12px] text-bluegray_700 text-center w-[max-content]">
                        2/15
                      </Button>
                      <Button className="cursor-pointer font-bold min-w-[17%] text-[12px] text-bluegray_700 text-center w-[max-content]">
                        2/16
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] sm:px-[0] w-[100%]">
                      <Button className="cursor-pointer font-bold min-w-[17%] text-[12px] text-bluegray_700 text-center w-[max-content]">
                        3/7
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $837
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $592
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $592
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $1,308
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $837
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] sm:px-[0] w-[100%]">
                      <Button className="cursor-pointer font-bold min-w-[17%] text-[12px] text-bluegray_700 text-center w-[max-content]">
                        3/8
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $837
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $592
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $592
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $837
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $1,308
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] sm:px-[0] w-[100%]">
                      <Button className="cursor-pointer font-bold min-w-[17%] text-[12px] text-bluegray_700 text-center w-[max-content]">
                        3/9
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $624
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $592
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $624
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $592
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $592
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] sm:px-[0] w-[100%]">
                      <Button className="cursor-pointer font-bold min-w-[17%] text-[12px] text-bluegray_700 text-center w-[max-content]">
                        3/10
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $1,308
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $624
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $624
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $837
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $837
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] sm:px-[0] w-[100%]">
                      <Button className="cursor-pointer font-bold min-w-[17%] text-[12px] text-bluegray_700 text-center w-[max-content]">
                        3/11
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $592
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $624
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $1,308
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $837
                      </Button>
                      <Button className="cursor-pointer font-normal min-w-[17%] not-italic text-[14px] text-bluegray_500 text-center w-[max-content]">
                        $624
                      </Button>
                    </Row>
                  </List>
                  <Text
                    className="font-semibold ml-[1px] sm:mt-[21px] md:mt-[27px] mt-[40px] text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Price history
                  </Text>
                </Column>
                <Column className="bg-white_A700 border border-indigo_50 border-solid flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius12 w-[100%]">
                  <Stack className="h-[145px] sm:my-[3px] md:my-[4px] my-[7px] relative w-[100%]">
                    <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                          <Text
                            className="bg-white_A700 not-italic pb-[3px] pl-[1px] text-bluegray_400 w-[32px]"
                            as="h6"
                            variant="h6"
                          >
                            $1000
                          </Text>
                          <Line className="bg-indigo_50 h-[1px] sm:my-[3px] md:my-[4px] my-[7px] sm:w-[100%] w-[89%]" />
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[18px] mt-[27px] w-[100%]">
                          <Text
                            className="bg-white_A700 not-italic pb-[3px] sm:pl-[3px] md:pl-[4px] pl-[7px] text-bluegray_400 w-[32px]"
                            as="h6"
                            variant="h6"
                          >
                            $750
                          </Text>
                          <Line className="bg-indigo_50 h-[1px] sm:my-[3px] md:my-[4px] my-[7px] sm:w-[100%] w-[89%]" />
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[18px] mt-[27px] w-[100%]">
                          <Text
                            className="bg-white_A700 not-italic pb-[3px] sm:pl-[3px] md:pl-[4px] pl-[7px] text-bluegray_400 w-[32px]"
                            as="h6"
                            variant="h6"
                          >
                            $500
                          </Text>
                          <Line className="bg-indigo_50 h-[1px] sm:my-[3px] md:my-[4px] my-[7px] sm:w-[100%] w-[89%]" />
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[18px] mt-[27px] w-[100%]">
                          <Text
                            className="bg-white_A700 not-italic pb-[3px] sm:pl-[3px] md:pl-[4px] pl-[7px] text-bluegray_400 w-[32px]"
                            as="h6"
                            variant="h6"
                          >
                            $250
                          </Text>
                          <Line className="bg-indigo_50 h-[1px] sm:my-[3px] md:my-[4px] my-[7px] sm:w-[100%] w-[89%]" />
                        </Row>
                      </Column>
                    </Column>
                    <Stack
                      className="absolute bg-cover bg-no-repeat h-[128px] inset-y-[0] my-[auto] pb-[1px] px-[1px] right-[5%] sm:w-[100%] w-[81%]"
                      style={{
                        backgroundImage: "url('images/img_group11.png')",
                      }}
                    >
                      <Img
                        src="images/img_vector10.svg"
                        className="absolute h-[63px] inset-x-[0] max-w-[100%] mx-[auto] sm:w-[100%] w-[99%]"
                        alt="VectorTen"
                      />
                    </Stack>
                  </Stack>
                </Column>
              </Column>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1312px] md:ml-[44px] ml-[auto] mr-[auto] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] overflow-x-auto sm:px-[0] sm:w-[100%] w-[67%]">
                <Stack className="bg-indigo_50 border border-bluegray_100 border-solid h-[171px] relative rounded-radius4 w-[100%]">
                  <Img
                    src="images/img_vector16.svg"
                    className="absolute bottom-[41%] h-[23px] left-[34%] max-w-[100%] w-[27%]"
                    alt="VectorSixteen"
                  />
                  <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-center justify-between sm:px-[0] rounded-radius4 w-[100%]">
                    <Column className="bg-gradient1  flex flex-col sm:mx-[0] md:p-[62px] p-[91px] sm:px-[15px] sm:py-[48px] sm:w-[100%] w-[50%]">
                      <div className="bg-white_A700 border border-deep_purple_900 border-solid sm:h-[4px] md:h-[5px] h-[6px] sm:ml-[309px] md:ml-[400px] ml-[582px] sm:mt-[38px] md:mt-[49px] mt-[72px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                      <Text
                        className="font-bold mb-[120px] sm:mb-[63px] md:mb-[82px] sm:ml-[311px] md:ml-[402px] ml-[585px] text-deep_purple_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        NRT
                      </Text>
                    </Column>
                    <Column className="bg-gradient2  flex flex-col sm:mx-[0] md:p-[6px] p-[9px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[50%]">
                      <Img
                        src="images/img_airplane_25X27.svg"
                        className="max-w-[100%] sm:mr-[398px] md:mr-[514px] mr-[748px] mt-[123px] sm:mt-[65px] md:mt-[84px] w-[4%]"
                        alt="airplane Two"
                      />
                      <div className="bg-white_A700 border border-deep_purple_900 border-solid sm:h-[4px] md:h-[5px] h-[6px] sm:ml-[47px] md:ml-[61px] ml-[89px] sm:mr-[362px] md:mr-[467px] mr-[680px] mt-[1px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                      <Text
                        className="font-bold sm:mb-[110px] md:mb-[143px] mb-[208px] sm:ml-[34px] md:ml-[44px] ml-[65px] sm:mr-[365px] md:mr-[472px] mr-[686px] text-deep_purple_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        SFO
                      </Text>
                    </Column>
                  </Row>
                </Stack>
              </div>
              <Column className="flex flex-col justify-start md:ml-[27px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                  <Text
                    className="font-semibold text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Price rating
                  </Text>
                  <Text
                    className="bg-green_A200 font-semibold md:ml-[11px] ml-[16px] sm:ml-[8px] sm:px-[4px] md:px-[5px] px-[8px] py-[2px] rounded-radius4 text-white_A700 w-[84px]"
                    as="h3"
                    variant="h3"
                  >
                    Buy soon
                  </Text>
                </Row>
                <Text
                  className="font-normal leading-[normal] md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-bluegray_500 w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  <span className="text-bluegray_500 text-[16px] font-nunitosans">
                    We recommend booking soon. The average cost of this flight
                    is $750, but could rise 18% to $885 in two weeks.
                    <br />
                  </span>
                  <span className="text-indigo_200 text-[16px] font-nunitosans">
                    Tripma analyzes thousands of flights, prices, and trends to
                    ensure you get the best deal.
                  </span>
                </Text>
              </Column>
            </Row>
            <List
              className="gap-[1px] grid min-h-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]"
              orientation="vertical"
            >
              <Column className="flex flex-col items-center justify-start md:p-[27px] p-[40px] sm:px-[15px] sm:py-[21px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1312px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold text-bluegray_500 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    <span className="text-bluegray_500 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                      Find{" "}
                    </span>
                    <span className="text-indigo_A200 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                      places to stay
                    </span>
                    <span className="text-bluegray_500 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                      {" "}
                      in Japan
                    </span>
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[6%]">
                    <Text
                      className="flex-grow font-normal not-italic text-indigo_200"
                      as="h1"
                      variant="h1"
                    >
                      All
                    </Text>
                    <Img
                      src="images/img_arrowright.svg"
                      className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] mt-[1px] rounded-radius4 sm:w-[17px] md:w-[22px] w-[32px]"
                      alt="arrowright"
                    />
                  </Row>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1312px] ml-[auto] mr-[auto] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                  <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] pb-[1px] rounded-radius12 shadow-bs1 sm:w-[100%] w-[32%]">
                    <Img
                      src="images/img_image_5.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                        <Text
                          className="font-semibold text-indigo_A200 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Hotel Kaneyamaen and Bessho SASA
                        </Text>
                      </Column>
                      <Text
                        className="font-normal leading-[normal] md:ml-[5px] ml-[8px] mt-[4px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[96%]"
                        as="h3"
                        variant="h3"
                      >
                        Located at the base of Mount Fuji, Hotel Kaneyamaen is a
                        traitional japanese ryokan with a modern twist. Enjoy a
                        private onsen bath and a private multi-course kaiseki
                        dinner.
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center md:ml-[27px] ml-[40px] sm:mx-[0] rounded-radius12 shadow-bs1 sm:w-[100%] w-[32%]">
                    <Img
                      src="images/img_image_6.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image One"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                        <Text
                          className="font-semibold text-indigo_A200 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          <span className="text-indigo_A200 text-[18px] font-nunitosans">
                            HOTEL THE FLAG{" "}
                          </span>
                          <span className="text-indigo_A200 text-[18px] font-notosansjp font-normal not-italic">
                            大阪市
                          </span>
                        </Text>
                      </Column>
                      <Text
                        className="font-normal leading-[normal] md:ml-[5px] ml-[8px] mt-[4px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[96%]"
                        as="h3"
                        variant="h3"
                      >
                        Make a stop in Osaka and stay at HOTEL THE FLAG, just a
                        few minutes walk to experience the food culture
                        surrounding Dontonbori. Just one minute away is the
                        Shinsaibashi shopping street.
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center md:ml-[26px] ml-[39px] sm:mx-[0] pb-[1px] rounded-radius12 shadow-bs1 sm:w-[100%] w-[32%]">
                    <Img
                      src="images/img_image_7.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image Two"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                        <Text
                          className="font-semibold text-indigo_A200 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          9 Hours Shinjuku
                        </Text>
                      </Column>
                      <Text
                        className="font-normal leading-[normal] md:ml-[5px] ml-[8px] mt-[4px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[96%]"
                        as="h3"
                        variant="h3"
                      >
                        Experience a truly unique stay in an authentic Japanese
                        capsule hotel. 9 Hours Shinjuku is minutes from one of
                        Japan’s busiest train stations. Just take the NEX train
                        from Narita airport!
                      </Text>
                    </Column>
                  </Column>
                </Row>
              </Column>
              <Column className="flex flex-col items-center justify-start md:p-[27px] p-[40px] sm:px-[15px] sm:py-[21px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1312px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold text-bluegray_500 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    <span className="text-bluegray_500 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                      People in{" "}
                    </span>
                    <span className="text-indigo_A200 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                      San Francisco
                    </span>
                    <span className="text-bluegray_500 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                      {" "}
                      also searched for
                    </span>
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[6%]">
                    <Text
                      className="flex-grow font-normal not-italic text-indigo_200"
                      as="h1"
                      variant="h1"
                    >
                      All
                    </Text>
                    <Img
                      src="images/img_arrowright.svg"
                      className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] mt-[1px] rounded-radius4 sm:w-[17px] md:w-[22px] w-[32px]"
                      alt="arrowright One"
                    />
                  </Row>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1312px] ml-[auto] mr-[auto] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                  <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] rounded-radius12 shadow-bs1 sm:w-[100%] w-[32%]">
                    <Img
                      src="images/img_image.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image One"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-semibold text-indigo_A200 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Shanghai, China
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $598
                        </Text>
                      </Row>
                      <Text
                        className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        An international city rich in culture
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center md:ml-[27px] ml-[40px] sm:mx-[0] rounded-radius12 shadow-bs1 sm:w-[100%] w-[32%]">
                    <Img
                      src="images/img_image_8.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image One One"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-semibold text-indigo_A200 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Nairobi, Kenya
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $1,248
                        </Text>
                      </Row>
                      <Text
                        className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Dubbed the Safari Capital of the World
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center md:ml-[26px] ml-[39px] sm:mx-[0] rounded-radius12 shadow-bs1 sm:w-[100%] w-[32%]">
                    <Img
                      src="images/img_image_9.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image Two One"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          <span className="text-bluegray_500 text-[18px] font-nunitosans">
                            Seoul,
                          </span>
                          <span className="text-indigo_A200 text-[18px] font-nunitosans">
                            {" "}
                            South Korea
                          </span>
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $589
                        </Text>
                      </Row>
                      <Text
                        className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        This modern city is a traveler’s dream
                      </Text>
                    </Column>
                  </Column>
                </Row>
              </Column>
            </List>
            <footer className="bg-white_A700 sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
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

export default TripmaFivePage;
