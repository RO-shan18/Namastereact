import React from "react";
import UserContext from "../utils/userContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //This is how we create state variable inside a classbased component
    /*
    this.state = {
      count : 1,
      count2 : 2
    }
    */
  }

  render() {
    const { name, date, latest_date } = this.props;
    return (
      <div className="user">
        <h1>{name}</h1>
        <h2>{date.replace("T", "  ").replace("Z", " ")}</h2>
        <h3>{latest_date.replace("T", "  ").replace("Z", " ")}</h3>
        <h3>Contact: +91 2343254345</h3>
        <h3>Email : RK@gmail.com</h3>
        {/* Another way to get the data without using usecontext. Consumer will consume the data here */}
        <UserContext.Consumer>
          {({ loggedinUser }) => <h3 className="font-bold text-xl">{loggedinUser}</h3>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
