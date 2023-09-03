import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
const TradingScreen3840X2160 = () => {
  const [ticker, setTicker] = useState('Instrument');

  const handleTickerChange = (event) => {
    setTicker(event.target.value);
  };
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [minStrikePrice, setMinStrikePrice] = useState('4300');
  const [maxStrikePrice, setMaxStrikePrice] = useState('4600');

  const handleMinStrikePriceChange = (event) => {
    setMinStrikePrice(event.target.value);
  };

  const handleMaxStrikePriceChange = (event) => {
    setMaxStrikePrice(event.target.value);
  };

  const [intervalValue, setIntervalValue] = useState(10);

  const handleIntervalChange = (event) => {
    // Ensure that the input value is a valid number
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue)) {
      setIntervalValue(newValue);
    }
  };
  const Submit = () => {
    // Display a notification using window.alert()
    window.alert('Submitted');
  };
  const [selectedOption1, setSelectedOption1] = useState('Call');
  const [number1, setNumber1] = useState(-2.5); // Initialize with -2.5
  const [number2, setNumber2] = useState(3.5);
  const [number3, setNumber3] = useState(-8.3);
  const [number4, setNumber4] = useState(14.0);
  const toggleOption1 = () => {
    setSelectedOption1((prevOption) => (prevOption === 'Call' ? 'Put' : 'Call'));
    setNumber1((prevNumber) => (prevNumber === -2.5 ? 5.8 : -2.5));
  };
  const [selectedOption2, setSelectedOption2] = useState('Call');

  const toggleOption2 = () => {
    setSelectedOption2((prevOption) => (prevOption === 'Call' ? 'Put' : 'Call'));
    setNumber2((prevNumber) => (prevNumber === 3.5 ? 6.8 : 3.5));
  };
  const [selectedOption3, setSelectedOption3] = useState('Call');

  const toggleOption3 = () => {
    setSelectedOption3((prevOption) => (prevOption === 'Call' ? 'Put' : 'Call'));

    setNumber3((prevNumber) => (prevNumber === -8.3 ? 4.0 : -8.3));
  };
  const [selectedOption4, setSelectedOption4] = useState('Call');

  const toggleOption4 = () => {
    setSelectedOption4((prevOption) => (prevOption === 'Call' ? 'Put' : 'Call'));
    setNumber4((prevNumber) => (prevNumber === 14.0 ? 2.0 : 14.0));
  };
  const [selectedOption1bs, setSelectedOption1bs] = useState('Buy');
  const LoggedOut = () => {
    // Display a notification using window.alert()
    window.alert('LoggedOut');
  };
   // Function to show an alert with a custom message for Entry
   const showEntryAlert = () => {
    alert('Trades executed');
  };

  // Function to show an alert with a custom message for Exit
  const showExitAlert = () => {
    alert('Exited from the trades');
  };

  // Function to show an alert with a custom message for CancelAll
  const showCancelAllAlert = () => {
    alert('Trades cancelled');
  };

  // Function to show an alert with a custom message for CloseAll
  const showCloseAllAlert = () => {
    alert('All the open trades cancelled');
  };

  // Function to show an alert with a custom message for TPCancelAll
  const showTPCancelAllAlert = () => {
    alert('Take profit Trades cancelled');
  };

  // Function to show an alert with a custom message for TPCloseAll
  const showTPCloseAllAlert = () => {
    alert('Take profit Trades closed');
  };

  // Function to show an alert with a custom message for SLCancelAll
  const showSLCancelAllAlert = () => {
    alert('Stop Loss Trades cancelled');
  };

  // Function to show an alert with a custom message for SLCloseAll
  const showSLCloseAllAlert = () => {
    alert('Stop Loss Trades Cancelled Trades closed');
  };

  // Function to show an alert with a custom message for CancelAllPending
  const showCancelAllPendingAlert = () => {
    alert('All pending trades canceled');
  };

  // Function to show an alert with a custom message for CloseAll
  const showCloseAllTPSLAlert = () => {
    alert('All trades Closed');
  };

  // Function to show an alert with a custom message for TradeSubmit
  const showTradeSubmitAlert = () => {
    alert('Trade Request Submitted');
  };

  const toggleOption1bs = () => {
    setSelectedOption1bs((prevOption) => (prevOption === 'Buy' ? 'Sell' : 'Buy'));
  };
  const [selectedOption2bs, setSelectedOption2bs] = useState('Sell');

  const toggleOption2bs = () => {
    setSelectedOption2bs((prevOption) => (prevOption === 'Buy' ? 'Sell' : 'Buy'));
  };
  const [selectedOption3bs, setSelectedOption3bs] = useState('Sell');

  const toggleOption3bs = () => {
    setSelectedOption3bs((prevOption) => (prevOption === 'Buy' ? 'Sell' : 'Buy'));
  };
  const [selectedOption4bs, setSelectedOption4bs] = useState('Buy');

  const toggleOption4bs = () => {
    setSelectedOption4bs((prevOption) => (prevOption === 'Buy' ? 'Sell' : 'Buy'));
  };
  const [isFirstHideVisible, setIsFirstHideVisible] = useState(true);

  const handleRemoveFirstHide = () => {
    // Set isFirstHideVisible to false to hide the "firstHide" elements
    setIsFirstHideVisible(false);
  };

  const [isSecondHideVisible, setIsSecondHideVisible] = useState(true);

  const handleRemoveSecondHide = () => {
    // Set isFirstHideVisible to false to hide the "firstHide" elements
    setIsSecondHideVisible(false);
  };
  const [isThirdHideVisible, setIsThirdHideVisible] = useState(true);

  const handleRemoveThirdHide = () => {
    // Set isFirstHideVisible to false to hide the "firstHide" elements
    setIsThirdHideVisible(false);
  };

  const [isFourthHideVisible, setIsFourthHideVisible] = useState(true);
  const handleRemoveFourthHide = () => {
    // Set isFirstHideVisible to false to hide the "firstHide" elements
    setIsFourthHideVisible(false);
  }
  const [quantity, setQuantity] = useState(100); // Set the initial value here

  const [Inputquantity, setInputquantity] = useState(20); // Set the initial value here

  const [Incrquantity, setIncrquantity] = useState(5); // Set the initial value here

  const [StartPrice, setStartPrice] = useState(6.00); // Set the initial value here
  const [Incrprice, setIncrprice] = useState(5); // Set the initial value here
  const [Filled, setFilled] = useState(getRandomValue());
  const [Closed, setClosed] = useState(getRandomValue());
  const [Balance, setBalance] = useState(getRandomValue());
  const [PNL, setPNL] = useState(getRandomValue());
  const [TPQuantity, setTPQuantity] = useState(getRandomValue());
  const [TPStartQuantity, setTPStartQuantity] = useState(getRandomValue());
  const [TPIncrQuantity, setTPIncrQuantity] = useState(getRandomValue());
  const [TPStartPrice, setTPStartPrice] = useState(getRandomValue());
  const [TPIncrPrice, setTPIncrPrice] = useState(getRandomValue());
  const [SLQuantity, setSLQuantity] = useState(getRandomValue());
  const [SLStartQuantity, setSLStartQuantity] = useState(getRandomValue());
  const [SLIncrQuantity, setSLIncrQuantity] = useState(getRandomValue());
  const [SLStartPrice, setSLStartPrice] = useState(getRandomValue());
  const [SLIncrPrice, setSLIncrPrice] = useState(getRandomValue());
  const [CTPrice, setCTPrice] = useState(getRandomValue());
  const [CTQuantity, setCTQuantity] = useState(getRandomValue());
  const [CSTPrice, setCSTPrice] = useState(getRandomValue()); // New variable
  const [CSTQuantity, setCSTQuantity] = useState(getRandomValue());

  // Helper function to generate a random number between 1 and 100
  function getRandomValue() {
    return Math.floor(Math.random() * 100) + 1;
  }
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
      <div onClick={LoggedOut} className="absolute top-[36.68px] left-[3169.95px] rounded-3xs bg-deepskyblue-100 w-[262.02px] h-[72.01px] flex flex-row p-[20.001449584960938px] box-border items-center justify-center text-white">
        <b className="relative tracking-[2.5px] leading-[32px]">Logout</b>
      </div>
      <div className="absolute top-[150px] left-[0px] bg-white flex flex-col py-[50px] pr-[30px] pl-[100px] items-start justify-end gap-[30px] text-7xl border-[0.9px] border-solid border-gainsboro">
        <div className="self-stretch flex flex-row items-end justify-start gap-[30px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[19px]">
            <div className="relative leading-[43.45px] capitalize font-medium">
              Ticker
            </div>
            <div className="self-stretch rounded-[9.05px] bg-whitesmoke overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center border-[0.4px] border-solid border-dark">
              <input
                type="text"
                style={{ border: 'none', outline: 'none', fontSize: 'inherit', fontFamily: 'inherit' }}
                className="flex-1 bg-whitesmoke relative leading-[43.45px] font-medium "
                value={ticker}
                onChange={handleTickerChange}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[19px]">
            <div className="relative leading-[43.45px] capitalize font-medium">
              expiration
            </div>
            <div className="self-stretch rounded-[9.05px] bg-whitesmoke overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center gap-[10px] text-right border-[0.4px] border-solid border-dark">
              <DatePicker
                className="flex-1 text-xl relative leading-[43.45px] border-none outline-none font-medium"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy" // Define your desired date format
              />
              <img
                className="relative w-[22.01px] h-3"
                alt=""
                src="/vector1.svg"
                onClick={() => {
                  <DatePicker
                    style={{ border: 'none', outline: 'none', fontSize: '250px', fontFamily: 'inherit' }}
                    className="flex-1 bg-whitesmoke relative leading-[43.45px] border-none outline-none"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy" // Define your desired date format
                  />
                  // You can open the date picker when the user clicks the image
                }}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[19px]">
            <div className="relative leading-[43.45px] capitalize font-medium">
              Strike Price (min)
            </div>
            <div className="self-stretch rounded-[9.05px] bg-whitesmoke overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center text-right border-[0.4px] border-solid border-dark">
              <input
                type="number"
                style={{ border: 'none', outline: 'none', fontSize: 'inherit', fontFamily: 'inherit' }}
                className="flex-1 bg-whitesmoke relative leading-[43.45px]"
                value={minStrikePrice}
                onChange={handleMinStrikePriceChange}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[19px]">
            <div className="relative leading-[43.45px] capitalize font-medium">
              Strike Price (Max)
            </div>
            <div className="self-stretch rounded-[9.05px] bg-whitesmoke overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center text-right border-[0.4px] border-solid border-dark">
              <input
                type="number"
                style={{ border: 'none', outline: 'inherit', fontSize: 'inherit', fontFamily: 'inherit' }}
                className="bg-whitesmoke flex-1 relative leading-[43.45px]"
                value={maxStrikePrice}
                onChange={handleMaxStrikePriceChange}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end gap-[19px]">
          <div
             className="relative leading-[43.45px] capitalize font-medium">
              Interval
            </div>
            <div className="self-stretch rounded-[9.05px] bg-whitesmoke overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center text-right border-[0.4px] border-solid border-dark">
              <input
                type="number"
                style={{ border: 'none', outline: 'none', fontSize: 'inherit', fontFamily: 'inherit' }}
                className="flex-1 rounded-[9.05px] bg-whitesmoke items-center flex-1 relative leading-[43.45px] border-none outline-none"
                value={intervalValue}
                onChange={handleIntervalChange}
              />
            </div>
          </div>
          <button
            className="rounded-[9.05px] bg-deepskyblue-100 w-[273.33px] h-[83.29px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center text-[28.97px] text-white"
            type="button" // Specify the type as "button" to prevent form submission
            onClick={Submit}
          >
            <b className="relative tracking-[2.26px] leading-[28.97px]">
              Submit
            </b>
          </button>

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
                {isFirstHideVisible && (<div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px] firstHide">
                  <div className="relative tracking-[0.33px]">4400</div>
                </div>)}
                {isSecondHideVisible && (<div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark secondHide">
                  <div className="relative tracking-[0.33px]">4450</div>
                </div>)}
                {isThirdHideVisible && (<div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark thirdHide">
                  <div className="relative tracking-[0.33px]">4200</div>
                </div>)}
                {isFourthHideVisible && (<div className="self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark fourthHide">
                  <div className="relative tracking-[0.33px]">4150</div>
                </div>)}
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
                {isFirstHideVisible && (<div className="relative self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end gap-[10px] border-t-[0.4px] border-solid border-dark border-b-[0.4px] firstHide">
                  <div
                    className="relative tracking-[0.33px] flex items-center w-[90px] shrink-0"
                    onClick={toggleOption1}
                  >
                    {selectedOption1}{' '}&nbsp;
                    <img
                      className="relative w-[22.01px] h-3 cursor-pointer"
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                </div>)}
                {isSecondHideVisible && (<div className="relative self-stretch  flex flex-row p-2.5 items-center justify-end gap-[10px] border-t-[0.4px] border-solid border-dark border-b-[0.4px] secondHide">
                  <div
                    className="relative tracking-[0.33px] flex items-center w-[90px] shrink-0"
                    onClick={toggleOption2}
                  >
                    {selectedOption2}{' '}&nbsp;
                    <img
                      className="relative w-[22.01px] h-3 cursor-pointer"
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                </div>)}
                {isThirdHideVisible && (<div className=" thirdHide relative self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end gap-[10px] border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div
                    className="relative tracking-[0.33px] flex items-center w-[90px] shrink-0"
                    onClick={toggleOption3}
                  >
                    {selectedOption3}{' '}&nbsp;
                    <img
                      className="relative w-[22.01px] h-3 cursor-pointer"
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                </div>)}
                {isFourthHideVisible && (<div className=" fourthHide relative self-stretch flex flex-row p-2.5 items-center justify-end gap-[10px] border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div
                    className="relative tracking-[0.33px] flex items-center w-[90px] shrink-0"
                    onClick={toggleOption4}
                  >
                    {selectedOption4}{' '}&nbsp;
                    <img
                      className="relative w-[22.01px] h-3 cursor-pointer"
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                </div>)}
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
                {isFirstHideVisible && (<div className=" firstHide relative self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end gap-[10px] border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div
                    className="relative tracking-[0.33px] flex items-center w-[90px] shrink-0"
                    onClick={toggleOption1bs}
                  >
                    {selectedOption1bs}{' '}&nbsp;
                    <img
                      className="relative w-[22.01px] h-3 cursor-pointer"
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                </div>)}
                {isSecondHideVisible && (<div className="secondHide relative self-stretch  flex flex-row p-2.5 items-center justify-end gap-[10px] border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div
                    className="relative tracking-[0.33px] flex items-center w-[90px] shrink-0"
                    onClick={toggleOption2bs}
                  >
                    {selectedOption2bs}{' '}&nbsp;
                    <img
                      className="relative w-[22.01px] h-3 cursor-pointer"
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                </div>)}
                {isThirdHideVisible && (<div className=" thirdHide relative self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-center justify-end gap-[10px] border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div
                    className="relative tracking-[0.33px] flex items-center w-[90px] shrink-0"
                    onClick={toggleOption3bs}
                  >
                    {selectedOption3bs}{' '}&nbsp;
                    <img
                      className="relative w-[22.01px] h-3 cursor-pointer"
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                </div>)}
                {isFourthHideVisible && (<div className="fourthHide relative self-stretch flex flex-row p-2.5 items-center justify-end gap-[10px] border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div
                    className="relative tracking-[0.33px] flex items-center w-[90px] shrink-0"
                    onClick={toggleOption4bs}
                  >
                    {selectedOption4bs}{' '}&nbsp;
                    <img
                      className="relative w-[22.01px] h-3 cursor-pointer"
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                </div>)}
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
                {isFirstHideVisible && (<div className="self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px] ">
                  <div className="relative tracking-[0.33px]">{number1}</div>
                </div>)}
                {isSecondHideVisible && (<div className="secondHide self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">{number2}</div>
                </div>)}
                {isThirdHideVisible && (<div className="thirdHide self-stretch bg-deepskyblue-200 flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark">
                  <div className="relative tracking-[0.33px]">{number3}</div>
                </div>)}
                {isFourthHideVisible && (<div className="fourthHide self-stretch flex flex-row p-2.5 items-start justify-end border-b-[0.4px] border-solid border-dark firstHide">
                  <div className="relative tracking-[0.33px]">{number4}</div>
                </div>)}

              </div>
            </div>
            <div className="w-[258px] flex flex-col items-start justify-start gap-[10px] text-right text-5xl text-white">
              <div className="self-stretch h-[52px] flex flex-row py-[5px] px-[30px] box-border items-center justify-end">
                <div className="rounded-3xs bg-forestgreen w-9 h-9 flex flex-row py-[5px] px-5 box-border items-center justify-center">
                  <b className="relative tracking-[0.33px]">+</b>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-lg">
                {isFirstHideVisible && (<div className=" firstHide self-stretch bg-deepskyblue-200 box-border h-14 flex flex-row py-2.5 px-[30px] items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="rounded-3xs bg-red w-9 h-9 flex flex-row py-[5px] px-5 box-border items-center justify-center">
                    <b className="relative tracking-[0.33px]" onClick={handleRemoveFirstHide}>X</b>
                  </div>
                </div>)}
                {isSecondHideVisible && (<div className=" SecondHide self-stretch bg-deepskyblue-200 box-border h-14 flex flex-row py-2.5 px-[30px] items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="rounded-3xs bg-red w-9 h-9 flex flex-row py-[5px] px-5 box-border items-center justify-center">
                    <b className="relative tracking-[0.33px]" onClick={handleRemoveSecondHide}>X</b>
                  </div>
                </div>)}
                {isThirdHideVisible && (<div className=" ThirdHide self-stretch bg-deepskyblue-200 box-border h-14 flex flex-row py-2.5 px-[30px] items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="rounded-3xs bg-red w-9 h-9 flex flex-row py-[5px] px-5 box-border items-center justify-center">
                    <b className="relative tracking-[0.33px]" onClick={handleRemoveThirdHide}>X</b>
                  </div>
                </div>)}
                {isFourthHideVisible && (<div className=" FourthHide self-stretch bg-deepskyblue-200 box-border h-14 flex flex-row py-2.5 px-[30px] items-center justify-end border-t-[0.4px] border-solid border-dark border-b-[0.4px]">
                  <div className="rounded-3xs bg-red w-9 h-9 flex flex-row py-[5px] px-5 box-border items-center justify-center">
                    <b className="relative tracking-[0.33px]" onClick={handleRemoveFourthHide}>X</b>
                  </div>
                </div>)}
              </div>
            </div>
          </div>
          <div className="w-[1240px] flex flex-row py-[5px] px-5 box-border items-center justify-end gap-[10px]">
            <div className="flex flex-col items-start justify-start text-[28.97px] text-white">
            <div onClick = {showEntryAlert}className="rounded-[9.05px] bg-darkslategray w-[612px] h-[65px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
              <b className="relative tracking-[2.26px] leading-[28.97px]">
                Entry
              </b>
            </div>
            </div>
            <div className="flex-1 relative tracking-[0.33px] font-semibold">
              Net Price
            </div>
            <div className="relative tracking-[0.33px] font-semibold flex items-center w-[319px] shrink-0">
              {(number1 + number2 + number3 + number4).toFixed(2)}
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col py-[30px] pr-[100px] pl-[30px] items-start justify-end gap-[20px] text-7xl border-[0.9px] border-solid border-gainsboro">
          <div className="w-[1240px] flex flex-row items-start justify-start gap-[20px]">
            <div className="flex-1 flex flex-row items-end justify-start">
              <div className="flex-1 flex flex-col items-end justify-start gap-[10px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div
                    className="flex-1 relative leading-[43.45px] capitalize font-medium">
                    Quantity
                  </div>
                  <input
                    style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                    className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                    type="number"
                    value={quantity} // Set the initial value here
                    onChange={(e) => setQuantity(e.target.value)} // Update the state when the input changes
                  />
                </div>

                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                    Start Qty.
                  </div>
                  <input
                    style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                    className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                    type="number"
                    value={Inputquantity} // Set the initial value here
                    onChange={(e) => setInputquantity(e.target.value)} // Update the state when the input changes
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                    Incr. Qty
                  </div>
                  <input
                    style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                    className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                    type="number"
                    value={Incrquantity} // Set the initial value here
                    onChange={(e) => setIncrquantity(e.target.value)} // Update the state when the input changes
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 relative leading-[43.45px] capitalize font-medium">{`Start Price `}</div>
                  <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark">
                    <input
                      style={{ border: 'none', outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                      className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                      type="number"
                      value={StartPrice} // Set the initial value here
                      onChange={(e) => setStartPrice(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                    Incr. Price
                  </div>
                  <input
                    style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                    className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                    type="number"
                    value={Incrprice} // Set the initial value here
                    onChange={(e) => setIncrprice(e.target.value)} // Update the state when the input changes
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-end justify-start">
              <div className="flex-1 flex flex-col items-end justify-start gap-[10px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                    Filled
                  </div>
                  <input
                    style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                    className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                    type="number"
                    value={Filled} // Set the initial value here
                    onChange={(e) => setFilled(e.target.value)} // Update the state when the input changes
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                    Closed
                  </div>
                  <input
                    style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                    className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                    type="number"
                    value={Closed} // Set the initial value here
                    onChange={(e) => setClosed(e.target.value)} // Update the state when the input changes
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                  <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                    Balance
                  </div>
                  <div className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-center text-right border-[0.4px] border-solid border-dark">
                    <div className="flex-1 relative leading-[43.45px]">{Filled - Closed}</div>
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
            <div  onClick={showExitAlert} className="rounded-[9.05px] bg-darkslategray w-[612px] h-[65px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
              <b className="relative tracking-[2.26px] leading-[28.97px]">
                Exit
              </b>
            </div>
            <div onClick={showCancelAllAlert} className="flex-1 rounded-[9.05px] bg-red h-[65px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
              <b className="relative tracking-[2.26px] leading-[28.97px]">
                Cancel All
              </b>
            </div>
            <div onClick={showCloseAllAlert} className="flex-1 rounded-[9.05px] bg-black h-[65px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
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
                    <input
                      style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                      className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                      type="number"
                      value={TPQuantity} // Set the initial value here
                      onChange={(e) => setTPQuantity(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Start Qty.
                    </div>
                    <input
                      style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                      className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                      type="number"
                      value={TPStartQuantity} // Set the initial value here
                      onChange={(e) => setTPStartQuantity(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Incr. Qty
                    </div>
                    <input
                      style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                      className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                      type="number"
                      value={TPIncrQuantity} // Set the initial value here
                      onChange={(e) => setTPIncrQuantity(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">{`Start Price `}</div>
                    <input
                      style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                      className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                      type="number"
                      value={TPStartPrice} // Set the initial value here
                      onChange={(e) => setTPStartPrice(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Incr. Price
                    </div>
                    <input
                      style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                      className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                      type="number"
                      value={TPIncrPrice} // Set the initial value here
                      onChange={(e) => setTPIncrPrice(e.target.value)} // Update the state when the input changes
                    />
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
                    <input
                      style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                      className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                      type="number"
                      value={SLQuantity} // Set the initial value here
                      onChange={(e) => setSLQuantity(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Start Qty.
                    </div>
                    <input
                      style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                      className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                      type="number"
                      value={SLStartQuantity} // Set the initial value here
                      onChange={(e) => setSLStartQuantity(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Incr. Qty
                    </div>
                    <input
                      style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                      className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                      type="number"
                      value={SLIncrQuantity} // Set the initial value here
                      onChange={(e) => setSLIncrQuantity(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">{`Start Price `}</div>
                    <input
                      style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                      className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                      type="number"
                      value={SLStartPrice} // Set the initial value here
                      onChange={(e) => setFilled(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Incr. Price
                    </div>
                    <input
                      style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                      className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                      type="number"
                      value={SLIncrPrice} // Set the initial value here
                      onChange={(e) => setSLIncrPrice(e.target.value)} // Update the state when the input changes
                    />
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
                    <input
                      style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                      className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                      type="number"
                      value={CTPrice} // Set the initial value here
                      onChange={(e) => setCTPrice(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Quantity
                    </div>
                    <input
                      style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                      className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                      type="number"
                      value={CTQuantity} // Set the initial value here
                      onChange={(e) => setCTQuantity(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                </div>
              </div>
              <div onClick={showTPCancelAllAlert} className="self-stretch flex flex-row items-center justify-start gap-[19px] text-[28.97px] text-white">
                <div className="flex-1 rounded-[9.05px] bg-red h-[65px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
                  <b className="relative tracking-[2.26px] leading-[28.97px]">
                    Cancel All
                  </b>
                </div>
                <div onClick={showTPCloseAllAlert} className="flex-1 rounded-[9.05px] bg-black h-[65px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
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
                    <input
                      style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                      className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                      type="number"
                      value={CSTPrice} // Set the initial value here
                      onChange={(e) => setCSTPrice(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[19px]">
                    <div className="flex-1 relative leading-[43.45px] capitalize font-medium">
                      Quantity
                    </div>
                    <input
                      style={{ outline: 'none', fontSize: 'inherit', fontFamily: 'inherit', }}
                      className="flex-1 rounded-[9.05px] bg-whitesmoke box-border h-[70px] overflow-hidden flex flex-row py-5 px-[30px] items-center justify-end text-right border-[0.4px] border-solid border-dark"
                      type="number"
                      value={CSTQuantity} // Set the initial value here
                      onChange={(e) => setCSTQuantity(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[19px] text-[28.97px] text-white">
              <div onClick={showSLCancelAllAlert} className="rounded-[9.05px] bg-red h-[85px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
              <b className="relative tracking-[2.26px] leading-[28.97px]">
                Cancel All 
              </b>
            </div>
            <div onClick={showSLCloseAllAlert}className="flex-1 rounded-[9.05px] bg-black h-[85px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
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
            <div onClick={showCancelAllPendingAlert} className="rounded-[9.05px] bg-red h-[85px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
              <b className="relative tracking-[2.26px] leading-[28.97px]">
                Cancel All Pending
              </b>
            </div>
            <div onClick={showCloseAllTPSLAlert}className="flex-1 rounded-[9.05px] bg-black h-[85px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
              <b className="relative tracking-[2.26px] leading-[28.97px]">
                Close All
              </b>
            </div>
            <div onClick={showTradeSubmitAlert} className="rounded-[9.05px] bg-deepskyblue-100 w-[273.33px] h-[83.29px] flex flex-row py-[18.10561752319336px] px-[30px] box-border items-center justify-center">
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
