import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const Accordion1 = ({ onClose }) => {
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

  const onAddIconClick = useCallback(() => {
    router.push("/accordion-open");
  }, [router]);

  const onLightbuttonContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLightbuttonContainer2Click = useCallback(() => {
    router.push("/accordion-open");
  }, [router]);

  return (
    <div className="relative w-full flex flex-col items-end justify-center bg-[url(/accordion--open@3x.png)] bg-cover bg-no-repeat bg-[top] text-left text-xl text-neutral-10 font-h4-medium">
      <div
        className="bg-neutral-1 shadow-[-5px_0px_50px_rgba(0,_0,_0,_0.2)] w-[1200px] h-full flex flex-col items-end justify-center [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%] overflow-auto"
        data-animate-on-scroll
      >
        <div className="flex-1 bg-neutral-1 shadow-[0px_1px_1px_rgba(0,_0,_0,_0.1)] w-[1200px] overflow-hidden flex flex-row py-4 px-[30px] box-border items-start justify-start">
          <div className="flex-1 flex flex-row items-center justify-between">
            <div className="relative leading-[28px] font-medium flex items-center w-[432px] shrink-0">
              View Customer Details
            </div>
            <button onClick={() => router.push('/')} className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5">
              <img className="relative w-0 h-0" alt="" />
              <img
                className="relative w-[10.8px] h-[10.8px]"
                alt=""
                src="/union.svg"
              />
            </button>
          </div>
        </div>
        <div className="w-[1200px] flex flex-row items-start justify-start text-center text-lg text-lightmode-primary-red font-cta-14-bold">
          <div className="bg-lightmode-neutral-grey0 w-80 overflow-hidden shrink-0 flex flex-col p-[30px] box-border items-start justify-start gap-[33px]">
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
              <div className="w-[159px] flex flex-col items-start justify-start gap-[6px] text-left text-sm text-lightmode-neutral-grey4">
                <div className="self-stretch flex flex-row items-start justify-between">
                  <div className="relative leading-[23px]">Customer Type:</div>
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
                      src="/group-955411.svg"
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
                      <b className="relative leading-[23px] capitalize">100%</b>
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
                      src="/group-955411.svg"
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
                      <b className="relative leading-[23px] capitalize">100%</b>
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
                      src="/group-955411.svg"
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
                      <b className="relative leading-[23px] capitalize">100%</b>
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
                      src="/group-955411.svg"
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
                      <b className="relative leading-[23px] capitalize">100%</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[59px] flex flex-row items-start justify-start gap-[10px]">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <img
                    className="relative w-10 h-10"
                    alt=""
                    src="/group-955411.svg"
                  />
                  <div className="flex-1 relative box-border w-px hidden border-r-[1px] border-solid border-lightmode-semantic-success" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                  <div className="relative leading-[23px]">Account Related</div>
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
          <div className="flex-1 h-[708px] flex flex-col pt-[30px] px-0 pb-0 box-border items-end justify-between text-left text-5xl text-lightmode-primary-black">
            <div className="self-stretch flex flex-col py-0 px-10 items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative leading-[36px]">
                  Customer Details
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-base">
                <div className="self-stretch rounded-lg bg-lightmode-neutral-grey0 flex flex-col py-4 px-5 items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <img
                        className="relative w-[30px] h-[30px]"
                        alt=""
                        src="/icon.svg"
                      />
                      <b className="relative leading-[24px]">
                        Customer Information
                      </b>
                    </div>
                    <button
                      className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6 overflow-hidden shrink-0"
                      onClick={onAddIconClick}
                    >
                      <img
                        className="absolute h-4/5 w-4/5 top-[10%] right-[10%] bottom-[10%] left-[10%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector2.svg"
                      />
                    </button>
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-lightmode-neutral-grey0 flex flex-col py-4 px-5 items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <img
                        className="relative w-[30px] h-[30px]"
                        alt=""
                        src="/icon.svg"
                      />
                      <b className="relative leading-[24px]">
                        Key Account Details
                      </b>
                    </div>
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/add-icon.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-lightmode-neutral-grey0 flex flex-col py-4 px-5 items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <img
                        className="relative w-[30px] h-[30px]"
                        alt=""
                        src="/icon.svg"
                      />
                      <b className="relative leading-[24px]">
                        Authority Details
                      </b>
                    </div>
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/add-icon1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-1 shadow-[0px_-1px_1px_rgba(0,_0,_0,_0.15)] flex flex-row py-3 px-[30px] items-center justify-between text-center text-sm text-lightmode-primary-red">
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
      </div>
    </div>
  );
};

export default Accordion1;
