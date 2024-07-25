import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

function App() {
  const [passwordLength, setPasswordLength] = useState(6);
  const [isUpperCase, setIsUpperCase] = useState(true);
  const [isLowerCase, setIsLowerCase] = useState(true);
  const [isNumber, setIsNumber] = useState(true);
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(true);
  const [password, setPassword] = useState("");
  const generatePassword = useCallback(() => {
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChar = `~!@#$%^&*_-+=:;"'?/>.`;
    let password = "";
    let str = "";
    if (isUpperCase) str += upperCaseChar;
    if (isLowerCase) str += lowerCaseChar;
    if (isNumber) str += numbers;
    if (isSpecialCharacter) str += specialChar;
    for (let i = 1; i <= passwordLength; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length));
    }
    if(password===""){
      toast.error("Please select at least one option")
    }
    setPassword(password);
  }, [isUpperCase, isLowerCase, isNumber, isSpecialCharacter, passwordLength]);
  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    toast.success('Successfully Copied!')
  }, [password])
  useEffect(() => {
    generatePassword();
  }, [isUpperCase, isLowerCase, isNumber, isSpecialCharacter, passwordLength,generatePassword]);
  return (
    <div className="flex justify-center w-full mt-10">
      <div className="max-w-md w-full m-5 p-5 rounded-md bg-white shadow">
        <div className="w-full my-5">
          <div className="w-full h-10 flex items-center overflow-hidden px-2 rounded border-[1.5px] bg-gray-100 text-black" >
            {password}
            {password === "" && <p>Please select at least one option</p>}
          </div>
          <button className="w-full h-10 rounded mt-3 flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-500" onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex flex-col w-full gap-3 mb-3">
          <div className="mt-3">
            <label
              htmlFor="length"
              className="w-full flex items-center justify-between"
            >
              <span className="font-medium">Length (8-20)</span>
              <span className="text-sm">{passwordLength}</span>
            </label>
            <input
              type="range"
              name="length"
              id="length"
              max={20}
              min={6}
              step={1}
              defaultValue={6}
              onChange={(e) => setPasswordLength(e.target.value)}
              className="w-full h-1"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="uppercase" className="font-medium">
              Uppercase Letters
            </label>
            <label
              htmlFor="uppercase"
              className="bg-gray-200 w-10 h-[1.35rem] rounded-full relative cursor-pointer"
            >
              <input
                type="checkbox"
                name="uppercase"
                id="uppercase"
                className="sr-only peer"
                checked={isUpperCase ? "checked" : ""}
                onChange={() => setIsUpperCase(!isUpperCase)}
              />
              <span className="w-4 aspect-square bg-gray-500 absolute left-1 top-0.5 rounded-full peer-checked:left-5 peer-checked:bg-blue-600 transition-all duration-100 "></span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="lowercase" className="font-medium">
              Lowercase Letters
            </label>

            <label
              htmlFor="lowercase"
              className="bg-gray-200 w-10 h-[1.35rem] rounded-full relative cursor-pointer"
            >
              <input
                type="checkbox"
                name="lowercase"
                id="lowercase"
                className="sr-only peer"
                checked={isLowerCase ? "checked" : ""}
                onChange={() => setIsLowerCase(!isLowerCase)}
              />
              <span className="w-4 aspect-square bg-gray-500 absolute left-1 top-0.5 rounded-full peer-checked:left-5 peer-checked:bg-blue-600 transition-all duration-100 "></span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="number" className="font-medium">
              Numbers
            </label>

            <label
              htmlFor="number"
              className="bg-gray-200 w-10 h-[1.35rem] rounded-full relative cursor-pointer"
            >
              <input
                type="checkbox"
                name="number"
                id="number"
                className="sr-only peer"
                checked={isNumber ? "checked" : ""}
                onChange={() => setIsNumber(!isNumber)}
              />
              <span className="w-4 aspect-square bg-gray-500 absolute left-1 top-0.5 rounded-full peer-checked:left-5 peer-checked:bg-blue-600 transition-all duration-100 "></span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="specialChar" className="font-medium">
              Special Characters
            </label>
            <label
              htmlFor="specialChar"
              className="bg-gray-200 w-10 h-[1.35rem] rounded-full relative cursor-pointer"
            >
              <input
                type="checkbox"
                name="specialChar"
                id="specialChar"
                className="sr-only peer"
                checked={isSpecialCharacter ? "checked" : ""}
                onChange={() => setIsSpecialCharacter(!isSpecialCharacter)}
              />
              <span className="w-4 aspect-square bg-gray-500 absolute left-1 top-0.5 rounded-full peer-checked:left-5 peer-checked:bg-blue-600 transition-all duration-100 "></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
