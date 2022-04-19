import React, { useState } from "react";
import './CheckEqualityWidget.scss'
import '../../styles/card.scss';

interface UserEntries {
  firstEntry?: string,
  secondEntry?: string,
  formSubmitted: boolean,
  entriesEqual: boolean
}

export default function CheckEqualityComponent() {

  const entryResponse = (text: string) => {
    return <div className="flex-wrap full-width flex-wrap-col">
      <span className="entry-status">{text}</span>
      <div className="flex-wrap full-width">
        <button className="button primary-button full-width" onClick={goBack}>Go back</button>
      </div>
    </div>
  }

  const [userEntries, setUserEntries] = useState<UserEntries>({ firstEntry: "", secondEntry: "", formSubmitted: false, entriesEqual: false });

  const handleChange = (event: { target: { name: string; value: string; }; }) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserEntries(values => ({ ...values, [name]: value }))
  }

  const checkEquality = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    let isEqual = userEntries.firstEntry === userEntries.secondEntry;
    setUserEntries((prev) => ({ ...prev, formSubmitted: true, entriesEqual: isEqual }))
  };

  const goBack = () => {
    setUserEntries((prev) => ({ ...prev, formSubmitted: false }))
  };

  return (
    <div className="card">

      {/* show if form submitted is false */}
      {!userEntries.formSubmitted && <form className="full-width flex-wrap-col" onSubmit={checkEquality}>

        <label className='input-label full-width'>
          <input type="text" name="firstEntry" onChange={handleChange} className="full-width" value={userEntries?.firstEntry} placeholder="Your first entry" />
        </label>

        <label className='input-label full-width'>
          <input name="secondEntry" onChange={handleChange} className="full-width" value={userEntries?.secondEntry} type="text" placeholder="Your second entry" />
        </label>

        <div className="flex-wrap full-width ">
          <button className="button primary-button full-width" disabled={userEntries.firstEntry === "" || userEntries.secondEntry === ""}>Check equality</button>
        </div>
      </form>
      }

      {/* if form submitted and is not equal */}
      {userEntries.formSubmitted && !userEntries.entriesEqual && <>{entryResponse('💤 Not equal')}</>}

      {/* if form submitted and  IS equal */}
      {userEntries.formSubmitted && userEntries.entriesEqual && <>{entryResponse('🎉 Equal!')}</>}

    </div>
  );
}