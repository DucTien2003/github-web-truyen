import classNames from "classnames/bind";

import styles from "./New.module.scss";
import images from "../../assets/images";
import Header from "../../compsLayout/Header";
import MenuHorizontal from "../../compsLayout/MenuHorizontal";
import StoryItemNew from "../../compsLayout/Payloads/PayloadNew";
import Footer from "../../compsLayout/Footer/Footer";
import Pagination from "../../compsLayout/Pagination/Pagination";

const cx = classNames.bind(styles);

const listStory = [
  {
    coverStory: images.coverStoryNew,
    name: "Darling In The Franxx ",
    chap: 60.5,
    views: 47884,
    description: `In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer". Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost? [Written by MAL Rewrite]`,
  },
  {
    coverStory: images.coverStoryNew,
    name: "Darling In The Franxx ",
    chap: 60.5,
    views: 47884,
    description: `In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer". Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost? [Written by MAL Rewrite]`,
  },
  {
    coverStory: images.coverStoryNew,
    name: "Darling In The Franxx ",
    chap: 60.5,
    views: 47884,
    description: `In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer". Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost? [Written by MAL Rewrite]`,
  },
  {
    coverStory: images.coverStoryNew,
    name: "Darling In The Franxx ",
    chap: 60.5,
    views: 47884,
    description: `In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer". Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost? [Written by MAL Rewrite]`,
  },
  {
    coverStory: images.coverStoryNew,
    name: "Darling In The Franxx ",
    chap: 60.5,
    views: 47884,
    description: `In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer". Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost? [Written by MAL Rewrite]`,
  },
  {
    coverStory: images.coverStoryNew,
    name: "Darling In The Franxx ",
    chap: 60.5,
    views: 47884,
    description: `In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer". Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost? [Written by MAL Rewrite]`,
  },
  {
    coverStory: images.coverStoryNew,
    name: "Darling In The Franxx ",
    chap: 60.5,
    views: 47884,
    description: `In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer". Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost? [Written by MAL Rewrite]`,
  },
  {
    coverStory: images.coverStoryNew,
    name: "Darling In The Franxx ",
    chap: 60.5,
    views: 47884,
    description: `In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer". Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost? [Written by MAL Rewrite]`,
  },
  {
    coverStory: images.coverStoryNew,
    name: "Darling In The Franxx ",
    chap: 60.5,
    views: 47884,
    description: `In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer". Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost? [Written by MAL Rewrite]`,
  },
  {
    coverStory: images.coverStoryNew,
    name: "Darling In The Franxx ",
    chap: 60.5,
    views: 47884,
    description: `In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer". Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost? [Written by MAL Rewrite]`,
  },
  {
    coverStory: images.coverStoryNew,
    name: "Darling In The Franxx ",
    chap: 60.5,
    views: 47884,
    description: `In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer". Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost? [Written by MAL Rewrite]`,
  },
  {
    coverStory: images.coverStoryNew,
    name: "Darling In The Franxx ",
    chap: 60.5,
    views: 47884,
    description: `In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer". Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost? [Written by MAL Rewrite]`,
  },
  {
    coverStory: images.coverStoryNew,
    name: "Darling In The Franxx ",
    chap: 60.5,
    views: 47884,
    description: `In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer". Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost? [Written by MAL Rewrite]`,
  },
  {
    coverStory: images.coverStoryNew,
    name: "Darling In The Franxx ",
    chap: 60.5,
    views: 47884,
    description: `In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer". Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost? [Written by MAL Rewrite]`,
  },
  {
    coverStory: images.coverStoryNew,
    name: "Darling In The Franxx ",
    chap: 60.5,
    views: 47884,
    description: `In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer". Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost? [Written by MAL Rewrite]`,
  },
  {
    coverStory: images.coverStoryNew,
    name: "Darling In The Franxx ",
    chap: 60.5,
    views: 47884,
    description: `In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the "Partner Killer". Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost? [Written by MAL Rewrite]`,
  },
];

function New() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <MenuHorizontal />
      <div className={cx("body")}>
        <div className={cx("grid")}>
          {listStory.map((itemStory, index) => {
            return (
              <div className={cx("item-story-pc")} key={index}>
                <StoryItemNew itemStory={itemStory} />
              </div>
            );
          })}
        </div>
        <div className={cx("pagination-total")}>
          <Pagination />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default New;
