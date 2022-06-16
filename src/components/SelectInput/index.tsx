import React, { useEffect, useState, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./style.css";

type SelectData = {
  id: number;
  name: any;
  flag?: any;
};

type SelectInputProps = {
  placeholder?: string;
  data: Array<SelectData>;
  value: any;
  setValue: Function;
  forCountries?: boolean;
};

const SelectInput = ({
  placeholder,
  data,
  value,
  setValue,
  forCountries = false,
}: SelectInputProps) => {
  const [showInput, setShowInput] = useState(false);
  const [showList, setShowList] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [listData, setListData] = useState(data);
  const [hoverId, setHoverId] = useState<number | null>();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputValue.trim() !== "") {
      let newData = listData.filter((item) => {
        return inputValue
          .toLowerCase()
          .split(" ")
          .every((v: any) => {
            if (typeof item.name === "string") {
              return item.name.toLowerCase().includes(v);
            }
            return item?.name?.common.toLowerCase().includes(v);
          });
      });
      setListData(newData);
      return;
    }
    setListData(data);
  }, [inputValue]);

  useEffect(() => {
    if (showInput) {
      inputRef.current && inputRef.current.focus();
    }
  }, [showInput]);

  useEffect(() => {
    setListData(data);
  }, [data]);

  const handleContainerClick = () => {
    setShowInput(true);
  };

  const handleOnFocus = () => {
    setShowList(true);
  };

  const handleInputBlur = () => {
    setShowList(false);
    setShowInput(false);
    setInputValue("");
  };

  const handleOnKeyDown = (e: any, item: any) => {
    if (e.key === "Enter") {
      setValue(item);
    }
  };

  return (
    <>
      {forCountries ? (
        <div className="select-input-container">
          <div className="select-input" onClick={() => handleContainerClick()}>
            {showInput && (
              <input
                ref={inputRef}
                placeholder={value ? value?.name?.common : placeholder}
                value={
                  inputRef.current
                    ? inputValue
                    : value
                    ? value?.name?.common
                    : ""
                }
                onFocus={() => handleOnFocus()}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={() => handleInputBlur()}
              />
            )}
            {!showList && !showInput && (
              <div className="placeholder">
                {value !== null ? value?.name?.common : placeholder}
              </div>
            )}
            <KeyboardArrowDownIcon />
          </div>
          {showList && showInput && (
            <div className="options">
              {listData.map((item) => (
                <div
                  key={item.flag}
                  className={
                    value?.flag === item.flag || hoverId === item.flag
                      ? "highlighted"
                      : ""
                  }
                  onMouseEnter={() => setHoverId(item.flag)}
                  onMouseLeave={() => setHoverId(null)}
                  onMouseDown={(e) => setValue(item)}
                  onKeyDown={(e) => handleOnKeyDown(e, item)}
                >
                  <span>{item.flag}</span>
                  {item?.name?.common}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="select-input-container">
          <div className="select-input" onClick={() => handleContainerClick()}>
            {showInput && (
              <input
                ref={inputRef}
                placeholder={value ? value.name : placeholder}
                value={inputRef.current ? inputValue : value ? value.name : ""}
                onFocus={() => handleOnFocus()}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={() => handleInputBlur()}
              />
            )}
            {!showList && !showInput && (
              <div className="placeholder">
                {value !== null ? value.name : placeholder}
              </div>
            )}
            <KeyboardArrowDownIcon />
          </div>
          {showList && showInput && (
            <div className="options">
              {listData.map((item) => (
                <div
                  key={item.id}
                  className={
                    value?.id === item.id || hoverId === item.id
                      ? "highlighted"
                      : ""
                  }
                  onMouseEnter={() => setHoverId(item.id)}
                  onMouseLeave={() => setHoverId(null)}
                  onMouseDown={(e) => setValue(item)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SelectInput;
