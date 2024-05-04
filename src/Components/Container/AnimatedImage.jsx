import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from "./FirstImageDIv.module.css";

function AnimatedImage({ imageData }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) {
      return;
    }

    setStarted(true);
    const id = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % imageData.length);
    }, 3000);

    return () => clearInterval(id);
  }, [started, imageData.length]);

  return (
    <Box width="100%">
      <Image width="100%" src={imageData[count]} />
      <Box mt="20px" width="100%">
        <Image className={styles.fadeIn} src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" />
      </Box>
    </Box>
  );
}

export default AnimatedImage;
