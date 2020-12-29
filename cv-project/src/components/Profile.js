import React, { useState } from "react";
import "./Profile.css";

const InputField = (props) => {
  const handleChange = (evt) => {
    props.onChange(evt);
  };

  return (
    <label>
      {props.label}
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={handleChange}
      />
    </label>
  );
};

const ProfileSubmission = (props) => {
  const ifDisplay = (
    <div id="profile-submission">
      <InputField
        name="name"
        label="Name:"
        value={props.fieldState.name}
        onChange={props.onNameFieldChange}
      />
      <br />
      <InputField
        name="email"
        label="Email:"
        value={props.fieldState.email}
        onChange={props.onEmailFieldChange}
      />
      <br />
      <InputField
        name="phone"
        label="Phone:"
        value={props.fieldState.phone}
        onChange={props.onPhoneFieldChange}
      />
      <br />
      <button type="submit">Submit</button>
    </div>
  );

  const ifNotDisplay = null;

  return props.shouldDisplay ? ifDisplay : ifNotDisplay;
};

const ProfileDisplay = (props) => {
  const profileDisplay = (
    <div id="profile-display">
      <button type="button" onClick={props.onEditButtonClick}>
        Edit
      </button>
      <p>
        <b>Name:</b> {props.fieldState.name}
        <br />
        <b>Email:</b> {props.fieldState.email}
        <br />
        <b>Phone:</b> {props.fieldState.phone}
        <br />
      </p>
    </div>
  );

  const hiddenDisplay = null;

  return props.shouldDisplay ? profileDisplay : hiddenDisplay;
};

const Profile = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hideSubmissionForm, setHideSubmissionForm] = useState(false);
  const [hideDisplay, setHideDisplay] = useState(true);

  const onSubmitProfile = (evt) => {
    evt.preventDefault();
    setHideSubmissionForm(true);
    setHideDisplay(false);
  };

  const onFieldChange = (updateFunc) => {
    return (evt) => {
      updateFunc(evt.target.value);
    };
  };

  const createFieldState = () => {
    return {
      name,
      email,
      phone,
    };
  };

  const onEditButtonClick = (evt) => {
    evt.preventDefault();
    setHideSubmissionForm(false);
    setHideDisplay(true);
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      <form id="profile-form" onSubmit={onSubmitProfile}>
        <ProfileSubmission
          shouldDisplay={!hideSubmissionForm}
          fieldState={createFieldState()}
          onNameFieldChange={onFieldChange(setName)}
          onEmailFieldChange={onFieldChange(setEmail)}
          onPhoneFieldChange={onFieldChange(setPhone)}
        />
      </form>
      <ProfileDisplay
        onEditButtonClick={onEditButtonClick}
        shouldDisplay={!hideDisplay}
        fieldState={createFieldState()}
      />
    </div>
  );
};

export default Profile;
