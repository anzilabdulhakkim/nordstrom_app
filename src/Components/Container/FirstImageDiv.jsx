import {VStack,} from "@chakra-ui/react";
import AnimatatedImage from "./AnimatedImage";
import BonusNote from "./BonusNote";
import MakeMarry from "./make-marry";
import Scroling from "./Scroling";
import TabsAll from "./Tabs";
import TheThred from "./TheThred";
import MiddelText from "./MiddleText";
import FadeInSection from "../Fadein/Fadein";
import GiftByRece from "./GiftByRece";
import TrandinNow from "./TrandinNow";
import MiddelImage from "./MiddelImage";
import ScrollingCurrent from "./ScrollingCurrent";

const imageData = [
  "https://n.nordstrommedia.com/it/554b0eb3-a151-411a-a1fd-59b2b35dc5b5.jpeg?h=700&w=1608",
  "https://n.nordstrommedia.com/it/31f1c07d-6aba-49d9-bcdf-5b970f3dce5c.jpeg?h=700&w=1608",
  "https://n.nordstrommedia.com/it/2fe15a52-4133-4cac-9b71-ebbf9338a946.jpeg?h=700&w=1608",
  "https://n.nordstrommedia.com/it/c080392c-ed39-42e9-a8f1-964c8a768ada.jpeg?h=700&w=1608",
];

function FirstImageDiv() {
  return (
    <VStack width={"95%"} m={"auto"} mt={"30px"}>
      <MiddelText />
      <MakeMarry />
      <FadeInSection>
        <AnimatatedImage imageData={imageData} />
      </FadeInSection>
      <FadeInSection>
        <GiftByRece />
      </FadeInSection>
      <FadeInSection>
        <TabsAll />
      </FadeInSection>
      <FadeInSection>
        <BonusNote />
      </FadeInSection>
      <FadeInSection>
        <TheThred />
      </FadeInSection>
      <Scroling />
      <FadeInSection>
        <TrandinNow />
      </FadeInSection>
      <FadeInSection>
        <MiddelImage />
      </FadeInSection>
      <FadeInSection>
      <ScrollingCurrent />
      </FadeInSection>
    </VStack>
  );
}

export default FirstImageDiv;
