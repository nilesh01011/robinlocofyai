import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const AccordionOpen1 = ({ onClose }) => {
  const router = useRouter();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onIconContainerClick = useCallback(() => {
    router.push("/accordion");
  }, [router]);

  const onLightbuttonContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLightbuttonContainer2Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="relative w-full flex flex-col items-end justify-center bg-[url(/accordion--open@3x.png)] bg-cover bg-no-repeat bg-[top] text-left text-sm text-gray font-cta-14-bold">
      <div className="self-stretch flex flex-col items-end justify-center relative">
        <div
          className="bg-neutral-1 shadow-[-5px_0px_50px_rgba(0,_0,_0,_0.2)] w-[1200px] h-full overflow-hidden shrink-0 flex flex-col items-start justify-start [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%] z-[0]"
          data-animate-on-scroll
        >
          <div className="relative w-[94px] h-[243px] hidden">
            <div className="absolute h-[119.75%] w-[156.74%] top-[12.36%] right-[-74.47%] bottom-[-32.11%] left-[17.73%] rounded-md bg-neutral-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] hidden mix-blend-normal" />
            <div className="absolute top-[0px] left-[0px] w-[94px] h-[243px]">
              <div className="absolute top-[-7px] left-[-4px] w-[98px] h-[254px]" />
              <div className="absolute top-[-25.04px] left-[-2px] bg-whitesmoke-100 w-[37px] h-[23px]" />
              <div className="absolute top-[-25.04px] left-[48px] bg-whitesmoke-100 w-[37px] h-[23px]" />
              <div className="absolute top-[-24.04px] left-[3px] leading-[22px]">
                HH MM
              </div>
              <div className="absolute top-[-28.04px] left-[34px] w-[11px] h-[83px] overflow-hidden hidden" />
              <img
                className="absolute top-[-27.04px] left-[34px] w-[11px] h-[100px] overflow-hidden"
                alt=""
              />
            </div>
          </div>
          <div className="self-stretch bg-neutral-1 shadow-[0px_1px_1px_rgba(0,_0,_0,_0.1)] h-[60px] overflow-hidden shrink-0 flex flex-row py-4 px-[30px] box-border items-start justify-start text-xl text-neutral-10 font-h4-medium">
            <div className="flex-1 flex flex-row items-center justify-between">
              <div className="relative leading-[28px] font-medium flex items-center w-[432px] shrink-0">
                View Customer Details
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5">
                <img className="relative w-0 h-0" alt="" />
                <img
                  className="relative w-[10.8px] h-[10.8px]"
                  alt=""
                  src="/union.svg"
                />
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start text-center text-lg text-lightmode-primary-red">
            <div className="bg-lightmode-neutral-grey0 overflow-hidden flex flex-col p-[30px] items-start justify-start gap-[33px]">
              <div className="self-stretch rounded bg-lightmode-neutral-grey1 flex flex-col py-4 px-5 items-start justify-start gap-[20px] border-[1px] border-solid border-lightmode-neutral-grey2">
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative rounded-111xl w-[60px] h-[60px]"
                    alt=""
                    src="/lightavatar.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <b className="relative leading-[27px]">John Micheal</b>
                    <div className="relative text-sm leading-[23px] text-lightmode-primary-black">
                      C200615396
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-lightmode-neutral-grey2" />
                <div className="w-40 flex flex-col items-start justify-start gap-[6px] text-left text-sm text-lightmode-neutral-grey4">
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="relative leading-[23px]">
                      Customer Type:
                    </div>
                    <div className="relative leading-[23px] font-medium text-lightmode-primary-black text-right">
                      Corporate
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <div className="relative leading-[23px]">Mobile No.:</div>
                    <div className="relative leading-[23px] font-medium text-lightmode-primary-black text-right">
                      9893473843
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[260px] flex flex-col items-start justify-start text-left text-sm text-lightmode-primary-black">
                <div className="self-stretch h-[60px] flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[10px]">
                    <div className="self-stretch flex flex-col items-center justify-start">
                      <img
                        className="relative w-10 h-10"
                        alt=""
                        src="/group-9554.svg"
                      />
                      <div className="flex-1 relative box-border w-px border-r-[1px] border-solid border-lightmode-semantic-success" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative leading-[23px]">
                        Customer Details
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[6px] text-lightmode-semantic-success">
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative rounded-81xl bg-lightmode-neutral-grey1 h-1 overflow-hidden shrink-0">
                            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] bg-lightmode-semantic-success shadow-[0px_8px_16px_rgba(33,_33,_33,_0.2)] w-[194px] flex flex-row items-start justify-start gap-[50px]">
                              <div className="self-stretch relative rounded-81xl w-2" />
                              <div className="self-stretch relative rounded-81xl w-2" />
                            </div>
                          </div>
                        </div>
                        <b className="relative leading-[23px] capitalize">
                          100%
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[60px] flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[10px]">
                    <div className="self-stretch flex flex-col items-center justify-start">
                      <img
                        className="relative w-10 h-10"
                        alt=""
                        src="/group-9554.svg"
                      />
                      <div className="flex-1 relative box-border w-px border-r-[1px] border-solid border-lightmode-semantic-success" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative leading-[23px]">
                        Customer Profile
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[6px] text-lightmode-semantic-success">
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative rounded-81xl bg-lightmode-neutral-grey1 h-1 overflow-hidden shrink-0">
                            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] bg-lightmode-semantic-success shadow-[0px_8px_16px_rgba(33,_33,_33,_0.2)] w-[194px] flex flex-row items-start justify-start gap-[50px]">
                              <div className="self-stretch relative rounded-81xl w-2" />
                              <div className="self-stretch relative rounded-81xl w-2" />
                            </div>
                          </div>
                        </div>
                        <b className="relative leading-[23px] capitalize">
                          100%
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[60px] flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[10px]">
                    <div className="self-stretch flex flex-col items-center justify-start">
                      <img
                        className="relative w-10 h-10"
                        alt=""
                        src="/group-9554.svg"
                      />
                      <div className="flex-1 relative box-border w-px border-r-[1px] border-solid border-lightmode-semantic-success" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative leading-[23px]">Address</div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[6px] text-lightmode-semantic-success">
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative rounded-81xl bg-lightmode-neutral-grey1 h-1 overflow-hidden shrink-0">
                            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] bg-lightmode-semantic-success shadow-[0px_8px_16px_rgba(33,_33,_33,_0.2)] w-[184px] flex flex-row items-start justify-start gap-[50px]">
                              <div className="self-stretch relative rounded-81xl w-2" />
                              <div className="self-stretch relative rounded-81xl w-2" />
                            </div>
                          </div>
                        </div>
                        <b className="relative leading-[23px] capitalize">
                          100%
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[60px] flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[10px]">
                    <div className="self-stretch flex flex-col items-center justify-start">
                      <img
                        className="relative w-10 h-10"
                        alt=""
                        src="/group-9554.svg"
                      />
                      <div className="flex-1 relative box-border w-px border-r-[1px] border-solid border-lightmode-semantic-success" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative leading-[23px]">Contact</div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[6px] text-lightmode-semantic-success">
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative rounded-81xl bg-lightmode-neutral-grey1 h-1 overflow-hidden shrink-0">
                            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] bg-lightmode-semantic-success shadow-[0px_8px_16px_rgba(33,_33,_33,_0.2)] w-[194px] flex flex-row items-start justify-start gap-[50px]">
                              <div className="self-stretch relative rounded-81xl w-2" />
                              <div className="self-stretch relative rounded-81xl w-2" />
                            </div>
                          </div>
                        </div>
                        <b className="relative leading-[23px] capitalize">
                          100%
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[59px] flex flex-row items-start justify-start gap-[10px]">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <img
                      className="relative w-10 h-10"
                      alt=""
                      src="/group-9554.svg"
                    />
                    <div className="flex-1 relative box-border w-px hidden border-r-[1px] border-solid border-lightmode-semantic-success" />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative leading-[23px]">
                      Account Related
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[6px] text-lightmode-semantic-success">
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch relative rounded-81xl bg-lightmode-neutral-grey1 h-1 overflow-hidden shrink-0">
                          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] bg-lightmode-semantic-success shadow-[0px_8px_16px_rgba(33,_33,_33,_0.2)] w-[194px] flex flex-row items-start justify-start gap-[50px]">
                            <div className="self-stretch relative rounded-81xl w-2" />
                            <div className="self-stretch relative rounded-81xl w-2" />
                          </div>
                        </div>
                      </div>
                      <b className="relative leading-[23px] capitalize">100%</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 h-[1078px] flex flex-col pt-[33px] px-10 pb-0 box-border items-center justify-start gap-[20px] text-left text-5xl text-lightmode-primary-black">
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative leading-[36px]">
                  Customer Details
                </b>
              </div>
              <div className="self-stretch h-[619px] overflow-y-auto shrink-0 flex flex-col pt-0 px-0 pb-14 box-border items-start justify-start gap-[20px]">
                <section className="self-stretch rounded-lg bg-lightmode-neutral-grey0 overflow-hidden shrink-0 flex flex-col py-5 px-[30px] items-start justify-start gap-[20px] text-left text-sm text-lightmode-neutral-grey3 font-cta-14-bold">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[20px] text-base text-lightmode-primary-black">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
                      <img
                        className="relative w-[30px] h-[30px]"
                        alt=""
                        src="/icon.svg"
                      />
                      <b className="relative leading-[24px]">
                        Customer Information
                      </b>
                    </div>
                    <div
                      className="relative w-6 h-6 cursor-pointer"
                      onClick={onIconContainerClick}
                    >
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                      <img
                        className="absolute h-[5%] w-3/5 top-[47.5%] right-[20%] bottom-[47.5%] left-[20%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector-54-stroke3.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-lightmode-neutral-grey1" />
                  <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">Enquiry No.</div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">
                        12309183
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">Customer ID</div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">
                        12309183
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">
                        Customer Type
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">
                        Firm/Company
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-lightmode-neutral-grey1" />
                  <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px] text-lightmode-primary-black">
                      <div className="relative leading-[23px]">{`Dummy Major Route Details `}</div>
                      <div className="relative leading-[23px]">C1</div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">
                        Corporate Type
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">
                        Non-Listed
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">
                        Corporate Name
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">{`Koncept Private Limited `}</div>
                    </div>
                  </div>
                  <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-lightmode-neutral-grey1" />
                  <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">
                        Usage/Application Category
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">{`Usage Dummy Category `}</div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="self-stretch relative leading-[23px]">
                        Usage/Application Sub-Category
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">{`Usage Dummy Category `}</div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">
                        Customer Category
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">
                        Fleet
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-lightmode-neutral-grey1" />
                  <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">
                        Business Details
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">
                        Dummy Business Details
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">
                        Vehicle Deployment Details
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">{`Dummy Vehicle Details `}</div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">
                        Key Role Details
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">{`Dummy Role Details `}</div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">
                        Major Route Details
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">{`Dummy Major Route Details `}</div>
                    </div>
                  </div>
                </section>
                <section className="self-stretch rounded-lg bg-lightmode-neutral-grey0 overflow-hidden shrink-0 flex flex-col py-5 px-[30px] items-start justify-start gap-[20px] text-left text-sm text-lightmode-neutral-grey3 font-cta-14-bold">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[20px] text-base text-lightmode-primary-black">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
                      <img
                        className="relative w-[30px] h-[30px]"
                        alt=""
                        src="/icon.svg"
                      />
                      <b className="relative leading-[24px]">
                        Key Account details
                      </b>
                    </div>
                    <div className="relative w-6 h-6">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                      <img
                        className="absolute h-[5%] w-3/5 top-[47.5%] right-[20%] bottom-[47.5%] left-[20%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector-54-stroke11.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">
                        Account Code
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">
                        CFG464787
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">
                        Account Name
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">
                        Koncept
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">
                        Account Segment
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">
                        Firm
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">
                        Account Client Name
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">
                        Pal Singh
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">
                        Account Mapping Date
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">
                        Corporate Name
                      </div>
                    </div>
                    <div className="self-stretch flex-1 relative overflow-hidden" />
                  </div>
                </section>
                <section className="self-stretch rounded-lg bg-lightmode-neutral-grey0 overflow-hidden shrink-0 flex flex-col py-5 px-[30px] items-start justify-start gap-[20px] text-left text-sm text-lightmode-neutral-grey3 font-cta-14-bold">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[20px] text-base text-lightmode-primary-black">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
                      <img
                        className="relative w-[30px] h-[30px]"
                        alt=""
                        src="/icon.svg"
                      />
                      <b className="relative leading-[24px]">
                        Authority Details
                      </b>
                    </div>
                    <div className="relative w-6 h-6">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                      <img
                        className="absolute h-3/5 w-[5%] top-[47.5%] right-[15%] bottom-[-7.5%] left-[80%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector-54-stroke11.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">
                        Name Of Person
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">
                        Vimal Kumar
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">Position</div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">
                        Manager
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">
                        Company Name
                      </div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">
                        Koncept
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1px]">
                      <div className="relative leading-[23px]">Remarks</div>
                      <div className="relative leading-[23px] text-lightmode-primary-black">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and Dummy
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute bottom-[0px] left-[486px] bg-neutral-1 shadow-[0px_-1px_1px_rgba(0,_0,_0,_0.15)] w-[880px] flex flex-row py-3 px-[30px] box-border items-center justify-between z-[1] text-center text-lightmode-primary-red">
          <div
            className="rounded box-border h-[34px] flex flex-col py-1.5 px-4 items-center justify-center cursor-pointer border-[1px] border-solid border-lightmode-primary-red"
            onClick={onLightbuttonContainerClick}
          >
            <b className="relative leading-[23px] capitalize">Close</b>
          </div>
          <div className="relative w-[139.5px] h-[34px]">
            <div className="absolute top-[0px] left-[0px] rounded box-border h-[34px] flex flex-col py-1.5 px-4 items-center justify-center border-[1px] border-solid border-lightmode-primary-red">
              <b className="relative leading-[23px] capitalize">Edit</b>
            </div>
            <div
              className="absolute top-[0px] left-[76.5px] rounded bg-lightmode-primary-red h-[34px] overflow-hidden flex flex-row py-1.5 px-4 box-border items-center justify-center cursor-pointer text-neutral-1"
              onClick={onLightbuttonContainer2Click}
            >
              <b className="relative leading-[23px] capitalize">next</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionOpen1;
