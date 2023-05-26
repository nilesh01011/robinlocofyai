import { useCallback } from "react";
import { useRouter } from "next/router";

const CustomerMaster1 = () => {
  const router = useRouter();

  const onTableClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='colHeading01Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRow01ContainerClick = useCallback(() => {
    router.push("/accordion");
  }, [router]);

  const onRow02ContainerClick = useCallback(() => {
    router.push("/accordion");
  }, [router]);

  const onRow03ContainerClick = useCallback(() => {
    router.push("/accordion");
  }, [router]);

  const onRow04ContainerClick = useCallback(() => {
    router.push("/accordion");
  }, [router]);

  const onRow05ContainerClick = useCallback(() => {
    router.push("/accordion");
  }, [router]);

  const onRow06ContainerClick = useCallback(() => {
    router.push("/accordion");
  }, [router]);

  const onRow07ContainerClick = useCallback(() => {
    router.push("/accordion");
  }, [router]);

  const onRow08ContainerClick = useCallback(() => {
    router.push("/accordion");
  }, [router]);

  const onRow09ContainerClick = useCallback(() => {
    router.push("/accordion");
  }, [router]);

  return (
    <div className="relative bg-neutral-1 w-full overflow-hidden flex flex-row items-start justify-start text-center text-sm text-neutral-1 font-cta-14-bold">
      <div className="bg-neutral-1 shadow-[1px_0px_1px_rgba(0,_0,_0,_0.15)] w-[78px] h-[768px] flex flex-col pt-5 px-0 pb-0 box-border items-center justify-between">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="flex flex-col items-center justify-start gap-[20px]">
            <div className="w-[46px] flex flex-row items-center justify-between">
              <img
                className="relative w-[16.35px] h-6"
                alt=""
                src="/robindms.svg"
              />
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/icon1.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
              <div className="self-stretch flex flex-row py-[7px] px-2.5 items-center justify-center">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/icon2.svg"
                />
              </div>
              <div className="self-stretch flex flex-row py-[7px] px-2.5 items-center justify-center">
                <img className="relative w-6 h-6" alt="" src="/icon3.svg" />
              </div>
              <div className="self-stretch flex flex-row py-[7px] px-2.5 items-center justify-center">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/icon4.svg"
                />
              </div>
              <div className="self-stretch flex flex-row py-[7px] px-2.5 items-center justify-center">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/icon5.svg"
                />
              </div>
              <div className="self-stretch flex flex-row py-[7px] px-2.5 items-center justify-center">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/icon6.svg"
                />
              </div>
              <div className="self-stretch flex flex-row py-[7px] px-2.5 items-center justify-center">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/icon7.svg"
                />
              </div>
              <div className="self-stretch flex flex-row py-[7px] px-2.5 items-center justify-center">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/icon8.svg"
                />
              </div>
              <div className="self-stretch flex flex-row py-[7px] px-2.5 items-center justify-center">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/icon9.svg"
                />
              </div>
              <div className="self-stretch flex flex-row py-[7px] px-2.5 items-center justify-center">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/icon10.svg"
                />
              </div>
              <div className="self-stretch flex flex-row py-[7px] px-2.5 items-center justify-center">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/icon11.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-1 shadow-[0px_-1px_1px_rgba(0,_0,_0,_0.15)] w-[78px] flex flex-col py-2.5 px-4 box-border items-center justify-end">
          <div className="self-stretch rounded box-border h-10 flex flex-row py-[7px] px-2.5 items-center justify-center border-[1px] border-solid border-lightmode-neutral-grey1">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/icon12.svg"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 h-[768px] overflow-hidden flex flex-col items-center justify-start relative gap-[30px] text-left text-base text-lightmode-primary-black">
        <div className="self-stretch bg-neutral-1 shadow-[0px_1px_1px_rgba(0,_0,_0,_0.15)] h-[110px] flex flex-col pt-2.5 px-10 pb-0 box-border items-start justify-center gap-[20px] z-[0]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <b className="relative leading-[24px]">
                Koncept Automobile Pvt Ltd
              </b>
              <div className="self-stretch flex flex-row items-center justify-start gap-[6px] text-xs text-lightmode-primary-red">
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <div className="relative leading-[20px]">
                    Vikhroli (W) Mumbai
                  </div>
                  <img
                    className="relative w-3 h-3 overflow-hidden shrink-0"
                    alt=""
                    src="/icon13.svg"
                  />
                </div>
                <img
                  className="relative w-px h-[17.3px]"
                  alt=""
                  src="/mask.svg"
                />
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <div className="relative leading-[20px]">FY 2023</div>
                  <img
                    className="relative w-3 h-3 overflow-hidden shrink-0"
                    alt=""
                    src="/icon13.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[232px] flex flex-row items-center justify-center gap-[30px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/icon14.svg"
              />
              <div className="flex flex-row items-center justify-start">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/icon15.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[30px] h-[30px]"
                    alt=""
                    src="/lightavatar1.svg"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <b className="relative leading-[24px]">Joana Doe</b>
                    <div className="flex flex-row items-center justify-start text-xs text-lightmode-primary-red">
                      <div className="flex flex-row items-center justify-start gap-[4px]">
                        <div className="relative leading-[20px]">
                          Super Admin
                        </div>
                        <img
                          className="relative w-3 h-3 overflow-hidden shrink-0"
                          alt=""
                          src="/icon13.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <b className="relative leading-[24px]">Customer Master</b>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/icon16.svg"
              />
            </div>
            <div className="self-stretch relative [background:linear-gradient(135deg,_#ff3e5b,_#ffe1d8)] h-1" />
          </div>
        </div>
        <div className="self-stretch flex flex-col py-0 px-10 items-center justify-start gap-[20px] z-[1] text-sm">
          <div className="self-stretch rounded bg-lightmode-neutral-grey0 overflow-hidden flex flex-row py-2 px-5 items-center justify-start gap-[20px] border-[1px] border-solid border-lightmode-neutral-grey1 md:flex-row md:gap-[12px] md:items-center md:justify-start">
            <div className="flex-1 flex flex-col items-start justify-center">
              <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                <div className="rounded box-border h-[39px] flex flex-row p-1.5 items-center justify-start gap-[16px] border-[1px] border-solid border-lightmode-neutral-grey1">
                  <div className="rounded bg-lightmode-primary-red flex flex-row py-0.5 px-1.5 items-center justify-center text-neutral-1 border-[0.5px] border-solid border-lightmode-primary-red">
                    <div className="relative leading-[23px] font-medium">
                      Individual
                    </div>
                  </div>
                  <div className="flex flex-row py-0.5 px-1.5 items-center justify-center">
                    <div className="relative leading-[23px] font-medium">
                      Firm/Corporate
                    </div>
                  </div>
                  <div className="hidden flex-row py-0.5 px-1.5 items-center justify-center">
                    <div className="relative leading-[23px] font-medium">
                      Text
                    </div>
                  </div>
                  <div className="hidden flex-row py-0.5 px-1.5 items-center justify-center">
                    <div className="relative leading-[23px] font-medium">
                      Text
                    </div>
                  </div>
                  <div className="hidden flex-row py-0.5 px-1.5 items-center justify-center">
                    <div className="relative leading-[23px] font-medium">
                      Text
                    </div>
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/icondownarrow.svg"
                  />
                </div>
                <div className="self-stretch rounded bg-neutral-1 box-border w-[411px] overflow-hidden shrink-0 flex flex-row py-[5px] pr-3 pl-1.5 items-center justify-start gap-[10px] text-xs border-[1px] border-solid border-lightmode-neutral-grey2">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                    <div className="rounded bg-lightmode-neutral-grey1 h-[26px] flex flex-row py-2.5 px-1.5 box-border items-center justify-start gap-[6px]">
                      <div className="relative leading-[20px]">
                        Customer Name
                      </div>
                      <img
                        className="relative w-3 h-3 overflow-hidden shrink-0"
                        alt=""
                        src="/icon17.svg"
                      />
                    </div>
                    <div className="flex-1 relative text-sm leading-[23px]">
                      John
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/icon18.svg"
                    />
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/icon19.svg"
                    />
                  </div>
                </div>
                <div className="rounded bg-neutral-1 box-border w-[300px] h-10 overflow-hidden shrink-0 hidden flex-row py-[5px] px-3 items-center justify-start gap-[10px] text-lightmode-neutral-grey2 border-[1px] border-solid border-lightmode-neutral-grey2">
                  <div className="flex-1 relative leading-[23px]">
                    Search by manufacturer name
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/icon20.svg"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-sm overflow-hidden flex flex-col py-[0.5px] px-0 items-center justify-center text-center text-lightmode-primary-red">
              <b className="relative leading-[23px] capitalize">View Draft</b>
            </div>
          </div>
          <div
            className="self-stretch rounded box-border h-[463px] overflow-x-auto shrink-0 flex flex-col items-start justify-start cursor-pointer text-lightmode-neutral-grey4 border-[1px] border-solid border-lightmode-neutral-grey1"
            onClick={onTableClick}
          >
            <div className="self-stretch relative bg-lightmode-neutral-grey0 shadow-[0px_1px_1px_rgba(0,_0,_0,_0.15)] h-12 overflow-hidden shrink-0 text-lightmode-primary-black">
              <div className="absolute top-[13px] left-[1088px] w-[41px] flex flex-row items-center justify-start">
                <div className="relative leading-[23px] font-medium">
                  Action
                </div>
              </div>
              <div className="absolute top-[13px] left-[904px] w-[135px] overflow-hidden flex flex-row items-center justify-start gap-[10px]">
                <h6 className="m-0 relative text-[inherit] leading-[23px] font-medium font-inherit flex items-center w-[113px] shrink-0 lg:w-28">
                  Membership Type
                </h6>
                <img
                  className="relative w-3.5 h-3.5"
                  alt=""
                  src="/icon21.svg"
                />
              </div>
              <div className="absolute top-[13px] left-[691px] w-[110px] overflow-hidden flex flex-row items-center justify-start gap-[10px]">
                <div className="relative leading-[23px] font-medium flex items-center w-[87px] shrink-0">
                  Email Address
                </div>
                <img
                  className="relative w-3.5 h-3.5"
                  alt=""
                  src="/icon21.svg"
                />
              </div>
              <div className="absolute top-[13px] left-[520px] w-[93px] overflow-hidden flex flex-row items-center justify-start gap-[10px]">
                <div className="relative leading-[23px] font-medium">
                  Mobile No.
                </div>
                <img
                  className="relative w-3.5 h-3.5"
                  alt=""
                  src="/icon21.svg"
                />
              </div>
              <div className="absolute top-[13px] left-[343px] w-[117px] overflow-hidden flex flex-row items-center justify-start gap-[10px]">
                <div className="relative leading-[23px] font-medium">
                  Customer Type
                </div>
                <img
                  className="relative w-3.5 h-3.5"
                  alt=""
                  src="/icon21.svg"
                />
              </div>
              <div className="absolute top-[13px] left-[159px] overflow-hidden flex flex-row items-center justify-center gap-[10px]">
                <h6 className="m-0 relative text-[inherit] leading-[23px] font-medium font-inherit flex items-center w-[101px] shrink-0">
                  Customer Name
                </h6>
                <img
                  className="relative w-3.5 h-3.5"
                  alt=""
                  src="/icon21.svg"
                />
              </div>
              <div
                className="absolute top-[13px] left-[20px] overflow-hidden flex flex-row items-center justify-start gap-[10px]"
                data-scroll-to="colHeading01Container"
              >
                <div className="relative leading-[23px] font-medium">
                  Customer ID
                </div>
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icosortdown.svg"
                />
              </div>
            </div>
            <div
              className="self-stretch relative bg-neutral-1 box-border h-12 overflow-hidden shrink-0 cursor-pointer border-b-[1px] border-solid border-whitesmoke-200"
              onClick={onRow01ContainerClick}
            >
              <div className="absolute top-[14px] left-[1088px] flex flex-row items-center justify-start gap-[20px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icovisible.svg"
                />
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5 overflow-hidden shrink-0">
                  <img
                    className="absolute h-4/5 w-4/5 top-[10%] right-[10%] bottom-[10%] left-[10%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector1.svg"
                  />
                </button>
              </div>
              <div className="absolute top-[13px] left-[904px] leading-[23px]">
                Golden
              </div>
              <div className="absolute top-[6px] left-[832.48px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[6px] left-[752px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[13px] left-[691px] leading-[23px]">
                johndoe@mahindra.com
              </div>
              <div className="absolute top-[13px] left-[520px] leading-[23px]">
                +91-9664321226
              </div>
              <div className="absolute top-[13px] left-[343px] leading-[23px]">
                Individual
              </div>
              <div className="absolute top-[13px] left-[159px] leading-[23px] text-lightmode-primary-black">
                <span>John</span>
                <span className="text-lightmode-neutral-grey4"> Doe</span>
              </div>
              <div className="absolute top-[13px] left-[20px] leading-[23px]">
                9817239
              </div>
            </div>
            <div
              className="self-stretch relative bg-neutral-1 box-border h-12 overflow-hidden shrink-0 cursor-pointer border-b-[1px] border-solid border-whitesmoke-200"
              onClick={onRow02ContainerClick}
            >
              <div className="absolute top-[14px] left-[1088px] flex flex-row items-center justify-start gap-[20px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icovisible.svg"
                />
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5 overflow-hidden shrink-0">
                  <img
                    className="absolute h-4/5 w-4/5 top-[10%] right-[10%] bottom-[10%] left-[10%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector1.svg"
                  />
                </button>
              </div>
              <div className="absolute top-[13px] left-[904px] leading-[23px]">
                Golden
              </div>
              <div className="absolute top-[6px] left-[832.48px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[6px] left-[752px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[13px] left-[691px] leading-[23px]">
                johnmicheal@mahindra.com
              </div>
              <div className="absolute top-[13px] left-[520px] leading-[23px]">
                +91-9348583593
              </div>
              <div className="absolute top-[13px] left-[343px] leading-[23px]">
                Individual
              </div>
              <div className="absolute top-[13px] left-[159px] leading-[23px] text-lightmode-primary-black">
                <span>John</span>
                <span className="text-lightmode-neutral-grey4"> micheal</span>
              </div>
              <div className="absolute top-[13px] left-[20px] leading-[23px]">
                7293487
              </div>
            </div>
            <div
              className="self-stretch relative bg-neutral-1 box-border h-12 overflow-hidden shrink-0 cursor-pointer border-b-[1px] border-solid border-whitesmoke-200"
              onClick={onRow03ContainerClick}
            >
              <div className="absolute top-[14px] left-[1088px] flex flex-row items-center justify-start gap-[20px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icovisible.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icoedit.svg"
                />
              </div>
              <div className="absolute top-[13px] left-[904px] leading-[23px]">
                Golden
              </div>
              <div className="absolute top-[6px] left-[832.48px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[6px] left-[752px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[13px] left-[691px] leading-[23px]">
                johnwarner@mahindra.com
              </div>
              <div className="absolute top-[13px] left-[520px] leading-[23px]">
                +91-9873459873
              </div>
              <div className="absolute top-[13px] left-[343px] leading-[23px]">
                Individual
              </div>
              <div className="absolute top-[13px] left-[159px] leading-[23px] text-lightmode-primary-black">
                <span>John</span>
                <span className="text-lightmode-neutral-grey4"> Warner</span>
              </div>
              <div className="absolute top-[13px] left-[20px] leading-[23px]">
                9823487
              </div>
            </div>
            <div
              className="self-stretch relative bg-neutral-1 box-border h-12 overflow-hidden shrink-0 cursor-pointer border-b-[1px] border-solid border-whitesmoke-200"
              onClick={onRow04ContainerClick}
            >
              <div className="absolute top-[14px] left-[1088px] flex flex-row items-center justify-start gap-[20px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icovisible.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icoedit.svg"
                />
              </div>
              <div className="absolute top-[13px] left-[904px] leading-[23px]">
                Golden
              </div>
              <div className="absolute top-[6px] left-[832.48px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[6px] left-[752px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[13px] left-[691px] leading-[23px]">
                johndoe@mahindra.com
              </div>
              <div className="absolute top-[13px] left-[520px] leading-[23px]">
                +91-9732642374
              </div>
              <div className="absolute top-[13px] left-[343px] leading-[23px]">
                Individual
              </div>
              <div className="absolute top-[13px] left-[159px] leading-[23px] text-lightmode-primary-black">
                <span>John</span>
                <span className="text-lightmode-neutral-grey4"> Doe</span>
              </div>
              <div className="absolute top-[13px] left-[20px] leading-[23px]">
                9823749
              </div>
            </div>
            <div
              className="self-stretch relative bg-neutral-1 box-border h-12 overflow-hidden shrink-0 cursor-pointer border-b-[1px] border-solid border-whitesmoke-200"
              onClick={onRow05ContainerClick}
            >
              <div className="absolute top-[14px] left-[1088px] flex flex-row items-center justify-start gap-[20px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icovisible.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icoedit.svg"
                />
              </div>
              <div className="absolute top-[13px] left-[904px] leading-[23px]">
                Golden
              </div>
              <div className="absolute top-[6px] left-[832.48px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[6px] left-[752px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[13px] left-[691px] leading-[23px]">
                johndoe@mahindra.com
              </div>
              <div className="absolute top-[13px] left-[520px] leading-[23px]">
                +91-9637248423
              </div>
              <div className="absolute top-[13px] left-[343px] leading-[23px]">
                Individual
              </div>
              <div className="absolute top-[13px] left-[159px] leading-[23px] text-lightmode-primary-black">
                <span>John</span>
                <span className="text-lightmode-neutral-grey4"> Doe</span>
              </div>
              <div className="absolute top-[13px] left-[20px] leading-[23px]">
                8923462
              </div>
            </div>
            <div
              className="self-stretch relative bg-neutral-1 box-border h-12 overflow-hidden shrink-0 cursor-pointer border-b-[1px] border-solid border-whitesmoke-200"
              onClick={onRow06ContainerClick}
            >
              <div className="absolute top-[14px] left-[1088px] flex flex-row items-center justify-start gap-[20px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icovisible.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icoedit.svg"
                />
              </div>
              <div className="absolute top-[13px] left-[904px] leading-[23px]">
                Golden
              </div>
              <div className="absolute top-[6px] left-[832.48px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[6px] left-[752px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[13px] left-[691px] leading-[23px]">
                Pauljohn@mahindra.com
              </div>
              <div className="absolute top-[13px] left-[520px] leading-[23px]">
                +91-7623842378
              </div>
              <div className="absolute top-[13px] left-[343px] leading-[23px]">
                Individual
              </div>
              <div className="absolute top-[13px] left-[159px] leading-[23px]">
                <span>{`Paul `}</span>
                <span className="text-lightmode-primary-black">John</span>
              </div>
              <div className="absolute top-[13px] left-[20px] leading-[23px]">
                2763489
              </div>
            </div>
            <div
              className="self-stretch relative bg-neutral-1 box-border h-12 overflow-hidden shrink-0 cursor-pointer border-b-[1px] border-solid border-whitesmoke-200"
              onClick={onRow07ContainerClick}
            >
              <div className="absolute top-[14px] left-[1088px] flex flex-row items-center justify-start gap-[20px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icovisible.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icoedit.svg"
                />
              </div>
              <div className="absolute top-[13px] left-[904px] leading-[23px]">
                Golden
              </div>
              <div className="absolute top-[6px] left-[832.48px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[6px] left-[752px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[13px] left-[691px] leading-[23px]">
                johnbloom@mahindra.com
              </div>
              <div className="absolute top-[13px] left-[520px] leading-[23px]">
                +91-9723823623
              </div>
              <div className="absolute top-[13px] left-[343px] leading-[23px]">
                Individual
              </div>
              <div className="absolute top-[13px] left-[159px] leading-[23px] text-lightmode-primary-black">
                <span>John</span>
                <span className="text-lightmode-neutral-grey4"> Bloom</span>
              </div>
              <div className="absolute top-[13px] left-[20px] leading-[23px]">
                0238038
              </div>
            </div>
            <div
              className="self-stretch relative bg-neutral-1 box-border h-12 overflow-hidden shrink-0 cursor-pointer border-b-[1px] border-solid border-whitesmoke-200"
              onClick={onRow08ContainerClick}
            >
              <div className="absolute top-[14px] left-[1088px] flex flex-row items-center justify-start gap-[20px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icovisible.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icoedit.svg"
                />
              </div>
              <div className="absolute top-[13px] left-[904px] leading-[23px]">
                Golden
              </div>
              <div className="absolute top-[6px] left-[832.48px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[6px] left-[752px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[13px] left-[691px] leading-[23px]">
                johndoe@mahindra.com
              </div>
              <div className="absolute top-[13px] left-[520px] leading-[23px]">
                +91-8682347234
              </div>
              <div className="absolute top-[13px] left-[343px] leading-[23px]">
                Individual
              </div>
              <div className="absolute top-[13px] left-[159px] leading-[23px] text-lightmode-primary-black">
                <span>John</span>
                <span className="text-lightmode-neutral-grey4"> Doe</span>
              </div>
              <div className="absolute top-[13px] left-[20px] leading-[23px]">
                0233726
              </div>
            </div>
            <div
              className="self-stretch relative bg-neutral-1 box-border h-12 overflow-hidden shrink-0 cursor-pointer border-b-[1px] border-solid border-whitesmoke-200"
              onClick={onRow09ContainerClick}
            >
              <div className="absolute top-[14px] left-[1088px] flex flex-row items-center justify-start gap-[20px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icovisible.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icoedit.svg"
                />
              </div>
              <div className="absolute top-[13px] left-[904px] leading-[23px]">
                Golden
              </div>
              <div className="absolute top-[6px] left-[832.48px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[6px] left-[752px] leading-[22px] text-lightmode-primary-black hidden">
                Label
              </div>
              <div className="absolute top-[13px] left-[691px] leading-[23px]">
                johndoe@mahindra.com
              </div>
              <div className="absolute top-[13px] left-[520px] leading-[23px]">
                +91-9682348329
              </div>
              <div className="absolute top-[13px] left-[343px] leading-[23px]">
                Individual
              </div>
              <div className="absolute top-[13px] left-[159px] leading-[23px] text-lightmode-primary-black">
                <span>John</span>
                <span className="text-lightmode-neutral-grey4"> Doe</span>
              </div>
              <div className="absolute top-[13px] left-[20px] leading-[23px]">
                2368237
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-center text-character-primary-85">
            <div className="rounded flex flex-row items-center justify-start gap-[16px]">
              <div className="relative leading-[23px] font-medium text-lightmode-primary-black">
                Total 85 items
              </div>
              <div className="overflow-hidden hidden flex-row items-center justify-start gap-[8px] font-h4-medium">
                <div className="overflow-hidden flex flex-col py-0 pr-2 pl-0 items-start justify-center text-left">
                  <div className="relative leading-[22px]">Total 85 items</div>
                </div>
                <div className="rounded-sm bg-neutral-1 flex flex-row p-2.5 items-center justify-center border-[1px] border-solid border-neutral-5">
                  <img
                    className="relative w-3 h-3 overflow-hidden shrink-0"
                    alt=""
                    src="/left.svg"
                  />
                </div>
                <div className="rounded-sm bg-neutral-1 overflow-hidden flex flex-col py-px px-[7px] items-center justify-start border-[1px] border-solid border-neutral-5">
                  <div className="relative leading-[22px] flex items-center justify-center w-[18px] h-[30px] shrink-0">
                    1
                  </div>
                </div>
                <div className="relative w-8 h-8 overflow-hidden shrink-0 text-character-disabledampplaceholder-25 font-arial">
                  <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_9px)] tracking-[2px] leading-[32px]">
                    •••
                  </div>
                </div>
                <div className="rounded-sm bg-neutral-1 overflow-hidden flex flex-col py-px px-[7px] items-center justify-start border-[1px] border-solid border-neutral-5">
                  <div className="relative leading-[22px] flex items-center justify-center w-[18px] h-[30px] shrink-0">
                    4
                  </div>
                </div>
                <div className="rounded-sm bg-neutral-1 overflow-hidden flex flex-col py-px px-[7px] items-center justify-start border-[1px] border-solid border-neutral-5">
                  <div className="relative leading-[22px] flex items-center justify-center w-[18px] h-[30px] shrink-0">
                    5
                  </div>
                </div>
                <div className="rounded-sm bg-neutral-1 overflow-hidden flex flex-col py-px px-[7px] items-center justify-start text-primary-6 border-[1px] border-solid border-primary-6">
                  <div className="relative leading-[22px] font-medium flex items-center justify-center w-[18px] h-[30px] shrink-0">
                    6
                  </div>
                </div>
                <div className="rounded-sm bg-neutral-1 overflow-hidden flex flex-col py-px px-[7px] items-center justify-start border-[1px] border-solid border-neutral-5">
                  <div className="relative leading-[22px] flex items-center justify-center w-[18px] h-[30px] shrink-0">
                    7
                  </div>
                </div>
                <div className="rounded-sm bg-neutral-1 overflow-hidden flex flex-col py-px px-[7px] items-center justify-start border-[1px] border-solid border-neutral-5">
                  <div className="relative leading-[22px] flex items-center justify-center w-[18px] h-[30px] shrink-0">
                    8
                  </div>
                </div>
                <div className="relative w-8 h-8 overflow-hidden shrink-0 text-character-disabledampplaceholder-25 font-arial">
                  <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_9px)] tracking-[2px] leading-[32px]">
                    •••
                  </div>
                </div>
                <div className="rounded-sm bg-neutral-1 overflow-hidden flex flex-col py-px px-[7px] items-center justify-start border-[1px] border-solid border-neutral-5">
                  <div className="relative leading-[22px] flex items-center justify-center w-[18px] h-[30px] shrink-0">
                    50
                  </div>
                </div>
                <div className="rounded-sm bg-neutral-1 flex flex-row p-2.5 items-start justify-start border-[1px] border-solid border-neutral-5">
                  <img
                    className="relative w-3 h-3 overflow-hidden shrink-0"
                    alt=""
                    src="/right.svg"
                  />
                </div>
              </div>
              <div className="rounded bg-neutral-1 flex flex-row py-1 px-3 items-center justify-start gap-[10px] text-left text-lightmode-primary-black border-[1px] border-solid border-lightmode-neutral-grey2">
                <div className="overflow-hidden flex flex-row py-px px-0 items-center justify-start">
                  <div className="relative leading-[23px]">10 / page</div>
                </div>
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/icoarrowcutdown.svg"
                />
              </div>
              <div className="overflow-hidden hidden flex-row items-center justify-start gap-[8px] text-right font-h4-medium">
                <div className="relative leading-[22px] hidden">Go to</div>
                <div className="rounded-sm bg-neutral-1 box-border w-[50px] overflow-hidden shrink-0 hidden flex-row py-[5px] px-3 items-center justify-start text-left text-character-disabledampplaceholder-25 border-[1px] border-solid border-neutral-5">
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-start">
                    <div className="relative leading-[22px] hidden">
                      example
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative leading-[32px] font-pingfang-sc text-left hidden">
                页
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[16px] font-h4-medium">
              <div className="relative leading-[32px] font-arial hidden">
                Total 85 items
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-lightmode-neutral-grey2">
                <div className="overflow-hidden hidden flex-col py-0 pr-2 pl-0 items-start justify-center text-left text-admin-neutral-11">
                  <div className="relative leading-[22px]">Total 85 items</div>
                </div>
                <div className="rounded bg-neutral-1 flex flex-row p-2.5 items-center justify-center border-[1px] border-solid border-lightmode-neutral-grey2">
                  <img
                    className="relative w-3 h-3 overflow-hidden shrink-0"
                    alt=""
                    src="/left1.svg"
                  />
                </div>
                <div className="rounded bg-neutral-1 overflow-hidden flex flex-col py-px px-[7px] items-center justify-start border-[1px] border-solid border-lightmode-neutral-grey2">
                  <div className="relative leading-[22px] flex items-center justify-center w-[18px] h-[30px] shrink-0">
                    1
                  </div>
                </div>
                <div className="relative w-8 h-8 overflow-hidden shrink-0 font-arial">
                  <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_9px)] tracking-[2px] leading-[32px]">
                    •••
                  </div>
                </div>
                <div className="rounded bg-neutral-1 overflow-hidden flex flex-col py-px px-[7px] items-center justify-start border-[1px] border-solid border-lightmode-neutral-grey2">
                  <div className="relative leading-[22px] flex items-center justify-center w-[18px] h-[30px] shrink-0">
                    4
                  </div>
                </div>
                <div className="rounded bg-neutral-1 overflow-hidden flex flex-col py-px px-[7px] items-center justify-start border-[1px] border-solid border-lightmode-neutral-grey2">
                  <div className="relative leading-[22px] flex items-center justify-center w-[18px] h-[30px] shrink-0">
                    5
                  </div>
                </div>
                <div className="rounded bg-neutral-1 overflow-hidden flex flex-col py-px px-[7px] items-center justify-start text-lightmode-primary-red border-[1px] border-solid border-lightmode-primary-red">
                  <div className="relative leading-[22px] font-medium flex items-center justify-center w-[18px] h-[30px] shrink-0">
                    6
                  </div>
                </div>
                <div className="rounded bg-neutral-1 overflow-hidden flex flex-col py-px px-[7px] items-center justify-start border-[1px] border-solid border-lightmode-neutral-grey2">
                  <div className="relative leading-[22px] flex items-center justify-center w-[18px] h-[30px] shrink-0">
                    7
                  </div>
                </div>
                <div className="rounded bg-neutral-1 overflow-hidden flex flex-col py-px px-[7px] items-center justify-start border-[1px] border-solid border-lightmode-neutral-grey2">
                  <div className="relative leading-[22px] flex items-center justify-center w-[18px] h-[30px] shrink-0">
                    8
                  </div>
                </div>
                <div className="relative w-8 h-8 overflow-hidden shrink-0 font-arial">
                  <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_9px)] tracking-[2px] leading-[32px]">
                    •••
                  </div>
                </div>
                <div className="rounded bg-neutral-1 overflow-hidden flex flex-col py-px px-[7px] items-center justify-start border-[1px] border-solid border-lightmode-neutral-grey2">
                  <div className="relative leading-[22px] flex items-center justify-center w-[18px] h-[30px] shrink-0">
                    50
                  </div>
                </div>
                <div className="rounded bg-neutral-1 flex flex-row p-2.5 items-start justify-start border-[1px] border-solid border-lightmode-neutral-grey2">
                  <img
                    className="relative w-3 h-3 overflow-hidden shrink-0"
                    alt=""
                    src="/right1.svg"
                  />
                </div>
              </div>
              <div className="overflow-hidden hidden flex-row items-center justify-start gap-[8px] text-left">
                <div className="rounded-sm bg-neutral-1 flex flex-row py-1 px-3 items-start justify-start border-[1px] border-solid border-neutral-5">
                  <div className="overflow-hidden flex flex-row py-px px-0 items-center justify-start">
                    <div className="relative leading-[22px]">10 / page</div>
                  </div>
                  <div className="self-stretch flex flex-col py-0 pr-0 pl-1.5 items-center justify-center">
                    <img
                      className="relative w-[10.18px] h-[6.86px]"
                      alt=""
                      src="/icon22.svg"
                    />
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-right">
                  <div className="relative leading-[22px]">Go to</div>
                  <div className="rounded-sm bg-neutral-1 box-border w-[50px] overflow-hidden shrink-0 flex flex-row py-[5px] px-3 items-center justify-start text-left text-character-disabledampplaceholder-25 border-[1px] border-solid border-neutral-5">
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-start">
                      <div className="relative leading-[22px] hidden">
                        example
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative leading-[32px] font-pingfang-sc hidden">
                  页
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute my-0 mx-[!important] right-[40px] bottom-[10px] text-3xs leading-[17px] text-lightmode-neutral-grey2 z-[2]">
          Copyright © 2023 ROBIN.
        </div>
      </div>
    </div>
  );
};

export default CustomerMaster1;
