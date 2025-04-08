"use client";
import Button from "@/components/atoms/button";
import { IconInputField } from "@/components/atoms/input";
import Image from "next/image";
import { useState, useEffect } from "react";

interface TextsProp {
  imagePath: string;
  title: string;
  text: string;
}

const texts: TextsProp[] = [
  {
    imagePath: "/hero/hero1.png",
    title: "Fastest payment in the world",
    text: "Integrate multiple payment methods to help you up the process quickly",
  },
  {
    imagePath: "/hero/hero2.png",
    title: "The most secure platform",
    text: "Built-in PIN authentication and more keeping your completely safe",
  },
  {
    imagePath: "/hero/hero3.png",
    title: "Paying for everything is easy and convenient",
    text: "Make every payment smooth and secure with our advanced technology",
  },
];

function LoopTexts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentText = texts[currentIndex];

  const boxes = [];

  for (let i = 0; i < texts.length; i++) {
    if (currentIndex == i) {
      boxes.push(<div key={"enabledBox#" + i} className="w-8 h-3 bg-[#0552cd] rounded-sm" />);
    } else {
      boxes.push(<div key={"disabledBox#" + i} className="w-3 h-3 bg-gray-600 rounded-sm" />);
    }
  }

  return (
    <div className="space-y-10 text-center w-[600px] transition-all duration-500 ease-in-out">
      <Image
        src={currentText.imagePath}
        alt="Hero"
        className="w-[450px] h-[350px] object-center mx-auto"
        width={0}
        height={0}
        quality={100}
        unoptimized
      />
      <div className="h-[300px] space-y-6">
        <p className="text-white font-bold text-5xl text w-[80%] mx-auto leading-16">
          {currentText.title}
        </p>
        <p className="text-gray-500 text-2xl w-[80%] mx-auto">{currentText.text}</p>
      </div>
      <div className="flex gap-x-4 justify-center">{boxes}</div>
    </div>
  );
}

export default function SignUp() {
  const [formType, setFormType] = useState<"personal" | "business">("personal");
  const [signup, setSignUp] = useState<boolean>(true);

  return (
    <div className="bg-gradient-to-r from-[#161625] to-[#101068] min-h-[100vh]">
      <div className="absolute w-[370px] h-[370px] rounded-full bg-gradient-to-b from-[#1b0262] to-[#564f98] left-[45%] right-[55%]" />
      <div className="absolute w-[200px] h-[200px] rounded-full bg-[#002f9b] top-[70%] left-[80%]" />

      <div className="relative flex justify-center items-center gap-x-56 min-h-[97vh]">
        <LoopTexts />
        <div>
          <div className="flex justify-center gap-4 mb-6">
            <Button
              label="Personal"
              className={`w-[140px] h-[40px] rounded-4xl font-semibold ${
                formType == "personal" ? "bg-[#024ed8]" : "bg-transparent border-2 border-[#024ed8]"
              }`}
              onClick={() => setFormType("personal")}
            />
            <Button
              label="Business"
              className={`w-[140px] h-[40px] rounded-4xl font-semibold ${
                formType == "business" ? "bg-[#024ed8]" : "bg-transparent border-2 border-[#024ed8]"
              }`}
              onClick={() => setFormType("business")}
            />
          </div>
          <div className="flex justify-center items-center bg-transparent backdrop-brightness-85 backdrop-blur-md w-[500px] h-[920px] rounded-2xl border-white border-[1px]">
            <div className="space-y-4 w-[80%] h-[95%]">
              <Image
                src="/Rovenlogo.png"
                alt="Hero1"
                className="w-[100px] h-[100px] mx-auto"
                width={0}
                height={0}
                quality={100}
                unoptimized
              />
              <h2 className="text-white font-semibold mb-10">{signup ? "Sign Up" : "Sign In"}</h2>
              <IconInputField
                label={formType == "personal" ? `Full Name` : "Business Name"}
                name={formType == "personal" ? `fullname` : "businessname"}
                src=""
                disabled={!signup}
                className="w-full text-gray-400"
              />
              <IconInputField
                label={formType == "personal" ? `Email` : "Work Email"}
                name={formType == "personal" ? `email` : "workemail"}
                src="/hero/email.svg"
                className="w-full text-gray-400"
              />
              <IconInputField
                label={formType == "personal" ? `Phone` : "Work Phone"}
                name={formType == "personal" ? `phone` : "workphone"}
                src="/hero/phone.svg"
                disabled={!signup}
                className="w-full text-gray-400"
              />
              <IconInputField
                label="Password"
                name="password"
                src="/hero/lock.svg"
                className="w-full text-gray-400"
              />
              <IconInputField
                label="Confirm Password"
                name="confirmpassword"
                src="/hero/lock.svg"
                disabled={!signup}
                className="w-full text-gray-400"
              />

              <div className="flex gap-x-1">
                <button className="w-7 h-5 bg-gradient-to-b from-[#84bbf3] to-[#c389ef] rounded-sm text-black text-center text-sm">
                  &#10004;
                </button>
                <p className=" text-white">
                  By clicking here, I state that I have read, understood and agreed to the terms and
                  conditions.
                </p>
              </div>

              <Button
                label={
                  signup
                    ? formType == "personal"
                      ? `Sign Up`
                      : "Register a business account"
                    : "Sign In"
                }
                className="h-[60px] mt-6 w-full rounded-md font-semibold bg-gradient-to-r from-blue-600 to-[#03117a]"
              />

              <p
                className="text-gray-400 text-center cursor-pointer"
                onClick={() => setSignUp(!signup)}
              >
                {signup ? "Already have an account." : "I'm a new user."}{" "}
                <label className="text-[#024ed8]">{signup ? "Sign In" : "Sign Up"}</label>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex gap-5 text-white justify-center">
        <a href="">Terms and Conditions</a>
        <a href="">Support</a>
        <a href="">Customer Care</a>
      </footer>
    </div>
  );
}
