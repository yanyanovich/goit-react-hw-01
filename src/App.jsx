import "./App.css";

import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import Section from "./components/Section/Section";

const App = () => {
  return (
    <>
      <Section>
        <Profile name={userData.username} tag={userData.tag} location={userData.location} image={userData.avatar} stats={userData.stats} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
};
export default App;
