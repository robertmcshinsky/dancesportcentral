import React from "react";

function CardDeck() {
  return (
    <div className="card-deck text-center">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Recent Posts</h3>
          <hr></hr>
          <br></br>
          <p className="card-text">
            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action"
                aria-current="true"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">How to Choose a Coach</h5>
                  <small>3 days ago</small>
                </div>
                <p class="mb-1">Some placeholder content in a paragraph.</p>
                <small>And some small print.</small>
              </a>
              <br></br>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">My Partner Wants to Break Up</h5>
                  <small class="text-muted">36 days ago</small>
                </div>
                <p class="mb-1">Some placeholder content in a paragraph.</p>
                <small class="text-muted">And some muted small print.</small>
              </a>
              <br></br>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Food 🚫 Freedom</h5>
                  <small class="text-muted">78 days ago</small>
                </div>
                <p class="mb-1">Some placeholder content in a paragraph.</p>
                <small class="text-muted">And some muted small print.</small>
              </a>
              <br></br>
              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Keep your Goals Private</h5>
                  <small class="text-muted">89 days ago</small>
                </div>
                <p class="mb-1">Some placeholder content in a paragraph.</p>
                <small class="text-muted">And some muted small print.</small>
              </a>
            </div>
          </p>
        </div>
        <div className="card-footer">
          <button className="btn">View All Blog Posts</button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Current LeaderBoard</h3>
          <hr></hr>
          <br></br>
          <div className="card-text">
            <h1 className="mb-1">Ballroom </h1>
            <hr></hr>
            <h5 className="mb-1">Professional</h5>
            <ol className="list-group list-group-numbered"></ol>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Iroslav Beilei & Lilia Beilei
              <span className="badge badge-pill">🥇</span>
            </li>
            <h5 className="mb-1">Amateur</h5>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Angelo Morelli & Clarisa Morelli
                <span className="badge badge-pill">🥇</span>
              </li>
            </ol>
            <br></br>
            <h1 className="mb-1"> Latin </h1>
            <hr></hr>
            <h5 className="mb-1">Professional </h5>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Riccardo Cocchi & Yulia Zagurachenko
                <span className="badge badge-pill">🥇</span>
              </li>
            </ol>
            <h5 className="mb-1">Amateur </h5>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Austin Josen & Nino Dzeduneli
                <span className="badge badge-pill">🥇</span>
              </li>
            </ol>
            <br></br>

            <h1 className="mb-1"> Smooth </h1>
            <hr></hr>
            <h5 className="mb-1">Professional</h5>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Nick Cheremukin & Victoria Cheremukin
                <span className="badge badge-pill">🥇</span>
              </li>
            </ol>
            <h5 className="mb-1">Amateur</h5>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Brandon Keck & Kaylee Patillo
                <span className="badge badge-pill">🥇</span>
              </li>
            </ol>
            <br></br>

            <h1 className="mb-1">Rhythm </h1>
            <hr></hr>
            <h5 className="mb-1">Professional </h5>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Andre Paramonov & Natalie Paramonov
                <span className="badge badge-pill">🥇</span>
              </li>
            </ol>
            <br></br>

            <h5 className="mb-1">Amateur </h5>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Max Firestein & Nicole Mtchedlidze
                <span className="badge badge-pill">🥇</span>
              </li>
            </ol>
            <br></br>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn">View Full LeaderBoard</button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Upcoming Competitions</h3>
          <hr></hr>
          <br></br>
          <div className="card-text">
            <ul class="list-group list-group-flush">
              <h5 className="mb-1">October</h5>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                PG Invitational
                <span className="badge">24 Days</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Freedom Open
                <span className="badge">31 Days</span>
              </li>
              <br></br>
              <h5 className="mb-1">November</h5>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                BYU November
                <span className="badge">56 Days</span>
              </li>
              <br></br>
              <h5 className="mb-1">March</h5>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                US Nationals
                <span className="badge">87 Days</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn">View Upcoming Competitions</button>
        </div>
      </div>
    </div>
  );
}

export default CardDeck;
