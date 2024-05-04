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
  "https://i.postimg.cc/Gh3hF38D/Screenshot-2022-10-09-152831.png",
  "https://i.postimg.cc/8z68WxHW/Screenshot-2022-10-09-152906.png",
  "https://i.postimg.cc/fyLpbPyV/Screenshot-2022-10-09-152952.png",
  "https://i.postimg.cc/T38N81VL/Screenshot-2022-10-09-153104.png",
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
