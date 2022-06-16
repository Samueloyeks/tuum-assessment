import React, { useState, useEffect } from "react";
import SelectInput from "./components/SelectInput";
import CountryService from "./services/CountryService";
import "./App.css";

type SelectData = {
  id: number;
  name: string;
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState<SelectData | null>(null);
  const [country, setCountry] = useState<SelectData | null>(null);
  const [operationGeography, setOperationGeography] =
    useState<SelectData | null>(null);
  const [message, setMessage] = useState("");
  const [policy, setPolicy] = useState(false);
  const [newsLetter, setNewsLetter] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const [industries] = useState<any>([
    { name: "industry1", id: 1 },
    { name: "industry2", id: 2 },
    { name: "industry3", id: 3 },
    { name: "industry4", id: 4 },
  ]);

  const [countries, setCountries] = useState<any>([]);

  const [geographies] = useState<any>([
    { name: "geography1", id: 1 },
    { name: "geography2", id: 2 },
    { name: "geography3", id: 3 },
    { name: "geography4", id: 4 },
  ]);

  useEffect(() => {
    const getCountries = async () => {
      let result = await CountryService.getAll();
      setCountries(() => [...result?.data]);
    };

    getCountries()
  }, []);

  useEffect(() => {
    if (
      firstName.trim() === "" ||
      email.trim() === "" ||
      companyName.trim() === "" ||
      !industry ||
      !country ||
      !policy
    ) {
      setFormValid(false);
      return;
    }
    setFormValid(true);
  }, [firstName, email, companyName, industry, country, policy]);

  return (
    <div className="tuum-contact-page">
      <h4>Contact us</h4>

      <div className="tuum-contact-container">
        <div className="tuum-contact-container__contact-info">
          <div className="tuum-contact-container__contact-info-item">
            Media enquiries:
            <p>press@tuumplatform.com</p>
          </div>
          <div className="tuum-contact-container__contact-info-item">
            Career questions:
            <p>careers@tuumplatform.com</p>
          </div>
        </div>
        <div className="tuum-contact-container__contact-form-container">
          <form className="tuum-contact-container__contact-form">
            <div className="tuum-contact-container__contact-form-grid">
              <input
                placeholder="First name*"
                required
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                placeholder="Last name"
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                placeholder="Email*"
                required
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Job title"
                type="text"
                name="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="tuum-contact-container__contact-form-grid pt-4">
              <input
                placeholder="Company name*"
                required
                type="text"
                name="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <SelectInput
                placeholder="Industry*"
                data={industries}
                value={industry}
                setValue={setIndustry}
              />
              <SelectInput
                placeholder="Country*"
                data={countries}
                value={country}
                setValue={setCountry}
                forCountries
              />
              <SelectInput
                placeholder="Operation geography"
                data={geographies}
                value={operationGeography}
                setValue={setOperationGeography}
              />
            </div>
            <div className="tuum-contact-container__contact-form-footer pt-2">
              <label htmlFor="message">
                What would you like to talk about?
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  name="lastName"
                  checked={policy}
                  onChange={() => setPolicy(!policy)}
                />
                <p>
                  {" "}
                  By submitting this form I accept{" "}
                  <a href="/">privacy policy and cookie policy.</a>
                </p>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  name="newsLetter"
                  checked={newsLetter}
                  onChange={() => setNewsLetter(!newsLetter)}
                />
                <p> I would like to receive your newsletter.</p>
              </div>
            </div>
            <button disabled={!formValid} className={formValid ? "active" : ""}>
              Submit form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
