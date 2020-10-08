import React, { Component } from "react";
import deepEqual from "deep-equal";
import "./Contacts.css";
import Contact from "./Contact";

const contactMock = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];
;

class Contacts extends Component {
  state = {
    contacts: contactMock,
    search: '',
    genderMale: true,
    genderFemale: true,
    genderLess: true,
  };

  componentDidUpdate() {
    const contacts = contactMock.filter((item) => (
      (this.checkInputText(item.firstName)
        || this.checkInputText(item.lastName)
        || this.checkInputText(item.phone))
        && this.checkCheckboxes(item.gender)
    ));

    if (!deepEqual(contacts, this.state.contacts)) {
      this.setState({ contacts })
    }
  }

  checkInputText = (info) => info.toLocaleLowerCase().includes(this.state.search);

  checkCheckboxes = (gender) => {if (gender === 'male') {
    return this.state.genderMale;
  } else if (gender === 'female') {
    return this.state.genderFemale;
  } else if (gender === undefined) {
    return this.state.genderLess;
  }
}

  onChange = (event) => {
    if (event.target.name === "genderMale" || event.target.name === "genderFemale") { 
      const { name, checked } = event.target;
      this.setState({ [name]: checked });
    }else if (event.target.name === "genderLess"){
      const { name, checked } = event.target;
      this.setState({ [name]: checked });
    }else {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }
    
  }

  render() {
    return (
      <div className="contacts">
        <h2>Contact</h2>
        <input
          name="search"
          type="text"
          value={this.state.search}
          onChange={this.onChange}
        />


        <span className="genderSpan">
          <label htmlFor="genderMale">
            Male
            <input
              id="genderMale"
              type="checkbox"
              name="genderMale"

              onChange={this.onChange}
              defaultChecked
            />
          </label>
          <label htmlFor="genderFemale">
            Female
            <input
              id="genderFemale"
              type="checkbox"
              name="genderFemale"

              onChange={this.onChange}
              defaultChecked
            />
          </label>
          <label htmlFor="genderLess">
            Anonym
            <input
              id="genderLess"
              type="checkbox"
              name="genderLess"

              onChange={this.onChange}
              defaultChecked
            />
          </label>
        </span>
        
        <div className="foo"></div>
          {this.state.contacts.map((item, index) => (
            <div className="contact" key={index}>
              <Contact info={item} />
            </div>
            ))}
        </div>
    );
  }
}

export default Contacts;
