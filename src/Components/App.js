import BaseSection from "./BaseSection/BaseSection";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactionHistory/TransactionHistory";

import user from "../data/user.json";
import statisticalData from "../data/statistical-data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

const App = () => {
  return (
    <>
      <BaseSection title={"React hw 1"}>
        <h4>first task</h4>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <h4>second task</h4>
        <h5>1 variant - with title</h5>
        <Statistics title="Upload stats" stats={statisticalData} />
        <h5>2 variant - without title</h5>
        <Statistics stats={statisticalData} />
        <h4>third task</h4>
        <FriendList friends={friends} />
        <h4>fourth task</h4>
        <TransactionHistory items={transactions} />
      </BaseSection>
    </>
  );
};

export default App;
