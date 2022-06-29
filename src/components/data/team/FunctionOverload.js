import React from "react";

export default function FunctionOverload() {
  return (
    <>
      <ul>
        <li>
          <p>This is an individual event</p>
        </li>
        <li>
          <p>The event will take place across two rounds</p>
        </li>
        <li>
          <p>1st Round: Debugging</p>
          <ul>
            <li>
              <p>
                {" "}
                Participants will be given a set of code files with buggy code
                with a question prompt indicating the desired result. The
                participant will have 90 minutes to debug as many files as they
                can.
              </p>
            </li>
            <li>
              <p>All problems will have equal weightage</p>
            </li>
            <li>
              <p>
                {" "}
                The top 50% of participants from this round will qualify for the
                next round.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p>2nd Round: Competitive Programming</p>
          <ul>
            <li>
              <p>
                Participants will be given a set of problems to solve. They will
                be given 2 hours to solve as many problems as they can.
              </p>
            </li>
            <li>
              <p>Each problem will be assigned certain number of point</p>
            </li>
          </ul>
        </li>
        <li>
          <p>Both rounds will take place on Hackerrank</p>
        </li>
        <li>
          <p>Accepted languages:: Python, C++ , Java</p>
        </li>
        <li>
          <p>Judging criteria:</p>
          <ul>
            <li>
              <p>1st round:</p>
              <ul>
                <li>
                  <p>
                    Participants will be judged on the number of problems they
                    are able to solve at the end of 90 minutes.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>2nd round:</p>
              <ul>
                <li>
                  <p>
                    Each problem will have points assigned to them. The final
                    result will be based on the final sum of points accumulated
                    by the participants.
                  </p>
                </li>
                <li>
                  <p>
                    In case of a tie ,the participant with more solved problems
                    will be ranked higher.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <p>
            Plagiarism of any kind will not be tolerated and will result in
            immediate disqualification.
          </p>
        </li>
        <li>
          <p>
            Note that this is an individual event, therefore participants are
            not allowed to team up.
          </p>
        </li>
      </ul>
    </>
  );
}
