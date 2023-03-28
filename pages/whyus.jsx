import React from "react";
import Choose from "../public/images/batnft.png";
import Ushape from "../public/images/ushape.png";
export default function whyus() {
  return (
    <div className="rowx container why_us">
      <div
        className="col50 choose-Img"
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <img src={Choose.src} alt="choose" />
      </div>
      <div className="col50 choose" data-aos="fade-up" data-aos-duration="3000">
        <h1> Why Great Dane NFts</h1>
        <p className="why_greate_dane_p">
          Great Danes Love Steak - Staking - earning - burning - winning
        </p>
        <p>
          Brush off the sofa and make room. Great Dane AI is settling in as the
          Big Dog of Crypto, because frankly, NFT’s don’t have to be Hideous
          anymore.
        </p>
        <p>
          Each of our artificial intelligence created collectables flourish from
          artful and technological minds. Collections like: “Under a Just
          Master” where armored soldiers and starship pilots stand still for
          what could be their last portraits.
        </p>
      </div>

      <div>
        <p>
          And for the ladies, “Flowers on a Wednesday” is a playful AI mix of
          Seasons, flowers, and dogs….Sending “thinking of you.” is easier than
          ever, and will be forever in the blockchain.., HOW INCREDIBLE IS
          THAT??!! Dogs and Flowers NFT’s C’mon!
        </p>
        <p>
          Combined with the down to earth alpha collection dogs living their
          lives to the fullest, completing human being tasks all the while Bat
          Dane Kane and other superheroes protect their masters.
        </p>
        <p>
          And last but not least, Meta Space Debris offers REAL LIFE crash and
          space artifacts 3D modeled into a collectible NFT representing actual
          artifacts held in storage and owned by you. From Starship 11 debris to
          full meteorites, no radiation, no carrying boxes of meteorites up the
          stairs, they are usually made of iron by the way. Be at the forefront
          of the NFT space race and obtain a historic crash cube or segment
          today, do you represented artifact is then stored with us permanently.
        </p>
        <p>
          Not Financial advice, do your own research. See pages details on
          custody of the artifacts: Owner cannot claim a real fragment unless
          100% of the total number of shares are owned by the claimant. Due to
          the rarity of the space cube (1/1000 per artifact), it would be
          unlikely, however, one could obtain a physical meteorite slice, as
          they are 1/10 or 1/100. You would need all 10 or all 100 of the
          artifact NFTs to obtain the object. Keep it NFT, keep it unreal!
        </p>
      </div>
      <aside className="ushape">
        <img src={Ushape.src} alt="ushape" />
      </aside>
    </div>
  );
}
