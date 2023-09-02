const TradingScreen3840X2160 = () => {
  return (
    <div className="bg-white w-[3840px] h-[2160px] overflow-hidden text-left text-9xl text-dark font-poppins">
      <div className="absolute h-[7.22%] w-[100.01%] top-[-0.25%] right-[0%] bottom-[93.02%] left-[-0.01%] bg-white box-border border-[1px] border-solid border-gainsboro" />
      <img
        className="absolute top-[26.68px] left-[3649.99px] rounded-[50%] w-[90.01px] h-[90.01px] object-cover"
        alt=""
        src="/unsplashgrymxaqdtp8@2x.png"
      />
      <img
        className="absolute h-[2.21%] w-[1.24%] top-[2.25%] right-[5.84%] bottom-[95.53%] left-[92.92%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-4.svg"
      />
      <img
        className="absolute h-[2.31%] w-[1.2%] top-[2.16%] right-[7.97%] bottom-[95.52%] left-[90.83%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[24.68px] left-[99.73px] text-[56px] tracking-[0.36px] leading-[94.01px] font-medium text-deepskyblue-100">
        Trading
      </div>
      <div className="absolute top-[36.68px] left-[3169.95px] rounded-3xs bg-deepskyblue-100 w-[262.02px] h-[72.01px] flex flex-row p-[20.001449584960938px] box-border items-center justify-center text-white">
        <b className="relative tracking-[2.5px] leading-[32px]">Logout</b>
      </div>
      <div className="absolute top-[150px] left-[0px] bg-white flex flex-col py-[50px] pr-[30px] pl-[100px] items-start justify-end gap-[30px] text-7xl border-[0.9px] border-solid border-gainsboro">
        <div className="self-stretch flex flex-row items-end justify-start gap-[30px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[19px]">
            <div className="relative leading-[43.45px] capitalize font-medium">
              Ticker
            </div>
            <div className="self-stretch rounded-[9.05px] bg-whitesmoke overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center border-[0.4px] border-solid border-dark">
              <div className="flex-1 relative leading-[43.45px]">Silver</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[19px]">
            <div className="relative leading-[43.45px] capitalize font-medium">
              expiration
            </div>
            <div className="self-stretch rounded-[9.05px] bg-whitesmoke overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center gap-[10px] text-right border-[0.4px] border-solid border-dark">
              <div className="flex-1 relative leading-[43.45px]">
                12/04/2023
              </div>
              <img
                className="relative w-[22.01px] h-3"
                alt=""
                src="/vector1.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[19px]">
            <div className="relative leading-[43.45px] capitalize font-medium">
              Strike Price (min)
            </div>
            <div className="self-stretch rounded-[9.05px] bg-whitesmoke overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center text-right border-[0.4px] border-solid border-dark">
              <div className="flex-1 relative leading-[43.45px]">4300</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[19px]">
            <div className="relative leading-[43.45px] capitalize font-medium">
              Strike Price (Max)
            </div>
            <div className="self-stretch rounded-[9.05px] bg-whitesmoke overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center text-right border-[0.4px] border-solid border-dark">
              <div className="flex-1 relative leading-[43.45px]">4600</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[19px]">
            <div className="relative leading-[43.45px] capitalize font-medium">{`Interval `}</div>
            <div className="self-stretch rounded-[9.05px] bg-whitesmoke overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center text-right border-[0.4px] border-solid border-dark">
              <div className="flex-1 relative leading-[43.45px]">10</div>
            </div>
          </div>
          <div className="rounded-[9.05px] bg-deepskyblue-100 w-[273.33px] h-[83.29px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center text-[28.97px] text-white">
            <b className="relative tracking-[2.26px] leading-[28.97px]">
              Submit
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-end text-center text-9xl">
          <div className="self-stretch bg-lightyellow flex flex-row items-end justify-start">
            <div className="self-stretch flex-1 overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center border-r-[1px] border-solid border-dark">
              <div className="flex-1 relative tracking-[0.33px] font-semibold">
                Calls
              </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center border-l-[1px] border-solid border-dark">
              <div className="flex-1 relative tracking-[0.33px] font-semibold">
                Puts
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start text-left">
            <div className="flex flex-row items-start justify-start">
              <div className="w-[180px] flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch flex flex-row p-[5px] items-center justify-end gap-[10px]">
                  <div className="relative tracking-[0.33px] font-semibold">
                    Theta
                  </div>
                  <img
                    className="relative w-[11.64px] h-4"
                    alt=""
                    src="/group-41.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px] border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark border-l-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                </div>
              </div>
              <div className="w-[180px] flex flex-col items-end justify-end gap-[10px]">
                <div className="self-stretch flex flex-row p-[5px] items-center justify-end gap-[10px]">
                  <div className="relative tracking-[0.33px] font-semibold">
                    Delta
                  </div>
                  <img
                    className="relative w-[11.64px] h-4"
                    alt=""
                    src="/group-41.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                </div>
              </div>
              <div className="w-[180px] flex flex-col items-end justify-end gap-[10px]">
                <div className="self-stretch flex flex-row p-[5px] items-center justify-start gap-[10px]">
                  <div className="relative tracking-[0.33px] font-semibold">
                    Open Int.
                  </div>
                  <img
                    className="relative w-[11.64px] h-4"
                    alt=""
                    src="/group-42.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                </div>
              </div>
              <div className="w-[180px] flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch flex flex-row p-[5px] items-center justify-end gap-[10px]">
                  <div className="relative tracking-[0.33px] font-semibold">
                    Volume
                  </div>
                  <img
                    className="relative w-[11.64px] h-4"
                    alt=""
                    src="/group-41.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                </div>
              </div>
              <div className="w-[180px] flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch flex flex-row p-[5px] items-center justify-end gap-[10px]">
                  <div className="relative tracking-[0.33px] font-semibold">
                    Ask
                  </div>
                  <img
                    className="relative w-[11.64px] h-4"
                    alt=""
                    src="/group-41.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-center justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-center justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-center justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-center justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-center justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-center justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-center justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-center justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-center justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-center justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-center justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-center justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-center justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-center justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                </div>
              </div>
              <div className="w-[180px] flex flex-col items-center justify-end gap-[10px]">
                <div className="self-stretch flex flex-row p-[5px] items-center justify-end gap-[10px]">
                  <div className="relative tracking-[0.33px] font-semibold">
                    Bid
                  </div>
                  <img
                    className="relative w-[11.64px] h-4"
                    alt=""
                    src="/group-41.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border w-[180px] flex flex-col items-start justify-start gap-[10px] border-r-[1px] border-solid border-dark border-l-[1px]">
              <div className="self-stretch flex flex-row p-[5px] items-center justify-end gap-[10px]">
                <div className="relative tracking-[0.33px] font-semibold">
                  Strike
                </div>
                <img
                  className="relative w-[11.64px] h-4"
                  alt=""
                  src="/group-41.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px]">4300</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4310</div>
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px]">4320</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4330</div>
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px]">4340</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4350</div>
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px]">4360</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4370</div>
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px]">4380</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4390</div>
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px]">4400</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4410</div>
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px]">4420</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4430</div>
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px]">4440</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4450</div>
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px]">4460</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4470</div>
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px]">4480</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4470</div>
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px]">4480</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4490</div>
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px]">4500</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4510</div>
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px]">4510</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4520</div>
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px]">4530</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4540</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="w-[180px] flex flex-col items-end justify-start gap-[10px]">
                <div className="self-stretch flex flex-row p-[5px] items-center justify-end gap-[10px]">
                  <div className="relative tracking-[0.33px] font-semibold">
                    Bid
                  </div>
                  <img
                    className="relative w-[11.64px] h-4"
                    alt=""
                    src="/group-41.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                </div>
              </div>
              <div className="w-[180px] flex flex-col items-end justify-start gap-[10px]">
                <div className="self-stretch flex flex-row p-[5px] items-center justify-end gap-[10px]">
                  <div className="relative tracking-[0.33px] font-semibold">
                    Ask
                  </div>
                  <img
                    className="relative w-[11.64px] h-4"
                    alt=""
                    src="/group-421.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-end justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-end justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">5.25</div>
                  </div>
                </div>
              </div>
              <div className="w-[180px] flex flex-col items-end justify-end gap-[10px]">
                <div className="self-stretch flex flex-row p-[5px] items-center justify-end gap-[10px]">
                  <div className="relative tracking-[0.33px] font-semibold">
                    Volume
                  </div>
                  <img
                    className="relative w-[11.64px] h-4"
                    alt=""
                    src="/group-422.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                </div>
              </div>
              <div className="w-[180px] flex flex-col items-end justify-start gap-[10px]">
                <div className="self-stretch flex flex-row p-[5px] items-center justify-end gap-[10px]">
                  <div className="relative tracking-[0.33px] font-semibold">
                    Open Int.
                  </div>
                  <img
                    className="relative w-[11.64px] h-4"
                    alt=""
                    src="/group-423.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">500</div>
                  </div>
                </div>
              </div>
              <div className="w-[180px] flex flex-col items-end justify-start gap-[10px]">
                <div className="self-stretch flex flex-row p-[5px] items-center justify-end gap-[10px]">
                  <div className="relative tracking-[0.33px] font-semibold">
                    Delta
                  </div>
                  <img
                    className="relative w-[11.64px] h-4"
                    alt=""
                    src="/group-41.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                    <div className="relative tracking-[0.33px]">0.5</div>
                  </div>
                </div>
              </div>
              <div className="w-[180px] flex flex-col items-end justify-start gap-[10px]">
                <div className="self-stretch flex flex-row p-[5px] items-center justify-end gap-[10px]">
                  <div className="relative tracking-[0.33px] font-semibold">
                    Theta
                  </div>
                  <img
                    className="relative w-[11.64px] h-4"
                    alt=""
                    src="/group-41.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-r-[0.4px] border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                  <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-r-[0.4px] border-solid border-dark border-b-[0.4px]">
                    <div className="relative tracking-[0.33px]">0.10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[150px] right-[0px] h-[1989px] flex flex-col items-start justify-start">
        <div className="bg-white box-border w-[1371px] flex flex-col py-[30px] pr-[100px] pl-[30px] items-start justify-end gap-[10px] border-[0.9px] border-solid border-gainsboro">
          <div className="w-[1240px] flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch flex flex-row p-[5px] items-center justify-end gap-[10px]">
                <div className="relative tracking-[0.33px] font-semibold">{`Strike `}</div>
                <img
                  className="relative w-[11.64px] h-4"
                  alt=""
                  src="/group-424.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px]">4400</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4450</div>
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4200</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4150</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch flex flex-row p-[5px] items-center justify-end gap-[10px]">
                <div className="relative tracking-[0.33px] font-semibold">
                  Call/Put
                </div>
                <img
                  className="relative w-[11.64px] h-4"
                  alt=""
                  src="/group-41.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end gap-[10px] border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px] flex items-center w-[50px] shrink-0">
                    Call
                  </div>
                  <img
                    className="relative w-[22.01px] h-3"
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-center justify-end gap-[10px] border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px] flex items-center w-[50px] shrink-0">
                    Call
                  </div>
                  <img
                    className="relative w-[22.01px] h-3"
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end gap-[10px] border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px] flex items-center w-[50px] shrink-0">
                    Put
                  </div>
                  <img
                    className="relative w-[22.01px] h-3"
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-center justify-end gap-[10px] border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px] flex items-center w-[50px] shrink-0">
                    Put
                  </div>
                  <img
                    className="relative w-[22.01px] h-3"
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch flex flex-row p-[5px] items-center justify-end gap-[10px]">
                <div className="relative tracking-[0.33px] font-semibold">
                  Buy/Sell
                </div>
                <img
                  className="relative w-[11.64px] h-4"
                  alt=""
                  src="/group-424.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end gap-[10px] border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px] flex items-center w-[50px] shrink-0">
                    Buy
                  </div>
                  <img
                    className="relative w-[22.01px] h-3"
                    alt=""
                    src="/vector3.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-center justify-end gap-[10px] border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px] flex items-center w-[50px] shrink-0">
                    Sell
                  </div>
                  <img
                    className="relative w-[22.01px] h-3"
                    alt=""
                    src="/vector3.svg"
                  />
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end gap-[10px] border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px] flex items-center w-[50px] shrink-0">
                    Buy
                  </div>
                  <img
                    className="relative w-[22.01px] h-3"
                    alt=""
                    src="/vector3.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-center justify-end gap-[10px] border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px] flex items-center w-[50px] shrink-0">
                    Sell
                  </div>
                  <img
                    className="relative w-[22.01px] h-3"
                    alt=""
                    src="/vector3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch flex flex-row p-[5px] items-center justify-end gap-[10px]">
                <div className="relative tracking-[0.33px] font-semibold">
                  Price
                </div>
                <img
                  className="relative w-[11.64px] h-4"
                  alt=""
                  src="/group-41.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="relative tracking-[0.33px]">50.00</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">-1.00</div>
                </div>
                <div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">4.00</div>
                </div>
                <div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">-1.00</div>
                </div>
              </div>
            </div>
            <div className="w-[258px] flex flex-col items-start justify-start gap-[10px] text-right text-5xl text-white">
              <div className="self-stretch h-[52px] flex flex-row py-[5px] px-[30px] box-border items-center justify-end">
                <div className="rounded-3xs bg-forestgreen w-9 h-9 flex flex-row py-[5px] px-5 box-border items-center justify-center">
                  <b className="relative tracking-[0.33px]">+</b>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-lg">
                <div className="self-stretch bg-deepskyblue-200 box-border h-14 flex flex-row py-2.5 px-[30px] items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="rounded-3xs bg-red w-9 h-9 flex flex-row py-[5px] px-5 box-border items-center justify-center">
                    <b className="relative tracking-[0.33px]">X</b>
                  </div>
                </div>
                <div className="self-stretch box-border h-14 flex flex-row py-2.5 px-[30px] items-center justify-end border-t-[0.4px] border-solid border-dark">
                  <div className="rounded-3xs bg-red w-9 h-9 flex flex-row py-[5px] px-5 box-border items-center justify-center">
                    <b className="relative tracking-[0.33px]">X</b>
                  </div>
                </div>
                <div className="self-stretch bg-deepskyblue-200 box-border h-14 flex flex-row py-2.5 px-[30px] items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="rounded-3xs bg-red w-9 h-9 flex flex-row py-[5px] px-5 box-border items-center justify-center">
                    <b className="relative tracking-[0.33px]">X</b>
                  </div>
                </div>
                <div className="self-stretch box-border h-14 flex flex-row py-2.5 px-[30px] items-center justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="rounded-3xs bg-red w-9 h-9 flex flex-row py-[5px] px-5 box-border items-center justify-center">
                    <b className="relative tracking-[0.33px]">X</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1240px] flex flex-row py-[5px] px-5 box-border items-center justify-end gap-[10px]">
            <div className="flex flex-col items-start justify-start text-[28.97px] text-white">
              <div className="rounded-[9.05px] bg-darkslategray w-[309px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
                <b className="relative tracking-[2.26px] leading-[28.97px]">
                  Entry
                </b>
              </div>
            </div>
            <div className="flex-1 relative tracking-[0.33px] font-semibold">
              Net Price
            </div>
            <div className="relative tracking-[0.33px] font-semibold flex items-center w-[319px] shrink-0">
              7.00
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col py-[30px] pr-[100px] pl-[30px] items-start justify-end gap-[20px] text-7xl border-[0.9px] border-solid border-gainsboro">
          <div className="w-[1240px] flex flex-row items-start justify-start gap-[20px]">
            <div className="flex-1 flex flex-row items-end justify-start">
              <div className="flex-1 flex flex-col items-end justify-start gap-[10px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                    Quantity
                  </div>
                  <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                    <div className="flex-1 relative leading-[43.45px]">100</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                    Start Qty.
                  </div>
                  <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                    <div className="flex-1 relative leading-[43.45px]">10</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                    Incr. Qty
                  </div>
                  <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                    <div className="flex-1 relative leading-[43.45px]">5</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 relative leading-[43.45px] capitalize font-medium">{`Start Price `}</div>
                  <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                    <div className="flex-1 relative leading-[43.45px]">
                      6.000
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                    Incr. Price
                  </div>
                  <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                    <div className="flex-1 relative leading-[43.45px]">
                      0.25
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-end justify-start">
              <div className="flex-1 flex flex-col items-end justify-start gap-[10px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                    Filled
                  </div>
                  <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center text-right border-[0.4px] border-solid border-dark">
                    <div className="flex-1 relative leading-[43.45px]">45</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                    Closed
                  </div>
                  <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center text-right border-[0.4px] border-solid border-dark">
                    <div className="flex-1 relative leading-[43.45px]">10</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                    Balance
                  </div>
                  <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center text-right border-[0.4px] border-solid border-dark">
                    <div className="flex-1 relative leading-[43.45px]">35</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                    PNL
                  </div>
                  <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center text-right border-[0.4px] border-solid border-dark">
                    <div className="flex-1 relative leading-[43.45px]">5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1240px] flex flex-row items-center justify-start gap-[19px] text-[28.97px] text-white">
            <div className="rounded-[9.05px] bg-darkslategray w-[612px] h-[65px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
              <b className="relative tracking-[2.26px] leading-[28.97px]">
                Exit
              </b>
            </div>
            <div className="flex-1 rounded-[9.05px] bg-red h-[65px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
              <b className="relative tracking-[2.26px] leading-[28.97px]">
                Cancel All
              </b>
            </div>
            <div className="flex-1 rounded-[9.05px] bg-black h-[65px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
              <b className="relative tracking-[2.26px] leading-[28.97px]">
                Close All
              </b>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col py-[30px] pr-[100px] pl-[30px] items-start justify-end text-center text-deepskyblue-100 border-[0.9px] border-solid border-gainsboro">
          <div className="w-[1240px] flex flex-row items-end justify-start gap-[20px]">
            <div className="flex-1 overflow-hidden flex flex-col items-center justify-center gap-[10px]">
              <div className="self-stretch relative tracking-[0.33px] font-semibold">
                Take Profits
              </div>
              <div className="self-stretch flex flex-row items-end justify-start text-left text-7xl text-dark">
                <div className="flex-1 flex flex-col items-end justify-start gap-[10px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Quantity
                    </div>
                    <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                      <div className="flex-1 relative leading-[43.45px]">
                        35
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Start Qty.
                    </div>
                    <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                      <div className="flex-1 relative leading-[43.45px]">5</div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Incr. Qty
                    </div>
                    <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                      <div className="flex-1 relative leading-[43.45px]">2</div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">{`Start Price `}</div>
                    <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                      <div className="flex-1 relative leading-[43.45px]">
                        8.00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Incr. Price
                    </div>
                    <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                      <div className="flex-1 relative leading-[43.45px]">
                        0.25
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-h-full w-[0.5px]"
              alt=""
              src="/vector-1.svg"
            />
            <div className="flex-1 overflow-hidden flex flex-col items-center justify-center gap-[10px]">
              <div className="self-stretch relative tracking-[0.33px] font-semibold">
                Stop Loss
              </div>
              <div className="self-stretch flex flex-row items-end justify-start text-left text-7xl text-dark">
                <div className="flex-1 flex flex-col items-end justify-start gap-[10px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Quantity
                    </div>
                    <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                      <div className="flex-1 relative leading-[43.45px]">
                        35
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Start Qty.
                    </div>
                    <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                      <div className="flex-1 relative leading-[43.45px]">5</div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Incr. Qty
                    </div>
                    <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                      <div className="flex-1 relative leading-[43.45px]">2</div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">{`Start Price `}</div>
                    <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                      <div className="flex-1 relative leading-[43.45px]">
                        8.00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Incr. Price
                    </div>
                    <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                      <div className="flex-1 relative leading-[43.45px]">
                        0.25
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col py-[30px] pr-[100px] pl-[30px] items-start justify-end text-deepskyblue-100 border-[0.9px] border-solid border-gainsboro">
          <div className="w-[1240px] flex flex-row items-end justify-start gap-[20px]">
            <div className="flex-1 overflow-hidden flex flex-col items-center justify-center gap-[10px]">
              <div className="self-stretch relative tracking-[0.33px] font-semibold text-center">
                Cast Trade
              </div>
              <div className="self-stretch flex flex-row items-end justify-start text-7xl text-dark">
                <div className="flex-1 flex flex-col items-end justify-start gap-[10px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">{`Price `}</div>
                    <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                      <div className="flex-1 relative leading-[43.45px]">
                        35
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Quantity
                    </div>
                    <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                      <div className="flex-1 relative leading-[43.45px]">5</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] text-[28.97px] text-white">
                <div className="flex-1 rounded-[9.05px] bg-red h-[65px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
                  <b className="relative tracking-[2.26px] leading-[28.97px]">
                    Cancel All
                  </b>
                </div>
                <div className="flex-1 rounded-[9.05px] bg-black h-[65px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
                  <b className="relative tracking-[2.26px] leading-[28.97px]">
                    Close All
                  </b>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-h-full w-[0.5px]"
              alt=""
              src="/vector-11.svg"
            />
            <div className="flex-1 overflow-hidden flex flex-col items-center justify-center gap-[10px]">
              <div className="self-stretch relative tracking-[0.33px] font-semibold text-center">
                Cast Statment Trade
              </div>
              <div className="self-stretch flex flex-row items-end justify-start text-7xl text-dark">
                <div className="flex-1 flex flex-col items-end justify-start gap-[10px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">{`Price `}</div>
                    <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                      <div className="flex-1 relative leading-[43.45px]">
                        8.00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Quantity
                    </div>
                    <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                      <div className="flex-1 relative leading-[43.45px]">
                        0.25
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] text-[28.97px] text-white">
                <div className="flex-1 rounded-[9.05px] bg-red h-[65px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
                  <b className="relative tracking-[2.26px] leading-[28.97px]">
                    Cancel All
                  </b>
                </div>
                <div className="flex-1 rounded-[9.05px] bg-black h-[65px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
                  <b className="relative tracking-[2.26px] leading-[28.97px]">
                    Close All
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white box-border w-[1370px] flex flex-col py-[30px] pr-[100px] pl-[30px] items-start justify-center text-[28.97px] text-white border-[0.9px] border-solid border-gainsboro">
          <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
            <div className="rounded-[9.05px] bg-red h-[85px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
              <b className="relative tracking-[2.26px] leading-[28.97px]">
                Cancel All Pending
              </b>
            </div>
            <div className="flex-1 rounded-[9.05px] bg-black h-[85px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
              <b className="relative tracking-[2.26px] leading-[28.97px]">
                Close All
              </b>
            </div>
            <div className="rounded-[9.05px] bg-deepskyblue-100 w-[273.33px] h-[83.29px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
              <b className="relative tracking-[2.26px] leading-[28.97px]">
                Submit
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingScreen3840X2160;
