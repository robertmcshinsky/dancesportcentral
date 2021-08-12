import React from 'react'
import LeaderBoardBallroom from '../components/LeaderBoardBallroom';
import LeaderBoardLatin from '../components/LeaderBoardLatin';
import LeaderBoardSmooth from '../components/LeaderBoardSmooth';
import LeaderBoardRhythm from '../components/LeaderBoardRhythm';

function LeaderBoard () {
  return (
    <div>
      LeaderBoard
      <LeaderBoardBallroom></LeaderBoardBallroom>
      <LeaderBoardLatin></LeaderBoardLatin>
      <LeaderBoardSmooth></LeaderBoardSmooth>
      <LeaderBoardRhythm></LeaderBoardRhythm>
    </div>
  );
}

export default LeaderBoard;