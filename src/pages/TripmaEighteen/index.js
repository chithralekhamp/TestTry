import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Input,
  List,
  Stack,
  Button,
} from "components";

const TripmaEighteenPage = () => {
  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate3() {
    window.location.href = "https://twitter.com/login/";
  }

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
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[32%] common-row-list">
                  <ul className="flex flex-row items-center justify-between">
                    <li className="w-[17%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-col flex">
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
                    <li className="w-[17%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-col flex">
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
                    <li className="w-[22%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-col flex">
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
                    <li className="w-[20%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-col flex">
                      <Column className="flex flex-col items-center justify-start p-[10px] sm:p-[5px] md:p-[6px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-bluegray_400 hover:text-indigo_A200 w-[auto]"
                          as="h3"
                          variant="h3"
                          rel="noreferrer"
                        >
                          My trips
                        </a>
                      </Column>
                    </li>
                    <li className="w-[10%] sm:w-[100%] sm:my-[10px] rounded-radius50 my-[1px]">
                      <Img
                        src="images/img_headeravatar.png"
                        className="sm:h-[22px] md:h-[28px] h-[40px] rounded-radius50"
                        alt="HeaderAvatar"
                      />
                    </li>
                  </ul>
                </Row>
              </Row>
            </Row>
          </header>
          <Column className="flex flex-col justify-start sm:mt-[33px] md:mt-[42px] mt-[62px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1248px] md:ml-[65px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                <Row className="bg-cyan_52 border border-solid border-teal_700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[1px] sm:mx-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius8 sm:w-[100%] w-[94%]">
                  <Text
                    className="flex-grow font-normal not-italic text-teal_700"
                    as="h3"
                    variant="h3"
                  >
                    Your flight has been booked successfully! Your confirmation
                    number is #381029404387
                  </Text>
                  <Img
                    src="images/img_close_2.svg"
                    className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] ml-[4px] sm:w-[17px] md:w-[22px] w-[32px]"
                    alt="close"
                  />
                </Row>
                <Text
                  className="font-bold ml-[1px] sm:mt-[21px] md:mt-[27px] mt-[40px] text-indigo_A200 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Bon voyage, Sophia!
                </Text>
                <Text
                  className="font-semibold ml-[1px] md:mt-[11px] mt-[16px] sm:mt-[8px] text-bluegray_500 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Confirmation number: #381029404387
                </Text>
                <Text
                  className="font-normal leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-bluegray_400 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  <span className="text-bluegray_400 text-[18px] font-nunitosans">
                    Thank you for booking your travel with Tripma! Below is a
                    summary of your trip to Narita airport in Tokyo, Japan.
                    We’ve sent a copy of your booking confirmation to your email
                    address. You can also find this page again in{" "}
                  </span>
                  <span className="text-indigo_A200 text-[18px] font-nunitosans">
                    My trips
                  </span>
                  <span className="text-bluegray_400 text-[18px] font-nunitosans">
                    .
                  </span>
                </Text>
                <Text
                  className="font-bold ml-[1px] sm:mt-[29px] md:mt-[38px] mt-[56px] text-bluegray_500 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Flight summary
                </Text>
                <Text
                  className="font-semibold ml-[1px] sm:mt-[12px] md:mt-[16px] mt-[24px] text-bluegray_500 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Departing February 25th, 2021
                </Text>
                <Row className="bg-white_A700 border border-bluegray_100 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] p-[4px] rounded-radius4 w-[100%]">
                  <Img
                    src="images/img_image25.png"
                    className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:w-[21px] md:w-[27px] w-[40px]"
                    alt="imageTwentyFive"
                  />
                  <Column className="flex flex-col items-center md:ml-[5px] ml-[8px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[91%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        16h 45m
                      </Text>
                      <Text
                        className="font-normal ml-[104px] sm:ml-[55px] md:ml-[71px] not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        7:00AM - 4:15PM
                      </Text>
                      <Text
                        className="font-normal ml-[132px] sm:ml-[70px] md:ml-[90px] not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        1 stop
                      </Text>
                      <Text
                        className="font-normal ml-[130px] sm:ml-[69px] md:ml-[89px] not-italic text-bluegray_900 w-[auto]"
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
                        className="font-normal sm:ml-[22px] md:ml-[28px] ml-[42px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        value
                      </Text>
                      <Text
                        className="font-normal md:ml-[107px] ml-[156px] sm:ml-[83px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        2h 45m in HNL
                      </Text>
                      <Text
                        className="font-normal sm:ml-[52px] md:ml-[68px] ml-[99px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        round trip
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Text
                  className="font-normal ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Seat 9F (economy, window), 1 checked bag
                </Text>
                <Text
                  className="font-semibold ml-[1px] sm:mt-[21px] md:mt-[27px] mt-[40px] text-bluegray_500 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Arriving March 21st, 2021{" "}
                </Text>
                <Row className="bg-white_A700 border border-bluegray_100 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] p-[4px] rounded-radius4 w-[100%]">
                  <Img
                    src="images/img_image25.png"
                    className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:w-[21px] md:w-[27px] w-[40px]"
                    alt="imageTwentyFive One"
                  />
                  <Column className="flex flex-col items-center md:ml-[5px] ml-[8px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[91%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        16h 45m
                      </Text>
                      <Text
                        className="font-normal ml-[104px] sm:ml-[55px] md:ml-[71px] not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        7:00AM - 4:15PM
                      </Text>
                      <Text
                        className="font-normal ml-[132px] sm:ml-[70px] md:ml-[90px] not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        1 stop
                      </Text>
                      <Text
                        className="font-normal ml-[130px] sm:ml-[69px] md:ml-[89px] not-italic text-bluegray_900 w-[auto]"
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
                        className="font-normal sm:ml-[22px] md:ml-[28px] ml-[42px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        value
                      </Text>
                      <Text
                        className="font-normal md:ml-[107px] ml-[156px] sm:ml-[83px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        2h 45m in HNL
                      </Text>
                      <Text
                        className="font-normal sm:ml-[52px] md:ml-[68px] ml-[99px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        round trip
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Text
                  className="font-normal ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Seat 4F (business, window), 1 checked bag
                </Text>
                <Text
                  className="font-bold ml-[1px] sm:mt-[29px] md:mt-[38px] mt-[56px] text-bluegray_500 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Price breakdown
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-normal not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Departing Flight
                  </Text>
                  <Text
                    className="font-normal sm:ml-[104px] md:ml-[135px] ml-[197px] not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $251.50
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-normal not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Arriving Flight
                  </Text>
                  <Text
                    className="font-normal sm:ml-[113px] md:ml-[147px] ml-[214px] not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $251.50
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-normal not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Baggage fees
                  </Text>
                  <Text
                    className="font-normal sm:ml-[142px] md:ml-[183px] ml-[267px] not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $0
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-normal not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Seat upgrade (business)
                  </Text>
                  <Text
                    className="font-normal md:ml-[110px] ml-[161px] sm:ml-[85px] not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $199
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-normal not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Subtotal
                  </Text>
                  <Text
                    className="font-normal sm:ml-[152px] md:ml-[196px] ml-[286px] not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $702
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-normal not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Taxes (9.4%)
                  </Text>
                  <Text
                    className="font-normal sm:ml-[139px] md:ml-[180px] ml-[262px] not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $66
                  </Text>
                </Row>
                <Column className="flex flex-col items-center justify-start ml-[1px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                    <Text
                      className="font-semibold text-bluegray_800 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Amount paid
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_800 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      $768
                    </Text>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]" />
                </Column>
                <Text
                  className="font-bold ml-[1px] sm:mt-[29px] md:mt-[38px] mt-[56px] text-bluegray_500 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Payment method
                </Text>
                <Column className="bg-gradient4  flex flex-col items-center justify-start ml-[1px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] md:p-[16px] p-[24px] sm:px-[15px] sm:py-[12px] rounded-radius16 sm:w-[100%] w-[40%]">
                  <Column className="flex flex-col justify-start my-[3px] sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_g4158.svg"
                      className="max-w-[100%] w-[31%]"
                      alt="g4158"
                    />
                    <Text
                      className="font-semibold sm:mt-[30px] md:mt-[39px] mt-[57px] text-gray_50 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Sophia Knowles
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]">
                      <Text
                        className="font-semibold mb-[1px] text-gray_50 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        <span className="text-gray_50 text-[16px] font-roboto font-medium">
                          ••••••••••••
                        </span>
                        <span className="text-gray_50 text-[16px] tracking-ls1 font-nunitosans">
                          3456
                        </span>
                      </Text>
                      <Text
                        className="font-semibold text-gray_50 tracking-ls1 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        10/23
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Text
                  className="font-bold ml-[1px] sm:mt-[29px] md:mt-[38px] mt-[56px] text-bluegray_500 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Share your travel itinerary
                </Text>
                <Text
                  className="font-normal md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  You can email your itinerary to anyone by entering their email
                  address here.
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                  wrapClassName="md:mt-[16px] ml-[1px] mt-[24px] sm:mt-[12px] sm:mx-[0] sm:w-[100%] w-[53%]"
                  type="email"
                  name="basetextin"
                  placeholder="Email address"
                ></Input>
              </Column>
              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                <Text
                  className="font-bold text-bluegray_500 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  <span className="text-bluegray_500 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                    Shop{" "}
                  </span>
                  <span className="text-indigo_A200 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                    hotels
                  </span>
                </Text>
                <Text
                  className="font-normal leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-bluegray_400 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  Tripma partners with thousands of hotels to get you the best
                  deal. Save up to 30% when you add a hotel to your trip.
                </Text>
                <List
                  className="sm:gap-[17px] md:gap-[22px] gap-[32px] grid min-h-[auto] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="bg-white_A700 flex flex-col items-center justify-start rounded-radius12 shadow-bs1 w-[100%]">
                    <Img
                      src="images/img_image_247X400.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Ryokan Japan
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $439
                        </Text>
                      </Row>
                      <Text
                        className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Enjoy views of the garden from your room
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start rounded-radius12 shadow-bs1 w-[100%]">
                    <Img
                      src="images/img_image_10.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image One"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Bessho SASA
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $529
                        </Text>
                      </Row>
                      <Text
                        className="font-normal sm:ml-[3px] md:ml-[4px] ml-[7px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Japanese ryokan with private onsen bath
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start rounded-radius12 shadow-bs1 w-[100%]">
                    <Img
                      src="images/img_image_6.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image Two"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-normal font-notosansjp not-italic text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          <span className="text-bluegray_500 text-[18px] font-nunitosans font-semibold">
                            HOTEL THE FLAG
                          </span>
                          <span className="text-bluegray_500 text-[18px]">
                            {" "}
                            大阪市
                          </span>
                        </Text>
                        <Text
                          className="font-nunitosans font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $139
                        </Text>
                      </Row>
                      <Text
                        className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] my-[3px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Modern hotel in the heart of Osaka
                      </Text>
                    </Column>
                  </Column>
                </List>
                <Stack className="bg-white_A700 h-[330px] sm:mt-[17px] md:mt-[22px] mt-[32px] relative rounded-radius12 shadow-bs1 w-[100%]">
                  <Img
                    src="images/img_image_7.png"
                    className="absolute h-[247px] max-w-[100%] top-[0] w-[100%]"
                    alt="image Three"
                  />
                  <Column className="absolute bg-white_A700 bottom-[0] flex flex-col justify-start md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                      <Text
                        className="font-semibold text-bluegray_500 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        9 Hours Shinjuku
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_500 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        $59
                      </Text>
                    </Row>
                    <Text
                      className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      A convenient capsule hotel at Shinjuku station
                    </Text>
                  </Column>
                  <Column className="absolute bg-white_A700 flex flex-col items-center justify-start rounded-radius12 shadow-bs1 w-[100%]">
                    <Img
                      src="images/img_image_7.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image Four"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          9 Hours Shinjuku
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $59
                        </Text>
                      </Row>
                      <Text
                        className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        A convenient capsule hotel at Shinjuku station
                      </Text>
                    </Column>
                  </Column>
                </Stack>
              </Column>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1129px] md:ml-[66px] ml-[auto] mr-[auto] mt-[3px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="md:mt-[14px] mt-[21px] sm:mt-[11px] sm:mx-[0] sm:w-[100%] w-[36%]"
                type="email"
                name="basetextin One"
                placeholder="Email address"
              ></Input>
              <Button
                className="cursor-pointer font-normal sm:mb-[11px] md:mb-[14px] mb-[21px] min-w-[15%] sm:ml-[302px] md:ml-[390px] ml-[567px] not-italic text-[18px] text-center text-indigo_A200 w-[max-content]"
                shape="RoundedBorder4"
                variant="OutlineIndigoA200"
              >
                Shop all hotels
              </Button>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end max-w-[1117px] md:ml-[66px] ml-[auto] mr-[auto] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="mb-[4px] sm:mx-[0] sm:w-[100%] w-[36%]"
                type="email"
                name="basetextin Two"
                placeholder="Email address"
              ></Input>
              <Text
                className="font-bold sm:ml-[238px] md:ml-[308px] ml-[448px] sm:mt-[10px] md:mt-[13px] mt-[19px] text-bluegray_500 w-[auto]"
                as="h1"
                variant="h1"
              >
                <span className="text-bluegray_500 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                  Find unique{" "}
                </span>
                <span className="text-indigo_A200 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                  experiences
                </span>
              </Text>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1248px] md:ml-[66px] ml-[auto] mr-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Button
                className="cursor-pointer font-normal min-w-[13%] mt-[4px] not-italic text-[18px] text-center text-gray_51 w-[max-content]"
                shape="RoundedBorder4"
                variant="FillIndigoA200"
              >
                Email itinerary
              </Button>
              <Column className="flex flex-col items-center justify-start md:ml-[11px] ml-[16px] mt-[4px] sm:mx-[0] p-[11px] md:p-[7px] sm:px-[0] sm:py-[5px] rounded-radius4 sm:w-[100%] w-[11%]">
                <Text
                  className="font-normal mb-[4px] not-italic text-indigo_A200 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Add another
                </Text>
              </Column>
              <Text
                className="font-normal leading-[normal] mb-[2px] md:ml-[373px] ml-[542px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[33%]"
                as="h2"
                variant="h2"
              >
                Find events and authentic cultrual experiences available
                exclusively to Tripma users.
              </Text>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[1248px] md:ml-[66px] ml-[auto] mr-[auto] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                <Text
                  className="font-bold text-bluegray_500 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Flight Route
                </Text>
                <div className="sm:mt-[12px] md:mt-[16px] mt-[24px] overflow-x-auto w-[100%]">
                  <Stack className="bg-indigo_50 border border-bluegray_100 border-solid h-[400px] sm:pt-[3px] md:pt-[4px] pt-[7px] relative rounded-radius4 w-[100%]">
                    <Img
                      src="images/img_vector16.svg"
                      className="absolute h-[23px] max-w-[100%] right-[30%] top-[38%] w-[31%]"
                      alt="VectorSixteen"
                    />
                    <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap h-[max-content] inset-y-[0] items-center justify-between my-[auto] sm:px-[0] w-[100%]">
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
                          alt="airplane"
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
              </Column>
              <List
                className="sm:gap-[17px] md:gap-[22px] gap-[32px] grid min-h-[auto] w-[33%]"
                orientation="vertical"
              >
                <Column className="bg-white_A700 flex flex-col items-center justify-start my-[0] rounded-radius12 shadow-bs1 w-[100%]">
                  <Img
                    src="images/img_image_11.png"
                    className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                    alt="image Five"
                  />
                  <Column className="bg-white_A700 flex flex-col items-center justify-start md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                      <Text
                        className="font-semibold text-bluegray_500 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Nihon Kimono
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_500 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        $89
                      </Text>
                    </Row>
                    <Text
                      className="font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Wear the national dress of Japan around the city
                    </Text>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-start my-[0] rounded-radius12 shadow-bs1 w-[100%]">
                  <Img
                    src="images/img_image_12.png"
                    className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                    alt="image Six"
                  />
                  <Column className="bg-white_A700 flex flex-col items-center justify-start md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                      <Text
                        className="font-semibold text-bluegray_500 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        teamLab Borderless
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_500 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        $39
                      </Text>
                    </Row>
                    <Text
                      className="font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      A modern sensory experience of light and sound
                    </Text>
                  </Column>
                </Column>
              </List>
            </Row>
            <Button
              className="cursor-pointer font-normal min-w-[15%] ml-[1040px] sm:ml-[553px] md:ml-[715px] sm:mt-[21px] md:mt-[27px] mt-[40px] not-italic text-[18px] text-center text-indigo_A200 w-[max-content]"
              shape="RoundedBorder4"
              variant="OutlineIndigoA200"
            >
              View all experiences
            </Button>
            <footer className="bg-white_A700 sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]">
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
                      className="common-pointer sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      onClick={handleNavigate3}
                      alt="twitter"
                    />
                    <Img
                      src="images/img_instagram.svg"
                      className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="instagram"
                    />
                    <Img
                      src="images/img_facebook.svg"
                      className="common-pointer sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] sm:w-[12px] md:w-[16px] w-[24px]"
                      onClick={handleNavigate}
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

export default TripmaEighteenPage;
