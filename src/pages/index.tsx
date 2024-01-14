import { Button, PinInput } from "@mantine/core";
import Image from "next/image";
import React, {
  useRef,
  useState,
  ChangeEvent,
  KeyboardEvent,
  FC,
  RefObject,
  FunctionComponent,
  useEffect,
} from "react";

export default function Home() {
  // const [values, setValues] = useState<string[]>(Array(6).fill(""));
  // const inputRefs = useRef<RefObject<HTMLInputElement>[]>(
  //   values.map(() => React.createRef())
  // );

  // const handleInputChange = (value: string, index: number) => {
  //   const newValues = [...values];
  //   newValues[index] = value;
  //   setValues(newValues);

  //   // 1文字入力されたら次のフィールドにフォーカスを移動
  //   if (value.length === 1 && index < values.length - 1) {
  //     inputRefs.current[index + 1].current?.focus();
  //   }
  // };

  // const handleBackspace = (index: number) => {
  //   if (values[index].length === 0 && index > 0) {
  //     inputRefs.current[index - 1].current?.focus();
  //   }
  // };

  const [code, setCode] = useState<string>("");
  useEffect(() => {
    console.log(code);
  }, [code]);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <form className="">
        {/* {values.map((value, index) => (
          <input
            key={index}
            ref={inputRefs.current[index]}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e.target.value, index)
            }
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
              e.key === "Backspace" && handleBackspace(index)
            }
            className="w-12 h-14 m-2 p-2 border-1 border-gray-300 bg-gray-200 rounded-lg text-center text-lg font-semibold focus:border-gray-300 focus:border-2 focus:outline-none"
            maxLength={1}
          />
        ))} */}
      </form>
      <div className="hidden sm:block">
        <PinInput
          oneTimeCode
          size="lg"
          defaultValue={code}
          length={3}
          onChange={(value) => setCode(value)}
          placeholder=""
          gap={14}
          radius="md"
          classNames={{
            input: "input",
          }}
        />
      </div>
      <div className="block sm:hidden">
        <PinInput
          oneTimeCode
          defaultValue={code}
          size="lg"
          length={3}
          onChange={(value) => setCode(value)}
          placeholder=""
          gap={14}
          radius="md"
          classNames={{
            input: "input",
          }}
        />
      </div>
    </div>
  );
}
