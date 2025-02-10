"use client";
import React, { useState, useEffect } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const handleFormSubmit = (event: Event) => {
      event.preventDefault(); // Prevent default form submission
      setIsLoading(true); // Set loading state to true
      const form = event.target as HTMLFormElement;
      const formData = getFormData(form); // Get form data
      const data = formData.data;

      if (formData.honeypot) {
        setIsLoading(false); // Reset loading state
        return false; // If honeypot field is filled, assume it's a spam bot
      }

      disableAllButtons(form); // Disable all buttons to prevent multiple submissions
      const url = form.action;
      const xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          setIsLoading(false); // Reset loading state
          if (xhr.status === 200) {
            form.reset(); // Reset the form on successful submission
            alert("Form submitted successfully! We will contact you soon.");
          } else {
            alert("There was an error submitting the form.");
          }
        }
      };
      const encoded = Object.keys(data)
        .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
        .join("&");
      xhr.send(encoded); // Send the form data
    };

    const getFormData = (form: HTMLFormElement) => {
      const elements = form.elements as HTMLFormControlsCollection;
      let honeypot: string | undefined;

      const fields = Array.from(elements)
        .filter((element) => {
          const inputElement = element as HTMLInputElement;
          if (inputElement.name === "honeypot") {
            honeypot = inputElement.value;
            return false;
          }
          return true;
        })
        .map((element) => {
          const inputElement = element as HTMLInputElement;
          if (inputElement.name !== undefined) {
            return inputElement.name;
          }
        })
        .filter((item, pos, self) => self.indexOf(item) === pos && item);

      const formData: { [key: string]: string } = {};
      fields.forEach((name) => {
        if (name) {
          const element = elements.namedItem(name) as HTMLInputElement;
          formData[name] = element.value;
        }
      });

      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "responses";
      formData.formGoogleSendEmail = form.dataset.email || "";

      return { data: formData, honeypot: honeypot };
    };

    const disableAllButtons = (form: HTMLFormElement) => {
      const buttons = form.querySelectorAll("button");
      buttons.forEach((button) => {
        button.disabled = true;
      });
    };

    const forms = document.querySelectorAll("form.gform");
    forms.forEach((form) => {
      form.addEventListener("submit", handleFormSubmit, false); // Attach the submit event listener
    });

    return () => {
      forms.forEach((form) => {
        form.removeEventListener("submit", handleFormSubmit, false); // Clean up the event listener
      });
    };
  }, []);
  return (
    <div
      id="contactUs"
      className="flex flex-col lg:flex-row items-center justify-center pb-16 lg:mt-10"
    >
      <div className="text-center mb-8">
        <h1 className="justify-start w-full text-left nova-square-regular">
          Get in touch
        </h1>
        <p className="italic text-gray-300 mt-2 max-w-md text-left">
          By sending message, I agree to RozReturns&apos;{" "}
          <span className="text-white font-bold">
            Terms &amp; Conditions and Privacy Policy.
          </span>
        </p>
      </div>

      <div className="max-w-md w-full mx-auto p-4 md:p-8 shadow-input bg-black border border-gray-300">
        <form
          className="my-8 gform"
          method="POST"
          action={
            "https://script.google.com/macros/s/AKfycbymNDYwrrrBJkGG5MA1oOnUEOJDCSBfDQPuh_1f17h1O4CVtvBFw2bxG0bn5rvd2YVmwA/exec"
          }
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                name="firstname"
                id="firstname"
                placeholder="Your good name"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                name="lastname"
                id="lastname"
                placeholder="Last name"
                type="text"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              name="email"
              id="email"
              placeholder="youremail@gmail.com"
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="description">How can we help?</Label>
            <textarea
              id="description"
              className="flex h-32 w-full border-none shadow-input rounded-xl px-3 py-2 text-sm file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
              focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 
              group-hover/input:shadow-none transition duration-400"
              placeholder=""
              name="description"
            />
          </LabelInputContainer>
          <fieldset className="pure-group honeypot-field hidden">
            <label htmlFor="honeypot">
              To help avoid spam, utilize a Honeypot technique with a hidden
              text field; must be empty to submit the form! Otherwise, we assume
              the user is a spam bot.
            </label>
            <input id="honeypot" type="text" name="honeypot" defaultValue="" />
          </fieldset>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-8 h-[1px] w-full" />
          <div className="flex flex-col space-y-4">
            <button
              className={`relative justify-center group/btn flex space-x-2 items-center px-4 w-full rounded-xl h-10 font-medium shadow-input bg-gray-800 text-white hover:bg-gray-900 hover:cursor-pointer transition duration-300 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                <>
                  <i className="fa fa-paper-plane"></i>&nbsp;Send
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full rounded-sm", className)}>
      {children}
    </div>
  );
};
