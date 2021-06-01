import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import {
  changeSearch,
  requestRobots,
  selectSearch,
  selectRobots,
} from '../robotsSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const { robots, isPending } = useSelector(selectRobots);
  const searchField = useSelector(selectSearch);
  const dispatch = useDispatch();

  useEffect(() => dispatch(requestRobots()), [dispatch]);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return isPending ? (
    <h1 className="tc">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox
        searchChange={(event) => dispatch(changeSearch(event.target.value))}
      />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
