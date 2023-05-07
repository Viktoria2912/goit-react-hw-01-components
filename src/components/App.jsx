import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from './Data/user.json';
import data from './Data/data.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <div>
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
